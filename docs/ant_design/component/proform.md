# ProForm

- [API](https://procomponents.ant.design/components/modal-form#api)


## Tips

```ts
// 如果 allLabel 存在数据，则展示 <Form.Item>标签，否则则不展示。
{allLabel && (allLabel as { [key: string]: any }).length > 0 && (
  <Form.Item label="场馆设施" name="venueFacility"></Form.Item>
)}
```