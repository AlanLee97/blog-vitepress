# 初始化项目
```bash
mkdir webpack-bulid-react

cd webpack-build-react

npm init -y
```
# 安装webpack和react及相关依赖

1. 安装webpack
```bash
npm i webpack webpack-cli webpack-dev-server -D
```

2. 安装react
```bash
npm i react react-dom -S
```

3. 安装react相关babel依赖
```bash
npm i @babel/core @babel/preset-react @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/plugin-transform-runtime @babel/preset-env -D
```
@babel/core：babel 核心包，编译器，提供转换的API。
@babel/preset-react：Babel可以转换JSX语法
@babel/plugin-proposal-class-properties：解析类的属性
@babel/plugin-proposal-decorators：解析装饰器
@babel/plugin-transform-runtime：将 helper 和 polyfill 都改为从一个统一的地方引入，并且引入的对象和全局变量是完全隔离的，可以提高代码重用性，缩小编译后的代码体积
@babel/preset-env：对es2015, es2016. es2017的支持

4. 安装webpack插件和loader
```bash
npm i html-webpack-plugin clean-webpack-plugin babel-loader style-loader css-loader -D
```

5. 配置webpack

webpack.config.js
```javascript
const path = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)?$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebapckPlugin({
      template: "./public/index.html"
    })
  ],
  devServer: {
    hot: true,
    port: 3000,
    open: true,
  },
  mode: "development"
}
```

创建.babelrc文件
```json
{
  "presets": ["@babel/preset-react", "@babel/preset-env"],
  "plugins": [
    [
      "@babel/plugin-proposal-class-properties", //编译类
      {
        "loose": true //将编译类属性以使用赋值表达式而不是Object.defineProperty
      }
    ],
    ["@babel/plugin-transform-runtime"]
  ]
}
```

6. 目录结构

![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1635610826197-d66e530f-a8e0-4c24-96bb-165d157931ad.png#clientId=u19ebfae0-78a6-4&from=paste&height=399&id=ud1d7f5df&name=image.png&originHeight=399&originWidth=378&originalType=binary&ratio=1&size=15258&status=done&style=none&taskId=ub22b8eef-d8a2-453e-8a0c-713fdb0961a&width=378)
创建public/index.html、src/index.js、src/App.jsx文件
public/index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webpack Build React</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

src/index.js
```javascript
import React from "react";
import ReactDom from "react-dom";

import App from "./App.jsx";

ReactDom.render(
  <App />,
  document.getElementById("root")
)

```
src/App.jsx
```javascript
import React from "react";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <h1>Hello, Webpack + React</h1>
  }
}

export default App;
```
# 运行
```bash
npm run serve
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1635610733146-b51a57a9-dbe7-4801-9c48-2c97be6f8698.png#clientId=u19ebfae0-78a6-4&from=paste&height=713&id=u9b7fdfaf&name=image.png&originHeight=713&originWidth=1520&originalType=binary&ratio=1&size=55354&status=done&style=none&taskId=u1dc438d5-21f8-46c2-945a-472eb947d36&width=1520)

# 集成TyepScript

1. 安装tpyescript
```bash
npm i typescript ts-loader -D
```

2. 初始化ts配置
```bash
tsc --init
```

3. 安装react的声明文件
```bash
npm i -D @types/react @types/react-dom
```

4. 配置tsconfig.json
- jsx字段值改为react
- lib字段增加DOM，ES2015
```json
{
  "compilerOptions": {
    ...
    "jsx": "react", 
    "lib": [
      "DOM",
      "ES2015"
    ],   
  }
}
```

5. 更改js/jsx文件为ts/tsx

![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1635646740711-309eca66-da10-406d-aff4-b65e6dc0eaca.png#clientId=u60884cac-dc97-4&from=paste&height=375&id=u3dff710f&name=image.png&originHeight=375&originWidth=386&originalType=binary&ratio=1&size=17718&status=done&style=none&taskId=ue2daa700-9c55-43ff-9e8d-049264721a3&width=386)

6. 配置webpack
- 入口文件改为index.tsx
- 增加ts/tsx文件处理
- 增加解析扩展文件
```javascript
const path = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 入口文件改为index.tsx
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      // 增加ts/tsx文件处理
      {
        test: /\.(ts|tsx)?$/,
        use: ["ts-loader"],
        exclude: path.resolve(__dirname, "node_modules")
      },
      {
        test: /\.(js|jsx)?$/,
        use: ["babel-loader"],
        exclude: path.resolve(__dirname, "node_modules")
      },
      {
        test: /\.(css|scss)?$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebapckPlugin({
      template: "./public/index.html"
    })
  ],
  devServer: {
    hot: true,
    port: 3000,
    open: true,
  },
  // 增加解析扩展文件
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },
  mode: "development"
}
```

7. 打包
```bash
webpack
```

8. 本地运行
```bash
npm run serve
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1635646657738-d6bf690a-83cd-4a05-9a27-71e5f76ab7f6.png#clientId=u60884cac-dc97-4&from=paste&height=680&id=u25ccc831&name=image.png&originHeight=680&originWidth=1457&originalType=binary&ratio=1&size=56692&status=done&style=none&taskId=u2e807078-cef7-4cd1-8722-75ca61704ed&width=1457)
