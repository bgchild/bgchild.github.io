import { defineConfig4CustomTheme } from "vuepress/config";

import plugins from "./config/plugins";
import head from "./config/head";
import themeConfig from "./config/themeConfig";
import { title, description } from "./common/info";

export default defineConfig4CustomTheme({
  theme: "vdoing", // 使用npm包主题
  markdown: {
    lineNumbers: true, // 显示代码块的行号
    extractHeaders: ["h2", "h3", "h4"], // 支持 h2、h3、h4 标题
  },
  // 多语言支持
  locales: {
    "/": {
      lang: "zh-CN",
      title: title,
      description: description
    },
    // '/en/': {
    //   lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //   title: penName + title,
    //   description: 'Young Kbt personal blog, built by vuepress, uses the vdoing theme to learn Java, web, framework, microservices, tools, front-end and other related knowledge, record life and technology journey, and share programming skills at the same time'
    // }
  },
  // 监听文件变化并重新构建
  extraWatchFiles: [".vuepress/config.ts"],

  themeConfig,

  head,

  plugins,
});
