import fs from "fs";

export const filesData = {}

export function getAllMdFiles() {
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
            title: (ele || '').replace('.md', '') || ((res && res[1]) || '').trim(),
            desc: content.substring(0, 60) + '...',
            updateTime: info.mtime
          });
        }
      }
    });
  }
  searchFile('docs')
  return mds
}

export function genLastUpdatedFiles() {
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

export function getDirTree(dir) {
  const excludeDirs = ['public', '.vitepress', 'index.md']
  let mds = []
  let dirTree = {}

  const searchFile = (path) => {
    const dirs = fs.readdirSync(path);
    dirs.forEach((ele, index) =>  {
      if(!excludeDirs.includes(ele)) {
        const curPath = path + "/" + ele
        const info = fs.statSync(curPath);
        if (info.isDirectory()) {
          let dirStrArr = curPath.replace('docs/', '').split('/') || []
          dirStrArr.reduce((pre, cur, i) => {
            if(!pre[cur]) {
              pre[cur] = {}
            }
            if(i === dirStrArr.length - 1) {
              pre[cur] = {files: []}
            }
            return pre[cur]
          }, dirTree)
          searchFile(path + "/" + ele);
        } else {
          let lastObj = {}
          let pathArr = path.replace('docs/', '').split('/') || []
          pathArr.reduce((pre, cur, i) => {
            if (!pre[cur]) {
              pre[cur] = {}
            }
            if(i === pathArr.length - 1) {
              lastObj = pre[cur]
            }
            return pre[cur]
          }, dirTree)
          lastObj.files.push({
            name: ele,
            path: curPath
          })
          mds.push(curPath)
        }
      }
    });
  }
  searchFile(dir)

  return {
    mds,
    dirTree
  }
}

export function genSideBarItems(path = '') {
  const pathArr = path.split('/')
  const res = getDirTree('docs/knowledges')
  const newDirTree = JSON.parse(JSON.stringify(res.dirTree))
  let lastObj = {}
  pathArr.reduce((pre, cur, i) => {
    if(!pre[cur]) {
      pre[cur] = {}
    }
    if(i === pathArr.length - 1) {
      lastObj = pre[cur]
    }
    return pre[cur]
  }, newDirTree)

  const items = [];
  (lastObj.files || []).forEach(item => {
    items.push({
      text: (item.name || '').replace('.md', ''),
      link: (item.path || '').replace('docs/', '/').replace('.md', '')
    })
  })

  return items;
}
