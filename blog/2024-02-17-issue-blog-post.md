---
slug: issue-blog-post
title: 运营端测试
authors: sam
tags: [spark]
---

## 套餐管理

### 价格配置

```sql
-- 套餐
SELECT * from euse_package; 
```

|id|tenant_id|package_template_id|package_name|package_introduce|charge_type|original_price|sell_price|effective_date|effective_date_unit|venue_num|open_display_flag|package_status|
|--|--|--|--|--|--|--|--|--|--|--|--|--|
|20 |1758425388183351297|试用套餐|闪咔系统的试用套餐|1|0.00|0.00|90|1|1|1|0|

### 销售记录

- [ ] 销售记录未显示（id = 1000167)。

```sql
-- 套餐销售记录
SELECT * from euse_package_sale_record;
```

- [查询套餐销售记录(/operation/package/salerecord/saleRecordList)](http://47.92.120.127:8080/doc.html#/1.%E8%BF%90%E8%90%A5%E5%90%8E%E5%8F%B0/%E8%BF%90%E8%90%A5%E5%B9%B3%E5%8F%B0-%E5%A5%97%E9%A4%90%E7%AE%A1%E7%90%86-%E5%A5%97%E9%A4%90%E9%94%80%E5%94%AE%E8%AE%B0%E5%BD%95/saleRecordList)

## 商家管理

### 商家信息管理

```sql
-- 租户表
SELECT * from sys_tenant;
```


### 商家规则配置管理

```sql
SELECT id,`name`,`value`,type from euse_config WHERE id = '100';
```

|id|	name	|value	|type|
|--|--|--|--|
|100|	新注册商家试用	|20	|1|

[更新商家规则配置 id必传(/operation/merchant/trialconfig/update)](http://47.92.120.127:8080/doc.html#/1.%E8%BF%90%E8%90%A5%E5%90%8E%E5%8F%B0/%E8%BF%90%E8%90%A5%E5%B9%B3%E5%8F%B0-%E5%95%86%E5%AE%B6%E7%AE%A1%E7%90%86-%E5%95%86%E5%AE%B6%E8%A7%84%E5%88%99%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86/updateConfig_1)

### 商家微信订阅消息管理

[查询微信消息模板(/operation/merchant/wechatconfig/list)](http://47.92.120.127:8080/doc.html#/1.%E8%BF%90%E8%90%A5%E5%90%8E%E5%8F%B0/%E8%BF%90%E8%90%A5%E5%B9%B3%E5%8F%B0-%E5%95%86%E5%AE%B6%E7%AE%A1%E7%90%86-%E5%95%86%E5%AE%B6%E5%BE%AE%E4%BF%A1%E6%B6%88%E6%81%AF%E7%AE%A1%E7%90%86/list_8)

```sql
-- 商家微信消息管理
SELECT * from euse_tenant_wechat_message_template;
```

### 商家提醒设置管理

- [ ] **H5** Switch组件修改无效。

[查询商家提醒设置(/operation/merchant/reminderconfig/listdetail)](http://47.92.120.127:8080/doc.html#/1.%E8%BF%90%E8%90%A5%E5%90%8E%E5%8F%B0/%E8%BF%90%E8%90%A5%E5%B9%B3%E5%8F%B0-%E5%95%86%E5%AE%B6%E7%AE%A1%E7%90%86-%E5%95%86%E5%AE%B6%E6%8F%90%E9%86%92%E8%AE%BE%E7%BD%AE%E7%AE%A1%E7%90%86/listdetail)

## 消息中心

### 系统消息

- [ ] **H5** 新增消息，无效。

```sql
SELECT id,message_title from euse_message_center;
```

## 系统设置

### 角色管理

```sql
-- 用户和角色关联表
SELECT * from sys_user_role;
```

|user_id|	role_id|
|--|--|
|1|	1|

```sql
-- 角色信息表
SELECT * from sys_role;
```

|role_id	|	tenant_id	|	role_name	|	role_key	|	role_sort	|	data_scope	|	menu_check_strictly	|	dept_check_strictly	|	status	|	del_flag	|	create_dept	|	create_by	|	update_by	|	update_time	|	remark|
|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
|1	|	000000	|	超级管理员	|	superadmin	|	1	|	1	|	1	|	1	|	0	|	0	|	103	|	1	|	|		|		|	超级管理员|

```sql
-- 角色和菜单关联表
SELECT * from sys_role_menu;
```

### 菜单管理

- [ ] **API** 

```sql
-- 菜单权限表
SELECT menu_id,menu_name,menu_type,parent_id from sys_menu;
```

|menu_id|	menu_name|	menu_type|	parent_id|
|--|--|--|--|
|1|	系统管理|	M|	0|
|2|	系统监控|	M|	0|
|3|	系统工具|	M|	0|
|4|	PLUS官网|	M|	0|
|5|	测试菜单|	M|	0|
|6|	租户管理|	M|	0|
|100|	用户管理|	C|	1|
|101|	角色管理|	C|	1|
|102|	菜单管理|	C|	1|
|103|	部门管理|	C|	1|
|108|	日志管理|	M|	1|
|10001|	系统配置管理|	M|	0|

### 菜单权限

```sql
-- 租户套餐表
SELECT * from sys_tenant_package;

-- 1758425388183351297
```

### 账号管理(system/account)

- [ ] **H5** 编辑列表接口请求错误（ add -> edit）。
- [x] test。

```sql
-- 用户信息表
SELECT user_id,tenant_id,nick_name,user_type,phonenumber from sys_user;
```

|user_id|tenant_id|nick_name|user_type|phonenumber|
|--|--|--|--|--|
|1|	000000|	疯狂的狮子Li|	sys_user|	15888888888|


- [获取用户列表(/operation/system/user/list)](http://47.92.120.127:8080/doc.html#/1.%E8%BF%90%E8%90%A5%E5%90%8E%E5%8F%B0/%E8%BF%90%E8%90%A5%E5%B9%B3%E5%8F%B0-%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86-%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86/list)



### 系统配置

- [ ] **H5:** 界面接入接口。

- 配合接口实现界面。
- 关联表： `euse_config`


http://localhost:8363/operation/system/menu/roleMenuTreeselect/2















