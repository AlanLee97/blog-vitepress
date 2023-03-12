import{_ as s,o as n,c as a,b as l}from"./app.d2d47940.js";const y=JSON.parse('{"title":"Nginx实现反向代理","description":"","frontmatter":{},"headers":[{"level":2,"title":"编辑配置文件","slug":"编辑配置文件","link":"#编辑配置文件","children":[{"level":3,"title":"重新加载配置","slug":"重新加载配置","link":"#重新加载配置","children":[]}]},{"level":2,"title":"访问测试","slug":"访问测试","link":"#访问测试","children":[]}],"relativePath":"knowledges/tech/tool/nginx/Nginx05 - Nginx实现反向代理（2）.md","lastUpdated":1678618356000}'),e={name:"knowledges/tech/tool/nginx/Nginx05 - Nginx实现反向代理（2）.md"},p=l(`<h1 id="nginx实现反向代理" tabindex="-1">Nginx实现反向代理 <a class="header-anchor" href="#nginx实现反向代理" aria-hidden="true">#</a></h1><h2 id="编辑配置文件" tabindex="-1">编辑配置文件 <a class="header-anchor" href="#编辑配置文件" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	# =============BEGIN 反向代理 =============</span></span>
<span class="line"><span style="color:#A6ACCD;">	server {</span></span>
<span class="line"><span style="color:#A6ACCD;">		listen 83;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server_name localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">			proxy_pass http://localhost:8080;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	# =============END 反向代理 =============</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这里主要配置了2个地方</p><ul><li>listen 后面是要监听本机的端口</li><li>proxy_pass， 后面接的是要代理的网址</li></ul><blockquote><p><strong>说明</strong></p></blockquote><blockquote><p>这里使用本机的83端口代理8080端口的Tomcat服务器，即实现在浏览器访问83端口，nginx将请求转发到8080端口，显示tomcat的页面，而83端口是没有开服务的。</p></blockquote><h3 id="重新加载配置" tabindex="-1">重新加载配置 <a class="header-anchor" href="#重新加载配置" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">sbin/nginx -s reload</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="访问测试" tabindex="-1">访问测试 <a class="header-anchor" href="#访问测试" aria-hidden="true">#</a></h2><p>先访问8080端口，<a href="http://192.168.1.20:8080/" target="_blank" rel="noreferrer">http://192.168.1.20:8080/</a></p><p><img src="https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200424211524141.png#alt=image-20200424211524141" alt=""></p><p>访问83端口，<a href="http://192.168.1.20:83/" target="_blank" rel="noreferrer">http://192.168.1.20:83/</a></p><p><img src="https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200424211728660.png#alt=image-20200424211728660" alt=""></p>`,14),t=[p];function o(c,i,r,C,A,h){return n(),a("div",null,t)}const D=s(e,[["render",o]]);export{y as __pageData,D as default};
