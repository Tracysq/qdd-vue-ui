# qdd-vue-ui - 一个 Vue UI 组件

[![Build Status](https://travis-ci.org/Tracysq/qdd-vue-ui.svg?branch=master)](https://travis-ci.org/Tracysq/qdd-vue-ui)
![npm](https://img.shields.io/npm/v/npm)

## 介绍

一个 Vue UI 框架，希望对你有帮助！

## 开始使用

1. 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box
```
*, *::before, *::after {box-sizing: border-box;}
```
IE 8 以及上浏览器支持此样式

你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
```
:root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: #fff;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #999;
    --border-color: #999;
    --border-color-hover: #666;
}
```

IE 15 以及上浏览器支持此样式

2. 安装 qdd-vue-ui
```
npm i --save qdd-vue-ui
```

3. 引入 qdd-vue-ui
```
import { Button, Icon } from 'qdd-vue-ui'
import 'qdd-vue-ui/dist/index.css';

export default {
  name: 'App',
  components: {
    'qdd-button': Button,
    'qdd-icon': Icon
  }
}
```


## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
