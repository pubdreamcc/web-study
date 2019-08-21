最近在写一个 hybrid App，播放页面采用的是 H5 技术，播放器插件选用的是 `vue-video-player`。当 H5 嵌入 IOS webview 下时，发现点击播放视频按钮会自动进入全屏播放，这不是想要的结果。

查阅资料找到以下解决办法。

## ios端默认全屏解决办法

```html
<video webkit-playsinline="webkit-playsinline"></video>
```

给video标签添加 `webkit-playsinline` 属性，可避免视频自动全屏播放，此方法只针对于iOS8，9下生效。

ios10 及以上系统版本需要添加：

```html
<video playsinline="playsinline"></video>
```

## webview 下 ios 默认全屏解决办法

添加了以上属性之后发现在IOS webview 下还是不行，需要再添加以下一条设置语句即可:

`webview.allowsInlineMediaPlayback = YES;`
