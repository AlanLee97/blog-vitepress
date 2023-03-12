import{_ as s,o as n,c as a,b as l}from"./app.d2d47940.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Git 常用命令","slug":"git-常用命令","link":"#git-常用命令","children":[{"level":3,"title":"仓库","slug":"仓库","link":"#仓库","children":[]},{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"增加/删除文件","slug":"增加-删除文件","link":"#增加-删除文件","children":[]},{"level":3,"title":"代码提交","slug":"代码提交","link":"#代码提交","children":[]},{"level":3,"title":"分支","slug":"分支","link":"#分支","children":[]},{"level":3,"title":"标签","slug":"标签","link":"#标签","children":[]},{"level":3,"title":"查看信息","slug":"查看信息","link":"#查看信息","children":[]},{"level":3,"title":"远程同步","slug":"远程同步","link":"#远程同步","children":[]},{"level":3,"title":"撤销","slug":"撤销","link":"#撤销","children":[]},{"level":3,"title":"其他","slug":"其他","link":"#其他","children":[]}]}],"relativePath":"knowledges/tech/tool/git/Git命令大全.md","lastUpdated":1678618356000}'),p={name:"knowledges/tech/tool/git/Git命令大全.md"},e=l(`<h2 id="git-常用命令" tabindex="-1">Git 常用命令 <a class="header-anchor" href="#git-常用命令" aria-hidden="true">#</a></h2><h3 id="仓库" tabindex="-1">仓库 <a class="header-anchor" href="#仓库" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 在当前目录新建一个Git代码库</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git init</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个目录，将其初始化为Git代码库</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git init [project-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 下载一个项目和它的整个代码历史</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git clone [url]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 显示当前的Git配置</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config --list</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 编辑Git配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config -e [--global]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置提交代码时的用户信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config [--global] user.name &quot;[name]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config [--global] user.email &quot;[email address]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="增加-删除文件" tabindex="-1">增加/删除文件 <a class="header-anchor" href="#增加-删除文件" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 添加指定文件到暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add [file1] [file2] ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加指定目录到暂存区，包括子目录</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add [dir]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加当前目录的所有文件到暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add .</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加每个变化前，都会要求确认</span></span>
<span class="line"><span style="color:#A6ACCD;"># 对于同一个文件的多处变化，可以实现分次提交</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add -p</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git rm [file1] [file2] ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 停止追踪指定文件，但该文件会保留在工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git rm --cached [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 改名文件，并且将这个改名放入暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git mv [file-original] [file-renamed]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="代码提交" tabindex="-1">代码提交 <a class="header-anchor" href="#代码提交" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 提交暂存区到仓库区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit -m [message]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 提交暂存区的指定文件到仓库区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit [file1] [file2] ... -m [message]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 提交工作区自上次commit之后的变化，直接到仓库区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit -a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 提交时显示所有diff信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用一次新的commit，替代上一次提交</span></span>
<span class="line"><span style="color:#A6ACCD;"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit --amend -m [message]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 重做上一次commit，并包括指定文件的新变化</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit --amend [file1] [file2] ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="分支" tabindex="-1">分支 <a class="header-anchor" href="#分支" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 列出所有本地分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 列出所有远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -r</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 列出所有本地分支和远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个分支，并切换到该分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout -b [branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个分支，指向指定commit</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch [branch] [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch --track [branch] [remote-branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 切换到指定分支，并更新工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 切换到上一个分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout -</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 建立追踪关系，在现有分支与指定的远程分支之间</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch --set-upstream [branch] [remote-branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 合并指定分支到当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git merge [branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 选择一个commit，合并进当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git cherry-pick [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -d [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push origin --delete [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -dr [remote/branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="标签" tabindex="-1">标签 <a class="header-anchor" href="#标签" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 列出所有tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git tag</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个tag在当前commit</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git tag [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个tag在指定commit</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git tag [tag] [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除本地tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git tag -d [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除远程tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push origin :refs/tags/[tagName]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看tag信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git show [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 提交指定tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push [remote] [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 提交所有tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push [remote] --tags</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout -b [branch] [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="查看信息" tabindex="-1">查看信息 <a class="header-anchor" href="#查看信息" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 显示有变更的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git status</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示当前分支的版本历史</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log --stat</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log -S [keyword]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示某个commit之后的所有变动，每个commit占据一行</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log [tag] HEAD --pretty=format:%s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log [tag] HEAD --grep feature</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log --follow [file]</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git whatchanged [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log -p [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示过去5次提交</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log -5 --pretty --oneline</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示所有提交过的用户，按提交次数排序</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git shortlog -sn</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示指定文件是什么人在什么时间修改过</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git blame [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示暂存区和上一个commit的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff --cached [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff HEAD</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示两次提交之间的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff [first-branch]...[second-branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示今天你写了多少行代码</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff --shortstat &quot;@{0 day ago}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示某次提交的元数据和内容变化</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git show [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示某次提交发生变化的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git show --name-only [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示某次提交时，某个文件的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git show [commit]:[filename]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示当前分支的最近几次提交</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git reflog</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="远程同步" tabindex="-1">远程同步 <a class="header-anchor" href="#远程同步" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 下载远程仓库的所有变动</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git fetch [remote]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示所有远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git remote -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示某个远程仓库的信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git remote show [remote]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 增加一个新的远程仓库，并命名</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git remote add [shortname] [url]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 取回远程仓库的变化，并与本地分支合并</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git pull [remote] [branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 上传本地指定分支到远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push [remote] [branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push [remote] --force</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 推送所有分支到远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push [remote] --all</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="撤销" tabindex="-1">撤销 <a class="header-anchor" href="#撤销" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 恢复暂存区的指定文件到工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 恢复某个commit的指定文件到暂存区和工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout [commit] [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 恢复暂存区的所有文件到工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout .</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 重置暂存区与工作区，与上一次commit保持一致</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset --hard</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset --hard [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset --keep [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个commit，用来撤销指定commit</span></span>
<span class="line"><span style="color:#A6ACCD;"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git revert [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">暂时将未提交的变化移除，稍后再移入</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git stash</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git stash pop</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 生成一个可供发布的压缩包</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git archive</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,21),c=[e];function o(t,i,C,A,r,y){return n(),a("div",null,c)}const d=s(p,[["render",o]]);export{g as __pageData,d as default};
