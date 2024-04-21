---
sidebar_position: 2
---

# CentOS中的Mysql

## Q&A

### Centos成功，Navicate失败

1. 可以检查一下防火墙是否开放了3306端口：**在云服务的话，要修改安全组中的端口**

```sh
# 查看防火墙开放的端口列表
firewall-cmd --zone=public --list-ports

# 开放端口,如果是关闭，将add换成remove即可,permanent表示永久，不然防火墙重启后失效
firewall-cmd --add-port=3306/tcp --permanent

# 重启下防火墙
service firewalld restart
```

2. 查看所用账户是否开放权限:

```sql
-- 查看所用账户是否开放权限
use mysql;
select * from user \G

-- 查看第一行的Host是否是%，不是的话需要进行授权
update user set host = '%' where user = 'root';

-- 刷新
flush privileges;
```

3. 重启 mysql 

```sh
systemctl restart mysqld

# 使用systemctl命令来配置MySQL服务的自启动：
sudo systemctl enable mysqld
# 启动MySQL服务：
sudo systemctl start mysqld
```