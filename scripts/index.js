import fs from "fs";
import { spawn } from 'cross-spawn'

export function getGitTimestamp(file) {
  return new Promise((resolve, reject) => {
    const child = spawn('git', ['log', '-1', '--pretty="%ci"', file])
    let output = ''
    child.stdout.on('data', (d) => (output += String(d)))
    child.on('close', () => {
      resolve(+new Date(output))
    })
    child.on('error', reject)
  })
}

export async function getAllMdFiles() {
  const excludeDirs = ['public', '.vitepress', 'index.md']
  let mds = []
  
  const searchFile = async (path) => {
    const dirs = fs.readdirSync(path);
    for(let ele of dirs) {
      if(!excludeDirs.includes(ele)) {
        const curPath = path + "/" + ele
        const info = fs.statSync(curPath);
        if (info.isDirectory()) {
          await searchFile(path + "/" + ele);
        } else {
          const content = fs.readFileSync(curPath, 'utf-8')
          const reg = /#(.*)\n/
          const res = reg.exec(content)
          const time = await getGitTimestamp(curPath);
          // console.log('curPath time', time)
          mds.push({
            file: curPath,
            link: curPath.replace('docs', '').replace('.md', '.html'),
            title: (ele || '').replace('.md', '') || ((res && res[1]) || '').trim(),
            desc: content.substring(0, 60) + '...',
            updateTime: info.mtime
          });
        }
      }
    }
    return mds
  }
  await searchFile('docs')
  console.log('=======> end')
  return mds
}

export async function genLastUpdatedFiles() {
  const filesData = {}
  const mds = await getAllMdFiles();
  mds.sort((a, b) => {
    if (new Date(a.updateTime) < new Date(b.updateTime)) {
      return 1;
    } else {
      return -1;
    }
  });
  const exists = fs.existsSync("docs/public/data");
  if (!exists) {
    fs.mkdirSync("docs/public/data");
  }

  fs.writeFileSync(
    "docs/public/data/allFiles.json",
    JSON.stringify({ data: mds })
  );
  filesData.data = mds;
  console.log('PRETASK: genLastUpdatedFiles() finished.')
  return filesData
}

genLastUpdatedFiles()


