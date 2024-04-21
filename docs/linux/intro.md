---
sidebar_position: 1
---

# JS Intro

## 特殊符号

- `$#`：是传给脚本的参数个数
- `$0`：是脚本本身的名字
- `$1`：是传递给该shell脚本的第一个参数
- `$2`：是传递给该shell脚本的第二个参数
- `$@`：是传给脚本的所有参数的列表
- `$*`：是以一个单字符串显示所有向脚本传递的参数，与位置变量不同，参数可超过9个
- `$$`：是脚本运行的当前进程ID号
- `$?`：是显示最后命令的退出状态，0表示没有错误，其他表示有错误

```sh
#!/bin/sh
echo "number:$#"
echo "filename:$0"
echo "first :$1"
echo "second:$2"
echo "arg:$@"
echo "allargs:$*"
echo "pid:$$"
if [ "$1" == 100 ]
then
 echo "命令退出状态：$?"
 exit 0 #参数正确，退出状态为0
else
 echo "命令退出状态：$?"
 exit 1 #参数错误，退出状态1
fi

# 2. 给test.sh赋予执行权限  chmod +x test.sh
# 3. 执行test.sh文件  ./test.sh start stop status restart
# number:0
# filename:./uploadmer.sh
# first :
# second:
# arg:
# allargs:
# pid:96864
# 命令退出状态：1
```

## 时间相关

## Mac相关

[40 个很有用的 Mac OS X Shell 脚本和终端命令](https://blog.csdn.net/yuanya/article/details/23442207?utm_medium=distribute.wap_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-23442207-blog-130606372.237^v3^wap_relevant_t0_download&spm=1001.2101.3001.4242.1)

## 标准输入输出

标准输入(stdin)、标准输出(stdout)、标准错误输出(stderr)介绍

### 标准输出(stdout)

```sh
echo "123" > /home/123.txt
echo "123" > /dev/null
```

```sh
printf '%s' 'content'
```