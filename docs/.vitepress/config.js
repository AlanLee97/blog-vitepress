import { filesData, genLastUpdatedFiles } from './scripts/index.js'
import { createSidebar } from './scripts/theme.js'

genLastUpdatedFiles()

export default {
  base: '/app/blog/',
  title: "AlanLee`s Blog",
  description: "AlanLee的博客",
  localData: filesData,
  head: [
    // 解决语雀防盗链问题
    ["meta", { name: "referrer", content: "no-referrer" }],
  ],
  themeConfig: {
    localData: {
      files: filesData.data
    },
    nav: [
      { text: "笔记", link: "/notes/index" },
      { text: "知识库", link: "/knowledges/index" },
      { text: "Apps", link: "/apps/index" },
      { text: "关于", link: "/about/index" },
    ],
    sidebar: createSidebar(),
    socialLinks: [{ icon: "github", link: "https://github.com/alanlee97" }],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: "Copyright © 2023-present AlanLee",
    },
  },
};
