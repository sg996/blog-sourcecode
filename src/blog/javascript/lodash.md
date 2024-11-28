# lodash 常用功能

## 对象分组
```js
let result = [
  { id: 1, name: '小米1' },
  { id: 2, name: '小米2' },
  { id: 5, name: '小东' },
  { id: 2, name: '小米3' },
  { id: 1, name: '小米4' },
  { id: 4, name: '小红1' },
  { id: 3, name: '小西' },
  { id: 4, name: '小明' },
  { id: 3, name: '小红2' }
]

const obj = {
  1: '一年级',
  2: '二年级',
  3: '三年级',
  4: '四年级',
  5: '五年级',
  6: '六年级',
}

result = _.chain(result)
  .groupBy('id')
  .toPairs()
  .map(([key, value]) => _.zipObject(['label', 'children'], [obj[key], value]))
  .value()
```
