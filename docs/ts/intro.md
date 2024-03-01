---
sidebar_position: 1
---

# TS

[简单线上运行环境](https://www.runoob.com/try/runcode.php?filename=ts-hw&type=typescript)、[runoob](https://www.runoob.com/typescript/ts-array.html)、[ECMAScript 6 入门](https://es6.ruanyifeng.com/#docs/function)

## Array

```ts
// var array_name[:datatype] = [val1,val2…valn]
var numlist:number[] = [2,4,6,8]
```

## 声明


```ts
undefined
````




参数展开：

```ts
function getUser({payload},{done}){}
// 展示
function getUser({payload: {id, page}},{done})

// 参数展开

```



## Map

```ts
/// 比如 namePath 传入的值为：
((values:[{value:number}],namePath,allValues) => {
	console.log(namePath) // menuIds
    var ids: number[] = [];
    values.forEach((element) => {
      ids.push(element.value);
    });
    return { [namePath]: ids };
})
// 把 namePath 作为 Map的key。如果没有加[]，则返回为{"namePath":xxx}、如果加了则返回为:{"menuIds":xxx}
```


- [TypeScript判断对象类型的四种方式](https://blog.csdn.net/wenxingchen/article/details/129159855)

