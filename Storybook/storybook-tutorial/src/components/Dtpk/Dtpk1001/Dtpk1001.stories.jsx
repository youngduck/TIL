import { fn } from "@storybook/test";
import Dtpk1001 from "./Dtpk1001";

// 액션 데이터 정의
export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

// 스토리 기본 설정
export default {
  component: Dtpk1001,
  title: "Dtpk1001",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,

  // 모든 스토리에 기본적으로 적용될 args
  args: {
    ...ActionsData,
  },
  // 파라미터 추가
  parameters: {
    componentSubtitle: "Dtpk1001 달력컴포넌트",
  },
};

// 스토리 정의
export const Default = {
  args: {
    dateFormat: "yyyy-MM-dd",
    autoFocus: false,
  },
};

export const Clicked = {
  args: {
    dateFormat: "yyyy-MM-dd",
    autoFocus: true,
  },
};
