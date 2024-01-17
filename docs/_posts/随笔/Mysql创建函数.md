---
title: Mysql创建函数
date: 2020-01-03 21:45:50
categories: 
  - db
tags: 
  - mysql
permalink: /pages/9d83f8/
sidebar: auto
author: 
  name: AnWen
  link: https://github.com/micolor
---

Mysql创建函数参考

<!--More-->

```
CREATE DEFINER=`root`@`%` FUNCTION `GetChildCatList`(rootId CHAR(32)) RETURNS varchar(1000) CHARSET utf8
BEGIN
    DECLARE sTemp VARCHAR(1000);
    DECLARE sTempChd VARCHAR(1000);
    SET sTemp = '$';
    SET sTempChd =cast(rootId as CHAR);
    WHILE sTempChd is not null DO
        SET sTemp = concat(sTemp,',',sTempChd);
        SELECT group_concat(mccode) INTO sTempChd FROM t_materialclass where FIND_IN_SET(mcpcode,sTempChd)>0;
    END WHILE;
RETURN sTemp; 
END
```