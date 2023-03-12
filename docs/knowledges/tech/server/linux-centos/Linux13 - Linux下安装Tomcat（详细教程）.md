# Linux下安装tomcat（详细教程）

### 1. 将tomcat.tar.gz文件上传到服务器

### 2. 切换到tomcat压缩包的目录

```
cd 你放tomcat的目录
```

> 示例

> 我的tomcat放在/opt/package目录下

> cd /opt/package


### 3. 查看是否有tomcat压缩包

```
ls
```

### 4. 解压tomcat

```
tar -zxvf apache-tomcat-7.0.61.tar.gz
```

### 5. 启动tomcat

进入tomcat的bin目录下

```
cd apache-tomcat-7.0.61/bin
```

启动tomcat

```
sh startup.sh
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200403154239-482110.png#alt=image-20200403154238915)

### 6. 查看防火墙状态

命令

```
systemctl status firewalld.service
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200403151925-577176.png#alt=image-20200403151456181)

绿色的active(running)表示正在防火墙正在运行，需要关闭防火墙

### 7. 关闭防火墙

```
systemctl stop firewalld.service
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200403151532-768536.png#alt=image-20200403151532102)

### 8. 浏览器访问tomcat

浏览器输入http://192.168.1.5:8080/

> 把192.168.1.5换成你自己的ip

