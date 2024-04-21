# Node

## centos

### pm2管理进程

```sh
# 查看pm2 守护项目列表，
pm2 list

# 重启服务
pm2 restart id|name|namespace|all|json|stdin

# 停止服务
pm2 stop id|name|namespace|all|json|stdin
```