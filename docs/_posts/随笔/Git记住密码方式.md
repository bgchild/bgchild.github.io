---
title: git记住密码方式
date: 2020-01-03 21:40:25
tags: 
  - Git
permalink: /pages/0ccdfc/
sidebar: auto
categories: 
  - 随笔
author: 
  name: AnWen
  link: https://github.com/micolor
---



<!--MORE-->
1. .git里面的config里面的url
```
url = http://用户名:密码@127.0.0.1:10010/r/xxx.git        
```
2. 项目目录
```
git config --global credential.helper store
```

    然后会生成一个本地文件用于记录用户名和密码，这个文件我们无需关心
    再次git pull一下，会让输入用户名和密码。这次输入之后以后就不会每次输入了。
    如果要清除用户名和密码
    运行一下命令缓存输入的用户名和密码
    ```
    git config --global credential.helper wincred
    ```

   ### 清除掉缓存在git中的用户名和密码
    ```
    git credential-manager uninstall
    ```