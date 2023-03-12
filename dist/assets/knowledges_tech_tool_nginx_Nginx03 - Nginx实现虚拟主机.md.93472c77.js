import{_ as s,o as n,c as a,b as l}from"./app.d2d47940.js";const d=JSON.parse('{"title":"Nginx实现虚拟主机","description":"","frontmatter":{},"headers":[{"level":2,"title":"基于ip的虚拟主机","slug":"基于ip的虚拟主机","link":"#基于ip的虚拟主机","children":[{"level":3,"title":"编辑配置文件","slug":"编辑配置文件","link":"#编辑配置文件","children":[]},{"level":3,"title":"创建网站目录及文件","slug":"创建网站目录及文件","link":"#创建网站目录及文件","children":[]}]},{"level":2,"title":"基于域名的虚拟主机","slug":"基于域名的虚拟主机","link":"#基于域名的虚拟主机","children":[{"level":3,"title":"编辑配置文件","slug":"编辑配置文件-1","link":"#编辑配置文件-1","children":[]},{"level":3,"title":"重新加载配置","slug":"重新加载配置","link":"#重新加载配置","children":[]},{"level":3,"title":"配置hosts","slug":"配置hosts","link":"#配置hosts","children":[]},{"level":3,"title":"访问测试","slug":"访问测试","link":"#访问测试","children":[]}]},{"level":2,"title":"基于端口的虚拟主机","slug":"基于端口的虚拟主机","link":"#基于端口的虚拟主机","children":[{"level":3,"title":"编辑配置文件","slug":"编辑配置文件-2","link":"#编辑配置文件-2","children":[]},{"level":3,"title":"重新加载配置","slug":"重新加载配置-1","link":"#重新加载配置-1","children":[]},{"level":3,"title":"访问测试","slug":"访问测试-1","link":"#访问测试-1","children":[]}]}],"relativePath":"knowledges/tech/tool/nginx/Nginx03 - Nginx实现虚拟主机.md","lastUpdated":1678618356000}'),p={name:"knowledges/tech/tool/nginx/Nginx03 - Nginx实现虚拟主机.md"},e=l(`<h1 id="nginx实现虚拟主机" tabindex="-1">Nginx实现虚拟主机 <a class="header-anchor" href="#nginx实现虚拟主机" aria-hidden="true">#</a></h1><p>通过nginx可以实现虚拟主机的配置，nginx支持三种类型的虚拟主机配置</p><ul><li></li></ul><p>基于ip的虚拟主机， （一块主机绑定多个ip地址）</p><ul><li></li></ul><p>基于域名的虚拟主机（servername）</p><ul><li></li></ul><p>基于端口的虚拟主机（listen如果不写ip端口模式）</p><h2 id="基于ip的虚拟主机" tabindex="-1">基于ip的虚拟主机 <a class="header-anchor" href="#基于ip的虚拟主机" aria-hidden="true">#</a></h2><h3 id="编辑配置文件" tabindex="-1">编辑配置文件 <a class="header-anchor" href="#编辑配置文件" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">user  root;</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes  1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">events {</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections  1024;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    include       mime.types;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#A6ACCD;">    sendfile        on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       80;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">            index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        location = /50x.html {</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	# 基于ip的虚拟主机 - ip1</span></span>
<span class="line"><span style="color:#A6ACCD;">	server {</span></span>
<span class="line"><span style="color:#A6ACCD;">		listen 182.61.200.6:80;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server_name www.vhost-ip1.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">		    root html;</span></span>
<span class="line"><span style="color:#A6ACCD;">			index vhost-ip1/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	# 基于ip的虚拟主机 - ip2</span></span>
<span class="line"><span style="color:#A6ACCD;">	server {</span></span>
<span class="line"><span style="color:#A6ACCD;">		listen 192.168.1.9:80;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server_name www.vhost-ip2.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">		    root html;</span></span>
<span class="line"><span style="color:#A6ACCD;">			index vhost-ip2/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="创建网站目录及文件" tabindex="-1">创建网站目录及文件 <a class="header-anchor" href="#创建网站目录及文件" aria-hidden="true">#</a></h3><p>在nginx的目录下创建2个网站目录</p><p>创建目录</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vhost-ip1</span></span>
<span class="line"></span></code></pre></div><p>编写一个html文件</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span></span>
<span class="line"></span></code></pre></div><p>内容如下</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">测试搭建虚拟主机  ip1</span></span>
<span class="line"></span></code></pre></div><p>复制该文件夹</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vhost-ip1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vhost-ip2</span></span>
<span class="line"></span></code></pre></div><p>将vhost-ip2目录下的index.html的内容改为下面的内容</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">测试搭建虚拟主机  ip2</span></span>
<span class="line"></span></code></pre></div><h2 id="基于域名的虚拟主机" tabindex="-1">基于域名的虚拟主机 <a class="header-anchor" href="#基于域名的虚拟主机" aria-hidden="true">#</a></h2><h3 id="编辑配置文件-1" tabindex="-1">编辑配置文件 <a class="header-anchor" href="#编辑配置文件-1" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">user  root;</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes  1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">events {</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections  1024;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    include       mime.types;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#A6ACCD;">    sendfile        on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       80;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">            index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        location = /50x.html {</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	# 基于域名的虚拟主机 - ip1</span></span>
<span class="line"><span style="color:#A6ACCD;">	server {</span></span>
<span class="line"><span style="color:#A6ACCD;">		listen 80;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server_name v1.vhost.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">		    root html;</span></span>
<span class="line"><span style="color:#A6ACCD;">			index vhost-ip1/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	# 基于域名的虚拟主机 - ip2</span></span>
<span class="line"><span style="color:#A6ACCD;">	server {</span></span>
<span class="line"><span style="color:#A6ACCD;">		listen 80;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server_name v2.vhost.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">		    root html;</span></span>
<span class="line"><span style="color:#A6ACCD;">			index vhost-ip2/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="重新加载配置" tabindex="-1">重新加载配置 <a class="header-anchor" href="#重新加载配置" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sbin/nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reload</span></span>
<span class="line"></span></code></pre></div><h3 id="配置hosts" tabindex="-1">配置hosts <a class="header-anchor" href="#配置hosts" aria-hidden="true">#</a></h3><p>配置hosts</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">vim /etc/hosts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>添加内容</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1 v1.vhost.com</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 v2.vhost.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200424133724032.png#alt=image-20200424133724032" alt=""></p><h3 id="访问测试" tabindex="-1">访问测试 <a class="header-anchor" href="#访问测试" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v1.vhost.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v2.vhost.com</span></span>
<span class="line"></span></code></pre></div><h2 id="基于端口的虚拟主机" tabindex="-1">基于端口的虚拟主机 <a class="header-anchor" href="#基于端口的虚拟主机" aria-hidden="true">#</a></h2><h3 id="编辑配置文件-2" tabindex="-1">编辑配置文件 <a class="header-anchor" href="#编辑配置文件-2" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">user  root;</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes  1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">events {</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections  1024;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    include       mime.types;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#A6ACCD;">    sendfile        on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       80;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">            index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        location = /50x.html {</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	# 基于端口的虚拟主机 - port1</span></span>
<span class="line"><span style="color:#A6ACCD;">	server {</span></span>
<span class="line"><span style="color:#A6ACCD;">		listen 81;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server_name localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">		    root html;</span></span>
<span class="line"><span style="color:#A6ACCD;">			index vhost-ip1/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	# 基于端口的虚拟主机 - port2</span></span>
<span class="line"><span style="color:#A6ACCD;">	server {</span></span>
<span class="line"><span style="color:#A6ACCD;">		listen 82;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server_name localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">		    root html;</span></span>
<span class="line"><span style="color:#A6ACCD;">			index vhost-ip2/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="重新加载配置-1" tabindex="-1">重新加载配置 <a class="header-anchor" href="#重新加载配置-1" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">sbin/nginx -s reload</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="访问测试-1" tabindex="-1">访问测试 <a class="header-anchor" href="#访问测试-1" aria-hidden="true">#</a></h3><h4 id="访问81端口" tabindex="-1">访问81端口 <a class="header-anchor" href="#访问81端口" aria-hidden="true">#</a></h4><p>浏览器访问<a href="http://192.168.1.7:81" target="_blank" rel="noreferrer">http://192.168.1.7:81</a></p><p><img src="https://gitee.com/AlanLee97/public-asset/raw/master/note_images/20200424135035-175355.png#alt=image-20200424135033003" alt=""></p><h4 id="访问82端口" tabindex="-1">访问82端口 <a class="header-anchor" href="#访问82端口" aria-hidden="true">#</a></h4><p>浏览器访问<a href="http://192.168.1.7:82" target="_blank" rel="noreferrer">http://192.168.1.7:82</a></p><p><img src="https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200424134908205.png#alt=image-20200424134908205" alt=""></p>`,48),t=[e];function o(c,i,r,C,A,h){return n(),a("div",null,t)}const D=s(p,[["render",o]]);export{d as __pageData,D as default};
