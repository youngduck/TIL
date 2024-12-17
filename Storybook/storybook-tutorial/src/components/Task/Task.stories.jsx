import React from "react";
import { fn } from "@storybook/test";
import Task from "./Task";

// 액션 데이터 정의
export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

// 스토리 기본 설정
export default {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  // 모든 스토리에 기본적으로 적용될 args
  args: {
    ...ActionsData,
  },
  // 파라미터 추가
  parameters: {
    componentSubtitle: "Task 컴포넌트",
  },
};

// 스토리 정의
export const Default = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};
export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};
