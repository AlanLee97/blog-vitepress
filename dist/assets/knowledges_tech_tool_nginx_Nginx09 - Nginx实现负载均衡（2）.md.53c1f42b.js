import{_ as s,o as n,c as a,b as l}from"./app.d2d47940.js";const y=JSON.parse('{"title":"Nginx实现负载均衡","description":"","frontmatter":{},"headers":[{"level":2,"title":"准备资源","slug":"准备资源","link":"#准备资源","children":[]},{"level":2,"title":"编辑配置文件","slug":"编辑配置文件","link":"#编辑配置文件","children":[]},{"level":2,"title":"重新加载配置","slug":"重新加载配置","link":"#重新加载配置","children":[]},{"level":2,"title":"访问测试","slug":"访问测试","link":"#访问测试","children":[]}],"relativePath":"knowledges/tech/tool/nginx/Nginx09 - Nginx实现负载均衡（2）.md","lastUpdated":1678618356000}'),e={name:"knowledges/tech/tool/nginx/Nginx09 - Nginx实现负载均衡（2）.md"},p=l(`<h1 id="nginx实现负载均衡" tabindex="-1">Nginx实现负载均衡 <a class="header-anchor" href="#nginx实现负载均衡" aria-hidden="true">#</a></h1><h2 id="准备资源" tabindex="-1">准备资源 <a class="header-anchor" href="#准备资源" aria-hidden="true">#</a></h2><p>准备1个Nginx服务器和2个Tomcat服务器</p><table><thead><tr><th>服务器</th><th>IP</th><th>端口</th></tr></thead><tbody><tr><td>Nginx</td><td>192.168.1.20</td><td>84</td></tr><tr><td>Tomcat 1</td><td>192.168.1.21</td><td>8080</td></tr><tr><td>Tomcat 2</td><td>192.168.1.22</td><td>8080</td></tr></tbody></table><h2 id="编辑配置文件" tabindex="-1">编辑配置文件 <a class="header-anchor" href="#编辑配置文件" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
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
<span class="line"><span style="color:#A6ACCD;">	# =============BEGIN 负载均衡 =============</span></span>
<span class="line"><span style="color:#A6ACCD;">	# 配置负载均衡要使用 upstream</span></span>
<span class="line"><span style="color:#A6ACCD;">	upstream myServers{</span></span>
<span class="line"><span style="color:#A6ACCD;">		server 192.168.1.21:8080;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server 192.168.1.22:8080;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">	server {</span></span>
<span class="line"><span style="color:#A6ACCD;">		listen 84;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server_name localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">			proxy_pass http://myServers;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	# =============END 负载均衡 =============</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="重新加载配置" tabindex="-1">重新加载配置 <a class="header-anchor" href="#重新加载配置" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sbin/nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reload</span></span>
<span class="line"></span></code></pre></div><h2 id="访问测试" tabindex="-1">访问测试 <a class="header-anchor" href="#访问测试" aria-hidden="true">#</a></h2><p>访问Nginx的<a href="http://192.168.1.20:84" target="_blank" rel="noreferrer">http://192.168.1.20:84</a>，请求会轮流的转发到<code>Tomcat1</code>和<code>Tomcat2</code></p><p><img src="https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200424223452544.png#alt=image-20200424223452544" alt=""></p><p><img src="https://gitee.com/AlanLee97/public-asset/raw/master/note_images/20200424223616-818039.png#alt=image-20200424223615713" alt=""></p><blockquote><p><strong>注意</strong></p></blockquote><blockquote><p>为了区分两个Tomcat，我在index.jsp上分别加了Node - 1 - Tomcat 和 Node - 2 - Tomcat 的字样</p></blockquote>`,14),t=[p];function o(c,r,i,C,A,d){return n(),a("div",null,t)}const D=s(e,[["render",o]]);export{y as __pageData,D as default};
