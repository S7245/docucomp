---
slug: first-blog-post
title: Linux搭建Web服务器
authors:
  name: Sam
  title: --
  url: https://github.com/wgao19
  image_url: https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/EUse-pic-0000109.png
tags: [Nginx, Linux]
---

## 安装

安装环境：

```sh
yum -y install gcc 
yum -y install zlib zlib-devel 
yum -y install pcre pcre-devel
yum -y install openssl openssl-devel
```

[nginx](https://nginx.org/en/download.html) 找到`Mainline version`查看版本，上传到服务器：`/usr/local/`，

```sh
cd /usr/local/
wget https://nginx.org/download/nginx-1.25.3.tar.gz

# 解压
tar -zxvf nginx-1.25.3.tar.gz

# 把 nginx-1.25.3 文件名改为： nginx

# 编译前检查命令
./configure --prefix=/usr/local/nginx
# 编译
make & make install
```

查看文件：`ls -l`

```
[root@iZwz9gsb21uph8o66szfkcZ nginx]# ls -l
总用量 880
drwxr-xr-x 6   1001 1001   4096 10月 30 16:33 auto
-rw-r--r-- 1   1001 1001 325032 10月 24 21:46 CHANGES
-rw-r--r-- 1   1001 1001 497029 10月 24 21:46 CHANGES.ru
drwx------ 2 nobody root   4096 10月 30 16:43 client_body_temp
drwxr-xr-x 2   1001 1001   4096 10月 30 16:33 conf
-rwxr-xr-x 1   1001 1001   2611 10月 24 21:46 configure
drwxr-xr-x 4   1001 1001   4096 10月 30 16:33 contrib
drwx------ 2 nobody root   4096 10月 30 16:43 fastcgi_temp
drwxr-xr-x 2   1001 1001   4096 10月 30 16:33 html
-rw-r--r-- 1   1001 1001   1397 10月 24 21:46 LICENSE
drwxr-xr-x 2 root   root   4096 10月 30 16:47 logs
-rw-r--r-- 1 root   root    438 10月 30 16:34 Makefile
drwxr-xr-x 2   1001 1001   4096 10月 30 16:33 man
drwxr-xr-x 3 root   root   4096 10月 30 16:43 objs
drwx------ 2 nobody root   4096 10月 30 16:43 proxy_temp
-rw-r--r-- 1   1001 1001     49 10月 24 21:46 README
drwxr-xr-x 2 root   root   4096 10月 30 16:43 sbin    <===== 编译后的文件
drwx------ 2 nobody root   4096 10月 30 16:43 scgi_temp
drwxr-xr-x 9   1001 1001   4096 10月 30 16:33 src
drwx------ 2 nobody root   4096 10月 30 16:43 uwsgi_temp
```

创建 `logs` 文件：

```sh
cd /usr/local/nginx
mkdir logs
```

操作：

```sh
cd /usr/local/nginx/sbin

# 启动 nginx
./nginx

# 关闭 nginx
./nginx -s stop

# 重启
./nginx -s reload

```

开机启动 nginx：

```sh
vim /etc/rc.local
# 最底部增加这一行
/usr/local/nginx/sbin/nginx
```


启动后查看进程：

```sh
# 查询进程号
ps -ef|grep nginx

# 停止进程
kill -QUIT 进程号

# 快速停止
kill -TERM 主进程号

# 强制停止
kill -9 主进程号
```

QA：80端口被占用，需要解除

```sh
# 查看端口
netstat -ntlp
```
