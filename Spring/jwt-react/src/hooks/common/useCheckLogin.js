import { userStore } from "../../store/userStore";

const useCheckLogin = () => {
  const userState = userStore((state) => state.userState);
  const { userId } = userState;

  return { userId };
};

export default useCheckLogin;
