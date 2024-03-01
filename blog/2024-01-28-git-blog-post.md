---
slug: git-blog-post
title: Git使用学习
authors: sam
tags: [Git]
---

[Git 命令](https://geek-docs.com/git/git-cmds/git-merge-and-merge-conflict.html)

## Git的常见命令

```shell
# 初始化创建git仓库   
git init  

# 查看git状态（文件是否进行了添加、提交操作）  
# 红色字体表示没有进行添加操作的文件
git status

# 添加，将指定文件添加到暂存区
git add <filename>
# 提交，将暂存区的文件提交到历史仓库
git commit -m "描述信息"
# 查看日志（git提交的历史日志）
git log

# 撤回已经 add 的文件
git restore --staged <filename>

# 克隆指定分支代码
git clone --single-branch --branch 分支名 git远程仓库地址
git pull git远程仓库地址 分支名
```


`git merge`

```sh
# 将指定的提交合并到当前活动分支
```


## 分支管理操作代码

```sh
git branch "分支名（dev）": 创建命令 
git checkout "分支名（dev）": 切换命令

# 把dev分支合并到master
git checkout master
# 合并分支
git merge "分支名（dev）"
# 删除分支
git branch -d "分支名" 

# 当前在 dev 需要把 master 代码合并到 dev
git merge master
```

### 在分支上有新文件，合并到主干


```
liushan@liushandeMBP test-git % git pull
Updating 26eb809..5be0cc3
error: Your local changes to the following files would be overwritten by merge:
	code-file.md
Please commit your changes or stash them before you merge.
Aborting

一般是使用了git pull相关的命令同步远程仓库到本地引起的，而本地的修改无法上传到远程仓库，导致两者都不能兼备
```


```sh
# 备份当前的工作区的内容，让工作区保证和上次提交的内容一致。同时，将当前的工作区内容保存到Git栈中
git stash  
# 远程仓库有提交的话
git pull 
git commit
# 从Git栈中读取最近一次保存的内容，恢复工作区的相关内容
git stash pop  
在终端下依次输入上述代码就可以让服务器上的代码更新到了本地，而且你本地修改的代码也没有被覆盖
之后使用add，commit，push命令即可更新本地代码到服务器
```


### git 把 主干最新代码更新到分支

```sh
% git branch 
  dev
  * master

% git checkout dev
  Switched to branch 'dev'

# 从远程仓库拉取最新的主干代码并合并到本地分支
# 建议先提交或者保存好当前工作区的修改，因为此过程会自动合并代码，可能导致冲突。
% git pull origin master:dev

```


```
# 删除untracked files
git clean -f
 
# 删除untracked files和目录
git clean -fd
 
# 删除untracked files和目录，和gitignore的untrack files/目录
git clean -xfd
 
# 加上 -n 参数，可以预览将会删掉哪些文件，目录。防止重要文件误删
git clean -nxfd
git clean -nf
git clean -nfd
```

变更.gitignore规则后不生效的解决办法

```
git rm -r --cached .
git add .
git commit
git push
```

概述：.gitignore只能忽略掉那些原来没有被追踪（track）的文件，所以如果有一些文件提交到了git仓库当中，接受了git追踪,那么直接修改.gitignore是无效的。

比如一些配置文件，本地还要，直接删除仓库中的文件，也就删除了跟踪，提交上去后再配置gitignore就生效了


```sh
# 先执行git rm --cached package.json 或者 git rm --cached src/main.js，然后提交上去，后面这个文件的改动就会被忽略了

git rm --cached pachage.json
git rm --cached src/main.js

# 比如node_modules文件夹
git rm -r --cached node_modules
```


git 删除远程分支

```sh
git push --delete origin <branch_name>
```


```
% git pull origin lvhs
From https://e.coding.net/xxx/admin/merchant
 * branch            lvhs       -> FETCH_HEAD
hint: Pulling without specifying how to reconcile divergent branches is
hint: discouraged. You can squelch this message by running one of the following
hint: commands sometime before your next pull:
hint: 
hint:   git config pull.rebase false  # merge (the default strategy)
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint: 
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.

原因是，当前文件的branch和要pull的branch名字不一样，是两个分支。对于两个branch，git不能直接操作，需要你指定什么操作。
要操作的提示也直接给你提醒了：
```



















