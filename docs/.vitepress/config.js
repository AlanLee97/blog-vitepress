import fs from "fs";

const filesData = {}

const reg = /#(.*)\n/
const res2 = reg.exec('# aaabbb\n')
console.log('alan->', res2[1])

function getAllMdFiles() {
  const excludeDirs = ['public', '.vitepress', 'index.md']
  let mds = []
  
  const searchFile = (path) => {
    const dirs = fs.readdirSync(path);
    dirs.forEach(function (ele, index) {
      if(!excludeDirs.includes(ele)) {
        const curPath = path + "/" + ele
        const info = fs.statSync(curPath);
        if (info.isDirectory()) {
          searchFile(path + "/" + ele);
        } else {
          const content = fs.readFileSync(curPath, 'utf-8')
          const reg = /#(.*)\n/
          const res = reg.exec(content)
          mds.push({
            file: curPath,
            link: curPath.replace('docs', '').replace('.md', '.html'),
            title: ((res && res[1]) || '').trim(),
            desc: content.substring(0, 100),
            updateTime: info.mtime
          });
        }
      }
    });
  }
  searchFile('docs')
  return mds
}

function genLastUpdatedFiles() {
  const mds = getAllMdFiles()
  mds.sort((a, b) => {
    if(new Date(a.updateTime) < new Date(b.updateTime)) {
      return 1
    } else {
      return -1
    }
  })
  const exists = fs.existsSync('docs/public/data')
  if(!exists) {
    fs.mkdirSync('docs/public/data')
  }

  fs.writeFileSync('docs/public/data/allFiles.json', JSON.stringify({data: mds}))
  filesData.data = mds
}

genLastUpdatedFiles()

function genarateSidebarViaDir(dir) {
  const excludeDirs = ['public', '.vitepress', 'index.md']
  let mds = []
  let obj = {}
  const searchFile = (path) => {
    const dirs = fs.readdirSync(path);
    dirs.forEach(function (ele, index) {
      if(!excludeDirs.includes(ele)) {
        const curPath = path + "/" + ele
        const info = fs.statSync(curPath);
        if (info.isDirectory()) {
          console.log('alan->dir curPath', curPath, ele)
          searchFile(path + "/" + ele);
          if(!obj[ele]) {
            obj[ele] = {}
          } else {
            obj[ele] = {
              ...obj[ele],
            }
          }
        } else {
          // console.log('alan->file ', curPath)
          mds.push(curPath)
          // obj[ele].filePath = curPath
        }
      }
    });
  }
  searchFile(dir)
  console.log('alan->obj', obj)
  return mds
}

const mds = genarateSidebarViaDir('docs/knowledges')
console.log('alan->mds', mds)


function createSidebar() {
  return {
    '/knowledges/frontend/': [
      {
        text: 'Vue',
        collapsed: false,
        items: [
          {
            text: '阅读源码',
            collapsed: true,
            items: [
              { text: '阅读地图-ref', link: '/knowledges/frontend/vue/read-source/readmap-ref' },
              { text: '阅读地图-reactive', link: '/knowledges/frontend/vue/read-source/readmap-reactive' },
              { text: '阅读地图-reactive', link: '/knowledges/frontend/vue/read-source/readmap-reactive' },
            ]
          },
          { 
            text: '问题记录',
            collapsed: true,
            items: [
              {
                text: 'vue3reactive定义的对象替换值后不更新视图',
                link: '/knowledges/frontend/vue/record/question'
              }
            ]
          },
        ]
      },
      {
        text: 'React',
        collapsed: true,
        items: [
          { 
            text: 'React知识',
            collapsed: true,
            items: [
              {
                text: 'React知识', 
                link: '/knowledges/frontend/react/learn/react-learn'
              }
            ]
          },
          { 
            text: '问题记录',
            collapsed: true,
            items: [
              {
                text: 'react问题记录', 
                link: '/knowledges/frontend/react/record/question'
              }
            ]
          },
        ]
      }
    ],
    '/knowledges/tech/': [
      {
        text: '工具',
        collapsed: true,
        items: [
          { 
            text: 'Git', 
            items: [
              { text: 'Git知识总结', link: '/knowledges/tech/tool/git' }
            ]
          },
          { 
            text: 'Docker', 
            items: [
              { text: 'Docker常用命令', link: '/knowledges/tech/tool/docker' }
            ]
          },
          { 
            text: 'Linux', 
            items: [
              { text: 'Linux常用命令', link: '/knowledges/tech/tool/linux' }
            ]
          },
        ]
      },
    ],
  }
}

export default {
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
