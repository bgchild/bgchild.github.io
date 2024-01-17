---
title: MYSQL数据库自动备份
date: 2020-01-03 21:46:47
categories: 
  - db
tags: 
  - Mysql
permalink: /pages/59ccbb/
sidebar: auto
author: 
  name: AnWen
  link: https://github.com/micolor
---

MYSQL数据库自动备份脚本

<!--MORE-->
```
#!/bin/bash
#设置mysql的备份保存目录
folder=/opt/database_bak
cd $folder
day=`date +%Y-%m-%d`
mkdir -p "$day"
cd $day
#数据库服务器ip，填写服务器的公网地址即可
host=xxx.xxx.xxx.xxx
#用户名
user=xxx
#密码
password=xxx
#要备份的数据库名
db1=dbname1
db2=dbname2
db3=ddname3
db4=dbname4
db5=dbname5

#执行备份语句
mysqldump -h$host -u$user -p$password $db1  | gzip > dbname1-`date +%Y-%m-%d`.sql.gz
mysqldump -h$host -u$user -p$password $db2  | gzip > dbname2-`date +%Y-%m-%d`.sql.gz
mysqldump -h$host -u$user -p$password $db3  | gzip > dbname3-`date +%Y-%m-%d`.sql.gz
mysqldump -h$host -u$user -p$password $db4  | gzip > dbname4-`date +%Y-%m-%d`.sql.gz
mysqldump -h$host -u$user -p$password $db5  | gzip > dbname5-`date +%Y-%m-%d`.sql.gz
```