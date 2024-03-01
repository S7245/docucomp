---
sidebar_position: 1
---

# 校验

```typescript
// 校验手机号合法性（中国大陆）
const regex = ^1(3|4|5|6|7|8|9)\d{9}$;  
// 密码(以字母开头，长度在6~12之间，只能包含字母、数字和下划线)	
const regex = ^[a-zA-Z]\w{5,11}$
```