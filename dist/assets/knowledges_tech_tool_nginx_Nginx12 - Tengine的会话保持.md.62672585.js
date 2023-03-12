import{_ as s,o as n,c as a,b as e}from"./app.d2d47940.js";const h=JSON.parse('{"title":"Tengine的会话保持","description":"","frontmatter":{},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"编辑配置文件","slug":"编辑配置文件","link":"#编辑配置文件","children":[]},{"level":2,"title":"重启Nginx","slug":"重启nginx","link":"#重启nginx","children":[]},{"level":2,"title":"访问测试","slug":"访问测试","link":"#访问测试","children":[]}],"relativePath":"knowledges/tech/tool/nginx/Nginx12 - Tengine的会话保持.md","lastUpdated":1678618356000}'),l={name:"knowledges/tech/tool/nginx/Nginx12 - Tengine的会话保持.md"},p=e(`<h1 id="tengine的会话保持" tabindex="-1">Tengine的会话保持 <a class="header-anchor" href="#tengine的会话保持" aria-hidden="true">#</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-hidden="true">#</a></h2><p>该模块是一个负载均衡模块，通过cookie实现客户端与后端服务器的会话保持, 在一定条件下可以保证同一个客户端访问的都是同一个后端服务器。</p><h2 id="编辑配置文件" tabindex="-1">编辑配置文件 <a class="header-anchor" href="#编辑配置文件" aria-hidden="true">#</a></h2><p>nginx.conf</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	# =============BEGIN 会话保持 =============</span></span>
<span class="line"><span style="color:#A6ACCD;">	# 配置负载均衡要使用 upstream</span></span>
<span class="line"><span style="color:#A6ACCD;">	upstream myServers-session-keep{</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 添加会话保持</span></span>
<span class="line"><span style="color:#A6ACCD;">		session_sticky cookie=uid fallback=on path=/ mode=insert option=indirect;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server 192.168.1.21:8080;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server 192.168.1.22:8080;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">	server {</span></span>
<span class="line"><span style="color:#A6ACCD;">	    listen       80;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;">		location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">		    # 添加会话保持</span></span>
<span class="line"><span style="color:#A6ACCD;">			session_sticky_hide_cookie upstream=myServers-session-keep;</span></span>
<span class="line"><span style="color:#A6ACCD;">			proxy_pass http://myServers-session-keep;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">	# =============END 会话保持 =============</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="重启nginx" tabindex="-1">重启Nginx <a class="header-anchor" href="#重启nginx" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span></span>
<span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span>
<span class="line"></span></code></pre></div><h2 id="访问测试" tabindex="-1">访问测试 <a class="header-anchor" href="#访问测试" aria-hidden="true">#</a></h2><p>浏览器输入<a href="http://192.168.1.20/%EF%BC%8C%E5%A4%9A%E6%AC%A1%E5%88%B7%E6%96%B0%EF%BC%8C%E4%BC%9A%E4%B8%80%E7%9B%B4%E4%BF%9D%E6%8C%81%E5%9C%A8%E5%90%8C%E4%B8%80%E4%B8%AATomcat" target="_blank" rel="noreferrer">http://192.168.1.20/，多次刷新，会一直保持在同一个Tomcat</a></p><p><img src="https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200430101212385.png#alt=image-20200430101212385" alt=""></p>`,11),t=[p];function o(c,i,r,C,A,d){return n(),a("div",null,t)}const D=s(l,[["render",o]]);export{h as __pageData,D as default};
