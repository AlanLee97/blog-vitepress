import{_ as s,o as n,c as a,b as e}from"./app.d2d47940.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"date":"2020-02-28T00:00:00.000Z","categories":["服务器"],"tags":["nginx"]},"headers":[{"level":2,"title":"什么是代理服务器？","slug":"什么是代理服务器","link":"#什么是代理服务器","children":[]},{"level":2,"title":"为什么要使用代理服务器？","slug":"为什么要使用代理服务器","link":"#为什么要使用代理服务器","children":[{"level":3,"title":"提高访问速度","slug":"提高访问速度","link":"#提高访问速度","children":[]},{"level":3,"title":"防火墙作用","slug":"防火墙作用","link":"#防火墙作用","children":[]},{"level":3,"title":"通过代理服务器访问不能访问的目标站点","slug":"通过代理服务器访问不能访问的目标站点","link":"#通过代理服务器访问不能访问的目标站点","children":[]}]},{"level":2,"title":"什么是正向代理？","slug":"什么是正向代理","link":"#什么是正向代理","children":[]},{"level":2,"title":"什么是反向代理？","slug":"什么是反向代理","link":"#什么是反向代理","children":[]},{"level":2,"title":"反向代理有哪些主要应用？","slug":"反向代理有哪些主要应用","link":"#反向代理有哪些主要应用","children":[]},{"level":2,"title":"使用 Nginx 反向代理 Tomcat","slug":"使用-nginx-反向代理-tomcat","link":"#使用-nginx-反向代理-tomcat","children":[{"level":3,"title":"需求","slug":"需求","link":"#需求","children":[]},{"level":3,"title":"启动 Tomcat 容器","slug":"启动-tomcat-容器","link":"#启动-tomcat-容器","children":[]},{"level":3,"title":"配置 Nginx 反向代理","slug":"配置-nginx-反向代理","link":"#配置-nginx-反向代理","children":[]}]}],"relativePath":"knowledges/tech/tool/nginx/Nginx04 - Nginx实现反向代理.md","lastUpdated":1678618356000}'),l={name:"knowledges/tech/tool/nginx/Nginx04 - Nginx实现反向代理.md"},p=e(`<h2 id="什么是代理服务器" tabindex="-1">什么是代理服务器？ <a class="header-anchor" href="#什么是代理服务器" aria-hidden="true">#</a></h2><p>代理服务器，客户机在发送请求时，不会直接发送给目的主机，而是先发送给代理服务器，代理服务接受客户机请求之后，再向主机发出，并接收目的主机返回的数据，存放在代理服务器的硬盘中，再发送给客户机。</p><p><img src="https://funtl.com/assets/Lusifer2018080517010001.png#alt=img" alt=""></p><h2 id="为什么要使用代理服务器" tabindex="-1">为什么要使用代理服务器？ <a class="header-anchor" href="#为什么要使用代理服务器" aria-hidden="true">#</a></h2><h3 id="提高访问速度" tabindex="-1">提高访问速度 <a class="header-anchor" href="#提高访问速度" aria-hidden="true">#</a></h3><p>由于目标主机返回的数据会存放在代理服务器的硬盘中，因此下一次客户再访问相同的站点数据时，会直接从代理服务器的硬盘中读取，起到了缓存的作用，尤其对于热门站点能明显提高请求速度。</p><h3 id="防火墙作用" tabindex="-1">防火墙作用 <a class="header-anchor" href="#防火墙作用" aria-hidden="true">#</a></h3><p>由于所有的客户机请求都必须通过代理服务器访问远程站点，因此可在代理服务器上设限，过滤某些不安全信息。</p><h3 id="通过代理服务器访问不能访问的目标站点" tabindex="-1">通过代理服务器访问不能访问的目标站点 <a class="header-anchor" href="#通过代理服务器访问不能访问的目标站点" aria-hidden="true">#</a></h3><p>互联网上有许多开放的代理服务器，客户机在访问受限时，可通过不受限的代理服务器访问目标站点，通俗说，我们使用的翻墙浏览器就是利用了代理服务器，虽然不能出国，但也可直接访问外网。</p><h2 id="什么是正向代理" tabindex="-1">什么是正向代理？ <a class="header-anchor" href="#什么是正向代理" aria-hidden="true">#</a></h2><p>正向代理，架设在客户机与目标主机之间，只用于代理内部网络对 Internet 的连接请求，客户机必须指定代理服务器,并将本来要直接发送到 Web 服务器上的 Http 请求发送到代理服务器中。</p><p><img src="https://funtl.com/assets/Lusifer2018080517010002.png#alt=img" alt=""></p><h2 id="什么是反向代理" tabindex="-1">什么是反向代理？ <a class="header-anchor" href="#什么是反向代理" aria-hidden="true">#</a></h2><p>反向代理服务器架设在服务器端，通过缓冲经常被请求的页面来缓解服务器的工作量，将客户机请求转发给内部网络上的目标服务器；并将从服务器上得到的结果返回给 Internet 上请求连接的客户端，此时代理服务器与目标主机一起对外表现为一个服务器。</p><p><img src="https://funtl.com/assets/Lusifer2018080517010003.png#alt=img" alt=""></p><h2 id="反向代理有哪些主要应用" tabindex="-1">反向代理有哪些主要应用？ <a class="header-anchor" href="#反向代理有哪些主要应用" aria-hidden="true">#</a></h2><p>现在许多大型 web 网站都用到反向代理。除了可以防止外网对内网服务器的恶性攻击、缓存以减少服务器的压力和访问安全控制之外，还可以进行负载均衡，将用户请求分配给多个服务器。</p><h2 id="使用-nginx-反向代理-tomcat" tabindex="-1">使用 Nginx 反向代理 Tomcat <a class="header-anchor" href="#使用-nginx-反向代理-tomcat" aria-hidden="true">#</a></h2><h3 id="需求" tabindex="-1">需求 <a class="header-anchor" href="#需求" aria-hidden="true">#</a></h3><ul><li>两个 tomcat 服务通过 nginx 反向代理</li><li>nginx 服务器：192.168.75.145:80</li><li>tomcat1 服务器：192.168.75.145:9090</li><li>tomcat2 服务器：192.168.75.145:9091</li></ul><h3 id="启动-tomcat-容器" tabindex="-1">启动 Tomcat 容器 <a class="header-anchor" href="#启动-tomcat-容器" aria-hidden="true">#</a></h3><p>启动两个 Tomcat 容器，映射端口为 9090 和 9091，docker-compose.yml 如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">version: &#39;3&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">services:</span></span>
<span class="line"><span style="color:#A6ACCD;">  tomcat1:</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: tomcat</span></span>
<span class="line"><span style="color:#A6ACCD;">    container_name: tomcat1</span></span>
<span class="line"><span style="color:#A6ACCD;">    ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 9090:8080</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  tomcat2:</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: tomcat</span></span>
<span class="line"><span style="color:#A6ACCD;">    container_name: tomcat2</span></span>
<span class="line"><span style="color:#A6ACCD;">    ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 9091:8080</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="配置-nginx-反向代理" tabindex="-1">配置 Nginx 反向代理 <a class="header-anchor" href="#配置-nginx-反向代理" aria-hidden="true">#</a></h3><p>修改 <code>/usr/local/docker/nginx/conf</code> 目录下的 nginx.conf 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">worker_processes 1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">events {</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections 1024;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    include mime.types;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type application/octet-stream;</span></span>
<span class="line"><span style="color:#A6ACCD;">    sendfile on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout 65;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    upstream myapp {</span></span>
<span class="line"><span style="color:#A6ACCD;">        server 192.168.75.145:9000;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen 80;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name 192.168.75.145;</span></span>
<span class="line"><span style="color:#A6ACCD;">        location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">        	proxy_pass http://myapp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        	index index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen 9000;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name 192.168.75.145;</span></span>
<span class="line"><span style="color:#A6ACCD;">        location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">        	proxy_pass http://myapp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        	index index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>注意：新版 Nginx 的 <code>upstream</code> 配置中的名称不可以有下划线(&quot;_&quot;)，否则会报 <code>400</code> 错误</strong></p>`,28),t=[p];function i(c,o,r,d,h,C){return n(),a("div",null,t)}const m=s(l,[["render",i]]);export{g as __pageData,m as default};
