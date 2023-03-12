import{_ as s,o as a,c as n,b as p}from"./app.d2d47940.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledges/frontend/other/vuepress中解决语雀图片防盗链问题.md","lastUpdated":1678620975000}'),e={name:"knowledges/frontend/other/vuepress中解决语雀图片防盗链问题.md"},o=p(`<p>在config.js的head属性中增加配置</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">head</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  	</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 解决语雀防盗链问题</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">meta</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">referrer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no-referrer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><p>原理就是在html的head中生成meta标签</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">referrer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no-referrer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2021/png/743297/1633274923829-40d639de-612f-46cd-bd79-880d97384fad.png#clientId=u924da62f-a45d-4&amp;from=paste&amp;height=327&amp;id=ueebf4a3e&amp;name=image.png&amp;originHeight=327&amp;originWidth=762&amp;originalType=binary&amp;ratio=1&amp;size=43755&amp;status=done&amp;style=none&amp;taskId=u0a32b2ad-71fd-4a91-8d47-cf4b7805a33&amp;width=762" alt="image.png"><img src="https://cdn.nlark.com/yuque/0/2021/png/743297/1633274815266-e7cc161f-126b-459a-a1b6-c421d8e4bb48.png#clientId=u924da62f-a45d-4&amp;from=paste&amp;height=593&amp;id=ue5a45a1a&amp;name=image.png&amp;originHeight=593&amp;originWidth=1260&amp;originalType=binary&amp;ratio=1&amp;size=83942&amp;status=done&amp;style=none&amp;taskId=ubb1bda92-ad90-4ff8-b60a-1e5214cb8ff&amp;width=1260" alt="image.png"></p>`,5),l=[o];function t(r,c,i,D,y,d){return a(),n("div",null,l)}const C=s(e,[["render",t]]);export{F as __pageData,C as default};
