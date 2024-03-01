# 特殊运算符

## ?

### 三元运算符

```TS
// 当 isNumber(input) 为 True 是返回 ? : 之间的部分； isNumber(input) 为 False 时
// 返回 : ; 之间的部分
const a = isNumber(input) ? input : String(input);

let is_valid = (test)?true:false;
```

### 可选参数

```ts
// 这里的 ？表示这个参数 field 是一个可选参数
function getUser(user: string, field?: string) {
}
```

### 成员


```ts
// 这里的？表示这个 name 属性有可能不存在
class A {
  name?: string
}

interface B {
  name?: string
}
```


### 安全链式调用

```ts
const a = fetch(...) || {}		// 假设 a 是从后端拿到的一个对象类型数据
const unsafeData = a.b.c		// 这样写时不安全的，无法确保 b 是否有值，如果为空则 b.c 会进行报错
const safeData = a?.b?.c		// 实际上就是相当于 const safeData = a && a.b && a.b.c

// 这里 Error对象定义的stack是可选参数，如果这样写的话编译器会提示
// 出错 TS2532: Object is possibly 'undefined'.
return new Error().stack.split('\n');

// 我们可以添加?操作符，当stack属性存在时，调用 stack.split。若stack不存在，则返回空
return new Error().stack?.split('\n');

// 以上代码等同以下代码
const err = new Error();
return err.stack && err.stack.split('\n');
```

## ??

> ?? 和 || 的意思有点相似，但是又有点区别, ??相较||比较严谨, 当值等于0的时候||就把他给排除了，但是?? 不会.

```ts
 
console.log(null || 1)   //1
console.log(null ?? 1)     //1
 
console.log(undefined || 1)      //1
console.log(undefined ?? 1)      //1
 
console.log(0 || 1)       //1
console.log(0 ?? 1)      //0

// =======

const foo = null ?? 'default string';
console.log(foo); // 输出: "default string"
 
const baz = 0 ?? 42;
console.log(baz); // 输出: 0
 
 
比如要赋值判断一个对象是否存在可以写成
 
```

## !

```
- 变量前：(!value) : 
	- 一元运算符: 就是将之后的结果取反
- 变量后：(value!)
	- 成员: 重新强调了变量(eg:name)这个不为空值
- 强制链式调用:
	- 叹号（!）是一种非空断言操作符（non-null assertion operator）。它告诉编译器，表达式的结果不会为 null 或 undefined，即使它的类型可能允许为 null 或 undefined。它用于在编译时绕过TypeScript的类型检查。

```

```ts
// 我们确信这个字段100%出现，那么就可以添加！，强调这个字段一定存在
new Error().stack!.split('\n');
```

一元运算符

```ts
// ! 就是将之后的结果取反，比如：
// 当 isNumber(input) 为 True 时返回 False； isNumber(input) 为 False 时返回True
const a = !isNumber(input);
```

成员

- 变量后使用！：表示类型推断排除 null、undefined
- !非空断言符号：忽略 null 和 undefined 类型

两个问号（??）表示一个空值合并运算符，用于检查一个值是否为null或undefined，并在其为null或undefined时提供一个默认值。

```ts
const value1 = null;
const value2 = 42;
 
const result1 = value1 ?? "Default Value"; // Output: Default Value
const result2 = value2 ?? "Default Value"; // Output: 42
```


## !!

```ts
// 将变量 test 转换为布尔类型，并将结果赋值给变量 is_valid 。
// 如果test的值为真，则is_valid将被赋值为true；如果test的值为假，则is_valid将被赋值为false。
// 这种用法可以用于简单地判断一个变量是否有值或是否为真。
let is_valid = !!test;

const emptyStr = ''
const nonEmptyStr = 'test'

const emptyStrBool = !!emptyStr //false
const nonEmptyStrBool = !!nonEmptyStr //true

console.log(!!(0 + 0)) // 输出: false
console.log(!!(3 * 3)) // 输出: true
```


## ==&&===

> 在 `TypeScript` 中，`==` 和 `===` 是用于比较两个值是否相等的操作符。\
> `==` 在比较值时进行隐式类型转换。\
> `===` 会在比较值时不进行类型转换。它要求两个操作数的`类型`和`值`都相等才会返回 `true` 。


```ts
// == 操作符会将字符串"1"隐式转换为数字 1，然后进行比较，所以结果为 true。
console.log(1 == "1"); // true
console.log(true == 1); // true

console.log(1 === 1); // true
console.log("1" === "1"); // true
console.log(true === true); // true
console.log(true === 1); // false
```