# 安装Elastic Search

## Windows下安装

[官网](https://www.elastic.co/downloads/elasticsearch)最新版本 Elasticsearch （7.6.1）

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315110946-410556.png#alt=img)

> 顺带一提：在下载之前你应该确保你的 Java 版本保持在 1.8 及以上（就 1.8 吧..），这是 Elasticsearch 的硬性要求，可以自行打开命令行输入 `java -version` 来查看 Java 的版本


下载完成后，可以看到是一个压缩包，我们直接解压在 D 盘上，然后打开 `bin` 目录下的 elasticsearch.bat 文件

浏览器访问

`http://localhost:9200/`

返回如下json数据表示成功

## 安装Kibana

这是一个官方推出的把 Elasticsearch 数据可视化的工具，官网在这里：[【传送门】](https://www.elastic.co/cn/products/kibana)，不过我们现在暂时还用不到那些数据分析的东西，不过里面有一个 Dev Tools 的工具可以方便的和 Elasticsearch 服务进行交互，去官网下载了最新版本的 Kibana（7.6.1）

下载后解压，执行bin目录的kibana.bat

运行

出现超时错误

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315111842-200901.png#alt=image-20200315111837446)

解决

修改kibana\config目录下的kibana.yml文件

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315112845-376308.png#alt=image-20200315112844231)

改成如下图

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315112912-103026.png#alt=image-20200315112912595)

重新运行

出现如下图表示成功

浏览器访问`http://localhost:5601/app/kibana#/home`

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315113032-241900.png#alt=image-20200315113028103)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315113227-779083.png#alt=image-20200315113151512)

找到左边侧栏的扳手图标，点击进入dev tools

点击 【Get to work】，然后在控制台输入 `GET /_cat/health?v` 查看服务器状态，可以在右侧返回的结果中看到 `green` 即表示服务器状态目前是健康的：
