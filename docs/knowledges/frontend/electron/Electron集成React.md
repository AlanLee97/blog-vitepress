# 集成react
1. 安装react
```bash
npm i react react-dom -S
```

2. 安装react相关babel依赖
```bash
npm i @babel/core @babel/preset-react @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/plugin-transform-runtime @babel/preset-env -D
```

- @babel/core：babel 核心包，编译器，提供转换的API。
- @babel/preset-react：Babel可以转换JSX语法
- @babel/plugin-proposal-class-properties：解析类的属性
- @babel/plugin-proposal-decorators：解析装饰器
- @babel/plugin-transform-runtime：将 helper 和 polyfill 都改为从一个统一的地方引入，并且引入的对象和全局变量是完全隔离的，可以提高代码重用性，缩小编译后的代码体积
- @babel/preset-env：对es2015, es2016. es2017的支持

3. 安装webpack插件和loader
```bash
npm i html-webpack-plugin clean-webpack-plugin babel-loader style-loader css-loader -D
```

4. 以about页面和home页面为例

将about页面和home页面集成React
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1635651163403-deeeac14-20ab-4bce-b531-c545cb2847c1.png#clientId=u8eaa511b-0caa-4&from=paste&id=IE5kt&name=image.png&originHeight=513&originWidth=381&originalType=binary&ratio=1&size=22996&status=done&style=none&taskId=ud15b3687-142d-4d3b-8ef4-fa6549a5954)
**Home页面**
home/index.tsx
```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

console.log("home")
```

home/App.tsx
```jsx
import React from "react";

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <h1>React: Home App</h1>
  }
}

export default App;
```

home/index.html
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
  <div id="root"></div>
</body>
</html>
```

**About页面**
about/index.tsx
```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


console.log("about")
```

about/App.tsx
```jsx
import React from "react";

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <h1>React: About App</h1>
  }
}

export default App;
```

about/index.html
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
  <div id="root"></div>
</body>
</html>
```


5. 配置webpack
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  target: "electron-renderer",
  // 多入口文件
  entry: {
    index: "./src/renderer/index.ts",
    home: "./src/renderer/home/index.tsx",
    about: "./src/renderer/about/index.tsx",
  },
  output: {
    filename: "[name].[hash:8].bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
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
    extensions: [".ts", ".tsx", ".d.ts", ".js", ".jsx"]
  },

  mode: "development"
}
```

6. 编译打包
```bash
webpack
```

7. 运行electron
```bash
npm run dev
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1635651544061-bda741ce-3ed2-4d0f-8e86-00b692850ea6.png#clientId=u8eaa511b-0caa-4&from=paste&id=uf26c9526&name=image.png&originHeight=196&originWidth=575&originalType=binary&ratio=1&size=25042&status=done&style=none&taskId=ud21d56da-a8b3-4e40-af0e-d6920cfcd5f)

# 遇到的问题

## 打包出错
【问题】
```bash
ERROR in ./node_modules/react-dom/cjs/react-dom.development.js 8:120-144
Module not found: Error: Can't resolve 'object-assign' in 'G:\MyCode\electron\my-electron-app\node_modules\react-dom\cjs'
 @ ./node_modules/react-dom/index.js 36:2-60
 @ ./src/renderer/home/index.tsx 7:34-54

ERROR in ./node_modules/react-dom/cjs/react-dom.development.js 8:192-220
Module not found: Error: Can't resolve 'scheduler/tracing' in 'G:\MyCode\electron\my-electron-app\node_modules\react-dom\cjs'
 @ ./node_modules/react-dom/index.js 36:2-60
 @ ./src/renderer/home/index.tsx 7:34-54

ERROR in ./node_modules/react/cjs/react.development.js 15:18-42
Module not found: Error: Can't resolve 'object-assign' in 'G:\MyCode\electron\my-electron-app\node_modules\react\cjs'
 @ ./node_modules/react/index.js 6:2-56
 @ ./src/renderer/home/index.tsx 6:30-46
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1635648093348-18e91ad8-25e4-4466-a511-c3e1615535f5.png#clientId=u8eaa511b-0caa-4&from=paste&id=u0a673d15&name=image.png&originHeight=341&originWidth=939&originalType=binary&ratio=1&size=42159&status=done&style=none&taskId=u32752bf7-e782-4008-a57b-3697dfd3308)

【原因】
resolve.extensions漏掉了.js扩展名

【解决】
```json
  resolve: {
    extensions: [".ts", ".tsx", ".d.ts", ".js", ".jsx"]
  },
```


## webpack-dev-server运行时报错
【问题】
```javascript
Uncaught ReferenceError: global is not defined
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1635866676970-e60f99f8-296f-4b0f-bb47-0645436806d3.png#clientId=u6082d289-818a-4&from=paste&id=u8ef256c4&name=image.png&originHeight=260&originWidth=818&originalType=binary&ratio=1&size=20361&status=done&style=none&taskId=u84b11df8-2dc5-4002-bc21-d0501cc7945)

【原因】


【解决】
把webpack配置文件的target值设置为web。
```javascript

module.exports = {
  target: "web",
  // target: "electron-renderer",
	...

}
```
