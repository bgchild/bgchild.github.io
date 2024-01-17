---
title: docker使用
date: 2020-01-03 21:47:57
categories: 
  - Docker
tags: 
  - Docker
permalink: /pages/f69977/
sidebar: auto
author: 
  name: AnWen
  link: https://github.com/micolor
---


## 安装
1. 参照：https://www.runoob.com/docker/docker-install-centos.html
2. 命令大全：https://www.runoob.com/docker/docker-command-manual.html
<!--MORE-->

## 常用操作
### 1. 容器管理
```
#查看运行容器
docker ps
#查看所有容器
docker ps -a
#停止运行容器
docker stop [容器名称或id]
#运行容器
docker start [容器名称或id]
#进入容器
docker exec -it [容器名称或id] /bin/bash
#运行容器 随机分配端口（大写p）
docker run -d -P --name [容器名称] [镜像名]:[tag]
#指定端口（小写p）80内部容器端口
docker run -d -p [本机端口]:[容器端口] --name [容器名称] [镜像名]:[tag]
#删除已有容器
docker rm [容器id]
#删除所有未运行容器
docker rm  `docker ps -a -q`
#查看容器日志
docker logs [容器id]
#拷贝文件到容器
docker cp [源文件] [容器名称或id]:[目标路径]
```

### 2. 镜像管理
```
#查看本地镜像
docker images
#删除image镜像
docker rmi [镜像id多个空格隔开]
#删除所有镜像
docker rmi  `docker images -a -q`
#导出导入容器
docker export [容器id] > [压缩包]
cat [压缩包] | docker import [压缩包] [镜像名]:[tag]
docker import http://example.com/exampleimage.tgz [镜像名]:[tag]
#将现有容器创建成镜像
docker commit -a ["作者"] -m ["描述"] [容器名称或id] [镜像名]:[tag]
```

### 3.  DockerFile制作
- DockerFile 案例

```
FROM centos
MAINTAINER laok "ann0.0@hotmail.com"
#nginx
ADD nginx-1.17.5.tar.gz /usr/local/src
#running required command
RUN yum install -y gcc gcc-c++ make automake libtool
RUN yum install -y pcre pcre-devel zlib zlib-devel openssl openssl-devel
RUN useradd -M -s /sbin/nologin nginx
WORKDIR /usr/local/src/nginx-1.17.5
#execute command to compile nginx
RUN ./configure --prefix=/usr/local/nginx && make && make install
ENV PATH /usr/local/nginx/sbin:$PATH
RUN mkdir -m 777 /usr/local/bin/www
ADD nginx.conf /usr/local/nginx/conf
#jdk
ADD jdk-8u191-linux-x64.tar.gz /usr/local/src
RUN cp -rf /usr/local/src/jdk1.8.0_191 /usr/local/jdk
#add java env
ENV JAVA_HOME /usr/local/jdk
ENV JRE_HOME $JAVA_HOME/jre
ENV CLASSPATH $CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/lib
ENV PATH $PATH:$JAVA_HOME/bin:$JRE_HOME/bin
#tomcat
ADD apache-tomcat-8.5.35.tar.gz /usr/local/src
RUN cp -rf /usr/local/src/apache-tomcat-8.5.35 /usr/local/bin/tomcat4micolor
RUN cp -rf /usr/local/src/apache-tomcat-8.5.35 /usr/local/bin/tomcat4interfaces
WORKDIR /usr/local/bin/tomcat4interfaces/conf/
RUN sed -i 's|"8005"|"8006"|' server.xml
RUN sed -i 's|"8080"|"8081"|' server.xml
RUN cp -rf /usr/local/src/apache-tomcat-8.5.35 /usr/local/bin/tomcat4extra
WORKDIR /usr/local/bin/tomcat4extra/conf/
RUN sed -i 's|"8005"|"8007"|' server.xml
RUN sed -i 's|"8080"|"8082"|' server.xml
#del install files
RUN rm -rf /usr/local/src/*
#EXPOSE 80 443 8080
EXPOSE 80 81 443
ADD entrypoint.sh /usr/local/src
RUN chmod -R 777 /usr/local/src/entrypoint.sh
ENTRYPOINT ["/usr/local/src/entrypoint.sh"]
```
- 镜像打包 `docker build -t [镜像名]:[tag] .`   

### 4. 仓库管理
```
#登入
docker login
#登出
docker logout
#镜像搜索拉取
docker search [镜像名称]
docker pull [镜像名称]
#推送镜像
docker push [镜像名称]:[tag]
```

### 5. docker-compose制作
参考地址：https://www.runoob.com/docker/docker-compose.html
```
version: "3" 
  service01:
    image: [镜像名称]:[tag]
    container_name: [容器名称]
    ports: 
      - "[本机端口]:[容器端口]"
      - .....
    volumes:
      - [源文件地址]:[容器地址]
      - .....
    links:
    - [service02]
    - ...
    network_mode: "host"
    restart: always
    
  service02:
    ......
```

### 6. docker备份迁移

```
#容器保存为镜像
docker commit mynginx mynginx_i
#镜像备份
docker save -o mynginx.tar mynginx_i
#镜像恢复与迁移
docker load -i mynginx.tar
```

