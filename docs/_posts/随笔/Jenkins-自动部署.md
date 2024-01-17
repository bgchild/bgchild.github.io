---
title: Jenkins 自动部署
date: 2020-07-15 21:45:50
categories: 
  - Linux
permalink: /pages/b88c65/
sidebar: auto
tags: 
  - Linux
author: 
  name: AnWen
  link: https://github.com/micolor
---

1. jenkins 系统管理-> 添加ssh server信息

2. 添加jenkins 凭证管理

3. 源码管理 配置Git账号

4. 构建执行shell脚步 

   ```
   #进入代码目录
   cd /home/gitsource/education-cultivate/qinchuan/06-Release/0601-Environment
   #更新代码
   git pull
   #授权目录
   chmod -R 777 jg.sh
   #执行shell脚本
   ./jg.sh bf
   ```

5. jg.sh脚本参考

   ```
   #!/bin/bash
   #pull代码
   ##############
   COMNAME=$1
   JENKINSROOT="/root/.jenkins/workspace/jg_$COMNAME"
   SOURCEROOT="/home/gitsource"
   ##############
   if [ ! -n "$COMNAME" ];then
       echo "Parm comname Doesn't exist,don't run this shell"
       exit 1
   fi
   ##############
   cd  $SOURCEROOT/education-cultivate/qinchuan/04-Development/0402-Source/trunk
   #拉取代码
   git pull
   #构建后台前端页面
   cd ./vue/vue-element-admin-master/
   cnpm install
   \cp -rf ./files/scheduler.min.css ./node_modules/_fullcalendar@3.10.1@fullcalendar/dist/
   \cp -rf ./files/scheduler.min.js ./node_modules/_fullcalendar@3.10.1@fullcalendar/dist/
   rm -rf ./dist
   #复制配置文件
   \cp -rf $SOURCEROOT/education-cultivate/qinchuan/06-Release/0601-Environment/config/$COMNAME/env.production.admin ./.env.production
   cnpm run build:prod
   tar -czvf dist.tar dist/
   \cp -rf dist.tar $JENKINSROOT/jg.tar
   #构建移动端前端
   cd ../schome-link/
   cnpm install -i
   rm -rf ./dist
   #复制配置文件
   \cp -rf $SOURCEROOT/education-cultivate/qinchuan/06-Release/0601-Environment/config/$COMNAME/env.production.mobile ./.env.production
   cnpm run build
   tar -czvf dist.tar dist/
   \cp -rf dist.tar $JENKINSROOT/jgm.tar
   #构建后台接口
   cd  ../../micolor
   \cp -rf $SOURCEROOT/education-cultivate/qinchuan/06-Release/0601-Environment/config/$COMNAME/application-config.yml ./micolor-config/src/main/resources/application-prd.yml
   \cp -rf $SOURCEROOT/education-cultivate/qinchuan/06-Release/0601-Environment/config/$COMNAME/application-extra.yml ./micolor-extra/src/main/resources/application-prd.yml
   mvn  -U -e clean package -Dmaven.test.skip=true install -P prd
   \cp ./micolor-admin/target/micolor-admin.war $JENKINSROOT/micolor.war
   \cp ./micolor-interfaces/target/micolor-interfaces.war $JENKINSROOT/interfaces.war
   \cp ./micolor-extra/target/extra.war $JENKINSROOT/extra.war
   #复制配置文件
   \cp -rf $SOURCEROOT/education-cultivate/qinchuan/06-Release/0601-Environment/config/$COMNAME/docker-compose.yml $JENKINSROOT/
   \cp -rf $SOURCEROOT/education-cultivate/qinchuan/06-Release/0601-Environment/config/$COMNAME/www.conf $JENKINSROOT/
   ```

   6.选择对应的ssh server

   Exec command执行上传后的执行操作

   ```
   cd /home/ubuntu/jg/bf/
   chmod -R 777 /home/ubuntu/jg/bf/
   docker-compose up -d
   #后台接口
   sudo \mv -f ./micolor.war ./micolor/
   #移动端接口
   sudo \mv -f ./interfaces.war ./interfaces/
   #扩展包
   sudo \mv -f ./extra.war ./extra/
   #后台前端
   sudo tar -zxvf jg.tar
   sudo rm -rf ./www/jg
   sudo \mv -f  dist ./www/jg
   #移动端前端
   sudo tar -zxvf jgm.tar
   sudo rm -rf ./www/jgm
   sudo \mv -f  dist ./www/jgm
   chmod -R  777 ./
   echo "OK"
   ```



## sonar 扫描java工程

```
#进入扫描项目工程目录
cd /home/gitsource/education-cultivate/qinchuan/04-Development/0402-Source/trunk/micolor
#执行maven扫描
mvn clean install sonar:sonar
```



## sonar 扫描js

```
#key和name保持一致且在sonar下唯一
sonar.projectKey=micolor-vue-mobile
sonar.projectName=micolor-vue-mobile
#工程版本
sonar.version=1.0
sonar.language=js
sonar.sourceEncoding=UTF-8
sonar.projectBaseDir=/home/gitsource/education-cultivate/qinchuan/04-Development/0402-Source/trunk/vue/schome-link/
sonar.sources=src
sonar.binaries=src
```
