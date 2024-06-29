---
sidebar_position: 1
---

# Tutorial Intro


```sql
DROP TABLE IF EXISTS `SIMS_COLLEGE`;
CREATE TABLE `SIMS_COLLEGE` (
  -- 这条记录在生成记录中 COLLEGE_ID = 00000000000000000001 开始自增。
  `COLLEGE_ID` bigint(20) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '学院ID',
  PRIMARY KEY (`COLLEGE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='学院';
SET FOREIGN_KEY_CHECKS = 1;
```

```shell
mkdir college && cd college && pnpm init
```



## 数据库备份