# Vite的特性
![image.png](https://cdn.nlark.com/yuque/0/2023/png/743297/1675066455491-3e0d41e2-7629-46b0-b5f2-64944ebfd435.png#averageHue=%23f8f7f7&clientId=u7be2d503-ab5e-4&from=paste&height=500&id=u86154b8d&name=image.png&originHeight=450&originWidth=1195&originalType=binary&ratio=1&rotation=0&showTitle=false&size=48362&status=done&style=none&taskId=u6abbe95c-6058-4256-8367-94ee51cd664&title=&width=1327.7778129518776)

1. **极速的服务启动**：使用原生 ESM 文件，无需打包!
2. **轻量快速的热重载**：无论应用程序大小如何，都始终极快的模块热替换（HMR）
3. **丰富的功能**：对 TypeScript、JSX、CSS 等支持开箱即用。
4. **优化的构建**：可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建
5. **通用的插件**：在开发和构建之间共享 Rollup-superset 插件接口。
6. **完全类型化的API**：灵活的 API 和完整的 TypeScript 类型。

# Vite解决的问题

1. 大型应用模块多时，基于 JavaScript 开发的工具有性能瓶颈，启动开发服务器慢；HMR慢，且重新加载页面会消除应用的当前状态
2. 其他打包工具开发效率不够快
3. 冷启动开发服务器时，须先抓取并构建整个应用的资源，才能提供服务

# Vite的工作方式
Vite 通过在一开始将应用中的模块区分为 **依赖** 和 **源码** 两类，改进了开发服务器启动时间。
**依赖处理**：Vite 使用 esbuild 预构建依赖。esbuild 使用 Go 编写，并且比以 JavaScript 编写的打包器预构建依赖快 10-100 倍。
**源码处理**：Vite 以 原生 ESM 方式提供源码。Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。
**HTTP请求**：Vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：源码模块的请求会根据 304 Not Modified 进行协商缓存，而依赖模块请求则会通过 Cache-Control: max-age=31536000,immutable 进行强缓存

![image.png](https://cdn.nlark.com/yuque/0/2023/png/743297/1675068524643-c16e7107-c5a6-4dfe-9b0e-e289ad35e99b.png#averageHue=%23efedeb&clientId=u7be2d503-ab5e-4&from=paste&height=459&id=u5e22f30e&name=image.png&originHeight=413&originWidth=701&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30213&status=done&style=none&taskId=u20f828ad-51bd-4c61-a3fd-547188a8ee8&title=&width=778.8889095223985)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/743297/1675068552911-138467c3-3fd8-4702-8fb8-4a9b994d9b39.png#averageHue=%23e4e3e2&clientId=u7be2d503-ab5e-4&from=paste&height=453&id=u1d7a1414&name=image.png&originHeight=408&originWidth=697&originalType=binary&ratio=1&rotation=0&showTitle=false&size=34350&status=done&style=none&taskId=u695a8662-fdc2-4eb8-a036-fe62f671d1c&title=&width=774.4444649602166)
