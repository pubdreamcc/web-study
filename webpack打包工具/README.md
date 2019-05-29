# `webpack` 打包工具

`webpack` 毫无疑问现在是非常火热的前端自动化打包工具，本系列教程是基于最新版 `webpack 4.X.X` 来编写。

## webpack 4：零配置开始

1. 创建一个目录然后进入，初始化生成 `package.json` 文件

```shell
md webpack-4-quickstart

cd webpack-4-quickstart

npm init -y
```

2. 安装 `webpack4` 和 `webpack-cli`

```shell
npm install webpack webpack-cli --save-dev
```

3. 打开 ` package.json ` 添加构建脚本：

```json
"scripts": {
  "build": "webpack"
}
```

4. 创建入口文件： `index.js` ，`webpack4` 默认入口文件为`/src/index.js `

```javascript
console.log('hello world!')
```

5. 打包构建

```shell
npm run build
```

你会在  `~/webpack-4-quickstart/dist/main.js ` 得到你打包后的文件。

## Webpack 4: 生产和开发模式

创建 `webpack.config.js` `webpack` 配置文件，`webpack 4` 介绍了生产（` production`） 和开发（` development`） 两种模式，需要通过 `mode `属性指定。

在`webpack.config.js `文件中指定`mode` 属性为` development`，再次打包文件。（`npm run build`）。

可以看到`main.js`文件中的代码没被压缩，哈哈，这就是 `webpack` 的厉害之处，可以分模式开发。

## webpack 4：覆盖默认的入口/出口文件

在` webpack.config.js` 文件中通过 `entry ` 属性指定打包的入口文件，`output`属性指定打包后的出口文件。

```javascript
const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/hello.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // 这里必须指定一个绝对路径
    filename: 'hello.js'
  }
}
```

再次打包，就会打包 `./src/hello.js` ，输出 `./dist/hello.js`。

## webpack 4：用 Babel 7 转译 ES6 的 js 代码

现在大家都习惯用 ES6 写 Javascript。

但是不是所有浏览器都知道怎么处理 ES6。我们需要做一些转换。

这个转换的步骤叫做 `transpiling`。`transpiling` 是指把 ES6 转译成浏览器能够识别的代码。

webpack 本身并不知道如何去转换，但是有 `loaders`。把他们想象成转换器。

`babel-loader` 是 webpack 的一个 loader，可以把 ES6 以上的代码转译成 ES5。

为了使用这个 loader 我们需要去安装一系列的依赖。特别是：

* babel-core
* babel-loader
* babel-preset-env （for compiling Javascript ES6 code down to ES5）

先安了吧：
```
npm i babel-core babel-loader babel-preset-env --save-dev
```

下一步我们在项目目录下建立一个 `.babelrc `文件用来配置 Babel。

```javascript
{
  "presets": ["env"]
}
```

配置完成后通过配置文件使用    `babel-loader`

```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }
  ]
}
```

## webpack 4：HTML 插件

`webpack` 需要两个额外的组件去处理 HTML：`html-webpack-plugin` 和 `html-loader`。

先安装：
```
npm i html-webpack-plugin html-loader --save-dev
```

webpack 的配置 `html-loader `

```javascript

{
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
      options: { minimize: true } // 是否压缩代码
    }
  ]
}

... 插件使用...
plugins: [
  new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
  })
]
```

在 `./src/index.html` 新建一个 HTML 文件（模板文件，用来给`webpack`打包）

最后运行 `npm run build` 重新打包，查看 ./dist 目录，你会看到运行后的结果。

没有必要在你的 HTML 文件中引入你的 JavaScript：它会自动地注入进去。

在浏览器打开 ./dist/index.html：你可以看到最后的结果。

## webpack 4： 提取 CSS 到文件中

`mini-css-extract-plugin` 插件用来提取 CSS 到文件中。

安装它：

```shell
npm i mini-css-extract-plugin css-loader --save-dev
```

然后建立一个 CSS 文件用来测试：

```css
body {
  line-height: 2;
}
```

配置 loader 和 plugin：

```javascript
{
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader']
}

...插件使用...
new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
})
```

最后在入口文件中引入 CSS：

```javascript
import style from './main.css'
```

构建：

```shell
npm run build
```

查看 `./dist` 目录，你应该能看到 CSS 的结果！

重点回顾：`extract-text-webpack-plugin` 在 webpack 4 中不能用了。请使用 `mini-css-extract-plugin`。

## webpack 4：webpack dev server

一旦配置了 `webpack dev server` 它会在浏览器中加载你的 app。

只要你改变了文件，它会自动地刷新浏览器的页面。

安装下面的包来搭建 `webpack dev server`：

```
npm i webpack-dev-server --save-dev
```

然后打开 `package.json` 调整脚本：

```json
"scripts": {
  "dev": "webpack-dev-server --mode development --open",
  "build": "webpack --mode production"
}
```

保存关闭。

现在运行：

```shell
npm run dev
```

你就会看到 webpack dev server 在浏览器中加载你的应用了。

webpack dev server 非常适合用来开发。