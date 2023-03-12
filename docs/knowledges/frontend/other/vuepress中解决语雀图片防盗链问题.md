在config.js的head属性中增加配置
```javascript
head: [
  	...
  
    // 解决语雀防盗链问题
    [
      "meta",
      { name: "referrer", content: "no-referrer" },
    ],
]
```
原理就是在html的head中生成meta标签
```html
<meta name="referrer" content="no-referrer" />
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1633274923829-40d639de-612f-46cd-bd79-880d97384fad.png#clientId=u924da62f-a45d-4&from=paste&height=327&id=ueebf4a3e&name=image.png&originHeight=327&originWidth=762&originalType=binary&ratio=1&size=43755&status=done&style=none&taskId=u0a32b2ad-71fd-4a91-8d47-cf4b7805a33&width=762)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1633274815266-e7cc161f-126b-459a-a1b6-c421d8e4bb48.png#clientId=u924da62f-a45d-4&from=paste&height=593&id=ue5a45a1a&name=image.png&originHeight=593&originWidth=1260&originalType=binary&ratio=1&size=83942&status=done&style=none&taskId=ubb1bda92-ad90-4ff8-b60a-1e5214cb8ff&width=1260)
