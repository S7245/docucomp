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


