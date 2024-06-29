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

### 函数

```sql
DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUserByTenantId`(
    IN in_tenant_id VARCHAR(20), 
    OUT out_user_id BIGINT
)
BEGIN
    SELECT user_id INTO out_user_id
    FROM sys_user
    WHERE tenant_id = in_tenant_id;
END

DELIMITER ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteRecordsByUserId`(IN userId bigint)
BEGIN
  SET @user_id = userId;
	
	SELECT * FROM sys_user WHERE user_id = @user_id;
END

DELIMITER ;


-- 调用了存储过程 GetUserByTenantId，将租户编号 '157979' 作为输入参数，并将查询到的 user_id 存储在 @user_id 变量中。
CALL GetUserByTenantId('157979', @user_id);
-- 执行了一个额外的 SELECT 语句，显示存储过程返回的 @user_id 变量的值。
-- 如果被注释掉，则不会执行额外的 SELECT 语句显示 @user_id 变量的值。
SELECT @user_id AS user_id;
-- 调用了存储过程 DeleteRecordsByUserId，将前面获取的 @user_id 变量作为输入参数传递给该存储过程。
CALL DeleteRecordsByUserId(@user_id)

```

## 数据库级别的操作

```sql
-- 查找数据库中的所有表，并筛选出包含指定字段的表
SELECT table_name
FROM information_schema.columns
WHERE table_schema = 'learn' -- 替换为你的数据库名称
AND (column_name = 'tenant_id' OR column_name = 'buy_tenant_id');
```