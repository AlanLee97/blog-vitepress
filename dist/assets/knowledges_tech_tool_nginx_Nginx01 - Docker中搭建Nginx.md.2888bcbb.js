import{_ as s,o as n,c as a,b as l}from"./app.d2d47940.js";const d=JSON.parse('{"title":"Docker中搭建nginx","description":"","frontmatter":{"date":"2020-02-28T00:00:00.000Z","categories":["服务器"],"tags":["nginx"]},"headers":[{"level":2,"title":"方式1：docker-compose","slug":"方式1-docker-compose","link":"#方式1-docker-compose","children":[{"level":3,"title":"创建目录","slug":"创建目录","link":"#创建目录","children":[]},{"level":3,"title":"编写docker-compose.yml文件","slug":"编写docker-compose-yml文件","link":"#编写docker-compose-yml文件","children":[]},{"level":3,"title":"创建目录用于挂载配置文件","slug":"创建目录用于挂载配置文件","link":"#创建目录用于挂载配置文件","children":[]},{"level":3,"title":"运行","slug":"运行","link":"#运行","children":[]}]},{"level":2,"title":"方式2：docker","slug":"方式2-docker","link":"#方式2-docker","children":[{"level":3,"title":"创建目录用于挂载配置文件","slug":"创建目录用于挂载配置文件-1","link":"#创建目录用于挂载配置文件-1","children":[]},{"level":3,"title":"运行","slug":"运行-1","link":"#运行-1","children":[]}]},{"level":2,"title":"附录","slug":"附录","link":"#附录","children":[]}],"relativePath":"knowledges/tech/tool/nginx/Nginx01 - Docker中搭建Nginx.md","lastUpdated":1678618356000}'),p={name:"knowledges/tech/tool/nginx/Nginx01 - Docker中搭建Nginx.md"},o=l(`<h1 id="docker中搭建nginx" tabindex="-1">Docker中搭建nginx <a class="header-anchor" href="#docker中搭建nginx" aria-hidden="true">#</a></h1><h2 id="方式1-docker-compose" tabindex="-1">方式1：docker-compose <a class="header-anchor" href="#方式1-docker-compose" aria-hidden="true">#</a></h2><h3 id="创建目录" tabindex="-1">创建目录 <a class="header-anchor" href="#创建目录" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/docker/nginx</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/docker/nginx</span></span>
<span class="line"></span></code></pre></div><h3 id="编写docker-compose-yml文件" tabindex="-1">编写docker-compose.yml文件 <a class="header-anchor" href="#编写docker-compose-yml文件" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker-compose.yml</span></span>
<span class="line"></span></code></pre></div><p>docker-compose.yml</p><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3.1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">nginx</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">80:80</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./conf/nginx.conf:/etc/nginx/nginx.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./wwwroot:/usr/share/nginx/wwwroot</span></span>
<span class="line"></span></code></pre></div><h3 id="创建目录用于挂载配置文件" tabindex="-1">创建目录用于挂载配置文件 <a class="header-anchor" href="#创建目录用于挂载配置文件" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./wwwroot</span></span>
<span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./conf/nginx.conf</span></span>
<span class="line"></span></code></pre></div><p>nginx.conf的内容，见文章后面的附录</p><h3 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker-compose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">up</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span></span>
<span class="line"></span></code></pre></div><h2 id="方式2-docker" tabindex="-1">方式2：docker <a class="header-anchor" href="#方式2-docker" aria-hidden="true">#</a></h2><h3 id="创建目录用于挂载配置文件-1" tabindex="-1">创建目录用于挂载配置文件 <a class="header-anchor" href="#创建目录用于挂载配置文件-1" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/docker/nginx/wwwroot</span></span>
<span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/docker/nginx/conf</span></span>
<span class="line"></span></code></pre></div><h3 id="运行-1" tabindex="-1">运行 <a class="header-anchor" href="#运行-1" aria-hidden="true">#</a></h3><p>直接输入命令</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-d </span><span style="color:#C3E88D;">--name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p </span><span style="color:#F78C6C;">80</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">/usr/local/docker/nginx/conf:/etc/nginx/nginx.conf</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">/usr/local/docker/nginx/wwwroot:/usr/share/nginx/wwwroot</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx</span></span>
<span class="line"></span></code></pre></div><h2 id="附录" tabindex="-1">附录 <a class="header-anchor" href="#附录" aria-hidden="true">#</a></h2><p>nginx.conf</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">worker_processes</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">events</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">worker_connections</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">http</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">include</span><span style="color:#A6ACCD;">       </span><span style="color:#C3E88D;">mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">default_type</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">application/octet-stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">sendfile</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">keepalive_timeout</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">65</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;">       </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">server_name</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">index</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">error_page</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">500</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">502</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">503</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">504</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">/50x.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/50x.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,22),e=[o];function c(t,r,C,i,y,D){return n(),a("div",null,e)}const F=s(p,[["render",c]]);export{d as __pageData,F as default};
