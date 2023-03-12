import{_ as s,o as a,c as e,b as n}from"./app.d2d47940.js";const g=JSON.parse('{"title":"Linux下安装JDK（rpm方式安装）","description":"","frontmatter":{},"headers":[{"level":3,"title":"1. 上传JDK压缩包到服务器","slug":"_1-上传jdk压缩包到服务器","link":"#_1-上传jdk压缩包到服务器","children":[]},{"level":3,"title":"2. 安装JDK","slug":"_2-安装jdk","link":"#_2-安装jdk","children":[]},{"level":3,"title":"3. 配置环境变量","slug":"_3-配置环境变量","link":"#_3-配置环境变量","children":[]},{"level":3,"title":"4. 验证是否安装成功","slug":"_4-验证是否安装成功","link":"#_4-验证是否安装成功","children":[]}],"relativePath":"knowledges/tech/server/linux-centos/Linux12 - Linux下安装JDK.md","lastUpdated":1678618356000}'),l={name:"knowledges/tech/server/linux-centos/Linux12 - Linux下安装JDK.md"},p=n(`<h1 id="linux下安装jdk-rpm方式安装" tabindex="-1">Linux下安装JDK（rpm方式安装） <a class="header-anchor" href="#linux下安装jdk-rpm方式安装" aria-hidden="true">#</a></h1><h3 id="_1-上传jdk压缩包到服务器" tabindex="-1">1. 上传JDK压缩包到服务器 <a class="header-anchor" href="#_1-上传jdk压缩包到服务器" aria-hidden="true">#</a></h3><p>创建文件夹opt/package</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/opt/package</span></span>
<span class="line"></span></code></pre></div><p>切换到文件夹opt/package</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/opt/package</span></span>
<span class="line"></span></code></pre></div><p>用ftp工具将文件上传至服务器的/opt/package目录下</p><p><img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408153342-377241.png#alt=image-20200408153223542" alt=""></p><h3 id="_2-安装jdk" tabindex="-1">2. 安装JDK <a class="header-anchor" href="#_2-安装jdk" aria-hidden="true">#</a></h3><p>执行命令</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">rpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ivh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jdk-7u79-linux-x64.rpm</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-配置环境变量" tabindex="-1">3. 配置环境变量 <a class="header-anchor" href="#_3-配置环境变量" aria-hidden="true">#</a></h3><p>编辑/etc/profile文件</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/profile</span></span>
<span class="line"></span></code></pre></div><p>添加以下代码</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> JAVA_HOME</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">/usr/java/jdk1.7.0_79</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> CLASSPATH</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">$</span><span style="color:#C3E88D;">:CLASSPATH:</span><span style="color:#A6ACCD;">$JAVA_HOME</span><span style="color:#C3E88D;">/lib/</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PATH</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">$PATH</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">$JAVA_HOME</span><span style="color:#C3E88D;">/bin</span></span>
<span class="line"></span></code></pre></div><p><img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408154802-968410.png#alt=image-20200408154759206" alt=""></p><p>更新配置文件</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/peofile</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-验证是否安装成功" tabindex="-1">4. 验证是否安装成功 <a class="header-anchor" href="#_4-验证是否安装成功" aria-hidden="true">#</a></h3><p>查看JDK版本</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">java</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-version</span></span>
<span class="line"></span></code></pre></div><p><img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408154945-653797.png#alt=image-20200408154945590" alt=""></p>`,23),t=[p];function o(c,i,r,d,h,C){return a(),e("div",null,t)}const y=s(l,[["render",o]]);export{g as __pageData,y as default};
