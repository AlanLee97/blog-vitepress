# 安装webpack
```bash
npm i webpack webpack-cli -D
```
# 安装webpack插件
```bash
npm i html-webpack-plugin -D
```
# 编写webpack配置
webpack.config.js
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: "electron-renderer",
  entry: "./src/renderer/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],

  mode: "development"
}
```
# 完善目录结构文件

1. 创建在根目录下创建public文件夹
2. 在public文件夹下创建index.html
3. 删除src目录下的index.html
4. 更改index.js的loadFile路径
```javascript
win.loadFile(`./dist/index.html`);
```

5. 创建renderer文件夹
6. 在renderder文件夹下创建index.js
```javascript
console.log('hello');
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1635598250729-06e7b005-286b-4b33-bac1-32ec0c618a3b.png#clientId=uc4751b71-bf34-4&from=paste&height=293&id=ue4c9d420&name=image.png&originHeight=293&originWidth=384&originalType=binary&ratio=1&size=13890&status=done&style=none&taskId=u674ce3a1-45ee-4e28-b8bf-5e2c87d220c&width=384)
# 编写启动脚本
在package.json的script下增加脚本
```json

"scripts": {
  "dev": "webpack && npm start",
},
```
# 启动项目
```bash
npm run dev
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1635595717237-8d8e89a9-77d0-4873-838a-ad3a43105fd7.png#clientId=ucf9a5fd3-9895-4&from=paste&height=386&id=u2a552324&name=image.png&originHeight=386&originWidth=915&originalType=binary&ratio=1&size=37477&status=done&style=none&taskId=u7f3fd37f-f191-49a8-a5a8-c0e41b67e4a&width=915)
