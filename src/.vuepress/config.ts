import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "en-US",
      title: "ChineseYouthX",
      description: "A blog for ChineseYouthX"
    },
    "/zh/": {
      lang: "zh-CN",
      title: "ChineseYouthX",
      description: "ChineseYouthX 的博客"
    }
  },

  theme,

  shouldPrefetch: false
});
