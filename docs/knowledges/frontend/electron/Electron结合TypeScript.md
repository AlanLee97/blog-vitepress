# 安装TypeScript
```bash
npm i typescript ts-loader -D
```
# 初始化TS
```bash
tsc --init
```
# 将JS文件改为TS
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1635598490898-49227b2c-77e7-44cf-ade9-5d91113f0850.png#clientId=u34e2bec8-b487-4&from=paste&height=281&id=u549e4bc1&name=image.png&originHeight=281&originWidth=402&originalType=binary&ratio=1&size=13327&status=done&style=none&taskId=uca2176eb-d841-47eb-bda1-c2094ef9bd0&width=402)
# 更改打包入口
将package.json的main字段的index.js改为index.ts
```json
"main": "./src/index.ts",
```
script的dev字段增加`tsc src/index.ts`命令
```json
"dev": "tsc src/index.ts && webpack && npm start"
```
# 打包运行
```bash
npm run dev
```
