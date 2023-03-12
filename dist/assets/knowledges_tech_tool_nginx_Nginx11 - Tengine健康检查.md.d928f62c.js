import{_ as s,o as n,c as a,b as l}from"./app.d2d47940.js";const h=JSON.parse('{"title":"Tengine健康检查","description":"","frontmatter":{},"headers":[{"level":2,"title":"编辑配置文件","slug":"编辑配置文件","link":"#编辑配置文件","children":[]},{"level":2,"title":"访问测试","slug":"访问测试","link":"#访问测试","children":[]}],"relativePath":"knowledges/tech/tool/nginx/Nginx11 - Tengine健康检查.md","lastUpdated":1678618356000}'),e={name:"knowledges/tech/tool/nginx/Nginx11 - Tengine健康检查.md"},p=l(`<h1 id="tengine健康检查" tabindex="-1">Tengine健康检查 <a class="header-anchor" href="#tengine健康检查" aria-hidden="true">#</a></h1><h2 id="编辑配置文件" tabindex="-1">编辑配置文件 <a class="header-anchor" href="#编辑配置文件" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
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
<span class="line"><span style="color:#A6ACCD;">	# =============BEGIN 健康检查 =============</span></span>
<span class="line"><span style="color:#A6ACCD;">	# 配置负载均衡要使用 upstream</span></span>
<span class="line"><span style="color:#A6ACCD;">	upstream myServers-hc{</span></span>
<span class="line"><span style="color:#A6ACCD;">		server 192.168.1.20:9090</span></span>
<span class="line"><span style="color:#A6ACCD;">		server 192.168.1.20:9091</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		# 加入健康检查</span></span>
<span class="line"><span style="color:#A6ACCD;">		check interval=3000 rise=2 fall=5 timeout=1000 type=http;</span></span>
<span class="line"><span style="color:#A6ACCD;">        check_keepalive_requests 100;</span></span>
<span class="line"><span style="color:#A6ACCD;">        check_http_send &quot;HEAD / HTTP/1.1\\r\\nConnection: keep-alive\\r\\n\\r\\n&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        check_http_expect_alive http_2xx http_3xx;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">	server {</span></span>
<span class="line"><span style="color:#A6ACCD;">		listen 86;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server_name localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">			proxy_pass myServers-hc;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		location /status {</span></span>
<span class="line"><span style="color:#A6ACCD;">            check_status;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	# =============END 健康检查 =============</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>这段代码就是在负载均衡的基础上加入健康检查的代码</p></blockquote><blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></blockquote><p>check interval=3000 rise=2 fall=5 timeout=1000 type=http; check_keepalive_requests 100; check_http_send &quot;HEAD / HTTP/1.1\\r\\nConnection: keep-alive\\r\\n\\r\\n&quot;; check_http_expect_alive http_2xx http_3xx;</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">## 重新加载配置</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`sh</span></span>
<span class="line"><span style="color:#A6ACCD;">sbin/nginx -s reload</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="访问测试" tabindex="-1">访问测试 <a class="header-anchor" href="#访问测试" aria-hidden="true">#</a></h2><p>输入<a href="http://192.168.1.20:86/status%EF%BC%8C%E8%BF%9B%E5%85%A5%E7%9B%91%E6%8E%A7%E6%A3%80%E6%9F%A5%E9%A1%B5%E9%9D%A2" target="_blank" rel="noreferrer">http://192.168.1.20:86/status，进入监控检查页面</a></p><p><img src="https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200424225356444.png#alt=image-20200424225356444" alt=""></p>`,10),t=[p];function o(c,i,r,A,C,y){return n(),a("div",null,t)}const _=s(e,[["render",o]]);export{h as __pageData,_ as default};
