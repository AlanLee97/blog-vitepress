import{_ as t,o as e,c as l,b as d}from"./app.d2d47940.js";const c=JSON.parse('{"title":"Linux 开关机命令","description":"","frontmatter":{"date":"2020-01-24T00:00:00.000Z","categories":["服务器"],"tags":["linux"]},"headers":[{"level":2,"title":"重启","slug":"重启","link":"#重启","children":[]},{"level":2,"title":"关机","slug":"关机","link":"#关机","children":[]}],"relativePath":"knowledges/tech/server/linux-centos/Linux05 - 开关机命令.md","lastUpdated":1678618356000}'),n={name:"knowledges/tech/server/linux-centos/Linux05 - 开关机命令.md"},a=d('<h1 id="linux-开关机命令" tabindex="-1">Linux 开关机命令 <a class="header-anchor" href="#linux-开关机命令" aria-hidden="true">#</a></h1><p>shutdown 命令可以用来进行关机程序，并且在关机以前传送讯息给所有使用者正在执行的程序，shutdown 也可以用来重开机。</p><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">语法</th><th style="text-align:left;">参数</th><th style="text-align:left;">参数说明</th></tr></thead><tbody><tr><td style="text-align:left;">shutdown</td><td style="text-align:left;">shutdown [-t seconds] [-rkhncfF] time [message]</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">-t seconds</td><td style="text-align:left;">设定在几秒钟之后进行关机程序</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">-k</td><td style="text-align:left;">并不会真的关机，只是将警告讯息传送给所有只用者</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">-r</td><td style="text-align:left;">关机后重新开机（重启）</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">-h</td><td style="text-align:left;">关机后停机</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">-n</td><td style="text-align:left;">不采用正常程序来关机，用强迫的方式杀掉所有执行中的程序后自行关机</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">-c</td><td style="text-align:left;">取消目前已经进行中的关机动作</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">-f</td><td style="text-align:left;">关机时，不做 fcsk 动作(检查 Linux 档系统)</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">-F</td><td style="text-align:left;">关机时，强迫进行 fsck 动作</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">time</td><td style="text-align:left;">设定关机的时间</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">message</td><td style="text-align:left;">传送给所有使用者的警告讯息</td></tr></tbody></table><h2 id="重启" tabindex="-1">重启 <a class="header-anchor" href="#重启" aria-hidden="true">#</a></h2><ul><li>reboot</li><li>shutdown -r now</li></ul><h2 id="关机" tabindex="-1">关机 <a class="header-anchor" href="#关机" aria-hidden="true">#</a></h2><ul><li>shutdown -h now</li></ul>',7),s=[a];function i(r,x,f,g,y,h){return e(),l("div",null,s)}const _=t(n,[["render",i]]);export{c as __pageData,_ as default};
