# 前言
一般前端开发人员都只是知道HTTP(浏览器)缓存的理论，很少实际动手自己配置HTTP(浏览器)缓存。光知道理论，没有实践，那么就只是知其然，不知所以然。所以这里我自己尝试动手配置HTTP(浏览器)缓存，实际看看缓存是怎么配置的。
本实战项目用koa实现后端服务，vue3完成前端项目。
# HTTP(浏览器)缓存简介
## 思维导图
![](https://cdn.nlark.com/yuque/0/2022/jpeg/743297/1665307881430-4e132d53-8b99-49f9-a1c2-b5cf5c99b93d.jpeg)

## 什么是HTTP缓存？
HTTP缓存是指一个 Web 资源（如 html 页面，图片，js，数据等）存在于 Web 服务器和客户端（浏览器）之间的副本。缓存会根据进来的请求保存输出内容的副本；当下一个请求来到的时候，如果是相同的 URL，缓存会根据缓存机制决定是直接使用副本响应访问请求，还是向源服务器再次发送请求。比较常见的就是浏览器会缓存访问过网站的网页，当再次访问这个 URL 地址的时候，如果网页没有更新，就不会再次下载网页，而是直接使用本地缓存的网页。只有当网站明确标识资源已经更新，浏览器才会再次下载网页。

## HTTP缓存的作用

- 减少网络带宽消耗
- 降低服务器压力
- 减少网络延迟，加快页面打开速度

## HTTP缓存相关参数
### 强缓存
#### Cache-Control
Cache-Control是一个通用首部字段，也是HTTP/1.1控制浏览器缓存的主流字段。
常见的Cache-Control指令

| 指令 | 含义 |
| --- | --- |
| no-cache | 在发布缓存副本之前，强制要求缓存把请求提交给原始服务器进行验证 (协商缓存验证)。 |
| no-store | 缓存不应存储有关客户端请求或服务器响应的任何内容，即不使用任何缓存。 |
| max-age | 设置缓存存储的最大周期，超过这个时间缓存被认为过期 (单位秒)。与Expires相反，时间是相对于请求的时间。 |
| s-maxage | 覆盖max-age或者Expires头，但是仅适用于共享缓存 (比如各个代理)，私有缓存会忽略它。 |
| must-revalidate | 一旦资源过期（比如已经超过max-age），在成功向原始服务器验证之前，缓存不能用该资源响应后续请求。 |
| proxy-revalidate | 与 must-revalidate 作用相同，但它仅适用于共享缓存（例如代理），并被私有缓存忽略。 |
| immutable | 表示响应正文不会随时间而改变。资源（如果未过期）在服务器上不发生改变，因此客户端不应发送重新验证请求头（例如If-None-Match或 If-Modified-Since）来检查更新，即使用户显式地刷新页面。 |
| public | 表明响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存，即使是通常不可缓存的内容。（例如：1.该响应没有max-age指令或Expires消息头；2. 该响应对应的请求方法是 POST 。） |
| private | 表明响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）。私有缓存可以缓存响应内容，比如：对应用户的本地浏览器。 |

更多指令见：[https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)

示例：
```bash
Cache-Control: no-store
Cache-Control: no-cache
Cache-Control: public, max-age=31536000
Cache-Control: max-age=0, must-revalidate
```

#### Expires
Expires 响应头包含日期/时间，即在此时候之后，响应过期。

- 无效的日期，比如 0，代表着过去的日期，即该资源已经过期。
- 如果在Cache-Control响应头设置了 "max-age" 或者 "s-max-age" 指令，那么 Expires 头会被忽略。

示例：
```bash
Expires: Wed, 21 Oct 2022 07:28:00 GMT
```

#### 原理
通过Cache-Control和Expires响应头，告诉浏览器是否需要使用缓存。浏览器发起第一次请求，会正常返回结果，如果响应头里有Cache-Control和Expires，则第2次请求时浏览器会读取缓存，不会发起真正的请求到服务器，状态码为200。

- 缓存存放的位置由浏览器自己决定，有可能是存放在硬盘(disk cache)，也有可能存放在内存(memory cache)。
- Cache-Control和Expires同时存在，则优先使用Cache-Control

![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1665644523146-f52605b1-6f81-4fcd-b27f-9afc0d94320d.png#clientId=u4aa21d7d-43c3-4&errorMessage=unknown%20error&from=paste&height=700&id=ud4059555&name=image.png&originHeight=700&originWidth=765&originalType=binary&ratio=1&rotation=0&showTitle=false&size=23858&status=error&style=shadow&taskId=u136df19c-134c-4176-8325-89e587fa3f7&title=&width=765)
### 协商缓存
#### ETag / If-None-Match
ETag / If-None-Match是一对组合，通过文件的hash对比实现协商缓存，ETag出现在响应头中，If-None-Match出现在请求头中。
##### If-None-Match
唯一地表示所请求资源的实体标签。形式是采用双引号括起来的由 ASCII 字符串（如"675af34563dc-tr34"），有可能包含一个 W/ 前缀，来提示应该采用弱比较算法。
示例：
```bash
If-None-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"
If-None-Match: W/"67ab43", "54ed21", "7892dd"
If-None-Match: *
```
##### ETag
实体标签唯一地表示所请求的资源。它们是位于双引号之间的 ASCII 字符串（如“675af34563dc-tr34”）。没有明确指定生成 ETag 值的方法。通常，使用内容的散列，最后修改时间戳的哈希值，或简单地使用版本号。
示例：
```bash
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```
#### Last-Modifed / If-Modified-Since
Last-Modifed / If-Modified-Since是一对组合，通过资源的最后修改时间比对实现协商缓存，Last-Modifed出现在响应头中，If-Modified-Since出现在请求头中。因为时间只能精确到秒，所以如果一个资源在1秒内被多次修改，而Last-Modifed没有变更，此时不能根据Last-Modified判断文件是否被修改过，而ETag可以解决这个问题。
##### Last-Modifed
Last-Modified 是一个响应首部，其中包含源头服务器认定的资源做出修改的日期及时间。它通常被用作一个验证器来判断接收到的或者存储的资源是否彼此一致。由于精确度比 ETag 要低，所以这是一个备用机制。包含有 If-Modified-Since 或 If-Unmodified-Since 首部的条件请求会使用这个字段。
示例：
```bash
Last-Modified: Wed, 21 Oct 2022 07:28:00 GMT
```
##### If-Modified-Since
If-Modified-Since 是一个条件式请求首部，服务器只在所请求的资源在给定的日期时间之后对内容进行过修改的情况下才会将资源返回，状态码为 200 。如果请求的资源从那时起未经修改，那么返回一个不带有消息主体的 304 响应，而在 Last-Modified 首部中会带有上次修改时间。If-Modified-Since 只可以用在 GET 或 HEAD 请求中。
示例：
```bash
If-Modified-Since: Wed, 21 Oct 2022 07:28:00 GMT
```

#### 原理
前端第1次发送普通的请求到服务端，如果没有强缓存，则进行协商缓存，服务端给响应头加上Last-Modified或者ETag，前端收到请求之后把Last-Modified和ETag的值保存起来。第2次请求，前端发送请求时带上If-Modified-Since或者If-None-Match请求头，服务端接收到请求时，获取请求头中的If-Modified-Since或If-None-Match的值，然后与Last-Modified和ETag进行对比，如果比对出还在缓存期内，则返回304状态码，否则返回200状态码。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1665644201897-4cfbf3c9-ef9a-4375-9f54-67d53ab70fa6.png#clientId=u4aa21d7d-43c3-4&errorMessage=unknown%20error&from=paste&height=697&id=ua04a7a8f&name=image.png&originHeight=697&originWidth=876&originalType=binary&ratio=1&rotation=0&showTitle=false&size=28110&status=error&style=shadow&taskId=u1030aaf3-c698-4e68-a611-fa700c22468&title=&width=876)
## HTTP(浏览器)缓存流程

![缓存流程 (1).jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/743297/1665643366257-ed29a135-1dfb-46e5-86e6-53407f4b60db.jpeg#clientId=u4aa21d7d-43c3-4&errorMessage=unknown%20error&from=drop&id=uff2b7c4f&name=%E7%BC%93%E5%AD%98%E6%B5%81%E7%A8%8B%20%281%29.jpg&originHeight=2562&originWidth=3939&originalType=binary&ratio=1&rotation=0&showTitle=false&size=447968&status=error&style=shadow&taskId=ud012f408-7612-4fbf-8921-8658c0685c8&title=)

# 实战
## 强缓存
### Cache-Control

- max-age

前端代码：
```typescript
<button @click="onCacheControlMaxAge">Cache-Control: max-age</button>

const onCacheControlMaxAge = () => {
  http.get('/test/cache-control/max-age/86400').then((res: any) => {
    console.log(res)
  })
}
```

服务端代码：
```javascript
router.get('/test/cache-control/max-age/:age', ctx => {
  const { age } = ctx.params;
  ctx.set('Cache-Control', 'max-age=' + (age ? age : 86400)); // 1天
  ctx.body = {
    code: 0,
    msg: 'ok',
    data: {
      ctx,
      msg: 'Test Cache-Control'
    }
  }
});
```
在服务端代码中，返回数据时设置响应头Cache-Control的值为max-age=86400
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1663657196600-4890a7fa-bce7-4155-9fa3-08ae117019b8.png#clientId=u4257953e-1be4-4&errorMessage=unknown%20error&from=paste&height=388&id=u70288b49&name=image.png&originHeight=388&originWidth=1077&originalType=binary&ratio=1&rotation=0&showTitle=true&size=43808&status=error&style=shadow&taskId=uf889bfc9-913c-470c-958f-489b746c831&title=%E8%AF%BB%E5%8F%96%E7%BC%93%E5%AD%98&width=1077 "读取缓存")

读取缓存之后，返回状态为200，响应头有Cache-Control，max-age的值是根据Date之后计算的。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1663657321721-b2a9c26d-ece6-43f7-a4b7-41c0dfd1d11c.png#clientId=u4257953e-1be4-4&errorMessage=unknown%20error&from=paste&height=600&id=ua8fd7c61&name=image.png&originHeight=600&originWidth=1077&originalType=binary&ratio=1&rotation=0&showTitle=true&size=58362&status=error&style=shadow&taskId=u9ffa8293-1602-4ef8-9894-2a814aba799&title=%E8%AF%BB%E5%8F%96%E7%BC%93%E5%AD%98%E8%AF%B7%E6%B1%82%E8%AF%A6%E6%83%85&width=1077 "读取缓存请求详情")

无缓存的请求会有请求头，读取缓存的请求没有请求头。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1663658877236-e051e3df-05a6-4754-b0d6-ad238ec4b76f.png#clientId=u4257953e-1be4-4&errorMessage=unknown%20error&from=paste&height=927&id=u7cca8ba3&name=image.png&originHeight=927&originWidth=2109&originalType=binary&ratio=1&rotation=0&showTitle=true&size=277420&status=error&style=shadow&taskId=u9f57d5ef-5d6f-43d3-ba2a-4d819c098da&title=%E6%97%A0%E7%BC%93%E5%AD%98%E6%A0%B8%E6%9C%89%E7%BC%93%E5%AD%98%E8%AF%B7%E6%B1%82%E5%AF%B9%E6%AF%94&width=2109 "无缓存核有缓存请求对比")

### Expires
前端代码：
```typescript
<button @click="onExpires">Expires</button>

const onExpires = () => {
  http.get('/test/expires').then((res: any) => {
    console.log(res)
  })
}

```
服务端代码：
```javascript
router.get('/test/expires', ctx => {
  // new Date(new Date().getTime() + 5 * 1000) 表示5秒之后过期
  ctx.set('Expires', new Date(new Date().getTime() + 5 * 1000).toGMTString());
  ctx.body = {
    code: 0,
    msg: 'ok',
    data: {
      msg: 'Test Expires',
      expires: new Date(new Date().getTime() + 5 * 1000).toGMTString()
    }
  }
});
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1663659882230-69f8e12a-0994-4d2e-98fa-098c05ce7b3f.png#clientId=u4257953e-1be4-4&errorMessage=unknown%20error&from=paste&height=425&id=u3becfe5d&name=image.png&originHeight=425&originWidth=1077&originalType=binary&ratio=1&rotation=0&showTitle=true&size=38021&status=error&style=shadow&taskId=u4f45b4a9-e60f-44e0-b229-0c3e9d955fd&title=%E5%8F%91%E8%B5%B7%E8%AF%B7%E6%B1%82&width=1077 "发起请求")

Date与Expires的值做对比。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1663659779537-94e59c77-76a8-414a-a249-952ba5ac0ce3.png#clientId=u4257953e-1be4-4&errorMessage=unknown%20error&from=paste&height=713&id=u00094c1b&name=image.png&originHeight=713&originWidth=2157&originalType=binary&ratio=1&rotation=0&showTitle=true&size=99809&status=error&style=shadow&taskId=u8ed61c2e-365d-4efa-b334-f84bfda8874&title=%E8%AF%B7%E6%B1%82%E7%BB%93%E6%9E%9C%E5%AF%B9%E6%AF%94&width=2157 "请求结果对比")

## 协商缓存
### If-Modified-Since / Last-Modified

1. 前端第一次发送普通的请求到服务端
2. 服务端给响应头加上Last-Modified，这个值为文件的修改时间，前端收到请求之后把Last-Modified的值保存起来
3. 第2次请求，前端发送请求时带上If-Modified-Since请求头，值为Last-Modified的值
4. 服务端接收到请求时，获取请求头中的If-Modified-Since的值，然后再获取文件的最后修改时间作为Last-Modified值，然后进行对比，如果If-Modified-Since的值大于等于Last-Modified的值，则返回304状态码，否则返回200状态码

前端代码：
```javascript
let lastModified = ''
let fileContent = ''

const onLastModified = () => {
  const headers = lastModified ? {
    "If-Modified-Since": lastModified
  } : {}
  http.get('/test/last-modified', { headers }).then((res: any) => {
    lastModified = res.headers['last-modified']
    fileContent = res.data.data.fileContent
    localStorage.setItem('fileContent', fileContent)
  }).catch((err: any) => {
    if(err.response.status === 304) {
      fileContent = '' + localStorage.getItem('fileContent')
    }
  })
}
```
服务端代码：
```javascript
router.get('/test/last-modified', ctx => {
  const fs = require('fs')
  const fileStat =  fs.statSync(__dirname + '/style.css');
  const lastModified = new Date(fileStat.mtime).toGMTString();
  const ifModifiedSince = ctx.request.header['if-modified-since'];
  ctx.set('Last-Modified', lastModified);
  if(ifModifiedSince && (new Date(ifModifiedSince) >= new Date(lastModified))) {
    ctx.status = 304
  } else {
    ctx.body = {
      code: 0,
      msg: 'ok',
      data: {
        msg: 'Test Last-Modified'
      }
    }
  }
});
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1663919914020-c8bd175f-aad0-420e-b076-999f2bd18e3b.png#clientId=u0928e92f-2f2c-4&errorMessage=unknown%20error&from=paste&height=371&id=ueb4004f2&name=image.png&originHeight=371&originWidth=1349&originalType=binary&ratio=1&rotation=0&showTitle=true&size=34918&status=error&style=shadow&taskId=u5c7f22a0-30a1-4fb5-bbe4-973bde7414d&title=%E8%AF%B7%E6%B1%82%E7%BB%93%E6%9E%9C&width=1349 "请求结果")

![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1663920002958-2d250514-a958-4f93-a3b8-0dadf4bd29a5.png#clientId=u0928e92f-2f2c-4&errorMessage=unknown%20error&from=paste&height=929&id=u8dc026b2&name=image.png&originHeight=929&originWidth=2697&originalType=binary&ratio=1&rotation=0&showTitle=true&size=134669&status=error&style=shadow&taskId=ub799782a-1f66-407c-b24e-11c0094de2c&title=%E8%AF%B7%E6%B1%82%E7%BB%93%E6%9E%9C%E5%AF%B9%E6%AF%94&width=2697 "请求结果对比")

### If-None-Match / ETag

1. 前端第一次发送普通的请求到服务端
2. 服务端给响应头加上ETag，这个值为文件的hash，前端收到请求之后把ETag的值保存起来
3. 第2次请求，前端发送请求时带上If-None-Match请求头，值为ETag的值
4. 服务端接收到请求时，获取请求头中的If-None-Match的值，然后再获取文件的最后修改时间作为Last-Modified值，然后进行对比，如果If-None-Match的值与ETag的值相同，表示文件内容为更改，则返回304状态码，否则返回200状态码

前端代码：
```javascript
const onEtag = () => {
  // 前端需要显示的在请求中带上If-None-Match
  const headers = etag ? {
    "If-None-Match": etag
  } : {}
  http.get('/test/etag', { headers }).then((res: any) => {
    etag = res.headers['etag']
    fileContent = res.data.data.fileContent
    localStorage.setItem('fileContent', fileContent)
  }).catch((err: any) => {
    if(err.response.status === 304) {
      fileContent = '' + localStorage.getItem('fileContent')
    }
  })
}
```

服务端代码：
```javascript
router.get('/test/etag', ctx => {
  const fs = require('fs');
  const { getFileHash } = require('./util/index');
  const etag = getFileHash({file}).slice(0, 8);
  const ifNoneMatch = ctx.request.header['if-none-match'];
  const body = {
    code: 0,
    msg: 'ok',
    data: {
      msg: 'Test ETag'
    }
  };
  // 需要控制暴露的ETag响应头，否则浏览器里读不到ETag响应头（参考文章：https://www.cnblogs.com/codesyofo/p/14142197.html）
  ctx.set("Access-Control-Expose-Headers", "ETag");
  ctx.set('ETag', etag);
  if(ifNoneMatch === etag) {
    ctx.status = 304;
  } else {
    ctx.body = body;
  }
});
```
> 服务端需要设置Access-Control-Expose-Headers响应头，把ETag暴露出去，否则浏览器里读不到ETag响应头
> 参考文章：[https://www.cnblogs.com/codesyofo/p/14142197.html](https://www.cnblogs.com/codesyofo/p/14142197.html)


![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1663919498273-3f91d6f8-643e-4d7f-8f34-f492358c1d1e.png#clientId=u6e4af533-a310-4&errorMessage=unknown%20error&from=paste&height=345&id=u5e6e8575&name=image.png&originHeight=345&originWidth=1349&originalType=binary&ratio=1&rotation=0&showTitle=true&size=34154&status=error&style=shadow&taskId=udd0dab5d-a52e-4f43-82e2-f36c1c32d65&title=%E8%AF%B7%E6%B1%82%E7%BB%93%E6%9E%9C&width=1349 "请求结果")

![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1663919669685-bd203791-52c7-4691-9541-0ae083a24472.png#clientId=u6e4af533-a310-4&errorMessage=unknown%20error&from=paste&height=929&id=uf2f8e11f&name=image.png&originHeight=929&originWidth=2695&originalType=binary&ratio=1&rotation=0&showTitle=true&size=138373&status=error&style=shadow&taskId=u7776fc86-d3ef-4cf7-9391-5ca2335e5eb&title=%E8%AF%B7%E6%B1%82%E7%BB%93%E6%9E%9C%E5%AF%B9%E6%AF%94&width=2695 "请求结果对比")

## 缓存组合
### Cache-Control + Expires
同时设置Cache-Control和Expires
实际生效的是Cache-Control。因为Cache-Control的优先级比Expires高。

前端代码：
```typescript
<button @click="onComposeCache1">Cache-Control + Expires</button>

// 组合1：Cache-Control + Expires
const onComposeCache1 = () => {
  http.get('/test/compose-cache/compose-1').then((res: any) => {
    console.log(res)
  })
}
```

服务端代码：
```javascript
// Cache-Control + Expires
router.get('/test/compose-cache/compose-1', ctx => {
  ctx.set('Expires', new Date(new Date().getTime() + 5 * 1000).toGMTString()); // 5秒过期
  ctx.set('Cache-Control', 'max-age=10'); // 10秒过期

  const body = {
    code: 0,
    msg: 'ok',
    data: {
      msg: 'Test compose-cache/compose-1'
    }
  }
  ctx.body = body;
});
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1665304354134-7ecd1541-10d2-4ecf-9763-7c1f8c46c13d.png#clientId=u0c883bb4-ee73-4&errorMessage=unknown%20error&from=paste&height=522&id=ucd99f235&name=image.png&originHeight=522&originWidth=1274&originalType=binary&ratio=1&rotation=0&showTitle=false&size=38345&status=error&style=shadow&taskId=u6d505f4b-8b23-41e7-b459-d8773d138af&title=&width=1274)

### Cache-Control + Expires / Last-Modified + Etag
> **TODO** 这个有问题，待确认

理论上，应该是命中强缓存之后，不再去匹配协商缓存。
但实际操作中遇到些问题：命中强缓存之后，还会去匹配协商缓存，这个需要后端代码进行处理，待定。
(如果有大佬知道解决方案，欢迎进行探讨)

![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1665304438848-340e5834-9817-408b-b582-5a0cd2e140f8.png#clientId=u0c883bb4-ee73-4&errorMessage=unknown%20error&from=paste&height=488&id=u3fa22783&name=image.png&originHeight=488&originWidth=1271&originalType=binary&ratio=1&rotation=0&showTitle=false&size=38616&status=error&style=shadow&taskId=u0ad99824-1cab-4c82-9597-a953166c789&title=&width=1271)

前端代码：
```typescript
<button @click="onComposeCache2">Cache-Control + Expires / Last-Modified + Etag</button>

// 组合2：Cache-Control + Expires / Last-Modified + Etag
const onComposeCache2 = () => {
  const headers = {
    "Cache-Control": "max-age=10"
  } as any
  if(etag) headers["If-None-Match"] = etag;
  if(lastModified) headers["If-Modified-Since"] = lastModified;

  http.get('/test/compose-cache/compose-2', {headers}).then((res: any) => {
    console.log(res)
    etag = res.headers['etag']
    lastModified = res.headers['last-modified']
  })
}
```

服务端代码：
```javascript
router.get('/test/compose-cache/compose-2', ctx => {
  // 强缓存
  ctx.set('Expires', new Date(new Date().getTime() + 5 * 1000).toGMTString()); // 5秒过期
  ctx.set('Cache-Control', 'max-age=10'); // 10秒过期

  // TODO，如果命中强缓存了，那么如何停止走到协商缓存？这个问题如果有大佬知道，欢迎进行探讨
  
  // 协商缓存
  const fs = require('fs');
  const file =  fs.readFileSync(__dirname + '/style.css', 'utf-8');
  const { getFileHash } = require('./util/index');
  const etag = getFileHash({file}).slice(0, 8);
  const ifNoneMatch = ctx.request.header['if-none-match'];
  ctx.set('ETag', etag);

  const fileStat =  fs.statSync(__dirname + '/style.css');
  const lastModified = new Date(fileStat.mtime).toGMTString();
  const ifModifiedSince = ctx.request.header['if-modified-since'];

  ctx.set('Last-Modified', lastModified);

  const body = {
    code: 0,
    msg: 'ok',
    data: {
      msg: 'Test compose-cache/compose-2'
    }
  }

  ctx.set("Access-Control-Expose-Headers", "ETag");

  // 优先校验etag
  if(ifNoneMatch === etag) {
    console.log('走协商缓存');
    ctx.status = 304;
  } else if(lastModified === ifModifiedSince) {
    ctx.status = 304;
  } else {
    ctx.body = body;
  }
});
```

## 禁用缓存
禁用缓存的方式：

- Cache-Control: max-age=0
- Cache-Control: no-cache
- Cache-Control: no-store
- 浏览器开发者工具勾选【停用缓存】选项
### max-age=0
```javascript
ctx.set('Cache-Control', 'max-age=0');
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1663924969087-9695d01b-5f95-465b-b158-79faa6b9c724.png#clientId=u0928e92f-2f2c-4&errorMessage=unknown%20error&from=paste&height=929&id=u2c135d16&name=image.png&originHeight=929&originWidth=1349&originalType=binary&ratio=1&rotation=0&showTitle=false&size=94506&status=error&style=shadow&taskId=u07e3a249-4e5e-4fca-862d-d9cc4d48577&title=&width=1349)
### no-cache
```javascript
ctx.set('Cache-Control', 'no-cache');
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1663925029823-a9d36ace-c296-4f4e-9f09-35314713e680.png#clientId=u0928e92f-2f2c-4&errorMessage=unknown%20error&from=paste&height=929&id=uaf0bebd1&name=image.png&originHeight=929&originWidth=1349&originalType=binary&ratio=1&rotation=0&showTitle=false&size=90133&status=error&style=shadow&taskId=u1e3e6abc-0e34-4224-b1eb-f5a9fb20f81&title=&width=1349)
### no-store
```javascript
ctx.set('Cache-Control', 'no-store');
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1663925053278-401456c2-2ec1-47b6-bc27-58a254b069e6.png#clientId=u0928e92f-2f2c-4&errorMessage=unknown%20error&from=paste&height=929&id=ub62e14ee&name=image.png&originHeight=929&originWidth=1349&originalType=binary&ratio=1&rotation=0&showTitle=false&size=93647&status=error&style=shadow&taskId=ue4f6306e-cb06-4a70-af17-f6bade3129f&title=&width=1349)

### 浏览器开发者工具勾选【停用缓存】选项
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1663645195669-8d3421be-1289-4a5f-839a-441512e57f26.png#clientId=u4257953e-1be4-4&errorMessage=unknown%20error&from=paste&height=928&id=FfhWh&name=image.png&originHeight=928&originWidth=1074&originalType=binary&ratio=1&rotation=0&showTitle=false&size=90767&status=error&style=shadow&taskId=u7d234f14-4cb3-4fd9-a7ad-79714a07836&title=&width=1074)
浏览器开发者工具里勾选上“停用缓存”按钮
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1663645258223-bd7318f0-f2b7-4567-8d01-0d8501f5b645.png#clientId=u4257953e-1be4-4&errorMessage=unknown%20error&from=paste&height=932&id=SuYyI&name=image.png&originHeight=932&originWidth=1075&originalType=binary&ratio=1&rotation=0&showTitle=false&size=89425&status=error&style=shadow&taskId=u494901b3-181b-4418-ab3a-ab68be1b32a&title=&width=1075)
请求里会多出两个请求头
```bash
Cache-Control: no-cache
Pragma: no-cache
```

## 企业案例
### B站
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1663667932101-fe9113d0-6cfb-43e5-930a-6539444dce61.png#clientId=u4257953e-1be4-4&errorMessage=unknown%20error&from=paste&height=929&id=QmYd7&name=image.png&originHeight=929&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=436303&status=error&style=shadow&taskId=uc4471fb9-10c7-451e-93f5-cd6a1615c94&title=&width=1920)

### 码云Gitee
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1663667848294-8b40a2e4-29a3-4389-9798-9628ac2efc3b.png#clientId=u4257953e-1be4-4&errorMessage=unknown%20error&from=paste&height=929&id=NIHIl&name=image.png&originHeight=929&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=245169&status=error&style=shadow&taskId=u923769a3-0196-41f1-a80c-9dcf809d8c6&title=&width=1920)

## 项目代码
github仓库：[GitHub - AlanLee97/http-caching-in-action](https://github.com/AlanLee97/http-caching-in-action)
目录结构
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1665730705157-f6f4bc88-2d80-4c7e-837d-e0791a163d4c.png#clientId=uc89e1bb9-9bb8-4&from=paste&height=490&id=ua9de7b60&name=image.png&originHeight=490&originWidth=832&originalType=binary&ratio=1&rotation=0&showTitle=false&size=27984&status=done&style=shadow&taskId=u6c233fcf-3362-44e1-8606-4d3098102f1&title=&width=832)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1665730744388-2783eea4-78fb-4e6b-8ee9-0134fe470198.png#clientId=uc89e1bb9-9bb8-4&from=paste&height=308&id=u9af1f696&name=image.png&originHeight=308&originWidth=829&originalType=binary&ratio=1&rotation=0&showTitle=false&size=17783&status=done&style=shadow&taskId=uaa94dd71-d5e7-453f-9cc1-35b3e849305&title=&width=829)
### 前端代码
```vue
<script setup lang="ts">

import http from './util/http';


// 强缓存
const onCacheControlMaxAge = () => {
  http.get('/test/cache-control/max-age/86400').then((res: any) => {
    console.log(res)
  })
}

const onExpires = () => {
  http.get('/test/expires').then((res: any) => {
    console.log(res)
  })
}


// 协商缓存
let lastModified = ''
let fileContent = ''
let etag = ''

const onLastModified = () => {
  const headers = lastModified ? {
    "If-Modified-Since": lastModified
  } : {}
  http.get('/test/last-modified', { headers }).then((res: any) => {
    console.log(res)
    lastModified = res.headers['last-modified']
    fileContent = res.data.data.fileContent
    localStorage.setItem('fileContent', fileContent)
  }).catch((err: any) => {
    console.log('err', err)
    if(err.response.status === 304) {
      fileContent = '' + localStorage.getItem('fileContent')
    }
  })
}

const onEtag = () => {
  // 前端需要显示的在请求中带上If-None-Match
  const headers = etag ? {
    "If-None-Match": etag
  } : {}
  http.get('/test/etag', { headers }).then((res: any) => {
    console.log(res)
    etag = res.headers['etag']
    fileContent = res.data.data.fileContent
    localStorage.setItem('fileContent', fileContent)
  }).catch((err: any) => {
    console.log('err', err)
    if(err.response.status === 304) {
      fileContent = '' + localStorage.getItem('fileContent')
    }
  })
}


// 禁用缓存
const onDisableCacheControlNoCache = () => {
  http.get('/test/disable/cache-control/no-cache', {
    headers: {
      'Cache-Control': "no-cache"
    }
  }).then((res: any) => {
    console.log(res)
  })
}

const onDisableCacheControlNoStore = () => {
  http.get('/test/disable/cache-control/no-store', {
    headers: {
      'Cache-Control': 'no-store'
    }
  }).then((res: any) => {
    console.log(res)
  })
}

const onDisableCacheControlMaxAgeZero = () => {
  http.get('/test/cache-control/max-age/0').then((res: any) => {
    console.log(res)
  })
}


// 缓存组合
// 组合1：Cache-Control + Expires
const onComposeCache1 = () => {
  http.get('/test/compose-cache/compose-1').then((res: any) => {
    console.log(res)
  })
}

// 组合2：Cache-Control + Expires / Last-Modified + Etag
const onComposeCache2 = () => {
  const headers = {
    "Cache-Control": "max-age=60"
  } as any
  if(etag) headers["If-None-Match"] = etag;
  if(lastModified) headers["If-Modified-Since"] = lastModified;

  http.get('/test/compose-cache/compose-2', {headers}).then((res: any) => {
    console.log(res)
    etag = res.headers['etag']
    lastModified = res.headers['last-modified']
  })
}

</script>

<template>
  <div>
    <div class="btn-area">
      <h2>缓存类型</h2>
      <h4>强缓存</h4>
      <button @click="onCacheControlMaxAge">Cache-Control: max-age</button>
      <button @click="onExpires">Expires</button>
      <h4>协商缓存</h4>
      <button @click="onLastModified">If-Modified-Since / Last-Modified</button>
      <button @click="onEtag">If-None-Match / Etag</button>

      <h2>缓存组合</h2>
      <button @click="onComposeCache1">Cache-Control + Expires</button>
      <button @click="onComposeCache2">Cache-Control + Expires / Last-Modified + Etag</button>

      <h2>禁用缓存</h2>
      <button @click="onDisableCacheControlMaxAgeZero">Disable Cache-Control: max-age=0</button>
      <button @click="onDisableCacheControlNoCache">Disable Cache-Control: no-cache</button>
      <button @click="onDisableCacheControlNoStore">Disable Cache-Control: no-store</button>

    </div>
  </div>
</template>

<style scoped>
.btn-area {
  display: flex;
  flex-direction: column;
}
.btn-area button {
  margin: 20px 0;
}

h2 {
  margin-top: 100px;
}
</style>

```
### 服务端代码
```javascript
const Koa = require('koa');
const app = new Koa();

const cors = require('@koa/cors');
app.use(cors());

const Router = require('@koa/router');
const router = new Router();

app.use(router.routes()).use(router.allowedMethods());


// 强缓存
router.get('/test/cache-control/max-age/:age', ctx => {
  const { age } = ctx.params;
  ctx.set('Cache-Control', 'max-age=' + (age ? age : 86400)); // 1天
  ctx.body = {
    code: 0,
    msg: 'ok',
    data: {
      ctx,
      msg: 'Test Cache-Control'
    }
  }
});

router.get('/test/expires', ctx => {
  // new Date(new Date().getTime() + 5 * 1000) 表示5秒之后过期
  ctx.set('Expires', new Date(new Date().getTime() + 5 * 1000).toGMTString());
  ctx.body = {
    code: 0,
    msg: 'ok',
    data: {
      msg: 'Test Expires',
      expires: new Date(new Date().getTime() + 5 * 1000).toGMTString()
    }
  }
});


// 协商缓存
router.get('/test/last-modified', ctx => {
  const fs = require('fs')
  const file =  fs.readFileSync(__dirname + '/style.css', 'utf-8');
  const fileStat =  fs.statSync(__dirname + '/style.css');
  const lastModified = new Date(fileStat.mtime).toGMTString();
  const ifModifiedSince = ctx.request.header['if-modified-since'];
  ctx.set('Last-Modified', lastModified);
  if(ifModifiedSince && (new Date(ifModifiedSince) >= new Date(lastModified))) {
    ctx.status = 304
  } else {
    ctx.body = {
      code: 0,
      msg: 'ok',
      data: {
        msg: 'Test Last-Modified',
        fileContent: file,
        lastModified: lastModified,
        ifModifiedSince
      }
    }
  }
});

router.get('/test/etag', ctx => {
  const fs = require('fs');
  const file =  fs.readFileSync(__dirname + '/style.css', 'utf-8');
  const { getFileHash } = require('./util/index');
  const etag = getFileHash({file}).slice(0, 8);
  const ifNoneMatch = ctx.request.header['if-none-match'];
  const body = {
    code: 0,
    msg: 'ok',
    data: {
      msg: 'Test ETag',
      fileContent: file,
      etag,
      ifNoneMatch
    }
  };
  // 需要控制暴露的ETag响应头，否则浏览器里读不到ETag响应头（参考文章：https://www.cnblogs.com/codesyofo/p/14142197.html）
  ctx.set("Access-Control-Expose-Headers", "ETag");
  ctx.set('ETag', etag);
  if(ifNoneMatch === etag) {
    ctx.status = 304;
  } else {
    ctx.body = body;
  }
});


// 缓存组合
// Cache-Control + Expires
router.get('/test/compose-cache/compose-1', ctx => {
  ctx.set('Expires', new Date(new Date().getTime() + 5 * 1000).toGMTString()); // 5秒过期
  ctx.set('Cache-Control', 'max-age=10'); // 10秒过期

  const body = {
    code: 0,
    msg: 'ok',
    data: {
      msg: 'Test compose-cache/compose-1'
    }
  }
  ctx.body = body;
});

// Cache-Control + Expires + ETag + Last-Modified
router.get('/test/compose-cache/compose-2', ctx => {
  // 强缓存
  ctx.set('Expires', new Date(new Date().getTime() + 5 * 1000).toGMTString()); // 5秒过期
  ctx.set('Cache-Control', 'max-age=10'); // 10秒过期

  // 协商缓存
  const fs = require('fs');
  const file =  fs.readFileSync(__dirname + '/style.css', 'utf-8');
  const { getFileHash } = require('./util/index');
  const etag = getFileHash({file}).slice(0, 8);
  const ifNoneMatch = ctx.request.header['if-none-match'];
  ctx.set('ETag', etag);

  const fileStat =  fs.statSync(__dirname + '/style.css');
  const lastModified = new Date(fileStat.mtime).toGMTString();
  const ifModifiedSince = ctx.request.header['if-modified-since'];

  ctx.set('Last-Modified', lastModified);

  const body = {
    code: 0,
    msg: 'ok',
    data: {
      msg: 'Test compose-cache/compose-2'
    }
  }

  ctx.set("Access-Control-Expose-Headers", "ETag");

  // 优先校验etag
  if(ifNoneMatch === etag) {
    console.log('走协商缓存');
    ctx.status = 304;
  } else if(lastModified === ifModifiedSince) {
    ctx.status = 304;
  } else {
    ctx.body = body;
  }
});


// 禁用缓存
router.get('/test/disable/cache-control/no-cache', ctx => {
  ctx.set('Cache-Control', 'no-cache');
  ctx.body = {
    code: 0,
    msg: 'ok',
    data: {
      msg: 'Test Cache-Control: no-cache'
    }
  }
});

router.get('/test/disable/cache-control/no-store', ctx => {
  ctx.set('Cache-Control', 'no-store');
  ctx.body = {
    code: 0,
    msg: 'ok',
    data: {
      msg: 'Test Cache-Control: no-store'
    }
  }
});

router.get('/test/disable/cache-control/max-age/:age', ctx => {
  console.log('params', ctx.params)
  const { age } = ctx.params;
  ctx.set('Cache-Control', 'max-age=' + (age ? age : 86400));
  ctx.body = {
    code: 0,
    msg: 'ok',
    data: {
      ctx,
      msg: 'Test Cache-Control'
    }
  }
});

app.listen(3000, () => {
  console.log('server start successfully');
});

```
# 参考文章

1. [HTTP 缓存 - HTTP | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching)
2. [关于HTTP缓存验证Last-Modified和Etag的使用_Johnny丶me的博客-CSDN博客_etag last-modified](https://blog.csdn.net/Tyro_java/article/details/122952039?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-122952039-blog-8840256.pc_relevant_aa&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-122952039-blog-8840256.pc_relevant_aa&utm_relevant_index=1)
3. [Etag & If-None-Match 专题 - 沧海一滴 - 博客园](https://www.cnblogs.com/softidea/p/5986339.html)
4. [node强缓存和协商缓存怎么实现 - 开发技术 - 亿速云](https://www.yisu.com/zixun/722905.html)
5. [如何使用node解读http缓存的内容 - web开发 - 亿速云](https://www.yisu.com/zixun/120421.html)
6. [axios无法获取响应头headers的Content-Disposition字段 - codesyofo - 博客园](https://www.cnblogs.com/codesyofo/p/14142197.html)
7. [HTTP 的缓存为什么这么设计？ - 掘金](https://juejin.cn/post/7100747501338099749)
8. [【Web 缓存机制系列】2 – Web 浏览器的缓存机制 | AlloyTeam](http://www.alloyteam.com/2012/03/web-cache-2-browser-cache/)
