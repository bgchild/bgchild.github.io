---
title: CentOS-7安装kafka最新版与测试
date: 2020-01-03 20:36:35
categories: 
  - Linux
tags: 
  - Kafka
permalink: /pages/8ac247/
sidebar: auto
author: 
  name: AnWen
  link: https://github.com/micolor
---



1. 安装必要的依赖<BR>
全新安装的CentOS-7需要安装必要的依赖
```
yum install -y vim maven wget 
```

2. 下载并解压
```
http://kafka.apache.org/downloads
```
    挑选快的镜像使用wget下载
    ```
    wget http://mirrors.tuna.tsinghua.edu.cn/apache/kafka/2.2.0/kafka_2.11-2.2.0.tgz
    tar -zxvf kafka_2.11-2.2.0.tgz
    ```

3. 安装配置
```
cd kafka_2.11-2.2.0
vim config/server.properties
在broker.id=0后面增加如下配置

advertised.listeners=PLAINTEXT://192.168.29.128:9092
192.168.29.128为本机的IP
```

4. 启动与停止
```
bin/zookeeper-server-start.sh -daemon config/zookeeper.properties
bin/zookeeper-server-stop.sh 

bin/kafka-server-start.sh -daemon config/server.properties
bin/kafka-server-stop.sh
```

5. 关闭防火墙
```
systemctl stop firewalld.service #停止firewall
systemctl disable firewalld.service #禁止firewall开
```
