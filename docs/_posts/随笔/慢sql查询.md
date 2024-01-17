---
title: 慢sql查询优化
date: 2020-01-03 21:46:47
categories: 
  - db
tags: 
  - Mysql
permalink: /pages/3545a7/
sidebar: auto
author: 
  name: AnWen
  link: https://github.com/micolor
---

1. sql执行顺序

   (1)from 

   (3) join 

   (2) on 

   (4) where 

   (5) group by(开始使用select中的别名，后面的语句中都可以使用)

   (6) avg,sum.... 

   (7)having 

   (8) select 

   (9) distinct 

   (10) order by

   (11) limit 

2. 慢sql查询优化

```sql
#查看系统变量及其值
SHOW VARIABLES like '%QUERY%'
#查看各种状态
SHOW STATUS LIKE '%Slow_queries%'
#慢查询日志的位置
set global slow_query_log_file=' /usr/share/mysql/sql_log/mysql-slow.log' 
#开启慢查询日志
set global log_queries_not_using_indexes=on;
#大于1秒钟的数据记录到慢日志中，如果设置为默认0，则会有大量的信息存储在磁盘中，磁盘很容易满掉
set global long_query_time=1;  
#指定索引
FORCE INDEX()
```

2. 数据库的隔离级别设置

```sql
#查看全局隔离级别设置
SELECT @@global.transaction_isolation;
#查看当前事务隔离级别
SELECT @@transaction_isolation;
#设置隔离级别 (read uncommitted、read committed、repeatable read、serializable)
set session transaction isolation level 设置事务隔离级别;
```

