# 如何配置
1. 打开配置用户代码片段

![image.png](https://cdn.nlark.com/yuque/0/2023/png/743297/1672815647154-bbdac58b-e3f8-4ef3-88fd-ad17aa3f60bf.png#averageHue=%2324272a&clientId=u0c34a310-d829-4&from=paste&height=402&id=u641c65e4&name=image.png&originHeight=402&originWidth=553&originalType=binary&ratio=1&rotation=0&showTitle=false&size=25247&status=done&style=none&taskId=u40881dd4-83e7-4755-9d3f-51fa3dc4237&title=&width=553)

2. 新建代码片段

![image.png](https://cdn.nlark.com/yuque/0/2023/png/743297/1672815699642-52ae9bb1-d8f8-460f-aed0-75c47f972f4a.png#averageHue=%2324282c&clientId=u0c34a310-d829-4&from=paste&height=440&id=u22fc2bd1&name=image.png&originHeight=440&originWidth=600&originalType=binary&ratio=1&rotation=0&showTitle=false&size=33591&status=done&style=none&taskId=u939e2041-d2b0-43ff-bc91-2ab51bc52c5&title=&width=600)

3. 输入文件名

![image.png](https://cdn.nlark.com/yuque/0/2023/png/743297/1672819849565-0e652568-3eb8-4333-9fcf-646cd810fe60.png#averageHue=%236e7366&clientId=u0c34a310-d829-4&from=paste&height=73&id=ufcc4a80a&name=image.png&originHeight=73&originWidth=601&originalType=binary&ratio=1&rotation=0&showTitle=false&size=5277&status=done&style=none&taskId=u08d4af48-3e1f-40df-b8dd-92d64fad86d&title=&width=601)

4. 编辑代码

![image.png](https://cdn.nlark.com/yuque/0/2023/png/743297/1672819895437-c974f8f0-d0e3-49d8-bed9-b6abbb35e038.png#averageHue=%2320201f&clientId=u0c34a310-d829-4&from=paste&height=400&id=u42d05865&name=image.png&originHeight=400&originWidth=1102&originalType=binary&ratio=1&rotation=0&showTitle=false&size=46237&status=done&style=none&taskId=u900a8af9-c140-4de8-946b-c4cbc50f888&title=&width=1102)
# 配置log语句
```json
{
	"Print to console with message": {
		"scope": "javascript,typescript",
		"prefix": "logm",
		"body": [
			"console.log('key', $1)",
		],
		"description": "Log output to console"
	}
}
```
# 配置Vue2组件片段
```json
{
	"Create Vue2 component": {
		"prefix": "vue2",
		"body": [
			"<template>\n  <div>$1\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'ComponentName$2',\n  data () {\n    return {\n\n    }\n  },\n  created () {\n\n  },\n  mounted () {\n\n  },\n  methods: {\n\n  }\n}\n</script>\n\n<style lang=\"scss\" scoped>\n\n</style>"
		],
		"description": "Create Vue2 component"
	}
}
```
# 配置Vue3组件片段
```json
{
	"Create Vue3 component": {
		"prefix": "vue3",
		"body": [
			"<template>\n  <div>$1\n  </div>\n</template>\n\n<script lang=\"ts\" setup>\n$2\n</script>\n\n<style lang=\"scss\" scoped>\n\n</style>\n",
		],
		"description": "Create Vue3 component"
	}
}
```

# 效果展示
![gif (3).gif](https://cdn.nlark.com/yuque/0/2023/gif/743297/1672820355091-b2173ab1-31c8-4c54-8d26-ab7b6912c2e8.gif#averageHue=%231e1e1e&clientId=ua16e3a16-2cbf-4&from=paste&height=679&id=u2f5061c9&name=gif%20%283%29.gif&originHeight=679&originWidth=864&originalType=binary&ratio=1&rotation=0&showTitle=false&size=113340&status=done&style=none&taskId=ue8816095-b3fc-45a5-9e8f-fcfc41c3998&title=&width=864)
