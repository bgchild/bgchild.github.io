---
title: Centos安装gitblit服务
date: 2020-01-03 20:54:35
categories: 
  - Linux
tags: 
  - Git
permalink: /pages/89ec85/
sidebar: auto
author: 
  name: AnWen
  link: https://github.com/micolor
---


<!--MORE-->
1. 官方下载安装包
```
wget http://dl.bintray.com/gitblit/releases/gitblit-1.8.0.tar.gz
```

2. 下载好了就解压：tar -xzvf gitblit-1.8.0.tar.gz，假设你解压到了/opt/gitblit/ 目录下了

3. 修改gitblit1.8.0目录下，data/defaults.properties：
```
git.repositoriesFolder=/opt/gitblit-file     (要保存的资料库路径）
server.httpPort=10010   (要开放的HTTP端口号）   
server.httpsBindInterface=localhost
```
4. 修改gitblit目录下，service-centos.sh：
```
#根据自己的服务器的设置
GITBLIT_PATH=/opt/gitblit/    (你解压缩存放的gitblit主目录)
GITBLIT_BASE_FOLDER=/opt/gitblit/data/git  （存放数据的基地址)
GITBLIT_HTTP_PORT=10010    （开启服务的HTTP端口)
#设置java环境变量
JAVA_HOME=/data/ide/jdk1.8.0_191
JRE_HOME=$JAVA_HOME/jre
CLASSPATH=$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
```
5. 执行install-service-centos.sh

6. 启动 service gitblit start