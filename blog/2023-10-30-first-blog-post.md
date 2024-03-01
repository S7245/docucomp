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

[gcc](https://ftp.gnu.org/gnu/glibc/)

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

## Nginx配置

```

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}
```


```
Please use python3.11 or python3.10 or python3.9 or python3.8 or python3.7 or python3.6.
```



## OpenSSL 更新版本

查看版本以及目录：`openssl version -a`

```
OpenSSL 1.0.2k-fips  26 Jan 2017
built on: reproducible build, date unspecified
platform: linux-x86_64
options:  bn(64,64) md2(int) rc4(16x,int) des(idx,cisc,16,int) idea(int) blowfish(idx) 
compiler: gcc -I. -I.. -I../include  -fPIC -DOPENSSL_PIC -DZLIB -DOPENSSL_THREADS -D_REENTRANT -DDSO_DLFCN -DHAVE_DLFCN_H -DKRB5_MIT -m64 -DL_ENDIAN -Wall -O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches   -m64 -mtune=generic -Wa,--noexecstack -DPURIFY -DOPENSSL_IA32_SSE2 -DOPENSSL_BN_ASM_MONT -DOPENSSL_BN_ASM_MONT5 -DOPENSSL_BN_ASM_GF2m -DRC4_ASM -DSHA1_ASM -DSHA256_ASM -DSHA512_ASM -DMD5_ASM -DAES_ASM -DVPAES_ASM -DBSAES_ASM -DWHIRLPOOL_ASM -DGHASH_ASM -DECP_NISTZ256_ASM
OPENSSLDIR: "/etc/pki/tls"
engines:  rdrand dynamic 
```

从[官网](https://www.openssl.org/source/)下载指定版本，上传到Linux。

```sh
# 解压
tar -xvf openssl-1.1.1w.tar

# 安装依赖
yum -y install gcc* 

# 执行文件安装路径
./config --prefix=/opt/openssl --openssldir=/usr/local/openssl

make & make install 

# 备份
whereis openssl 

# openssl: /usr/bin/openssl /usr/lib64/openssl /usr/include/openssl /usr/local/openssl /opt/openssl/bin/openssl /usr/share/man/man1/openssl.1ssl.gz

mv /usr/bin/openssl /usr/bin/openssl.old
mv /usr/include/openssl /usr/include/openssl.old

# 用新的文件替换旧的文件
pwd 
# /usr/local/openssl-1.1.1w

ln -sf /usr/local/openssl-1.1.1w/bin/openssl /usr/bin/openssl
ln -s /usr/local/openssl-1.1.1w/include/openssl /usr/include/openssl
```

## 确认是否已经安装了openssl

```sh
rpm -qa | grep openssl

# openssl-libs-1.0.2k-26.el7_9.x86_64
# openssl-1.0.2k-26.el7_9.x86_64
# openssl-devel-1.0.2k-26.el7_9.x86_64
```

使用以下命令检查`libssl.so.1.1`文件是否存在于系统路径中：

```sh
find / -name "libssl.so.1.1" 2>/dev/null

# /usr/local/openssl/lib/libssl.so.1.1
# /opt/openssl/lib/libssl.so.1.1
```

保存并退出后，执行以下命令使配置生效：

```sh
source /etc/profile
```

## 重新安装openssl

```sh
# 卸载旧版本的openssl
sudo yum remove openssl

# 安装新版本的openssl：
sudo yum install openssl
```

- [Linux Openssl升级（详）](https://blog.csdn.net/weixin_45447587/article/details/128852767)

```sh
wget https://npm.taobao.org/mirrors/node/v12.4.0/node-v12.4.0-linux-x64.tar.xz
tar -xvf node-v12.4.0-linux-x64.tar.xz
ls -l
pwd
mv node-v12.4.0-linux-x64/ /usr/local/node
echo "export PATH=$PATH:/usr/local/node/bin" >> /etc/profile
source /etc/profile
node -v
npm -v
```


## 基础命令

```sh
> cat /etc/redhat-release
CentOS Linux release 7.9.2009 (Core)
```
