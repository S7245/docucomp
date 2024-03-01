---
sidebar_position: 1
---

# Tutorial Intro

- [ProComponents](https://procomponents.ant.design/components/list)
- [ANT DESIGN PRO](https://pro.ant.design/zh-CN/docs/development/)
- [UMI](https://umijs.org/)
- [bilibili-UMI/MAX](https://www.bilibili.com/video/BV1EM411a7PU/?spm_id_from=333.337.search-card.all.click)


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


