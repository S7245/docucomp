## 准备

### 环境准备

[react.new](react.new)， 创建新的react项目。

如何让用户状态保持一致？

2011 年被 Jordan Wake 创建，在2013开源。

VSCode插件： 
- `ESLint`
- `Prettier`
- `One Monikai Theme`
- `Material Icons Theme`
- `Quakka.js`： 可以让JS无需与HTML连接起来，直接可以运行。
使用的话直接在: '控制面板搜索-> quokka start'.

需要设置默认 Formatter，否则VScode不知道如何激活 Prettier。

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/WX20240309-154202.png)

可测试接口：

```
GET http://sam.msnewlifefitness.com:3001/post/advices
GET http://sam.msnewlifefitness.com:3001/post/advices/:id
POST http://sam.msnewlifefitness.com:3001/post/advices
PUT http://sam.msnewlifefitness.com:3001/post/advices
DELETE http://sam.msnewlifefitness.com:3001/post/advices/:id
```

- [ ] VSCode 代码片段学习


### Try React locally

[Try React locally](https://react.dev/learn/installation#try-react-locally)，尝试不使用React环境，直接在本地HTML中使用React。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <!-- 使用这两个 script -->
    // highlight-start
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    // highlight-end
  </head>
  <body>
    <div id="root"></div>
    <script>
      function App() {
        // const time = new Date().toLocaleTimeString();
        const [time, setTime] = React.useState(new Date().toLocaleTimeString());

        React.useEffect(function () {
          // 定时器
          setInterval(function () {
            setTime(new Date().toLocaleTimeString());
          }, 1000);
        }, []);

        return React.createElement("header", null, `Hello React! It's ${time}`);
      }

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(React.createElement(App));
    </script>
  </body>
</html>
``` 


## 创建React项目

- creat-react-app： 已经停止维护，学习可以用。
- vite：项目中使用推荐。
- NEXT.js: React官方推荐，生产环境可以用。
- Remix: React官方推荐，生产环境可以用。

### 初始化React项目

通过 `npx create-react-app@5 pizza-menu` 来新建项目。

可以在 `node_modules` 中看到 React 依赖：

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/WX20240309-084832.png)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="1" label="项目结构" default>
```txt
.
├── README.md
├── package-lock.json
├── package.json
├── node_modules
├── public
│   ├── favicon.ico
    // highlight-start
│   ├── index.html
    // highlight-end
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    // highlight-start
    └── index.js
    // highlight-end
```
  </TabItem>
  <TabItem value="2" label="src/index.js">

```js
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
React.StrictMode: 
StrictMode 是一个用来检查项目中潜在问题的工具。
与 Fragment 一样，StrictMode 不会渲染任何可见的 UI。它为其后代元素触发额外的检查和警告。
还会检查React是否使用了过期的 React API。
*/

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
```

  </TabItem>
  <TabItem value="3" label="public/index.html">

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    // highlight-start
    <div id="root"></div>
    // highlight-end
  </body>
</html>
```

  </TabItem>
</Tabs>

### 开发协助

- 开发时把网页 Console 打开，同时把 VSCode 的终端打开。
- 在 Code 中，`问题` Tab可以看见项目中所有的问题，包括 ESlint 给的警告或者报错。

| VSCode功能 | 快捷键 |
| -- | -- |
| 向上移动一行 | ALT + Shift + UP |
| 向下移动一行 | ALT + Shift + DOWN |
| 向上移动一行 | ALT + Shift + UP |
| 向下移动一行 | ALT + Shift + DOWN |

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/WX20240310-172832.png)

## JSX

### JSX概念

> JSX 是一种声明式的语法，我们用它来描述组件的外观以及它们如何根据数据和逻辑工作，
> 每个组件都必须返回一个 JSX 块，然后 react 将该 JSX 块在用户界面上显示。

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/WX20240311-221600.png)

### JSX和JS区别

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/WX20240310-182659@2x.png)

### 样式(Styling)

#### 内连CSS

```jsx
function Header() {
  const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return <h1 style={style}>Fast React Pizza Co.</h1>;
}
```

#### 外部CSS

- `css` 改成 `className`

<Tabs>
  <TabItem value="1" label="结构" default>

```txt
.
├── README.md
├── package-lock.json
├── package.json
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    // highlight-start
    └── index.js
    └── index.css
    // highlight-end
```

  </TabItem>
  <TabItem value="2" label="index.js" >

```js
import React from "react";
import ReactDOM from "react-dom/client";
    // highlight-start
import "./index.css";
    // highlight-end

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Header() {
  return <header className="header">
    <h1 >Fast React Pizza Co.</h1>
  </header>;
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
      <div>
      <img src="pizzas/spinaci.jpg" alt="pizzas spinaci" />
        <h3>pizzas spinaci</h3>
        <p>pizzas spinaci pizzas spinaci pizzas spinaci</p>
      </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      We're happy to welcome you between {openHour}:00 and {closeHour}:00.
    </footer>
  );
}

```    
  </TabItem>
  <TabItem value="3" label="index.css" >

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Roboto Mono', sans-serif;
  color: #252525;
  font-weight: 400;
  background-color: #f7f2e9;
  border-bottom: 1.6rem solid #edc84b;
  min-height: 100vh;
  padding: 3.2rem;
  padding-bottom: 6rem;
}

.container {
  max-width: 80rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
}

/* *************** */

.header {
  align-self: stretch;
}

.header h1 {
  /* Non-accessible color */
  color: #edc84b;
  /* color: #af8602; */

  text-transform: uppercase;
  text-align: center;
  font-size: 5.2rem;
  font-weight: 300;
  letter-spacing: 3px;
  position: relative;
  width: 100%;
  display: block;
}

.header h1::before,
.header h1::after {
  display: block;
  content: '';
  height: 3px;
  width: 12rem;
  background-color: #edc84b;
  position: absolute;
  top: calc(50% - 1px);
}

.header h1::before {
  left: 0;
}

.header h1::after {
  right: 0;
}

/* *************** */

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
}

.menu h2 {
  display: inline-block;
  padding: 1rem 0;
  border-top: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  font-size: 2.4rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 500;
}

.menu > p {
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.6;
  width: 80%;
}

.pizzas {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4.8rem;
}

.pizza {
  display: flex;
  gap: 3.2rem;
}

.pizza img {
  width: 12rem;
  aspect-ratio: 1;
  align-self: start;
}

.pizza div {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0.4rem 0;
}

.pizza h3 {
  font-size: 2rem;
  font-weight: 400;
}

.pizza p {
  font-size: 1.4rem;
  font-weight: 300;
  font-style: italic;
  margin-bottom: auto;
}

.pizza span {
  display: block;
  font-size: 1.6rem;
}

.pizza.sold-out {
  color: #888;
}

.pizza.sold-out img {
  filter: grayscale();
  opacity: 0.8;
}

/* *************** */

.footer {
  font-size: 1.4rem;
}

.order {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
}

.btn {
  color: inherit;
  font-family: inherit;
  border: none;
  font-size: 1.4rem;
  font-weight: 500;
  background-color: #edc84b;
  padding: 1.4rem 3.2rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn:hover {
  background-color: #e9bb24;
}

/*
SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128

FONT SIZE SYSTEM (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 /52 / 62 / 74 / 86 / 98
*/
```

  </TabItem>
</Tabs>

### Props

#### 只读

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/WX20240310-210830@2x.png)

#### 单向数据流

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/WX20240310-211255@2x.png)



















