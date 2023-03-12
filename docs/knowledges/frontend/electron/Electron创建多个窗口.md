# Webpack多入口文件打包
1. 创建2个子页面home和about
2. 在renderer文件夹下创建home文件夹和about文件夹
3. 分别在home文件夹和about文件夹下创建index.ts文件和index.html文件

**Home**
index.ts
```typescript
console.log("home")
```
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
</head>
<body>
  <h1>Home</h1>
</body>
</html>
```
**About**
index.ts
```typescript
console.log("about")
```
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About</title>
</head>
<body>
  <h1>About</h1>
</body>
</html>
```
文件目录结构如下
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1635605344668-ef6ef2da-3455-43b0-96ff-1733bf08c954.png#clientId=u77d2d755-aaf6-4&from=paste&height=434&id=u922db57c&name=image.png&originHeight=434&originWidth=382&originalType=binary&ratio=1&size=20496&status=done&style=none&taskId=uafab9504-f9ef-4c1d-951b-be2f54f1e8c&width=382)

4. 配置webpack多入口文件
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  target: "electron-renderer",
  // 多入口文件
  entry: {
    index: "./src/renderer/index.ts",
    home: "./src/renderer/home/index.ts",
    about: "./src/renderer/about/index.ts",
  },
  output: {
    filename: "[name].[hash:8].bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        use: ["ts-loader"]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    // 多个模板
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: "./src/renderer/home/index.html",
      filename: "home.html",
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: "./src/renderer/about/index.html",
      filename: "about.html",
      chunks: ['about']
    }),
  ],

  resolve: {
    extensions: ["ts", "tsx", ".d.ts", "jsx"]
  },

  mode: "development"
}
```

5. 修改package.json的main字段
```json
"main": "./src/index.js", //将ts文件改回js
```

6. 修改src/index.ts
```typescript
const {app, BrowserWindow} = require('electron');

console.log('__dirname', __dirname);
let win = null;
function createWindow(filePath: string = "./dist/index.html") {
  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile(filePath);
}

app.whenReady().then(() => {
  console.log('app ready');
  // 打开多个窗口
  createWindow("./dist/index.html");
  createWindow("./dist/home.html");
  createWindow("./dist/about.html");
})
```

7. 打包运行
```bash
npm run dev
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1635605472562-5ae127a3-d16d-4fa8-b2e5-d0072e033ae6.png#clientId=u77d2d755-aaf6-4&from=paste&height=197&id=u539fcf22&name=image.png&originHeight=197&originWidth=522&originalType=binary&ratio=1&size=24537&status=done&style=none&taskId=u03b84f00-87ca-479c-b7db-970caa8223e&width=522)

