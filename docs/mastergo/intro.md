---
sidebar_position: 3
---

# Mastergo

`https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/mastergo/202406222050.png`

[MasterGo帮助文档](https://mastergo.com/help/)

## 操作快捷键

|功能|快捷键|
|-- | -- |
| 隐藏/显示 右侧操作界面 | `cmd + \` |
| 隐藏/显示 左侧操作界面 | `shift + cmd + \` |
| 添加 | `shift + cmd + \` |

重命名：

|功能|快捷键|
|-- | -- |
| 编辑模式 | `Enter` |
| 重命名图层 | `CMD+R` |
| 重命名涂层 | `CMD+R` |

新建：

|功能|快捷键|
|-- | -- |
| 新建容器 | `F` |
| 新建圆形 | `O` |
| 添加自动布局 | `Shift+A` |


## 组件规范

[组件和样式](https://mastergo.com/community/resource/58134752751685?from=card)


### 创建组件

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/mastergo/202406222050.png)

`组件`和`实例`：

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/mastergo/20240623002.png)

`组件`和`实例` 改动关联：

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/mastergo/20240623001.png)

实例嵌套：

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/mastergo/20240623003.png)

## 样式

样式是可以重复使用的图层属性，可以将定义好的样式复用到任何图层，并在修改样式定义时，实时更新这些图层。

参考资料： [Automatic Design](https://atomicdesign.bradfrost.com/)


```txt
- 全局
	- 纯白色
	- 纯黑色
- 正文色
	- 正文色
	- 正文色辅助色
- 主要色
	- 主要色
	- 主要色背景
- 错误色
	- 错误色
	- 错误色背景
- 图片填充
	- 占位图[Image]
- 背景色
	- 深色背景
	- 白色背景
- 描边色
	- 描边色
	- 描边色辅助
	- 描边浅色
```

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/mastergo/20240623004.png)

## 插槽

使用实例时，根据具体场景的需要，可以在实例的插槽内放入任意元素。 合理使用插槽，可以大幅提高组件使用的灵活度、减少不必要的组件状态。

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/mastergo/20240623005.png)



## 自动布局实例

自动布局Form

![](https://blogs7245-1256587996.cos.ap-guangzhou.myqcloud.com/img/mastergo/20240624001.png)