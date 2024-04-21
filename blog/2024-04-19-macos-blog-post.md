---
slug: 2024-04-19-macos-blog-post
title: MacOS的使用笔记
authors: endi
tags: [Mac]
---

# Mac使用

[Daemons and Services Programming Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html) \
[launchd.plist man 页面](x-man-page://launchd.plist) \
[Mac 上“终端”中的 shell 脚本介绍](https://support.apple.com/zh-cn/guide/terminal/apd53500956-7c5b-496b-a362-2845f2aab4bc/2.14/mac/14.0)

## 自动化脚本任务

### plist文件

- 由用户自己定义的任务项 `~/Library/LaunchAgents`
- 由管理员为用户定义的任务项 `/Library/LaunchAgents`
- 由管理员定义的守护进程任务项 `/Library/LaunchDaemons`
- 由 macOS 为用户定义的任务项 `/System/Library/LaunchAgents` 
- 由 macOS 定义的守护进程任务项 `/System/Library/LaunchDaemons` 

/Library/LaunchDaemons -->只要系统启动了，哪怕用户不登陆系统也会被执行
/Library/LaunchAgents -->当用户登陆系统后才会被执行

```sh
# 添加： 
# -w选项会将plist文件中无效的key覆盖掉，建议加上
launchctl load -w /System/Library/LaunchAgents/com.test.plist
# 移除： 
launchctl unload -w /System/Library/LaunchAgents/com.test.plist
# 查看： 
launchctl list
launchctl list | grep 'application.com.tencent'
# 立即执行任务：
launchctl start com.aigo.launchctl.plist
# 停止执行任务：
launchctl stop com.aigo.launchctl.plist


launchctl start|stop|list|remove label
launchctl load|unload paths
launchctl print|kickstart|kill|enable|disable service-target

# 你所运行的脚本需要有权限才能执行：
chmod a+x test.sh
```

要让任务生效，必须先load命令加载这个plist \
如果任务被修改了，那么必须先unload，然后重新load \
start可以测试任务，这个是立即执行，不管时间到了没有 \
执行start和unload前，任务必须先load过，否则报错 \
ProgramArguments内不能直接写命令，只能通过shell脚本来执行 \
定时启动任务时，如果涉及到网络，但是电脑处于睡眠状态，是执行不了的，这个时候，可以定时的启动屏幕就好了。



plist支持两种方式配置执行时间：

- StartInterval: 指定脚本每间隔多长时间（单位：秒）执行一次；
- StartCalendarInterval: 可以指定脚本在多少分钟、小时、天、星期几、月时间上执行

```
Minute <integer>
The minute on which this job will be run.
Hour <integer>
The hour on which this job will be run.
Day <integer>
The day on which this job will be run.
Weekday <integer>
The weekday on which this job will be run (0 and 7 are Sunday).
Month <integer>
The month on which this job will be run.
```

```
<!-- 3:10 执行脚本 -->
<key>StartCalendarInterval</key>
<array>
    <dict>
        <key>Hour</key>
        <integer>3</integer>
        <key>Minute</key>
        <string>10</string>
    </dict>
</array>
```



```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>com.me.backup.mackup</string>
    <key>ProgramArguments</key>
    <array>
        <string>/bin/sh</string>
        <string>-c</string>
        <string>exec $HOME/Scripts/sync-stuff.sh --launch-agent</string>
      </array>
    <key>StartCalendarInterval</key> 
    <dict> 
        <key>Weekday</key> 
        <integer>1</integer> 
    </dict>
    <key>LimitLoadToSessionType</key>
    <string>Background</string>
  </dict>
</plist>
```






```
Subcommands:
    bootstrap       Bootstraps a domain or a service into a domain.
    bootout         Tears down a domain or removes a service from a domain.
    enable          Enables an existing service.
    disable         Disables an existing service.
    kickstart       Forces an existing service to start.
    attach          Attach the system's debugger to a service.
    debug           Configures the next invocation of a service for debugging.
    kill            Sends a signal to the service instance.
    blame           Prints the reason a service is running.
    print           Prints a description of a domain or service.
    print-cache     Prints information about the service cache.
    print-disabled  Prints which services are disabled.
    plist           Prints a property list embedded in a binary (targets the Info.plist by default).
    procinfo        Prints port information about a process.
    hostinfo        Prints port information about the host.
    resolveport     Resolves a port name from a process to an endpoint in launchd.
    limit           Reads or modifies launchd's resource limits.
    runstats        Prints performance statistics for a service.
    examine         Runs the specified analysis tool against launchd in a non-reentrant manner.
    config          Modifies persistent configuration parameters for launchd domains.
    dumpstate       Dumps launchd state to stdout.
    dumpjpcategory  Dumps the jetsam properties category for all services.
    reboot          Initiates a system reboot of the specified type.
    bootshell       Brings the system up from single-user mode with a console shell.
    load            Recommended alternatives: bootstrap | enable. Bootstraps a service or directory of services.
    unload          Recommended alternatives: bootout | disable. Unloads a service or directory of services.
    remove          Unloads the specified service name.
    list            Lists information about services.
    start           Starts the specified service.
    stop            Stops the specified service if it is running.
    setenv          Sets the specified environment variables for all services within the domain.
    unsetenv        Unsets the specified environment variables for all services within the domain.
    getenv          Gets the value of an environment variable from within launchd.
    bsexec          Execute a program in another process' bootstrap context.
    asuser          Execute a program in the bootstrap context of a given user.
    submit          Submit a basic job from the command line.
    managerpid      Prints the PID of the launchd controlling the session.
    manageruid      Prints the UID of the current launchd session.
    managername     Prints the name of the current launchd session.
    error           Prints a description of an error.
    variant         Prints the launchd variant.
    version         Prints the launchd version.
    help            Prints the usage for a given subcommand.
```


```
system/[service-name]
user/<uid>/[service-name]
login/<asid>/[service-name]
gui/<uid>/[service-name]
session/<asid>/[service-name]
pid/<pid>/[service-name]

gui/$UID

```





https://developer.apple.com/library/archive/technotes/tn2083/_index.html





## 一次成功的部署

```sh

sudo launchctl enable system/com.spark.deploy.merchant
sudo launchctl bootstrap system /Library/LaunchDaemons/com.spark.deploy.merchant.plist
sudo launchctl start system/com.spark.deploy.merchant

sudo launchctl start system /Library/LaunchDaemons/com.spark.deploy.merchant.plist

sudo launchctl stop system/com.spark.deploy.merchant
sudo launchctl disable system/com.spark.deploy.merchant
sudo launchctl bootout system /Library/LaunchDaemons/com.spark.deploy.merchant.plist

sudo launchctl enable gui/$UID/com.spark.deploy.merchant
sudo launchctl bootstrap gui/$UID /Library/LaunchAgents/com.spark.deploy.merchant.plist
sudo launchctl start gui/$UID/com.spark.deploy.merchant

sudo launchctl stop gui/$UID/com.spark.deploy.merchant
sudo launchctl disable gui/$UID/com.spark.deploy.merchant
sudo launchctl bootout gui/$UID /Library/LaunchAgents/com.spark.deploy.merchant.plist
```