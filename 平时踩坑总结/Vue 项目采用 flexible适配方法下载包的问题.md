# 注意点

之前 `Vue` 项目 移动端适配方案选的是 淘宝的 `flexible.js ` ，但发现该方案在 iPad 或平板下适配效果失效，页面布局会混乱，最后找了一下，原来是自己下载的依赖包不对。

贴上 官网的 地址 ：[flexible适配](https://github.com/amfe/lib-flexible)

之前下载的依赖包为 : `lib-flexible`，

现在改用：`amfe-flexible`

最后一定记得 手动在入口index页面 手动加上移动端专属 meta 标签

```html
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
```

之前选用的 `lib-flexible` 是无需自己加 meta 标签，包会自动生成meta 标签。

最后，还是建议大家移动端适配方案选用 `vw` ，毕竟原始的 `rem` 适配存在许多问题，而且作者也极力推荐 使用 `vw` 做移动端适配。
