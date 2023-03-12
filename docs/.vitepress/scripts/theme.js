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
        text: "微信小程序",
        collapsed: true,
        items: genSideBarItems('knowledges/frontend/miniprogram')
      },
      {
        text: "Electron",
        collapsed: true,
        items: genSideBarItems('knowledges/frontend/electron')
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
        text: "Java",
        collapsed: false,
        items: [
          {
            text: "框架相关",
            collapsed: true,
            items: genSideBarItems('knowledges/tech/java/framework')
          },
          {
            text: "SE",
            collapsed: true,
            items: genSideBarItems('knowledges/tech/java/se')
          },
        ],
      },
      {
        text: "数据库",
        collapsed: false,
        items: [
          {
            text: "MySQL",
            collapsed: true,
            items: genSideBarItems('knowledges/tech/database/mysql')
          },
          {
            text: "NoSQL",
            collapsed: true,
            items: genSideBarItems('knowledges/tech/database/nosql')
          },
        ],
      },
      {
        text: "移动端",
        collapsed: false,
        items: [
          {
            text: "Android",
            collapsed: true,
            items: genSideBarItems('knowledges/tech/mobile-end/android')
          },
          {
            text: "Flutter",
            collapsed: true,
            items: genSideBarItems('knowledges/tech/mobile-end/flutter')
          },
        ],
      },
      {
        text: "数据结构&算法",
        collapsed: false,
        items: [
          {
            text: "算法",
            collapsed: true,
            items: genSideBarItems('knowledges/tech/datastract-algorithm')
          },
        ],
      },
      {
        text: "设计模式",
        collapsed: true,
        items: genSideBarItems('knowledges/tech/design-patten')
      },
      {
        text: "服务器/操作系统",
        collapsed: false,
        items: [
          {
            text: "Linux-CentOS",
            collapsed: true,
            items: genSideBarItems('knowledges/tech/server/linux-centos')
          }
        ],
      },
      {
        text: "工具",
        collapsed: false,
        items: [
          {
            text: "Git",
            collapsed: true,
            items: genSideBarItems('knowledges/tech/tool/git')
          },
          {
            text: "Nginx",
            collapsed: true,
            items: genSideBarItems('knowledges/tech/tool/nginx')
          },
          {
            text: "Docker",
            collapsed: true,
            items: genSideBarItems('knowledges/tech/tool/docker')
          },
          {
            text: "Elastic Search",
            collapsed: true,
            items: genSideBarItems('knowledges/tech/tool/elastic-search')
          },
          {
            text: "Kubernetes",
            collapsed: true,
            items: genSideBarItems('knowledges/tech/tool/kubernetes')
          },
          {
            text: "Jenkins",
            collapsed: true,
            items: genSideBarItems('knowledges/tech/tool/jenkins')
          },
        ],
      },
      {
        text: "计算机网络",
        collapsed: false,
        items: genSideBarItems('knowledges/tech/tool/network')
      },
      {
        text: "其他",
        collapsed: false,
        items: [
          {
            text: '流媒体知识',
            collapsed: true,
            items: genSideBarItems('knowledges/tech/other/media')
          }
        ]
      }
    ],
  };
}
