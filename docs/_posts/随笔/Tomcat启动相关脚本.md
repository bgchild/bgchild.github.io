---
title: Tomcat启动相关脚本
date: 2020-11-30 20:36:35
categories: 
  - Java
tags: 
  - Java
permalink: /pages/5a5f91/
sidebar: auto
author: 
  name: AnWen
  link: https://github.com/micolor
---



### Tomcat重启脚本

```shell
#!/bin/sh
source /etc/profile
TOMCAT_PATH=$(cd `dirname $0`; pwd)
echo "TOMCAT_PATH is $TOMCAT_PATH"
PID=`ps aux | grep $TOMCAT_PATH | grep java | awk '{print $2}'`
if [ -n "$PID" ]; then
        echo "Will kill tomcat: $PID"
        sh "$TOMCAT_PATH/shutdown.sh"
        sleep 8
else echo "No Tomcat Process $PID"
fi

PID=`ps aux | grep $TOMCAT_PATH | grep java | awk '{print $2}'`

while [ -n "$PID" ]; do
PID=`ps aux | grep $TOMCAT_PATH | grep java | awk '{print $2}'`
        kill -9  $PID && sleep 1
        echo "Try to kill $PID"
done
mv $TOMCAT_PATH/../webapps/*.war $TOMCAT_PATH/../
rm -rvf $TOMCAT_PATH/../webapps/*
mv $TOMCAT_PATH/../*.war $TOMCAT_PATH/../webapps/
sh "$TOMCAT_PATH/startup.sh"
sleep 3
PID=`ps aux | grep $TOMCAT_PATH | grep java | awk '{print $2}'`
if [ -n "$PID" ]; then
        echo "Restart tomcat successfully!"
else
        echo "Fail to startup tomcat"
        exit 1
fi
```

### jar包启动脚本

sh ./startApp.sh [路径] [名称]

```shell
#!/bin/bash
p_path=$1 
p_name=$2
kill -9 `ps -ef | grep -v grep | grep java | grep $p_path$p_name | awk '{print $2}'`
#sh /home/app/software/killApp.sh $p_name
#ps -ef|grep java|grep $p_name|grep -v grep |awk '{print $2}'|xargs -n1 kill -9
echo "stop success"
nohup /usr/java/jdk1.8.0_77/bin/java -Xms256m -Xmx512m -Dspring.profiles.active=test-server -jar $p_path$p_name-*.jar > $p_path$p_name.log 2>&1 &
echo "end"
```

