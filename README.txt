如果你打开了这个文件，说明你也许没有 Markdown 编辑器。

该项目详细的文档在 README.md 中，请访问 http://github.com/djyde/HR-Training 查看源码和文档。

以下是 Raw Markdown:

=======================================================================================

# Online Shop

广州大学华软软件学院 2015 项目实训——软件工程系信息工程移动互联网方向 2 班『沙县小吃』队伍作品。

[演示地址](http://online-shop.coding.io)

# Screenshot

![](http://ww1.sinaimg.cn/large/62580dd9gw1etqstkq6fwj21520lujxf.jpg)

# Build

```shell
$ git clone git@github.com:djyde/HR-Training.git

$ cd HR-Training/

$ npm install
```

Gulp task:

```shell 
$ gulp # Default task. Listening the change of all static files.

$ gulp jade # Compile jade files

$ gulp css # Concat all the style fils into dist/global.css

$ gulp scripts # Concat all the scripts files into dist/global.js
```

**我们不建议你直接打开 `index.html`，而是使用静态服务器运行。**

在 osx 或 Linux 中，你可以使用 python 的 SimpleHTTPServer 轻松地搭建一个静态 Server:

```shell
$ python -m SimpleHTTPServer [端口号]
```

在 windows 中，建议你直接进入 [演示地址](http://online-shop.coding.io)

# 技术栈
本项目使用 Semantic UI 前端框架，使用 Gulp 进行自动化构建。

在 **临时购物车** 部分，使用 localStorage 进行数据存储，操作交由 MVVM 框架 Vue.js 处理。

* Jade Template Engine
* localStorage (HTML5)
* Gulp
* Vue.js (MVVM)
* Semantic UI

# 环境
* OS X 10.10.0
* Chrome 43.0.2357.130 (64-bit)
* Sublime Text 3

# 注意
* 我们不建议你将此项目运行在不符合 W3C 标准的浏览器（如 IE）上
* 此项目没有完成『浮动广告』相关的代码，是因为我们抵制将 JavaScript 被滥用于此类途径。

# License
MIT License