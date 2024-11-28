# npm 命令

::: tip 学习资料
- [npm 中文文档](https://www.npmjs.cn/)
:::

## 查看模块版本
```sh
$ npm view/info <PACKAGE_NAME> version
$ npm view/info <PACKAGE_NAME> versions
```

## 打开主页
```sh
$ npm home <PACKAGE_NAME>
$ npm home vue
$ npm home react
```

## 打开代码仓库
```sh
$ npm repo <PACKAGE_NAME>
$ npm repo vue
$ npm repo react
```

## 检查过时的包
```sh
$ npm outdated <PACKAGE_NAME>
```

## 查看本地配置参数
```sh
$ npm config ls -l
```

## 更新依赖包（[Taze](https://github.com/antfu/taze)）
```sh
$ npx taze
```

## --ignore-scripts
```sh
$ npm i --ignore-scripts
$ npx can-i-ignore-scripts
```

## 清除本地缓存
```sh
$ npm cache verify
```
