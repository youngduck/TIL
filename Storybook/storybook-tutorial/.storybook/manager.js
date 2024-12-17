import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light", // 또는 'dark'

  // 브랜드
  brandTitle: "YD UI TEST",
  brandUrl: "회사 웹사이트 URL",
  brandImage: "/logo2.png",
  brandTarget: "_self",
});

addons.setConfig({
  theme: theme,
});
