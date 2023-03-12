import{_ as s,o as a,c as n,b as e}from"./app.d2d47940.js";const C=JSON.parse('{"title":"Linux 用户和组管理","description":"","frontmatter":{"date":"2020-01-24T00:00:00.000Z","categories":["服务器"],"tags":["linux"]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"使用 Root 用户","slug":"使用-root-用户","link":"#使用-root-用户","children":[{"level":3,"title":"设置 Root 账户密码","slug":"设置-root-账户密码","link":"#设置-root-账户密码","children":[]},{"level":3,"title":"Root","slug":"root","link":"#root","children":[]},{"level":3,"title":"设置允许远程登录 Root","slug":"设置允许远程登录-root","link":"#设置允许远程登录-root","children":[]}]},{"level":2,"title":"用户账户说明","slug":"用户账户说明","link":"#用户账户说明","children":[{"level":3,"title":"普通用户","slug":"普通用户","link":"#普通用户","children":[]},{"level":3,"title":"超级管理员","slug":"超级管理员","link":"#超级管理员","children":[]},{"level":3,"title":"安装时创建的系统用户","slug":"安装时创建的系统用户","link":"#安装时创建的系统用户","children":[]}]},{"level":2,"title":"组账户说明","slug":"组账户说明","link":"#组账户说明","children":[{"level":3,"title":"私有组","slug":"私有组","link":"#私有组","children":[]},{"level":3,"title":"标准组","slug":"标准组","link":"#标准组","children":[]}]},{"level":2,"title":"账户系统文件说明","slug":"账户系统文件说明","link":"#账户系统文件说明","children":[{"level":3,"title":"/etc/passwd","slug":"etc-passwd","link":"#etc-passwd","children":[]},{"level":3,"title":"/etc/shadow","slug":"etc-shadow","link":"#etc-shadow","children":[]},{"level":3,"title":"/etc/group","slug":"etc-group","link":"#etc-group","children":[]},{"level":3,"title":"/etc/gshadow","slug":"etc-gshadow","link":"#etc-gshadow","children":[]}]},{"level":2,"title":"账户管理常用命令","slug":"账户管理常用命令","link":"#账户管理常用命令","children":[{"level":3,"title":"增加用户","slug":"增加用户","link":"#增加用户","children":[]},{"level":3,"title":"修改用户","slug":"修改用户","link":"#修改用户","children":[]},{"level":3,"title":"删除用户","slug":"删除用户","link":"#删除用户","children":[]},{"level":3,"title":"组账户维护","slug":"组账户维护","link":"#组账户维护","children":[]},{"level":3,"title":"口令维护","slug":"口令维护","link":"#口令维护","children":[]},{"level":3,"title":"用户和组状态","slug":"用户和组状态","link":"#用户和组状态","children":[]}]}],"relativePath":"knowledges/tech/server/linux-centos/Linux08 - 用户和组管理.md","lastUpdated":1678618356000}'),l={name:"knowledges/tech/server/linux-centos/Linux08 - 用户和组管理.md"},o=e(`<h1 id="linux-用户和组管理" tabindex="-1">Linux 用户和组管理 <a class="header-anchor" href="#linux-用户和组管理" aria-hidden="true">#</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-hidden="true">#</a></h2><p>Linux 操作系统是一个多用户操作系统，它允许多用户同时登录到系统上并使用资源。系统会根据账户来区分每个用户的文件，进程，任务和工作环境，使得每个用户工作都不受干扰。</p><h2 id="使用-root-用户" tabindex="-1">使用 Root 用户 <a class="header-anchor" href="#使用-root-用户" aria-hidden="true">#</a></h2><p>在实际生产操作中，我们基本上都是使用超级管理员账户操作 Linux 系统，也就是 Root 用户，Linux 系统默认是关闭 Root 账户的，我们需要为 Root 用户设置一个初始密码以方便我们使用。</p><h3 id="设置-root-账户密码" tabindex="-1">设置 Root 账户密码 <a class="header-anchor" href="#设置-root-账户密码" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">sudo passwd root</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="root" tabindex="-1">Root <a class="header-anchor" href="#root" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">su</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="设置允许远程登录-root" tabindex="-1">设置允许远程登录 Root <a class="header-anchor" href="#设置允许远程登录-root" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">nano /etc/ssh/sshd_config</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Authentication:</span></span>
<span class="line"><span style="color:#A6ACCD;">LoginGraceTime 120</span></span>
<span class="line"><span style="color:#A6ACCD;">#PermitRootLogin without-password     //注释此行</span></span>
<span class="line"><span style="color:#A6ACCD;">PermitRootLogin yes                             //加入此行</span></span>
<span class="line"><span style="color:#A6ACCD;">StrictModes yes</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">重启服务</span></span>
<span class="line"><span style="color:#A6ACCD;">service ssh restart</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="用户账户说明" tabindex="-1">用户账户说明 <a class="header-anchor" href="#用户账户说明" aria-hidden="true">#</a></h2><h3 id="普通用户" tabindex="-1">普通用户 <a class="header-anchor" href="#普通用户" aria-hidden="true">#</a></h3><p>普通用户在系统上的任务是进行普通操作</p><h3 id="超级管理员" tabindex="-1">超级管理员 <a class="header-anchor" href="#超级管理员" aria-hidden="true">#</a></h3><p>管理员在系统上的任务是对普通用户和整个系统进行管理。对系统具有绝对的控制权，能够对系统进行一切操作。用 root 表示，root 用户在系统中拥有最高权限，默认下 Ubuntu 用户的 root 用户是不能登录的。</p><h3 id="安装时创建的系统用户" tabindex="-1">安装时创建的系统用户 <a class="header-anchor" href="#安装时创建的系统用户" aria-hidden="true">#</a></h3><p>此用户创建时被添加到 admin 组中，在 Ubuntu 中，admin 组中的用户默认是可以使用 <code>sudo</code> 命令来执行只有管理员才能执行的命令的。如果不使用 <code>sudo</code> 就是一个普通用户。</p><h2 id="组账户说明" tabindex="-1">组账户说明 <a class="header-anchor" href="#组账户说明" aria-hidden="true">#</a></h2><h3 id="私有组" tabindex="-1">私有组 <a class="header-anchor" href="#私有组" aria-hidden="true">#</a></h3><p>当创建一个用户时没有指定属于哪个组，Linux 就会建立一个与用户同名的私有组，此私有组只含有该用户。</p><h3 id="标准组" tabindex="-1">标准组 <a class="header-anchor" href="#标准组" aria-hidden="true">#</a></h3><p>当创建一个用户时可以选定一个标准组，如果一个用户同时属于多个组时，登录后所属的组为主组，其他的为附加组。</p><h2 id="账户系统文件说明" tabindex="-1">账户系统文件说明 <a class="header-anchor" href="#账户系统文件说明" aria-hidden="true">#</a></h2><h3 id="etc-passwd" tabindex="-1">/etc/passwd <a class="header-anchor" href="#etc-passwd" aria-hidden="true">#</a></h3><p>每一行代表一个账号，众多账号是系统正常运行所必须的，例如 bin，nobody 每行定义一个用户账户，此文件对所有用户可读。每行账户包含如下信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">root:x:0:0:root:/root:/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><strong>用户名：</strong> 就是账号，用来对应 UID，root UID 是 0。</li><li><strong>口令：</strong> 密码，早期 UNIX 系统密码存在此字段，由于此文件所有用户都可以读取，密码容易泄露，后来这个字段数据就存放到 /etc/shadow 中，这里只能看到 X。</li><li><strong>用户标示号（UID）：</strong> 系统内唯一，root 用户的 UID 为 0，普通用户从 1000 开始，1-999 是系统的标准账户，500-65536 是可登陆账号。</li><li><strong>组标示号（GID）：</strong> 与 /etc/group 相关用来规定组名和 GID 相对应。</li><li><strong>注释：</strong> 注释账号</li><li><strong>宿主目录（主文件夹）：</strong> 用户登录系统后所进入的目录 root 在 /root/itcast</li><li><strong>命令解释器（shell）：</strong> 指定该用户使用的 shell ，默认的是 /bin/bash</li></ul><h3 id="etc-shadow" tabindex="-1">/etc/shadow <a class="header-anchor" href="#etc-shadow" aria-hidden="true">#</a></h3><p>为了增加系统的安全性，用户口令通常用 shadow passwords 保护。只有 root 可读。每行包含如下信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">root:$6$Reu571.V$Ci/kd.OTzaSGU.TagZ5KjYx2MLzQv2IkZ24E1.yeTT3Pp4o/yniTjus/rRaJ92Z18MVy6suf1W5uxxurqssel.:17465:0:99999:7:::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li></li></ul><p><strong>账号名称：</strong> 需要和 /etc/passwd 一致。</p><ul><li></li></ul><p>密码：</p><p>经过加密，虽然加密，但不表示不会被破解，该文件默认权限如下：</p><ul><li>-rw------- 1 root root 1560 Oct 26 17:20 passwd-</li><li>只有root能都读写</li><li></li></ul><p><strong>最近修改密码日期：</strong> 从1970-1-1起，到用户最后一次更改口令的天数</p><ul><li></li></ul><p><strong>密码最小时间间隔：</strong> 从1970-1-1起，到用户可以更改口令的天数</p><ul><li></li></ul><p><strong>密码最大时间间隔：</strong> 从1970-1-1起，必须更改的口令天数</p><ul><li></li></ul><p><strong>密码到期警告时间：</strong> 在口令过期之前几天通知</p><ul><li></li></ul><p><strong>密码到期后账号宽限时间</strong></p><ul><li></li></ul><p><strong>密码到期禁用账户时间：</strong> 在用户口令过期后到禁用账户的天数</p><ul><li></li></ul><p><strong>保留</strong></p><h3 id="etc-group" tabindex="-1">/etc/group <a class="header-anchor" href="#etc-group" aria-hidden="true">#</a></h3><p>用户组的配置文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">root:x:0:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><strong>用户组名称</strong></li><li><strong>用户组密码：</strong> 给用户组管理员使用，通常不用</li><li><strong>GID：</strong> 用户组的ID</li><li><strong>此用户支持的账号名称：</strong> 一个账号可以加入多个用户组，例如想要 itcast 加入 root 这个用户组，将该账号填入该字段即可 root❌0:root, icast 将用户进行分组是 Linux 对用户进行管理及控制访问权限的一种手段。一个中可以有多个用户，一个用户可以同时属于多个组。该文件对所有用户可读。</li></ul><h3 id="etc-gshadow" tabindex="-1">/etc/gshadow <a class="header-anchor" href="#etc-gshadow" aria-hidden="true">#</a></h3><p>该文件用户定义用户组口令，组管理员等信息只有root用户可读。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">root:\\*::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><strong>用户组名</strong></li><li><strong>密码列</strong></li><li><strong>用户组管理员的账号</strong></li><li><strong>用户组所属账号</strong></li></ul><h2 id="账户管理常用命令" tabindex="-1">账户管理常用命令 <a class="header-anchor" href="#账户管理常用命令" aria-hidden="true">#</a></h2><h3 id="增加用户" tabindex="-1">增加用户 <a class="header-anchor" href="#增加用户" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">useradd 用户名</span></span>
<span class="line"><span style="color:#A6ACCD;">useradd -u (UID号)</span></span>
<span class="line"><span style="color:#A6ACCD;">useradd -p (口令)</span></span>
<span class="line"><span style="color:#A6ACCD;">useradd -g (分组)</span></span>
<span class="line"><span style="color:#A6ACCD;">useradd -s (SHELL)</span></span>
<span class="line"><span style="color:#A6ACCD;">useradd -d (用户目录)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如：<code>useradd lusifer</code></p><p>增加用户名为 lusifer 的账户</p><h3 id="修改用户" tabindex="-1">修改用户 <a class="header-anchor" href="#修改用户" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">usermod -u (新UID)</span></span>
<span class="line"><span style="color:#A6ACCD;">usermod -d (用户目录)</span></span>
<span class="line"><span style="color:#A6ACCD;">usermod -g (组名)</span></span>
<span class="line"><span style="color:#A6ACCD;">usermod -s (SHELL)</span></span>
<span class="line"><span style="color:#A6ACCD;">usermod -p (新口令)</span></span>
<span class="line"><span style="color:#A6ACCD;">usermod -l (新登录名)</span></span>
<span class="line"><span style="color:#A6ACCD;">usermod -L (锁定用户账号密码)</span></span>
<span class="line"><span style="color:#A6ACCD;">usermod -U (解锁用户账号)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如：<code>usermod -u 1024 -g group2 -G root lusifer</code></p><p>将 lusifer 用户 uid 修改为 1024，默认组改为系统中已经存在的 group2，并且加入到系统管理员组</p><h3 id="删除用户" tabindex="-1">删除用户 <a class="header-anchor" href="#删除用户" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">userdel 用户名 (删除用户账号)</span></span>
<span class="line"><span style="color:#A6ACCD;">userdel -r 删除账号时同时删除目录</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如：<code>userdel -r lusifer</code></p><p>删除用户名为 lusifer 的账户并同时删除 lusifer 的用户目录</p><h3 id="组账户维护" tabindex="-1">组账户维护 <a class="header-anchor" href="#组账户维护" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">groupadd 组账户名 (创建新组)</span></span>
<span class="line"><span style="color:#A6ACCD;">groupadd -g 指定组GID</span></span>
<span class="line"><span style="color:#A6ACCD;">groupmod -g 更改组的GID</span></span>
<span class="line"><span style="color:#A6ACCD;">groupmod -n 更改组账户名</span></span>
<span class="line"><span style="color:#A6ACCD;">groupdel 组账户名 (删除指定组账户)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="口令维护" tabindex="-1">口令维护 <a class="header-anchor" href="#口令维护" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">passwd 用户账户名 (设置用户口令)</span></span>
<span class="line"><span style="color:#A6ACCD;">passwd -l 用户账户名 (锁定用户账户)</span></span>
<span class="line"><span style="color:#A6ACCD;">passwd -u 用户账户名 (解锁用户账户)</span></span>
<span class="line"><span style="color:#A6ACCD;">passwd -d 用户账户名 (删除账户口令)</span></span>
<span class="line"><span style="color:#A6ACCD;">gpasswd -a 用户账户名 组账户名 (将指定用户添加到指定组)</span></span>
<span class="line"><span style="color:#A6ACCD;">gpasswd -d 用户账户名 组账户名 (将用户从指定组中删除)</span></span>
<span class="line"><span style="color:#A6ACCD;">gpasswd -A 用户账户名 组账户名 (将用户指定为组的管理员)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="用户和组状态" tabindex="-1">用户和组状态 <a class="header-anchor" href="#用户和组状态" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">su 用户名(切换用户账户)</span></span>
<span class="line"><span style="color:#A6ACCD;">id 用户名(显示用户的UID，GID)</span></span>
<span class="line"><span style="color:#A6ACCD;">whoami (显示当前用户名称)</span></span>
<span class="line"><span style="color:#A6ACCD;">groups (显示用户所属组)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,77),t=[o];function i(p,r,c,d,h,u){return a(),n("div",null,t)}const A=s(l,[["render",i]]);export{C as __pageData,A as default};
