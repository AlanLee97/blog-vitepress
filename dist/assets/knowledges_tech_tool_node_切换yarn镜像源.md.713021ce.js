import{_ as a,o as s,c as e,b as n}from"./app.d2d47940.js";const g=JSON.parse('{"title":"yarn (npm) 切换设置镜像源","description":"","frontmatter":{},"headers":[{"level":2,"title":"设置镜像源","slug":"设置镜像源","link":"#设置镜像源","children":[]}],"relativePath":"knowledges/tech/tool/node/切换yarn镜像源.md","lastUpdated":1678618356000}'),t={name:"knowledges/tech/tool/node/切换yarn镜像源.md"},l=n(`<h1 id="yarn-npm-切换设置镜像源" tabindex="-1">yarn (npm) 切换设置镜像源 <a class="header-anchor" href="#yarn-npm-切换设置镜像源" aria-hidden="true">#</a></h1><h2 id="设置镜像源" tabindex="-1">设置镜像源 <a class="header-anchor" href="#设置镜像源" aria-hidden="true">#</a></h2><p>1、查看一下当前源</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">yarn config get registry</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>2、切换为淘宝源</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">yarn config set registry https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>3、或者切换为自带的</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">yarn config set registry https://registry.yarnpkg.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),o=[l];function p(r,c,i,d,_,h){return s(),e("div",null,o)}const m=a(t,[["render",p]]);export{g as __pageData,m as default};
