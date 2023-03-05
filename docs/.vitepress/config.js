import fs from "fs";

const filesData = {}

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
          // console.log('content', content)
          const reg = /#(.*)\n/
          const res = reg.exec(content)
          mds.push({
            file: curPath,
            title: (res[1] || '').trim(),
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
    socialLinks: [{ icon: "github", link: "https://github.com/alanlee97" }],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: "Copyright © 2023-present AlanLee",
    },
  },
};
