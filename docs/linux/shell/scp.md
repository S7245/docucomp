# scp

```sh
# 拷贝文件到远程服务器
scp /path/to/Xcode_14.xip username@your_server_ip:/path/to/destination

# 拷贝文件夹到远程服务器
scp -r /path/to/folder username@your_server_ip:/path/to/destination

# 从远程将文件拷回本地
scp username@your_server_ip:/usr/local/src/*.log /root/

# 从远程将文件夹拷回本地
scp  -r username@your_server_ip:/home/test2 /home/test1
```

`scp`拷贝文件到远程服务器，如何免于每次都输入密码：

```sh
# 在本地计算机上生成SSH密钥对（如果已有，可以跳过这一步）
ssh-keygen -t rsa

# 将生成的公钥复制到远程服务器上指定的位置。
# -i 指定公钥文件
ssh-copy-id -i /root/.ssh/id_rsa.pub user@remote_host

# 确保本地计算机上的~/.ssh目录有写权限，并且SSH服务运行正常。
# 在远程服务器上，用户的~/.ssh目录下应该有authorized_keys文件，并且该文件有正确的权限（通常是600）。

# 使用SCP时，就可以直接传输文件，不需要输入密码。
scp -i ~/.ssh/id_rsa file.txt  user@remote_host:/path/to/destination/
```

```sh
# highlight-next-line
% ssh-keygen -t rsa -C 'xxx@qq.com'
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/xxx/.ssh/id_rsa): id_rsa_password_free

# 会在 /Users/xxx/.ssh/ 文件夹中生成 id_rsa_password_free、id_rsa_password_free.pub 两个密钥文件
```

```sh
例如在A机器内执行如下命令，将自己的公钥传给B机器（B机器的ip地址为192.168.134.141，以root用户登录）
ssh-copy-id  -i /root/.ssh/id_rsa.pub root@192.168.134.141

```



```sh
# 查看是否已经添加了对应主机的密钥
ssh-keygen -F 47.106.165.39
# 删除主机密钥
ssh-keygen -R 47.106.165.39

# 使用sftp登陆远程服务器
sftp root@192.168.0.1
# 指定端口号
sftp -oPort=22 root@192.168.0.1

# 使用sftp进行文件上传下载
# get [-afPpRr] remote [local] 

# 下载远程文件到本地目录
get /tmp/test.c ~/
# 下载远程文件夹到本地目录
get -r /tmp/ ~/

# 上传
# put [-afPpRr] local [remote]

# 上传本地文件到远程文件夹
put ~/test.c /tmp/

# 上传本地文件夹到远程目录(会上传本地文件夹下的所有文件)
put ~/test /tmp/

```

给文件授权：

```sh
# 444 r--r--r--
# 600 rw-------
# 644 rw-r--r--
# 666 rw-rw-rw-
# 700 rwx------
# 744 rwxr--r--
# 755 rwxr-xr-x
# 777 rwxrwxrwx

% ls -al                            
-rw-r--r--@  1 username  staff  6148  4 19 11:07 .DS_Store
-rw-r--r--   1 username  staff    88  3  9 05:32 config

% chmod 600 config
rw-------   1 username  staff    88  3  9 05:32 config
```

## 删除远程服务器文件

```sh
ssh -i ~/.ssh"$remote_user@$remote_host" "rm -rf $remote_path$buildOutPut"
```
