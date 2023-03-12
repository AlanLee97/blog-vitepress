# Linux下安装Tengine

### 1. 将安装包上传至服务器

### 2. 解压安装包

```sh
tar -zxvf tengine-2.1.0.tar.gz
```

切换到目录

```sh
cd tengine-2.1.0
```

### 3. 安装依赖软件

#### 3.1 安装gcc

```sh
yum install gcc
```

#### 3.2 预编译tengine

```sh
./configure --prefix=/usr/tengine-2.1.0
```

报错，需安装pcre

#### 3.3 安装pcre

```sh
yum install pcre pcre-devel
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408161357-390850.png#alt=image-20200408161356831)

#### 3.4 重新预编译

```sh
./configure --prefix=/usr/tengine-2.1.0
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408161512-657368.png#alt=image-20200408161512089)

报错，需安装OpenSSL

#### 3.5 安装OpenSSL

```sh
yum install openssl-devel
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408161703-599793.png#alt=image-20200408161703017)

#### 3.6 重新预编译

```sh
./configure --prefix=/usr/tengine-2.1.0
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408161816-850521.png#alt=image-20200408161816294)

出现上图情况说明安装成功。

### 4. 编译

```
make
```

### 5. 编译安装

```sh
make install
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408162148-752025.png#alt=image-20200408162146763)

### 6. 进入tengine的安装目录

```sh
cd /usr/tengine-2.1.0/
```

### 7. 启动nginx

```sh
./sbin/nginx
```

### 8. 关闭防火墙

查看防火墙状态

```sh
systemctl status firewalld.service
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408162635-962131.png#alt=image-20200408162634944)

如果是active(running)状态，表示开启状态，需关闭

关闭防火墙

```
systemctl stop firewalld.service
```

再次查看防火墙状态

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408162810-444741.png#alt=image-20200408162810389)

上图表示已关闭防火墙

### 9. 浏览器访问服务器的Tengine

浏览器输入服务器地址即可

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408163100-332967.png#alt=image-20200408163100400)
