import fs from "fs";

export const filesData = {}

// const reg = /#(.*)\n/
// const res2 = reg.exec('# aaabbb\n')
// console.log('alan->', res2[1])

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

genLastUpdatedFiles()

export function genarateSidebarViaDir(dir) {
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
          let dirStrArr = curPath.replace('docs/', '').split('/') || []

          
          
          searchFile(path + "/" + ele);
          
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


