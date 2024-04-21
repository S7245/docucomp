# lsof(List Open Files)

`lsof` 可以用来列出被各种进程打开的文件信息，记住：linux 下 “一切皆文件”，包括但不限于 pipes, sockets, directories, devices, 等等。
因此，使用 lsof ，你可以获取任何被打开文件的各种信息，只需输入 lsof 就可以生成大量的信息，因为 lsof 需要访问核心内存和各种文件，所以必须以 root 用户的身份运行它才能够充分地发挥其功能。

```sh
# 列出所有当前正在监听的端口和进程（Mac Terminal）
sudo lsof -i -P | grep LISTEN
```