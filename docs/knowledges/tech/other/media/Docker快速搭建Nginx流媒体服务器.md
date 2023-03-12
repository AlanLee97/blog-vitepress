# Docker快速搭建Nginx流媒体服务器

# 准备软件

**Linux**

- Docker
- nginx-rtmp

**Windows**

- OBS
- PotPlayer

docker的nginx-rtmp是封装了nginx-rtmp-module和ffmpeg的镜像

[https://hub.docker.com/r/alfg/nginx-rtmp](https://hub.docker.com/r/alfg/nginx-rtmp)

# 搭建流媒体服务器

---

### 编写docker-compose.yml

```yaml
version: '3.1'
services:
  nginx-rtmp-test:
    restart: always
    image: alfg/nginx-rtmp
    container_name: nginx-rtmp-test
    ports:
      - 1935:1935
      - 8080:80
    volumes:
      - ./conf/nginx.conf:/etc/nginx/nginx.conf
      - ./html:/usr/share/nginx/html
      - ./log:/var/log/nginx
```

### 编写nginx.conf

```nginx
# user 指定运行 nginx 的用户和组（第一个参数为用户第二个为组，这里只有用户）
user  root;
# 指定工作进程数（一般设置为CPU核数）
worker_processes  1;

# nginx 连接配置模块
events {
    # 指定每个工作进程最大连接数为 1024
    worker_connections  1024;
}

#RTMP 服务（重点）
rtmp {   
    server{
        #指定服务端口
        listen 1935;     # //RTMP协议使用的默认端口  
        chunk_size 4000; # //RTMP分块大小

        #指定 HLS 流应用
        application hls { # hls为流应用的名称，可以随便填
            live on;     # //打开直播流        
            hls on;      # //打开 HLS        
            hls_path /tmp/hls;    
        }
    }
}  

# http 配置模块
http {
    # 通过 include 加载 mime.types 文件，里面的 types {} 模块将文件扩展名映射到响应的 MIME 类型
    include       mime.types;
    # 定义响应的默认 MIME 类型
    default_type  application/octet-stream;

    # 启用或者禁用 sendfile()
    sendfile        on;

    # 65 s 超时
    keepalive_timeout  65;

    # etag
    etag on;
    # 过期时间
    expires 7d;

    # 虚拟主机配置模块
    server {
        # 监听 8080 端口
        listen       8080;
        # 监听域名为 localhost
        server_name  localhost;
        
        location /hls { 
            # Serve HLS fragments 
            types { 
                application/vnd.apple.mpegurl m3u8; 
                video/mp2t ts; 
            } 
            root /tmp; 
            add_header Cache-Control no-cache; 
        }
    }
}
```

### 启动Nginx流媒体服务器

```shell
docker-compose up -d
```

### 检查启动状态

```shell
netstat -ntpl | grep 1935
```

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1632038328747-b4329a5a-c6a1-4da5-a61e-8dd82b31cf4f.png#alt=img)

# 使用OBS推流（RTMP流）

---

### 打开设置

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1632038456312-215e9818-c21d-4fd8-beda-95dfca08b1e9.png#alt=img)

### 在设置中添加推流地址

服务：选择自定义

服务器：rtmp://自己服务器ip:1935/stream

串流密钥：随便填，相当于房间号

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1632038632080-0d25f9ee-3459-472e-90c9-8198b4d4cae5.png#alt=img)

### 添加媒体源

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1632038854141-6cc31c43-ad35-4828-954b-153705c0d42f.png#alt=img)

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1632038916295-ec4e8d0b-ac67-4f0f-a179-ff8c77170ffc.png#alt=img)

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1632038967356-3d733ae2-c368-4a05-a76c-0f579eb4bed2.png#alt=img)

### 开始推流

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1632039072972-efe54a26-a40a-4a23-a36c-2bcfc979bc54.png#alt=img)

# 使用播放器拉流（RTMP流）

---

这里使用potplayer播放器拉流播放视频

### 设置拉流地址

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1632039282727-375c855b-c657-41f1-b21f-04321eed53c6.png#alt=img)

拉流地址的格式为：[http://localhost:8080/live/$STREAM_NAME.m3u8](http://localhost:8080/live/$STREAM_NAME.m3u8)

所以我们这里的拉流地址为：[http://47.xxx.xxx.62:8080/live/alanlee.m3u8](http://47.xxx.xxx.62:8080/live/alanlee.m3u8)

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1632043364901-8c77ce74-615b-4653-9823-aff41b4bb183.png#alt=img)

**也可以使用rtmp协议地址播放视频**

拉流地址的格式为：[http://localhost:1935/$STREAM_NAME](http://localhost:1935/$STREAM_NAME)

所以我们这里的拉流地址为：[http://47.xxx.xxx.62:1935/alanlee](http://47.xxx.xxx.62:1935/alanlee)

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1632039373111-76f9abac-0c32-4d49-9f7c-1b05431e58d9.png#alt=img)

### 播放视频

设置好拉流地址后，过几秒就可以播放视频了。

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1632039420085-28bbe864-dbdc-4ea1-a5a6-d2419de5c452.png#alt=img)

也可以通过这个网页播放视频

[http://www.ossrs.net/players/srs_player.html](http://www.ossrs.net/players/srs_player.html)

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1632043753448-2f752c3e-042a-4382-969e-fddee99f76e0.png#alt=img)

到这里已经完成搭建直播流媒体服务器的推流拉流过程了。下面是推hls流是可选方案。

# 使用OBS推流（HLS流）

---

以上是使用rtmp推流的，在nginx配置中，我们也配置了hls的推流应用。推流方式与RTMP方式基本一致，只是推流地址有点小变化。

### 在设置中添加推流地址

服务：选择自定义

服务器：rtmp://自己服务器ip:1935/hls

串流密钥：随便填，相当于房间号

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1632040033806-232d5dec-cd28-4b3d-85d2-ffc0628ae779.png#alt=img)

设置好之后就开始推流

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1632039072972-efe54a26-a40a-4a23-a36c-2bcfc979bc54.png#alt=img)

# 使用播放器拉流（HLS流）

---

### 设置拉流地址

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1632040318979-9d4a7c84-c6b7-4dbd-a7d2-1c6f9f5ead7d.png#alt=img)

### 播放视频

设置好拉流地址后，过几秒就可以播放视频了。

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1632039420085-28bbe864-dbdc-4ea1-a5a6-d2419de5c452.png#alt=img)
