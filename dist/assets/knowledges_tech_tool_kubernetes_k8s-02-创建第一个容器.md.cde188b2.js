import{_ as s,o as a,c as e,b as n}from"./app.d2d47940.js";const y=JSON.parse('{"title":"Kubernetes 创建第一个容器","description":"","frontmatter":{"date":"2020-02-29T00:00:00.000Z","categories":["运维"],"tags":["kubernetes"]},"headers":[{"level":2,"title":"创建容器","slug":"创建容器","link":"#创建容器","children":[{"level":3,"title":"在master机器上操作","slug":"在master机器上操作","link":"#在master机器上操作","children":[]},{"level":3,"title":"在node节点机器上操作","slug":"在node节点机器上操作","link":"#在node节点机器上操作","children":[]}]},{"level":2,"title":"删除容器","slug":"删除容器","link":"#删除容器","children":[{"level":3,"title":"在master节点上操作","slug":"在master节点上操作","link":"#在master节点上操作","children":[]}]}],"relativePath":"knowledges/tech/tool/kubernetes/k8s-02-创建第一个容器.md","lastUpdated":1678618356000}'),l={name:"knowledges/tech/tool/kubernetes/k8s-02-创建第一个容器.md"},t=n(`<h1 id="kubernetes-创建第一个容器" tabindex="-1">Kubernetes 创建第一个容器 <a class="header-anchor" href="#kubernetes-创建第一个容器" aria-hidden="true">#</a></h1><p>以安装nginx为例</p><h2 id="创建容器" tabindex="-1">创建容器 <a class="header-anchor" href="#创建容器" aria-hidden="true">#</a></h2><h3 id="在master机器上操作" tabindex="-1">在master机器上操作 <a class="header-anchor" href="#在master机器上操作" aria-hidden="true">#</a></h3><p><strong>创建容器</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">kubectl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--image=nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--replicas=2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--port=80</span></span>
<span class="line"></span></code></pre></div><p>--image=nginx 指定镜像为nginx</p><p>--replicas=2 创建实例的数量为2</p><p>--port=80 指定容器端口为80</p><p><img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229202958-354893.png#alt=image-20200229105126482" alt=""></p><p><strong>查看创建的容器</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">kubectl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pods</span></span>
<span class="line"></span></code></pre></div><p>刚刚创建就查看容器，READY为0/1，STATUS为ContainerCreating</p><p><img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229105321-235684.png#alt=image-20200229105259402" alt=""></p><p>等待容器创建玩就能启动起来</p><p><img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229203003-10452.png#alt=image-20200229105555499" alt=""></p><p><strong>查看部署</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">kubectl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deployment</span></span>
<span class="line"></span></code></pre></div><p><img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229105624-365409.png#alt=image-20200229105624150" alt=""></p><p><strong>暴露服务</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">kubectl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">expose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deployment</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--port=80</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--type=LoadBalancer</span></span>
<span class="line"></span></code></pre></div><p>--port=80 容器的端口为80</p><p>--type=LoadBalancer 类型为负载均衡</p><p><img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229203005-862018.png#alt=image-20200229110032228" alt=""></p><p><strong>查看服务</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">kubectl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span></span>
<span class="line"></span></code></pre></div><p><img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229105800-470736.png#alt=image-20200229105800297" alt=""></p><p><strong>查看服务详情</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">kubectl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">describe</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"></span></code></pre></div><p><img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229203008-498443.png#alt=image-20200229110615410" alt=""></p><h3 id="在node节点机器上操作" tabindex="-1">在node节点机器上操作 <a class="header-anchor" href="#在node节点机器上操作" aria-hidden="true">#</a></h3><p><strong>在node节点机器上查看运行中的容器</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ps</span></span>
<span class="line"></span></code></pre></div><p><img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229110804-950910.png#alt=image-20200229110803809" alt=""></p><h2 id="删除容器" tabindex="-1">删除容器 <a class="header-anchor" href="#删除容器" aria-hidden="true">#</a></h2><h3 id="在master节点上操作" tabindex="-1">在master节点上操作 <a class="header-anchor" href="#在master节点上操作" aria-hidden="true">#</a></h3><p><strong>删除部署</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">kubectl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">delete</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deployment</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"></span></code></pre></div><p><img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229203013-83914.png#alt=image-20200229111611631" alt=""></p><p><strong>删除服务</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">kubectl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">delete</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"></span></code></pre></div><p><img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229111731-516235.png#alt=image-20200229111730556" alt=""></p>`,42),p=[t];function o(c,i,r,d,g,h){return a(),e("div",null,p)}const m=s(l,[["render",o]]);export{y as __pageData,m as default};
