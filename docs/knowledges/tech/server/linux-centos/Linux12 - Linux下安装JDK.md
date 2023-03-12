# Linux下安装JDK（rpm方式安装）

### 1. 上传JDK压缩包到服务器

创建文件夹opt/package

```sh
mkdir /opt/package
```

切换到文件夹opt/package

```sh
cd /opt/package
```

用ftp工具将文件上传至服务器的/opt/package目录下

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408153342-377241.png#alt=image-20200408153223542)

### 2. 安装JDK

执行命令

```sh
rpm -ivh jdk-7u79-linux-x64.rpm
```

### 3. 配置环境变量

编辑/etc/profile文件

```sh
vim /etc/profile
```

添加以下代码

```sh
export JAVA_HOME=/usr/java/jdk1.7.0_79
export CLASSPATH=$:CLASSPATH:$JAVA_HOME/lib/
export PATH=$PATH:$JAVA_HOME/bin
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408154802-968410.png#alt=image-20200408154759206)

更新配置文件

```sh
source /etc/peofile
```

### 4. 验证是否安装成功

查看JDK版本

```sh
java -version
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408154945-653797.png#alt=image-20200408154945590)
