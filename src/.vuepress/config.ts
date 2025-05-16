import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/DOCS/",
  lang: "zh-CN",
  title: "YZL-DOCS",
  description: "YZL的笔记博客",
  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
