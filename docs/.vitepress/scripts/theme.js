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
            items: [
              {
                text: "阅读地图-ref",
                link: "/knowledges/frontend/vue/read-source/readmap-ref",
              },
              {
                text: "阅读地图-reactive",
                link: "/knowledges/frontend/vue/read-source/readmap-reactive",
              },
              {
                text: "阅读地图-reactive",
                link: "/knowledges/frontend/vue/read-source/readmap-reactive",
              },
            ],
          },
          {
            text: "问题记录",
            collapsed: true,
            items: [
              {
                text: "vue3reactive定义的对象替换值后不更新视图",
                link: "/knowledges/frontend/vue/record/question",
              },
            ],
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
            items: [
              {
                text: "React知识",
                link: "/knowledges/frontend/react/learn/react-learn",
              },
            ],
          },
          {
            text: "问题记录",
            collapsed: true,
            items: [
              {
                text: "react问题记录",
                link: "/knowledges/frontend/react/record/question",
              },
            ],
          },
        ],
      },
    ],
    "/knowledges/tech/": [
      {
        text: "工具",
        collapsed: true,
        items: [
          {
            text: "Git",
            items: [{ text: "Git知识总结", link: "/knowledges/tech/tool/git" }],
          },
          {
            text: "Docker",
            items: [
              { text: "Docker常用命令", link: "/knowledges/tech/tool/docker" },
            ],
          },
          {
            text: "Linux",
            items: [
              { text: "Linux常用命令", link: "/knowledges/tech/tool/linux" },
            ],
          },
        ],
      },
    ],
  };
}
