import{_ as s,o as n,c as a,b as l}from"./app.d2d47940.js";const d=JSON.parse('{"title":"docker-compose安装nginx","description":"","frontmatter":{},"headers":[],"relativePath":"knowledges/tech/tool/docker/docker-compose安装nginx.md","lastUpdated":1678618356000}'),p={name:"knowledges/tech/tool/docker/docker-compose安装nginx.md"},e=l(`<h1 id="docker-compose安装nginx" tabindex="-1">docker-compose安装nginx <a class="header-anchor" href="#docker-compose安装nginx" aria-hidden="true">#</a></h1><p>docker-compose.yml</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3.1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">nginx</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TZ=Asia/Shanghai</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">80:80</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">443:443</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./nginx.conf:/etc/nginx/nginx.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./log:/var/log/nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./html:/html</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/letsencrypt:/etc/letsencrypt</span></span>
<span class="line"></span></code></pre></div><p>nginx.conf</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">user  nginx;</span></span>
<span class="line"><span style="color:#A6ACCD;">#nginx 进程数，建议按照cpu 数目来指定，一般为它的倍数。</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes  2;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">error_log  /var/log/nginx/error.log warn;</span></span>
<span class="line"><span style="color:#A6ACCD;">pid        /var/run/nginx.pid;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">events {</span></span>
<span class="line"><span style="color:#A6ACCD;">	#单个后台worker process进程的最大并发链接数  </span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections  1024;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">	#设定mime类型,类型由mime.type文件定义</span></span>
<span class="line"><span style="color:#A6ACCD;">    include       /etc/nginx/mime.types;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #设定日志格式</span></span>
<span class="line"><span style="color:#A6ACCD;">    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    access_log  /var/log/nginx/access.log  main;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #开启gzip压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip  on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_disable &quot;MSIE [1-6].&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #设定请求缓冲</span></span>
<span class="line"><span style="color:#A6ACCD;">    client_header_buffer_size    128k;</span></span>
<span class="line"><span style="color:#A6ACCD;">    large_client_header_buffers  4 128k;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	#sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，</span></span>
<span class="line"><span style="color:#A6ACCD;">	#对于普通应用，必须设为 on,</span></span>
<span class="line"><span style="color:#A6ACCD;">    #如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，</span></span>
<span class="line"><span style="color:#A6ACCD;">    #以平衡磁盘与网络I/O处理速度，降低系统的uptime.</span></span>
<span class="line"><span style="color:#A6ACCD;">    sendfile on;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	#用于设置客户端连接保持活动的超时时间，在超过这个时间之后服务器会关闭该链接。</span></span>
<span class="line"><span style="color:#A6ACCD;">    #keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout  120; </span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	#允许客户端请求的最大单文件字节数</span></span>
<span class="line"><span style="color:#A6ACCD;">	client_max_body_size 50m;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	#服务器名字的hash表大小</span></span>
<span class="line"><span style="color:#A6ACCD;">	server_names_hash_bucket_size 128;</span></span>
<span class="line"><span style="color:#A6ACCD;">	#header中自定义变量时支持下划线</span></span>
<span class="line"><span style="color:#A6ACCD;">	underscores_in_headers on; </span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	#down 表示当前的server暂时不参与负载</span></span>
<span class="line"><span style="color:#A6ACCD;">	#weight 加权轮询权重,默认为1。weight越大，负载的权重就越大。</span></span>
<span class="line"><span style="color:#A6ACCD;">	#backup 备用服务器, 当其他所有的非backup机器出现故障或者忙的时候，才会请求backup机器，因此这台机器的压力最轻。</span></span>
<span class="line"><span style="color:#A6ACCD;">	#max_fails 允许请求失败的次数默认为1。当超过最大次数时，返回proxy_next_upstream 模块定义的错误</span></span>
<span class="line"><span style="color:#A6ACCD;">	#fail_timeout max_fails次失败后，暂停的时间。</span></span>
<span class="line"><span style="color:#A6ACCD;">	#apiServer不能用下划线,否则访问不到</span></span>
<span class="line"><span style="color:#A6ACCD;">	#upstream apiServer {</span></span>
<span class="line"><span style="color:#A6ACCD;">    #  server 172.17.0.1:18081 weight=10;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #  server 172.17.0.1:28081 weight=10;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	server{</span></span>
<span class="line"><span style="color:#A6ACCD;">		listen 81;</span></span>
<span class="line"><span style="color:#A6ACCD;">		# server_name www.xxxx.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">		location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">			root /html/uuid-react-frontend;</span></span>
<span class="line"><span style="color:#A6ACCD;">			index index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">检查配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">docker exec -it nginx service nginx check-reload</span></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">重新加载配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">docker exec -it nginx service nginx reload</span></span>
<span class="line"></span></code></pre></div>`,6),o=[e];function c(t,r,C,i,A,y){return n(),a("div",null,o)}const _=s(p,[["render",c]]);export{d as __pageData,_ as default};
