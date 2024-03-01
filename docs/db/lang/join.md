# Join

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/ktj0aux284.jpeg)

`一对一` 、 `一对多`  、 `多对多` ：

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/WX202402211308-3.png)

条件写在： `on` 中 、 `where` 中：

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/WX20240221-132330.png)

条件有`is null` 或者有 `is not null`： 

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/s5kh3bmauz.png)

[Left join](https://cloud.tencent.com/developer/article/1555171)

```sql
DROP TABLE IF EXISTS `classes`;
CREATE TABLE `classes` (
`id` bigint NOT NULL AUTO_INCREMENT COMMENT '班级ID',
`name` VARCHAR(20) DEFAULT NULL COMMENT '班级名称',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='班级信息';

DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
`id` bigint NOT NULL AUTO_INCREMENT COMMENT '学员ID',
`class_id` bigint NOT NULL COMMENT '班级ID',
`name` VARCHAR(20) DEFAULT NULL COMMENT '学生名称',
`gender` VARCHAR(32) NOT NULL  DEFAULT 'M'  COMMENT '性别',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='学员信息';
```