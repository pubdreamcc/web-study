# 简要说明

chrome 浏览器已经明确说明在2020年底之后将永久不支持flash player，所以前端嵌入 flash 文件播放已经不再是主流，目前H5自带的 `<video></video>` 标签已经是网页播放视频主流技术。

今天在公司弄了一个很久的页面，里面都是采用前端嵌入 flash 播放的形式，乍一看，自己也傻眼，经过 Google，Bing 之后，特此就网页中接入 flash 做一个总结。

## 普通标签形式

这种采用 标签形式 接入 flash 文件存在浏览器兼容性问题，常见的就是 `<object></object>` 和 `<embed/>` 标签 嵌套使用，然后通过设置标签属性加载 flash 文件（常为 `.swf` 格式文件）。

## 利用第三方库（swfobject）

这是一个 `JavaScript` 库，别人已经封装好了如何在不同浏览器中接入 flash，所以我们无需考虑浏览器兼容性问题，常见的 chrome浏览器，IE浏览器都可以。

目前我看了以前老的项目中使用flash播放技术，也大都是采用这个第三方库，所以推荐大家使用这种js 嵌入 flash 方式。

> github 地址： [swfobject](https://github.com/swfobject/swfobject)

使用这个库，只需引入里面最核心的 `swfobject.js` 文件即可。

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>js 嵌入flash 视频播放</title>
  <!-- 引入核心js文件 -->
  <script src="./swfobject.js"></script>
</head>
<body>
  <div id="cc" style="padding: 50px;">
    <p>您还没有下载flash播放器，请先去下载</p>
  </div>
  <script>
    swfobject.embedSWF('http://dtp.gtafe.com:58081/Resources/ResourcePreview?ResourceID=b27d6fbe-a9bf-4e04-83d0-9e0a2ea3974f', 'cc', '800', '400', '6.0.0', 'expressInstall.swf')
  </script>
</body>
</html>
```

注解：调用方法embedSWF——插入SWF文件，参数依次是：

* @swf文件的地址；
* @用于装入swf文件的容器(如div)的id；
* @flash的宽度；
* @flash的高度（当然，这里的宽高都可以使用诸如100%这样的百分比来表示）；
* @正常播放该flash所需的最低版本；
* @当版本低于要求时，执行该swf文件，这里利用这个flash跳转到官方下载最新版本的flash插件。（该参数可以省略）

在同一个页面插入多个flash到不同位置时，只要重复上面的语句，使用不同的容器id就可以了。
