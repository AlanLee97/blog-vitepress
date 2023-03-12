import{_ as s,o as n,c as a,b as l}from"./app.d2d47940.js";const h=JSON.parse('{"title":"访问控制","description":"","frontmatter":{},"headers":[{"level":2,"title":"编辑配置文件","slug":"编辑配置文件","link":"#编辑配置文件","children":[]},{"level":2,"title":"重新加载配置","slug":"重新加载配置","link":"#重新加载配置","children":[]},{"level":2,"title":"访问测试","slug":"访问测试","link":"#访问测试","children":[]}],"relativePath":"knowledges/tech/tool/nginx/Nginx10 - IP访问控制.md","lastUpdated":1678618356000}'),e={name:"knowledges/tech/tool/nginx/Nginx10 - IP访问控制.md"},p=l(`<h1 id="访问控制" tabindex="-1">访问控制 <a class="header-anchor" href="#访问控制" aria-hidden="true">#</a></h1><h2 id="编辑配置文件" tabindex="-1">编辑配置文件 <a class="header-anchor" href="#编辑配置文件" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
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
<span class="line"><span style="color:#A6ACCD;">	# =============BEGIN IP访问控制 =============	</span></span>
<span class="line"><span style="color:#A6ACCD;">	server {</span></span>
<span class="line"><span style="color:#A6ACCD;">		listen 85;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server_name localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">			# 禁止外网访问</span></span>
<span class="line"><span style="color:#A6ACCD;">			deny  192.168.1.1;</span></span>
<span class="line"><span style="color:#A6ACCD;">			# 允许内部局域网访问</span></span>
<span class="line"><span style="color:#A6ACCD;">			allow 192.168.1.0/24;</span></span>
<span class="line"><span style="color:#A6ACCD;">			deny  all;</span></span>
<span class="line"><span style="color:#A6ACCD;">			root html;</span></span>
<span class="line"><span style="color:#A6ACCD;">			index index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	# =============END IP访问控制 =============</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="重新加载配置" tabindex="-1">重新加载配置 <a class="header-anchor" href="#重新加载配置" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sbin/nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reload</span></span>
<span class="line"></span></code></pre></div><h2 id="访问测试" tabindex="-1">访问测试 <a class="header-anchor" href="#访问测试" aria-hidden="true">#</a></h2><p>浏览器输入<a href="http://192.168.1.20:85/%EF%BC%8C%E5%87%BA%E7%8E%B0%E7%A6%81%E6%AD%A2%E8%AE%BF%E9%97%AE" target="_blank" rel="noreferrer">http://192.168.1.20:85/，出现禁止访问</a></p><p><img src="https://gitee.com/AlanLee97/public-asset/raw/master/note_images/20200424224222-227178.png#alt=image-20200424224214370" alt=""></p><p>服务器内访问</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">curl 192.168.1.20:85</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://gitee.com/AlanLee97/public-asset/raw/master/note_images/20200424224410-308849.png#alt=image-20200424224409857" alt=""></p>`,11),t=[p];function o(c,i,r,C,A,d){return n(),a("div",null,t)}const D=s(e,[["render",o]]);export{h as __pageData,D as default};
