# useEffect

```ts
useEffect(() => {
  dispatch({
    type: `${namespace}/pageInit`
  })
  return () => setFileList([])

}, [])
```