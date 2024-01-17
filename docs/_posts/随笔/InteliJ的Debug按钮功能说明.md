---
title: 关于InteliJ的Debug按钮能说明
date: 2020-0703 20:36:35
permalink: /pages/aaebd9/
sidebar: auto
categories: 
  - 随笔
tags: 
  - null
author: 
  name: AnWen
  link: https://github.com/micolor
---



## 关于InteliJ的Debug按钮功能

![](https://jsd.cdn.zzko.cn/gh/micolor/images/note/202401121440456.png)

#### 1、Step over（F8）

程序向下执行一行（如果当前行有方法调用，这个方法将被执行完毕返回，然后到下一行）

#### 2、Step Into （F7）

程序向下执行一行。（如果该行有自定义方法，则运行进入自定义方法。PS:不会进入官方类库的方法）

#### 3、Force Step Into （Alt+Shift+F7）

进入任何方法（比如使用官方类库的方法）

#### 4、Step Out（Shift+F8）

跳出并执行完该方法，返回到该方法被调用处的下一行语句

#### 5、Drop Frame

重来，点击按钮，你将返回到当前方法的调用处（如上图，程序会回到main()中）重新执行，并且所有上下文变量的值也回到那个时候。只要调用链中还有上级方法，可以跳到其中的任何一个方法。

#### 6、Run to Cursor（Alt+F9）

会将程序执行到光标位置的断点再暂停

#### 7、Resume Program （F9）

执行到下一个断点处暂停

#### 8、View Breakpoints（Ctrl+Shiift+F8）

查看所有断点，箭头1指向的是你曾经设置过的断点，箭头2可以设置条件断点（满足某个条件的时候，暂停程序的执行，如 c==97）

![](https://jsd.cdn.zzko.cn/gh/micolor/images/note/202401121440526.png)

#### 9、Mute Breakpoints 

禁用所有断点

