# GoRouter

## 路由参数

`/path/:{路径参数}`

```
http://localhost:62171/#/detail/1212

GoRoute(
  path: '/detail/:id',
  builder: (context,state) {
    print(state.pathParameters['id']); // 1212
    return const Login();
  },
),
```

## 嵌套导航

有些应用在同一个页面展示多个子页面，例如 `BottomNavigationBar`。


- `go`: 如果新路由不是旧路由的子路由,则移除当前路由栈(就像replace)
- `push`: 将新路由推送到当前栈顶
- `namedLocation`: 用于根据路由的名称及其参数生成URI字符串的方法

```
for example: 路由: A:[B,C], 从B跳转到C 跳转前的路由栈: A-B 跳转后:
go: A-C ,
push: A-B-C
```


```
RouteMatchList#79c02(uri: /, matches: [RouteMatch#ee3ed(route: GoRoute#7118b(name: "HOME", path: "/")), ImperativeRouteMatch#7abdc(route: GoRoute#c8978(name: "ONBOARD", path: "/onboard"))])
```

- 期望路由栈就是: 首页A --> 登录页 -->页面B。
- 因为B页面需要登录,所以对B页面设置一个重定向。

## 参考资料

