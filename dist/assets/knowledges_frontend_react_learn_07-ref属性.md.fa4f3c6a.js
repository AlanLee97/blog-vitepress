import{_ as s,o as a,c as n,b as l}from"./app.d2d47940.js";const C=JSON.parse('{"title":"ref属性","description":"","frontmatter":{},"headers":[],"relativePath":"knowledges/frontend/react/learn/07-ref属性.md","lastUpdated":1678620975000}'),p={name:"knowledges/frontend/react/learn/07-ref属性.md"},o=l(`<h1 id="ref属性" tabindex="-1">ref属性 <a class="header-anchor" href="#ref属性" aria-hidden="true">#</a></h1><p>ref属性是直接操作DOM的，不推荐经常使用</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">input</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">       </span><span style="color:#C792EA;">onChange</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">{this.handleChange}</span></span>
<span class="line"><span style="color:#89DDFF;">       </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">{this.state.inputValue}</span></span>
<span class="line"><span style="color:#89DDFF;">       </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">{(input)</span><span style="color:#89DDFF;"> =&gt;</span><span style="color:#A6ACCD;"> {this.input = input}}</span></span>
<span class="line"><span style="color:#A6ACCD;">/&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">handleChange</span><span style="color:#A6ACCD;">(e) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// const value = e.target.value;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">input</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    inputValue</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">))</span></span>
<span class="line"></span></code></pre></div>`,4),e=[o];function t(c,r,F,D,y,i){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{C as __pageData,u as default};
