---
sidebar_position: 1
---

# Tutorial Intro

- [ProComponents](https://procomponents.ant.design/components/list)
- [ANT DESIGN PRO](https://pro.ant.design/zh-CN/docs/development/)
- [UMI](https://umijs.org/)
- [bilibili-UMI/MAX](https://www.bilibili.com/video/BV1EM411a7PU/?spm_id_from=333.337.search-card.all.click)

## Grid

`span` `pull` `push` `offset` `order` 属性可以通过内嵌到 `xs` `sm` `md` `lg` `xl` `xxl` 属性中来使用。其中 xs={6} 相当于 xs={{ span: 6 }}。


```ts
// auto 使用组件默认的宽度
// xs=104px 适用于短数字、短文本或选项。
// sm=216px 适用于较短字段录入、如姓名、电话、ID 等。
// md=328px 标准宽度，适用于大部分字段长度。
// lg=440px 适用于较长字段录入，如长网址、标签组、文件路径等。
// xl=552px 适用于长文本录入，如长链接、描述、备注等，通常搭配自适应多行输入框或定高文本域使用。
```

### Col

- `span` 栅格占位格数

## ProLayout - 高级布局

`ProLayout` 可以提供一个标准又不失灵活的中后台标准布局，同时提供一键切换布局形态、自动生成菜单等功能。
与 `PageContainer` 配合使用可以自动生成面包屑、页面标题，并且提供低成本方案接入页脚工具栏。

## 国际化

在底层，国际化插件基于 react-intl 封装，并支持它的所有接口，详情可见[此文档](https://github.com/formatjs/formatjs/blob/main/website/docs/react-intl/api.md)

在多语言翻译中动态插值: `welcome: '{name}, what a nice day!',`

切换语言

## Mac 安装全局 UMI

```sh
# 全局安装UMI
yarn global add umi

#获取全局 global bin 路径
yarn global bin

# 打开 .bash_profile 文件
open ~/.bash_profile

在 .bash_profile 文件中添加下面一行。
export PATH="$PATH:yarn global bin"

source ~/.bash_profile

```

## 更新

```
import { request } from '@umijs/max';
import type { UmiApiRequest, UmiApiResponse } from "umi";
```


## Q&A

## 协助开发

### Ant Design Pro Code Generator(Swagger代码生成)

[Ant Design Pro Code Generator](https://github.com/garrett12138/antd-pro-generator)

```
View--->Command Platte..., 查找 Ant Design Pro Code Generator 项运行
```

## 文档

### JSDoc

在方法头通过输出`/**`，快速生成文档。


