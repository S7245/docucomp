# JAVA

```java
//为null则不返回
@JsonInclude(JsonInclude.Include.NON_NULL)
//为空不返回
@JsonInclude(JsonInclude.Include.NON_EMPTY)  
//此注解放在字段上面，则永远不会返回
@JsonIgnore

// properties文件里面也可以设置全局返回规则
// 为null不返回
spring.jackson.default-property-inclusion=non_null
```

## 枚举

[SpringMVC处理参数中的枚举类型通用实现](https://www.cnblogs.com/caizhiqin/p/10000649.html?ivk_sa=1024320u)

![](https://sparkclick-1256587996.cos.ap-chengdu.myqcloud.com/Test/WX20240205-022728.png)

## 参数校验

## 接口版本控制

参考： 
[SpringBoot 应用篇 实现后端的接口版本支持](https://zhuanlan.zhihu.com/p/100121520)、
[SpringBoot 系列教程 web 篇之自定义请求匹配条件 RequestCondition](https://mp.weixin.qq.com/s/8kEODHv5SpxUKbjX2c_ZPg)、
[Spring Boot入门系列（二十一） 如何优雅的设计Rest API版本号，实现API版本控制](https://cloud.tencent.com/developer/article/1739303)、

后端接口就没有这么简单了，历史的接口得支持，新的业务也得支持。\
利用请求头来传递客户端版本，在相同的 url 中寻找最适合的这个版本请求的接口的实例 case

- RequestCondition
- RequestMappingHandlerMapping

> 我们希望同一个业务始终用相同的 url，即便不同的版本之间业务完全不兼容，
> 通过请求参数中的版本选择最合适的后端接口来响应这个请求。

约定：需要实现上面的 case，首先有两个约定

- 每个请求中必须携带版本参数
- 每个接口都定义有一个支持的版本

- 系统(system)： 
	- web、ios、android、miniapp
- 服务平台(platform)： 用户端、商户端
- 版本号(version)：2.0.0


## 业务解耦

- 依赖注入
- AOP
- 事件驱动 Event






