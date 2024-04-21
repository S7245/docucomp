# 基础语法

[菜鸟教程](https://www.runoob.com/js/js-tutorial.html)

## 数据类型

### Enum

```js
// 定义星期枚举类型
const WeekDays = {
  Sunday: '星期日',
  Monday: '星期一',
  Tuesday: '星期二',
  Wednesday: '星期三',
  Thursday: '星期四',
  Friday: '星期五',
  Saturday: '星期六'
};
````

### JSON

```js
// 定义一个空的JSON对象
var myObj = {};
 
// 添加新的属性和值到myObj对象中
myObj["name"] = "John"; // 添加名为"name"的属性，其值为"John"
myObj["age"] = 30;      // 添加名为"age"的属性，其值为30

console.log(myObj);     // 输出结果：{ name: 'John', age: 30 }
```

## 条件语句

### Switch

```js

// GET接口参数替换。
var newQuery = {}
pm.request.url.query.map((el) => {
    switch (el.key) {
        case 'venueId': {
            newQuery[el.key] = pm.variables.get("venueId");
            break;
        }
        case 'tenantId': {
            newQuery[el.key] = pm.variables.get("tenantId");
            break;
        }
        default: {
            newQuery[el.key] = el.value
        }
    }
})
pm.request.url.query = newQuery
```

## 基础语法

### 剩余参数
剩余参数(rest parameter)

### 扩展操作符
扩展操作符(spread operator,展开运算符)

### 模板字面量(Template literals)

是允许嵌入表达式的字符串字面量。在反引号中可以直接使用单引号和双引号。

```js
const getYear = (str) => str.split("-")[0];
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
```

### 三元运算符(Ternaries) 代替 ifelse

```js
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
```

### 箭头函数(Arrow Function)

### Short-Circuiting And Logical Operators

Short-Circuiting(短路(就近原则)) : 在JS中具有逻辑运算符（AND、OR）具有一种称为短路的功能。

```js
console.log(true && "Some string"); // Some string
console.log(false && "Some string"); // false

// falsy: 0, '', null, undefined
console.log("jonas" && "Some string"); // Some string
console.log(0 && "Some string"); // 0

console.log(true || "Some string"); // true
console.log(false || "Some string"); // Some string

// 如果 remoteValue 为 undefined 时，会自动找下一个逻辑点，也就是 “ NOT TRANSLATED”。
const spanishTranslation = remoteValue || "NOT TRANSLATED"; // NOT TRANSLATED。
// 如果 remoteValue 为 truethy 的值时（如 remoteValue = “Hello Workld”）则 spanishTranslation 为 Hello Workld 
const spanishTranslation = remoteValue || "NOT TRANSLATED"; // Hello Workld
````

Logical Operators(逻辑运算符) 通常用于 Boolean 型（逻辑）值。

[](https://cloud.tencent.com/developer/section/1191987)

### Optional Chaining(可选链)

Optional Chaining(可选链) ： `?.`，是一种以安全的方式去访问嵌套的对象属性，即使某个属性根本就不存在。\
OC 能够使代码变得简便，当位于其前的值为 `undefined` 或者是 `null` 时，会立即阻止代码的执行，并且返回 `undefined。`

[JavaScript 新提案optional chaining可选链属性原理详解](https://www.jb51.net/javascript/285158fne.htm)

### The Array map Method

> The [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method creates a new array with the results of calling a provided function on every element in this array.

```js
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x); // [2, 4, 6, 8, 10]

const book = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      pages: 1216,
      hasMovieAdaptation: true,
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      pages: 300,
      hasMovieAdaptation: false,
    }
      ...
];
const titles = books.map((book) => book.title); // ["The Lord of the Rings","The Cyberiad"]

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
```

### The Array filter Method

> The [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method of Array instances creates a shallow copy of a portion of a given array, \
> filtered down to just the elements from the given array that pass the test implemented by the provided function.

```js
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result); // ["exuberant", "destruction", "present"]

const book = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      pages: 1216,
      hasMovieAdaptation: true,
      genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      pages: 300,
      hasMovieAdaptation: false,
      genres: [
            "fantasy",
            "high-fantasy",
            "fiction",
            "novels",
            "literature",
        ],
    }
      ...
];
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation); // [{id:1,...}]

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title); // ["The Lord of the Rings"]
```

### The Array reduce Method

[reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

```txt
reduce(callbackFn)
// initialValue 初始值。可以是 int、arry、json...
reduce(callbackFn, initialValue)

// accumulator: 累加器
reduce((accumulator, currentValue, currentIndex, array) => , initialValue)
```

```js
const book = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      pages: 1216,
      hasMovieAdaptation: true,
      genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      pages: 300,
      hasMovieAdaptation: false,
      genres: [
            "fantasy",
            "high-fantasy",
            "fiction",
            "novels",
            "literature",
        ],
    }
      ...
];

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0); // 1516

// ==============

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
```

### The Array sort Method

```js
// a - b < 0。sort a before b, e.g. [a, b]
// a - b > 0。sort a after b, e.g. [b, a]
// a - b === 0。keep original order of a and b
const arr = [3, 7, 1, 9, 6];
const sorted = arr.sort((a, b) => a - b); 
sorted; // [1, 3, 6, 7, 9]
arr; // [1, 3, 6, 7, 9] ， 原数组也被修改了，如果需要返回一个全新数组且不影响原数组可以使用 slice() 

const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b); // [1, 3, 6, 7, 9]
sorted; // [1, 3, 6, 7, 9]
arr; // [3, 7, 1, 9, 6] 


// 对{}进行排序。
const book = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      pages: 1216,
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      pages: 300,
    }
];
const sortedByPages = book.slice().sort((a, b) => a.pages - b.pages);
```

### Working With Immutable Arrays

添加元素、删除元素、更新数组中元素、在不改变原数组的情况下更新数组元素。

```js
// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);

// 3) Update book object in the array
// { ...book, pages: 1210 } 这句的含义：把 book 的 key-values 更新到新的变量中，然后 pages=1210 去覆盖 book中的 pages = 1210
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
```

### Asynchronous JavaScript Promises

```js
console.log(fetch("https://jsonplaceholder.typicode.com/todos")) // Promise { <pending>}

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}  
```













































