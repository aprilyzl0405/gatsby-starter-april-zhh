# gatsby-starter-april-zhh

 [![GitHub issues](https://img.shields.io/github/issues/aprilyzl0405/gatsby-starter-april-zhh.svg)](https://github.com/aprilyzl0405/gatsby-starter-april-zhh/issues) [![GitHub license](https://img.shields.io/github/license/aprilyzl0405/gatsby-starter-april-zhh.svg)](https://github.com/aprilyzl0405/gatsby-starter-april-zhh/blob/master/LICENSE) [![Hexo Version](https://img.shields.io/badge/gatsby-%3E%3D%202.2-542c85.svg)](https://www.gatsbyjs.org/) [![GitHub forks](https://img.shields.io/github/forks/aprilyzl0405/gatsby-starter-april-zhh.svg)](https://github.com/aprilyzl0405/gatsby-starter-april-zhh/network) [![GitHub stars](https://img.shields.io/github/stars/aprilyzl0405/gatsby-starter-april-zhh.svg)](https://github.com/aprilyzl0405/gatsby-starter-april-zhh/stargazers)


> 采用 `Material Design` 开发的响应式 Gatsby 主题。

## 特性

- [MATERIAL-UI](https://material-ui.com/zh/) 设计
- 响应式设计，桌面端、平板、手机等设备上均能很好的展现
- 支持 Markdown
- 集成了[不蒜子统计](http://busuanzi.ibruce.info/)、谷歌分析（`Google Analytics`)
- 支持黑暗模式
- 基于 ```github action``` 进行自动构建

## 下载

```bash
git clone https://github.com/aprilyzl0405/gatsby-starter-april-zhh.git
```

## 配置

### 文章所在目录 `/data`

### 配置文件 `/config/config.js` 

### 图床链接由 ```cdn + img``` 组合而成
 - cdn：配置 ```cdn``` 域名
 - img
   - home：首页和各个引导页的背景图
   - link：首页链接的图标
   - default：文章没有配置 image 时的默认图
   - debug：本地调试用，使用 static 目录下的图片，不使用和 cdn 组成链接


## markdown

markdown ```frontmatter``` 示例 
```
---
title: gatsby-starter-april-zhh
date: 2020-06-06T06:06:06+08:00
tags: 
- gatsby
- theme
categories: 
- gatsby-starter
description: 采用 Material Design 开发的响应式 Gatsby 主题。
---
```

## 版本记录

- v1.0.0
  - 网站基础功能
  - ```github action``` 自动构建


## 参考项目

一直以来都比较倾向于 hugo 和 hexo 这类比较轻量级的静态页面构建工具，但无奈很多主题在可定制性上比较欠缺，而且模板语法写起来比较耗费精力，鉴于自己对 React 比较熟悉，因此选用了 gatsby 进行建站。

由于本人在建站方面毫无设计感，因此参考了几个项目，选用了一些自认为比较好的设计和交互，也是作为自己练习 CSS 的一个阶段性产物。

下面是参考得比较多的项目：

 - [hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery)
 - [hexo-theme-sakura](https://github.com/honjun/hexo-theme-sakura)
