---
sidebar_position: 1
---

# 函数

## 自定义函数

```sql

-- SET GLOBAL log_bin_trust_function_creators = TRUE;

-- 创建一个函数，返回两个整数之和
DELIMITER $;
CREATE FUNCTION f1(n1 INT,n2 INT)   -- 创建函数 f1 参数可以是MySQL支持的那些类型
RETURNS INT  -- 该函数的返回值也是 int 类型
BEGIN	-- 标识函数体开始
	DECLARE num INT;	-- 定义一个int类型的变量
	SET num = n1 + n2;
	RETURN(num);
END $
DELIMITER;

-- 调用函数
SELECT f1(1,1);

SELECT * FROM classes WHERE id = (SELECT f1(1,1));

```