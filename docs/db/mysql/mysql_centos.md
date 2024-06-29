---
sidebar_position: 2
---

# CentOS中的Mysql

## Q&A

### Centos成功，Navicate失败

1. 可以检查一下防火墙是否开放了3306端口：**在云服务的话，要修改安全组中的端口**

```sh
# 查看防火墙开放的端口列表
# highlight-next-line
firewall-cmd --zone=public --list-ports

# 开放端口,如果是关闭，将add换成remove即可,permanent表示永久，不然防火墙重启后失效
# highlight-next-line
firewall-cmd --add-port=3306/tcp --permanent

# 重启下防火墙
# highlight-next-line
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

## 修改密码

```sh
# 停止 MySQL 服务：停止 MySQL 服务，以便以安全模式启动。
# highlight-next-line
sudo systemctl stop mysql

# 启动 MySQL 安全模式：以跳过权限表的方式启动 MySQL，这样可以在没有密码的情况下访问 MySQL。
# highlight-next-line
sudo mysqld_safe --skip-grant-tables &


# 登录 MySQL：以无密码方式登录 MySQL。
# highlight-next-line
mysql -u root

# 更改 root 用户密码：执行以下命令来重置密码（假设要将密码设置为 new_password）。
# highlight-start
FLUSH PRIVILEGES;
ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
FLUSH PRIVILEGES;
# highlight-end

# 重启 MySQL 服务：退出 MySQL，并重启 MySQL 服务。
# highlight-start
exit
sudo systemctl stop mysql
sudo systemctl start mysql
# highlight-end
```


## 数据库用户管理

### 删除用户

```sh
# 使用以下命令查看所有用户：
SELECT User, Host FROM mysql.user \G`
```

```sh
# highlight-next-line
SELECT User, Host FROM mysql.user \G

*************************** 1. row ***************************
User: ry-vue
Host: %
*************************** 2. row ***************************
User: mysql.infoschema
Host: localhost
*************************** 3. row ***************************
User: mysql.session
Host: localhost
*************************** 4. row ***************************
User: mysql.sys
Host: localhost
*************************** 5. row ***************************
User: root
Host: localhost
*************************** 6. row ***************************
User: ry-vue
Host: localhost
6 rows in set (0.00 sec)
```

2. 删除无用的用户

```sh
# 假设你想删除用户名为 unused_user，主机为 localhost 的用户，可以使用以下命令
DROP USER 'unused_user'@'localhost';
```

### GRANT

> 使用 `GRANT` 语句为用户授予权限。

1. 创建用户：

```sql
-- 创建一个只能从 localhost 连接的用户 testuser：
CREATE USER 'testuser'@'localhost' IDENTIFIED BY 'password';

-- 或者，创建一个只能从特定 IP 地址（例如 192.168.1.100）连接的用户：
CREATE USER 'testuser'@'192.168.1.100' IDENTIFIED BY 'password';

-- 修改现有用户的主机：将现有用户 testuser 的主机限制为 localhost：
RENAME USER 'testuser'@'%' TO 'testuser'@'localhost';
```

2. 修改权限：

```sql
-- ===== 如果要为用户授予所有权限
GRANT ALL PRIVILEGES ON *.* TO 'username'@'host';

-- ===== 为 localhost 上的 testuser 用户授予所有权限
GRANT ALL PRIVILEGES ON *.* TO 'testuser'@'localhost';

-- ===== 为 localhost 上的 testuser 用户授予 testdb 数据库的所有权限
GRANT ALL PRIVILEGES ON testdb.* TO 'testuser'@'localhost';

-- ===== 为 localhost 上的 testuser 用户授予 testdb 数据库中 testtable 表的所有权限
GRANT ALL PRIVILEGES ON testdb.testtable TO 'testuser'@'localhost';

-- ===== 为 localhost 上的 testuser 用户授予 testdb 数据库的 SELECT 和 INSERT 权限
GRANT SELECT, INSERT ON testdb.* TO 'testuser'@'localhost';

-- ===== 查看第一行的Host是否是%，不是的话需要进行授权
update user set host = '%' where user = 'root';
```

3. 刷新权限

```sql
FLUSH PRIVILEGES;
```

4. 查看权限

```sql
-- 查看 localhost 上的 testuser 用户的权限
SHOW GRANTS FOR 'testuser'@'localhost';
```

## 基础操作

[参考资料](https://mp.weixin.qq.com/s?__biz=MzI2MjE3OTA1MA==&mid=2247496812&idx=2&sn=ac33895dd30e12414a39851ba9697d72&chksm=ea4da5e9dd3a2cff16406e67fd0835130a2ada003a9892f9a4ba5eaa253e44fc5735a8c5f550&scene=27)















