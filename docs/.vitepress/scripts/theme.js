import { genSideBarItems } from './index.js'

export function createSidebar() {
  return {
    "/knowledges/frontend/": [
      {
        text: "Vue",
        collapsed: false,
        items: [
          {
            text: "阅读源码",
            collapsed: true,
            items: genSideBarItems('knowledges/frontend/vue/read-source'),
          },
          {
            text: "问题记录",
            collapsed: true,
            items: genSideBarItems('knowledges/frontend/vue/record'),
          },
        ],
      },
      {
        text: "React",
        collapsed: true,
        items: [
          {
            text: "React知识",
            collapsed: true,
            items: genSideBarItems('knowledges/frontend/react/learn')
          },
          {
            text: "问题记录",
            collapsed: true,
            items: genSideBarItems('knowledges/frontend/react/record')
          },
        ],
      },
      {
        text: "浏览器",
        collapsed: true,
        items: [
          {
            text: "浏览器知识",
            collapsed: true,
            items: genSideBarItems('knowledges/frontend/browser')
          },
        ],
      },
    ],
    "/knowledges/tech/": [
      {
        text: "工具",
        collapsed: false,
        items: [
          {
            text: "Git",
            collapsed: false,
            items: genSideBarItems('knowledges/tech/tool/git')
          },
          {
            text: "Docker",
            collapsed: true,
            items: genSideBarItems('knowledges/tech/tool/docker')
          },
          {
            text: "Linux",
            collapsed: true,
            items: genSideBarItems('knowledges/tech/tool/linux')
          },
        ],
      },
    ],
  };
}
