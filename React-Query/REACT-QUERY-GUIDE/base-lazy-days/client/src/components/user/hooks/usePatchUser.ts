import jsonpatch from 'fast-json-patch';
import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';

import type { User } from '../../../../../shared/types';
import { axiosInstance, getJWTHeader } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';
import { useCustomToast } from '../../app/hooks/useCustomToast';
import { useUser } from './useUser';

// for when we need a server function
async function patchUserOnServer(
  newData: User | null,
  originalData: User | null,
): Promise<User | null> {
  if (!newData || !originalData) return null;
  // create a patch for the difference between newData and originalData
  const patch = jsonpatch.compare(originalData, newData);

  // send patched data to the server
  const { data } = await axiosInstance.patch(
    `/user/${originalData.id}`,
    { patch },
    {
      headers: getJWTHeader(originalData),
    },
  );
  return data.user;
}

// TODO: update type to UseMutateFunction type
export function usePatchUser(): UseMutateFunction<
  User,
  unknown,
  User,
  unknown
> {
  const toast = useCustomToast();
  const { user, updateUser } = useUser();
  const queryClient = useQueryClient();

  // onMutate가 onError에 에러발생시 컨텍스트 건내준다.
  const { mutate: patchUser } = useMutation(
    (newUserData: User) => patchUserOnServer(newUserData, user),
    {
      onMutate: async (newData: User | null) => {
        // 진행되는 쿼리 취소,덮어쓰는것이아니라,이전 스냅샷찍기,낙관적 업데이트진행, context반환.
        queryClient.cancelQueries(queryKeys.user);
        const previouseUserData: User = queryClient.getQueryData(
          queryKeys.user,
        );
        updateUser(newData);
        return { previouseUserData };
      },
      onError: (error, newData, context) => {
        // 기존데이터 롤백
        if (context.previouseUserData) {
          updateUser(context.previouseUserData);
          toast({
            title: 'update failed: restoring previouse values',
            status: 'warning',
          });
        }
      },
      onSuccess: (userData: User | null) => {
        if (user) {
          toast({ title: 'User updated', status: 'success' });
        }
      },
      onSettled: () => {
        // invalidate user query to make sure 최신데이터
        queryClient.invalidateQueries(queryKeys.user);
      },
    },
  );

  return patchUser;
}
