---
title: 纵表转换横表
author: AnnWen
date: 2020-07-17 23:46:52
categories: 
  - db
typora-root-url: ..
permalink: /pages/9ee7ec/
sidebar: auto
tags: 
  - 
---

1、表结构以及建表语句

![](https://jsd.cdn.zzko.cn/gh/micolor/images/note/202401121547901.png)

```sql
CREATE TABLE "HCLOUD"."EDU_EXAM_SCORE_ROW" 
   (	"ID" NUMBER(16,0) NOT NULL ENABLE, 
	"EXAM_ID" NUMBER(16,0), 
	"COLUMN_KEY" VARCHAR2(255), 
	"COLUMN_VALUE" VARCHAR2(255), 
	"COLUMN_NUM" NUMBER(4,0), 
	"CREATE_TIME" DATE, 
	"STUDENT_ID" NUMBER(16,0), 
	"STUDENT_NAME" VARCHAR2(255), 
	 CONSTRAINT "PK_EDU_EXAM_SCORE_ROW" PRIMARY KEY ("ID")
   )
```

2、根据考试获取考试展示科目

![](https://jsd.cdn.zzko.cn/gh/micolor/images/note/202401121547676.png)

```sql
SELECT COLUMN_KEY, COLUMN_NUM FROM EDU_EXAM_SCORE_ROW
WHERE EXAM_ID=#{examId}
GROUP BY COLUMN_KEY, COLUMN_NUM
ORDER BY COLUMN_NUM ASC
```

3、根据考试、以及展示科目将纵表转换成横表

```sql
SELECT STUDENT_NAME as col_0 
,SUM(DECODE(COLUMN_KEY, '语文',COLUMN_VALUE,0)) as col_1 
,SUM(DECODE(COLUMN_KEY, '数学',COLUMN_VALUE,0)) as col_2  
FROM 
EDU_EXAM_SCORE_ROW 
WHERE EXAM_ID = '296' 
GROUP BY STUDENT_NAME
```
