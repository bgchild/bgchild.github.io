---
title: Redis学习笔记
date: 2020-01-03 21:40:25
tags: 
  - redis
permalink: /pages/61eef4/
sidebar: auto
categories: 
  - 随笔
author: 
  name: AnWen
  link: https://github.com/micolor
---



<!--MORE-->

1.  通用命令

   ```
   redis-cli
   AUTH PASSWORD
   select 1
   keys *
   del key
   type key
   ```

2. 数据类型

   字符串类型string

   ```
   set key value
   get key
   ```

   哈希类型hash

   ```
   hset key field value
   hget key field
   hgetall key
   hdel key field
   ```
   

列表类型list

```
   lpush key value
   rpush key value
   lrange key start end
   lpop key
   rpop key
```

   集合类型set

   ```
   sadd key value
   smembers key
   srem key value
   ```

   有序集合类型zset

   ```
   zadd key score value
   zrange key start end
   zrem key value
   ```

   