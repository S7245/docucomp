---
sidebar_position: 1
---

# npm

`npm install npm@latest -g`

```sh
npm set init-author-email "SamLau0401@outlook.com"
npm set init-author-name "Sam"
npm set init-license "MIT"
```


## npm 私有仓库

```sh
# 查看npm镜像源地址，官方源(https://registry.npmmirror.com/)
npm config get registry

# 设置npm默认源
npm config set registry https://registry.npmmirror.com
npm config set registry=https://packages.aliyun.com/65dd84ebbf04fd10e8168bd8/npm/npm-registry/
```

本地开发(依赖本地的包)：

```sh
# --only=dev 是开发依赖
npm install /Users/liushan/Desktop/private_packages/npms/zkw_utils --only=dev

# "file:../npms/zkw_utils"
```


talk

- 一周的时间，弄会员管理； 有没有自发性去做优化？ 
- 代码要做到可读性，可扩展； 不要以个方法写全了。
- 一个接口两个人能定的就不要找我了。
- 不要畏首畏尾的
- 不写代码的时候在干嘛？
- 要看需求文档， 不要我每次都催
- 按照需求去做， 不要按照自己的理解，可以有异议，但是只要定好了就要执行。
- 定过的标准，也不发表意见，也不准守。
- 主动性一般，能力有待提升。

待提升：
- 主动性
- 

后面的工作流程：

- 前后端对接口字段，如果双方都同意了；就直接开发接口。
- 不按照规范文档来的，都直接打回。








VIP 1V1 Evelyn
售价：21375
有效期：6个月


在别的平台有卡，现在开卡需要补录老卡信息。

在别的平台或者线下卡(总额：10000元  总额度：100次  剩余余额：50次  开卡时间：2020-01-01  有效期至：2020-10-01)
现在需要在线上平台创建一张会员卡，把用户在别的平台或者现在平台的会员卡集成进来，显示剩余可用的资产。

- 老卡信息：（别的平台、线下实体卡）
	- 开卡时间 、 有效期至
	- 余额：
		- 次数卡：A次
		- 储值卡：A元
		- 期限卡：-
- 新卡信息：
	- 有效期(100天)
	- 售价金额
	- 余额：
		- 次数卡：A次
		- 储值卡：A元
		- 期限卡：-
- 补录老卡：
	- 开卡时间(必填) 、 有效期至(必填) 、 发卡时间
	- 剩余卡余额：
		- 次卡： A次
		- 储值卡： A元
		- 期限卡： - 
- 新开卡：
	- 开卡时间(必填) ：


- 补录老卡：
	- 老卡信息：
		- 开卡时间：
		- 有效期：
		- 发卡时间：
		- 


- 会员卡：
	- 高级设置
	- 适用场馆及课程
		- 和会员卡挂钩。

- 用户会员卡：
	- 在发卡/购卡后，高级设置形成一幅备份和用户会员卡ID挂钩。
- 会员卡删除校验：
	- 去查询，当前会员卡是否有关联用户
		- 存在关联用户
			- 用户会员卡状态状态是否为：已过期、退卡 状态。
				- 全部都是：返回可删除。
				- 其他：返回信息：该会员卡存在3个关联用户，删除该卡后这些关联用户不可使用卡
		- 没有关联用户
			- 返回可删除。
提示报错：
该会员卡存在 3 个关联用户，强制删除会影响已购卡会员的使用，是否强制删除？
关联持卡人：A、B、C





















