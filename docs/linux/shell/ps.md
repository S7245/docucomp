# ps(Process Status)

> `ps` 在 Linux 中是查看进程的命令。

在 Linux 中的状态：
1. 运行状态(R: runnable) ： 正在运行或在运行队列中等待[就绪队列]。
2. 中断状态(S: sleeping) ： 休眠中, 受阻, 在等待某个条件的形成或接受到信号。
3. 不可中断状态(D: uninterruptible sleep) ： 收到信号不唤醒和不可运行, 进程必须等待直到有中断发生。
4. 僵死状态(Z: zombie) ： 进程已终止, 但进程描述符存在, 直到父进程调用wait4()系统调用后释放。
5. 停止状态(T: traced) ： 进程收到SIGSTOP, SIGSTP, SIGTIN, SIGTOU信号后停止运行运行。


## 参数

```txt
-e 显示所有进程。
-f 全格式。

r 只显示正在运行的进程。
```

### 示例

```sh
# 查看全格式的全部进程
ps -ef

# 查看并筛选 跟进程名有关的进程
ps -ef | grep mysqld
```