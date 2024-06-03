# find.md

```sh
# 查找在当前目录及其子目录下，今天之后被修改过的所有文件，mtime 0，表示当天0天
find . -type f -mtime 0

# 查找在过去7天内修改的文件，可以使用mtime 7
find . -type f -mtime 0
```