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
            text: "Vue2.x",
            collapsed: true,
            items: genSideBarItems('knowledges/frontend/vue/vue2.x'),
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
        text: "JavaScript",
        collapsed: true,
        items: genSideBarItems('knowledges/frontend/javascript')
      },
      {
        text: "HTML",
        collapsed: true,
        items: genSideBarItems('knowledges/frontend/html')
      },
      {
        text: "CSS",
        collapsed: true,
        items: [
          {
            text: 'CSS',
            items: genSideBarItems('knowledges/frontend/css/common')
          },
          {
            text: 'Flex',
            items: genSideBarItems('knowledges/frontend/css/flex')
          }
        ]
      },
      {
        text: "TypeScript",
        collapsed: true,
        items: genSideBarItems('knowledges/frontend/typescript')
      },
      {
        text: "构建工具",
        collapsed: true,
        items: [
          {
            text: 'Webpack',
            items: genSideBarItems('knowledges/frontend/build-tool/webpack')
          },
          {
            text: 'Vite',
            items: genSideBarItems('knowledges/frontend/build-tool/vite')
          },
        ]
      },
      {
        text: "浏览器",
        collapsed: true,
        items: genSideBarItems('knowledges/frontend/browser')
      },
      {
        text: "其他",
        collapsed: true,
        items: genSideBarItems('knowledges/frontend/other')
      },
    ],
    "/knowledges/tech/": [
      {
        text: "数据结构&算法",
        collapsed: false,
        items: [
          {
            text: "算法",
            collapsed: false,
            items: genSideBarItems('knowledges/tech/datastract-algorithm')
          },
        ],
      },
      {
        text: "设计模式",
        collapsed: false,
        items: genSideBarItems('knowledges/tech/design-patten')
      },
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
