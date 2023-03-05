
# 思维导图
![](https://cdn.nlark.com/yuque/0/2022/jpeg/743297/1642330275680-b7c5622b-4fa0-4768-a5fe-758efdcdd314.jpeg)

# Git工作流程
一般工作流程如下：

- 克隆 Git 资源作为工作目录。
- 在克隆的资源上添加或修改文件。
- 如果其他人修改了，你可以更新资源。
- 在提交前查看修改。
- 提交修改。
- 在修改完成后，如果发现错误，可以撤回提交并再次修改并提交。

下图展示了 Git 的工作流程：
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1640656570891-266a9b1e-ee92-4137-b979-3a51d7cdc6de.png#clientId=u35339dc3-1a90-4&from=paste&height=699&id=u5d16f1b7&name=image.png&originHeight=699&originWidth=614&originalType=binary&ratio=1&rotation=0&showTitle=false&size=51471&status=done&style=none&taskId=ud70cd805-a171-4a5b-bb9d-7fe2566c508&title=&width=614)

# 基本概念
我们先来理解下Git 工作区、暂存区和版本库概念

- **工作区：**就是你在电脑里能看到的目录。
- **暂存区：**英文叫stage, 或index。一般存放在"git目录"下的index文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。
- **版本库：**工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。

下面这个图展示了工作区、版本库中的暂存区和版本库之间的关系：
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1640656706752-1418fa13-e518-479d-bd96-7c70dadd21aa.png#clientId=u35339dc3-1a90-4&from=paste&id=u792e5454&name=image.png&originHeight=327&originWidth=698&originalType=url&ratio=1&rotation=0&showTitle=false&size=152860&status=done&style=none&taskId=u4d4c8466-50d2-47ae-9a97-dbb115fd8bf&title=)

1. 图中左侧为工作区，右侧为版本库。在版本库中标记为 "index" 的区域是暂存区（stage, index），标记为 "master" 的是 master 分支所代表的目录树。
2. 图中我们可以看出此时 "HEAD" 实际是指向 master 分支的一个"游标"。所以图示的命令中出现 HEAD 的地方可以用 master 来替换。
3. 图中的 objects 标识的区域为 Git 的对象库，实际位于 ".git/objects" 目录下，里面包含了创建的各种对象及内容。

**命令操作解析**

- 当对工作区修改（或新增）的文件执行 "git add" 命令时，暂存区的目录树被更新，同时工作区修改（或新增）的文件内容被写入到对象库中的一个新的对象中，而该对象的ID被记录在暂存区的文件索引中。
- 当执行提交操作（git commit）时，暂存区的目录树写到版本库（对象库）中，master 分支会做相应的更新。即 master 指向的目录树就是提交时暂存区的目录树。
- 当执行 "git reset HEAD" 命令时，暂存区的目录树会被重写，被 master 分支指向的目录树所替换，但是工作区不受影响。
- 当执行 "git rm --cached file" 命令时，会直接从暂存区删除文件，工作区则不做出改变。
- 当执行 "git checkout ." 或者 "git checkout -- file" 命令时，会用暂存区全部或指定的文件替换工作区的文件。这个操作很危险，会清除工作区中未添加到暂存区的改动。
- 当执行 "git checkout HEAD ." 或者 "git checkout HEAD file" 命令时，会用 HEAD 指向的 master 分支中的全部或者部分文件替换暂存区和以及工作区中的文件。这个命令也是极具危险性的，因为不但会清除工作区中未提交的改动，也会清除暂存区中未提交的改动。
# Git 常用命令
## 仓库
```bash
# 在当前目录新建一个Git代码库 
$ git init 

# 新建一个目录，将其初始化为Git代码库 
$ git init [project-name] 

# 下载一个项目和它的整个代码历史 
$ git clone [url] 
```
## 配置
```bash
# 显示当前的Git配置 
$ git config --list 

# 编辑Git配置文件 
$ git config -e [--global] 

# 设置提交代码时的用户信息 
$ git config [--global] user.name "[name]" 
$ git config [--global] user.email "[email address]" 
```
## 增加/删除文件
```bash
# 添加指定文件到暂存区 
$ git add [file1] [file2] ... 

# 添加指定目录到暂存区，包括子目录 
$ git add [dir] 

# 添加当前目录的所有文件到暂存区 
$ git add . 

# 添加每个变化前，都会要求确认 
# 对于同一个文件的多处变化，可以实现分次提交 
$ git add -p 

# 删除工作区文件，并且将这次删除放入暂存区 
$ git rm [file1] [file2] ... 

# 停止追踪指定文件，但该文件会保留在工作区 
$ git rm --cached [file] 

# 改名文件，并且将这个改名放入暂存区 
$ git mv [file-original] [file-renamed] 
```
## 代码提交
```bash
# 提交暂存区到仓库区 
$ git commit -m [message] 

# 提交暂存区的指定文件到仓库区 
$ git commit [file1] [file2] ... -m [message] 

# 提交工作区自上次commit之后的变化，直接到仓库区 
$ git commit -a 

# 提交时显示所有diff信息 
$ git commit -v 

# 使用一次新的commit，替代上一次提交 
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息 
$ git commit --amend -m [message] 

# 重做上一次commit，并包括指定文件的新变化 
$ git commit --amend [file1] [file2] ... 
```
## 分支
```bash
# 列出所有本地分支 
$ git branch 

# 列出所有远程分支 
$ git branch -r 

# 列出所有本地分支和远程分支 
$ git branch -a 

# 新建一个分支，但依然停留在当前分支 
$ git branch [branch-name] 

# 新建一个分支，并切换到该分支 
$ git checkout -b [branch] 

# 新建一个分支，指向指定commit 
$ git branch [branch] [commit] 

# 新建一个分支，与指定的远程分支建立追踪关系 
$ git branch --track [branch] [remote-branch] 

# 切换到指定分支，并更新工作区 
$ git checkout [branch-name] 

# 切换到上一个分支 
$ git checkout - 

# 建立追踪关系，在现有分支与指定的远程分支之间 
$ git branch --set-upstream [branch] [remote-branch] 

# 合并指定分支到当前分支 
$ git merge [branch] 

# 选择一个commit，合并进当前分支 
$ git cherry-pick [commit] 

# 删除分支 
$ git branch -d [branch-name] 

# 删除远程分支 
$ git push origin --delete [branch-name] 
$ git branch -dr [remote/branch] 
```
## 标签
```bash
# 列出所有tag 
$ git tag 

# 新建一个tag在当前commit 
$ git tag [tag] 

# 新建一个tag在指定commit 
$ git tag [tag] [commit] 

# 删除本地tag 
$ git tag -d [tag] 

# 删除远程tag 
$ git push origin :refs/tags/[tagName] 

# 查看tag信息 
$ git show [tag] 

# 提交指定tag 
$ git push [remote] [tag] 

# 提交所有tag 
$ git push [remote] --tags 

# 新建一个分支，指向某个tag 
$ git checkout -b [branch] [tag] 
```
## 查看信息
```bash
# 显示有变更的文件 
$ git status 

# 显示当前分支的版本历史 
$ git log 

# 显示commit历史，以及每次commit发生变更的文件 
$ git log --stat 

# 搜索提交历史，根据关键词 
$ git log -S [keyword] 

# 显示某个commit之后的所有变动，每个commit占据一行 
$ git log [tag] HEAD --pretty=format:%s 

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件 
$ git log [tag] HEAD --grep feature 

# 显示某个文件的版本历史，包括文件改名 
$ git log --follow [file] 
$ git whatchanged [file] 

# 显示指定文件相关的每一次diff 
$ git log -p [file] 

# 显示过去5次提交 
$ git log -5 --pretty --oneline 

# 显示所有提交过的用户，按提交次数排序 
$ git shortlog -sn 

# 显示指定文件是什么人在什么时间修改过 
$ git blame [file] 

# 显示暂存区和工作区的差异 
$ git diff 

# 显示暂存区和上一个commit的差异 
$ git diff --cached [file] 

# 显示工作区与当前分支最新commit之间的差异 
$ git diff HEAD 

# 显示两次提交之间的差异 
$ git diff [first-branch]...[second-branch] 

# 显示今天你写了多少行代码 
$ git diff --shortstat "@{0 day ago}" 

# 显示某次提交的元数据和内容变化 
$ git show [commit] 

# 显示某次提交发生变化的文件 
$ git show --name-only [commit] 

# 显示某次提交时，某个文件的内容 
$ git show [commit]:[filename] 

# 显示当前分支的最近几次提交 
$ git reflog 
```
## 远程同步
```bash
# 下载远程仓库的所有变动 
$ git fetch [remote] 

# 显示所有远程仓库 
$ git remote -v 

# 显示某个远程仓库的信息 
$ git remote show [remote] 

# 增加一个新的远程仓库，并命名 
$ git remote add [shortname] [url] 

# 取回远程仓库的变化，并与本地分支合并 
$ git pull [remote] [branch] 

# 上传本地指定分支到远程仓库 
$ git push [remote] [branch] 

# 强行推送当前分支到远程仓库，即使有冲突 
$ git push [remote] --force 

# 推送所有分支到远程仓库 
$ git push [remote] --all 
```
## 撤销
```bash
# 恢复暂存区的指定文件到工作区 
$ git checkout [file] 

# 恢复某个commit的指定文件到暂存区和工作区 
$ git checkout [commit] [file] 

# 恢复暂存区的所有文件到工作区 
$ git checkout . 

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变 
$ git reset [file] 

# 重置暂存区与工作区，与上一次commit保持一致 
$ git reset --hard 

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变 
$ git reset [commit] 

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致 
$ git reset --hard [commit] 

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变 
$ git reset --keep [commit] 

# 新建一个commit，用来撤销指定commit 
# 后者的所有变化都将被前者抵消，并且应用到当前分支 
$ git revert [commit] 

# 暂时将未提交的变化移除，稍后再移入 
$ git stash 
$ git stash pop 
```
## 其他
```bash
# 生成一个可供发布的压缩包 
$ git archive
```
# 
# 常见git操作
#### 撤销远程提交

1. 查看提交记录
```bash
git log
```

2. 复制要回退到某个commit的commit_id
3. 撤销commit
```bash
git reset --soft commit_id
```

4. 强制推送当前修改
```bash
git push origin 分支名 --force
```

#### 重命名分支
**本地分支重命名**
语法：git branch -m old new
git branch -m xxx yyy：将名字为xxx的分支重命名为yyy
**远程分支重命名**

1. 将远程分支删除掉
2. 将本地分支重命名
3. 将本地分支推到远程

比如：将远程的dev重命名为develop
```bash
git push --delete origin dev
git branch -m dev develop
git push origin develop
```

# 
# 参考文章
> [W3CSchool | Git 教程](https://www.w3cschool.cn/git/git-tutorial.html)
> [gitee | git大全](https://gitee.com/all-about-git)

