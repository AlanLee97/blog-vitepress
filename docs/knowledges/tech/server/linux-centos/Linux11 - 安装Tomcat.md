---


date: 2020-01-24

categories:

- 服务器

tags:
- linux

---

# Linux 安装 Tomcat

## 概述

此处以 Tomcat 8.5.23 为例

## 下载地址

[https://tomcat.apache.org/](https://tomcat.apache.org/)

## 解压缩并移动到指定目录

### 解压缩

```
tar -zxvf apache-tomcat-8.5.23.tar.gz
```

1

### 变更目录名

```
mv apache-tomcat-8.5.23 tomcat
```

### 移动目录

```
mv tomcat/ /usr/local/
```

## 常用命令

### 启动

```
/usr/local/tomcat/bin/startup.sh
```

### 停止

```
/usr/local/tomcat/bin/shutdown.sh
```

### 目录内执行脚本

```

./startup.sh
```
