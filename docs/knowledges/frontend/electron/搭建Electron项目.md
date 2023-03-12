# 创建文件夹
```bash
mkdir my-electron-app && cd my-electron-app
```
# 初始化项目
```bash
npm init -y
```
# 完善基本目录结构
## 1. 创建src目录
创建index.js文件
```javascript
const {app, BrowserWindow} = require('electron');

let win = null;
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile('src/index.html');
}

app.whenReady().then((res) => {
  createWindow();
})
```

创建index.html文件
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Electron App</title>
</head>
<body>
  <h1>Hello Electron</h1>
</body>
</html>
```

# 启动项目

1. 在package.json中添加脚本
```json
  "scripts": {
    "start": "electron ."
  },
```

2. 启动项目
```bash
npm start
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1635575565468-3907698e-51dc-4193-aefa-c86872c56d6b.png#clientId=ucad2390a-2fb2-4&from=paste&height=600&id=uc1194921&name=image.png&originHeight=600&originWidth=800&originalType=binary&ratio=1&size=16255&status=done&style=none&taskId=ucb942da3-19dc-4fc3-9c3a-338904268bb&width=800)
