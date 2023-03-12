import{_ as e,o as a,c as t,b as s}from"./app.d2d47940.js";const u=JSON.parse('{"title":"出现的问题","description":"","frontmatter":{},"headers":[{"level":2,"title":"问题1","slug":"问题1","link":"#问题1","children":[{"level":3,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":3,"title":"原因","slug":"原因","link":"#原因","children":[]},{"level":3,"title":"解决","slug":"解决","link":"#解决","children":[]}]},{"level":2,"title":"问题2","slug":"问题2","link":"#问题2","children":[]},{"level":2,"title":"问题3","slug":"问题3","link":"#问题3","children":[{"level":3,"title":"解决","slug":"解决-1","link":"#解决-1","children":[]}]}],"relativePath":"knowledges/tech/tool/nginx/出现的问题.md","lastUpdated":1678618356000}'),n={name:"knowledges/tech/tool/nginx/出现的问题.md"},i=s(`<h1 id="出现的问题" tabindex="-1">出现的问题 <a class="header-anchor" href="#出现的问题" aria-hidden="true">#</a></h1><h2 id="问题1" tabindex="-1">问题1 <a class="header-anchor" href="#问题1" aria-hidden="true">#</a></h2><h3 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-hidden="true">#</a></h3><p>[root/master init.d]# service nginx start</p><p>Starting nginx (via systemctl):  Job for nginx.service failed because the control process exited with error code. See &quot;systemctl status nginx.service&quot; and &quot;journalctl -xe&quot; for details.</p><p><img src="https://gitee.com/AlanLee97/public-asset/raw/master/note_images/20200425104238-894457.png#alt=image-20200425104236968" alt=""></p><p><img src="https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200425104519014.png#alt=image-20200425104519014" alt=""></p><h3 id="原因" tabindex="-1">原因 <a class="header-anchor" href="#原因" aria-hidden="true">#</a></h3><p>nginx文件中nginx的执行文件的路径没写对</p><h3 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-hidden="true">#</a></h3><p>修正路径就就可以解决了</p><p>重新加载配置</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">daemon-reload</span></span>
<span class="line"></span></code></pre></div><h2 id="问题2" tabindex="-1">问题2 <a class="header-anchor" href="#问题2" aria-hidden="true">#</a></h2><p>keepalived加载检查脚本失败</p><p><img src="https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200425122656224.png#alt=image-20200425122656224" alt=""></p><blockquote><p>这个问题未解决</p></blockquote><h2 id="问题3" tabindex="-1">问题3 <a class="header-anchor" href="#问题3" aria-hidden="true">#</a></h2><p>负载均衡时，连接拒绝代理的节点</p><p><img src="https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200430095223530.png#alt=image-20200430095223530" alt=""></p><h3 id="解决-1" tabindex="-1">解决 <a class="header-anchor" href="#解决-1" aria-hidden="true">#</a></h3><p>我这边是使用了service nginx restart命令，然后出现了这个问题，解决方法就是使用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">service nginx stop</span></span>
<span class="line"><span style="color:#A6ACCD;">service nginx start</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这两个命令就可以了。</p>`,24),l=[i];function r(c,o,p,d,h,g){return a(),t("div",null,l)}const _=e(n,[["render",r]]);export{u as __pageData,_ as default};
