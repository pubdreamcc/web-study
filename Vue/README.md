## 前言
> 本文最初发表在博客园，如果有朋友喜欢写博客，大家也可以一起交流交流。 戳这里 <a href="https://www.cnblogs.com/dreamcc/p/10766750.html">传送</a>

## 准备工作

   1. 判断是否需要翻墙或安装镜像，镜像一般可安装国内淘宝镜像，详情可看这里：<a href='https://registry.npm.taobao.org'>cnpm</a>
   `npm install -g cnpm --registry="cnpm"`全局安装淘宝cnpm。

   2. 开发工具选择很多，VUE无专用开发工具，开发项目多以SPA形式体现，本例使用 Visual Studio Code。

   3. 调试工具选择很多，官方推荐 vue-devtools 。

      > 安装方法：翻墙或者github主页。**https://github.com/vuejs/vue-devtools**下载压缩包，解压到Chrome扩展程序。

## 环境搭建

1. 安装 Node.js 10.15.3, npm包管理工具（高版本node.js自带npm）。

   > 安装完成后，DOS命令行输入命令检查安装情况npm -v,出现npm版本号即可。
下载地址**https://nodejs.org/en/download/**

2. 全局安装 vue-cli脚手架

    DOS命令行安装(-g 参数表示安装至 npm 工作路径,以后任意位置均可访问)
   **npm install -g vue-cli**

3. 安装 开发工具 Visual Studio Code

   1. **下载地址 https://code.visualstudio.com/Download** 

      > ***注意 User Installer / System Installer 不同***（建议安装系统版本）

   2. 安装 **Vetur** ,**vue 2 snippets**插件

      文件 -> 首选项 -> 扩展 -> 搜索 -> 输入 Vetur/vue 2 snippets -> 安装

   3. 安装 语言包（视个人喜好）

      文件 -> 首选项 -> 扩展 -> 搜索 -> 输入 Chinese(Simplified)... -> 安装

   4. 打开文件夹... 开发已存在项目

4. 安装 vue-devtools。

   1. 下载 https://github.com/vuejs/vue-devtools

   2. DOS 命令进入解压后目录
        修改 `\shells\chrome\manifest.json`中 background 节点 persistent 值为 true

   3. 运行 npm install 命令安装依赖包。
        ***进度条等待完成，大约5-15分钟，必要使用cnpm***

   4. 运行 npm run build(一定要执行这步，不然后面会报错)

   5. 启动 Google Chrome -> 输入 chrome://extensions/ -〉确认打开“开发者模式” -> 加载已解压扩展程序 -> 选择 shells\chrome 确定即可安装

## 初始化项目

> 初始化项目有多种方式，建议采用 Webpack 模板模式

  1. 进入需要创建Vue项目文件夹，打开DOS命令行输入：**vue init webpack 项目名称**

  2. 然后终端会出现下图“一问一答”模式

     > “Project name”：这个是项目名称，默认是输入时的那个名称，想改的话直接输入修改，也可以直接回车

     > “Install vue-router”:是否需要vue-router，这里默认选择使用，这样生成好的项目就会有相关的路由配置文件

     > “Use ESLint to lint your code”:是否使用ESLint，刚才说了我们这个项目需要使用所以也是直接回车，默认使用，这样会生成相关的ESLint配置

     > “Setup unit tests with Karma + Moch?”: 是否安装单元测试。由于我们现在还没有单元测试，所以这里选择的是”N”

     > “Setup e2e tests with Nightwatch”：是否安装e2e测试，这里我也同样选择的是“N”

  3. 下载依赖包

      cd ‘项目文件’ 终端执行命令：npm install .这个过程会生成一个**node_modules** 文件夹

  4. 调试项目

     终端输入：npm run dev/start

  5. 打开Google Chrome ,默认项目地址:localhost://8080,访问即可。F12启用开发者调试工具，调试菜单栏选择 Vue

## 开发过程

1. 相关文件说明

   build和config >webpack配置相关文件

   node_modules>项目需要的模板文件

   src/main.js>入口js文件

   src/assets>公共的样式，图片文件

   src/components>各种vue组件文件

   src/App.vue>页面主组件

   src/router>vue-router 路由配置文件

   static>静态资源文件（不会被webpack处理）

   .eslintrc.js>eslint检查配置文件

   .editorconfig>代码编辑环境配置文件

   .eslintignore>eslint检查忽略文件

   .babelrc>babel编译参数配置文件

    index.html>主页，项目入口文件

    package.json>项目配置文件，描述项目信息和依赖

    README.md>项目的说明文档

2. 新增组件

      在 \src\components 目录新建 vue 文件(每一个.vue文件都是一个单独vue组件，用来实现页面特定的功能界面，包括基本的骨架**html+CSS+js**)。例如 Hellovue.vue，vue文件代码标准模板样式如下：

```
        <template>
        <div id="...">
            组件html模板
        </div>
        </template>

        <style>
            css相关样式
        </style>

        <script>
        export default {  //默认向外暴露一个对象
            name:'Hellovue',
            data () {
                return {};// data保存数据必须返回一个对象
            }
        };
        </script>
```

3. 引入组件

      1. 在App.vue主文件中script标签添加`import Hellovue form ./components/Hellovue.vue`导入子组件。
 
      2. 组件模板对象添加components属性。

      3. 重启项目即可看到自己定义的组件。

      4. 新增页面（利用vue路由实现）在 \router\index.js 添加新增页面路由

```
import Hellovue from '@/components/Hellovue'
...
    {
      path: '/Hellovue',
      name: 'Hellovue',
      component: Hellovue
    }
```

  在App.vue主页面挂载`<router-link to='Hellovue'>跳转我的页面</router-link>`即可

4. 打包编译

      终端运行命令编译
      **npm run build**
      即可产品dist文件，项目上线后只需把dist文件丢到服务器即可。ps:如果本地测试，则需修改webpack生产环境下的**assetsPublicPath**配置

## 注意事项：

1. 最好使用cnpm代替npm安装依赖，因为开发过程中少部分包如果用npm是无法下载完成，一直卡住，换为cnpm毫无压力记得加上--save选项，否则别人安装的话会缺少包.
2. 路径说明

    ‘/‘, 表示项目根目录

    ‘./‘，表示当前目录

    ‘../‘ ，表示上一级目录，可以连续多个，比如‘../../../‘表示往外层退3级目录

3. 所有组件的数据都必须放置在data函数返回的对象中，无论是否有数据，否则会报错。
4. 一个template组件下只能有一个并列的div，否则报错。
5. ESLint 格式问题

   1. vue 创建项目时，ESLint 选择启用时候，因 ESLint 代码检查极其严格，缩进空格数量，尾部空行等皆在检查之列，可以选择关闭。
   build/webpack.base.conf.js 注释掉 module->rules 中 ESLint 规则，关闭代码：
   `//...(config.dev.useEslint ? [createLintingRule()] : [])`,
   规范起见，修改 .eslintrc.js 文件 rules 节点，关闭指定格式检查。

        > 例如`'semi': ['off', 'always']`, 需要分号的地方即录入，否则 ESLint 强制检查不录入分号。说明参照**https://eslint.org/docs/rules/semi**。随后重新 npm run dev 即可。完整说明参照**https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md**。或者在.eslintignore文件下配置相关忽略ESlint检查的文件格式，如:`*.js`,eslint则默认忽略根目录下所有的js文件。

   2. Tab Size 调整

      多数开发工具 Tab Size 默认 4，ESLint 默认 2，需要将开发工具 Tab Size 默认值调为2或关闭 ESLint

   3. VUE 脚本结束标志 `</script>` 或者.vue文件结尾`</style>`不能作为文件结尾，其后必须另起一行写入其它代码，必要时插入空行.

## 常见问题：

1. `npm run dev` 提示 `webpack-dev-server --inline --progress --config build/webpack.dev.conf.js`

    > not found module ‘xxx’

    原因：**依赖库不完整**

    方案：项目所在目录运行 `npm install xxx -S` 安装相关依赖包，或按照如下指定安装相关版本，`npm install xx@版本号 -S`。
2. 安装插件提示 `npm WARN rollback Rolling back ...... failed (this is probably harmless): EPERM: operation not permitted`

    原因：**npm 权限不足**

    方案：安装所在目录设置权限

    `npm config set user 0`

    `npm config set unsafe-perm true`
3. `npm run build` 后，打包生成的dist文件本地测试发现404错误。

    原因：本地测试当前文件默认路径以‘./’开头，vue配置文件中默认以‘/’开头

    方案：设置config/index.js中assetsPublicPath属性值为‘./’

## vue项目启动原理

1. 读取 package.json 文件 scripts 内部节点，例 start / build / dev 节点，根据节点值获得相应启动参数
  
2. Webpack配置项目入口文件，出口文件名。
  
     在`.\build\webpack.base.conf.js`文件配置入口文件module.exports.entry值即项目总入口，默认为 ./src/main.js。

     在config/index.js文件中build对象assetsRoot中配置打包后文件名。

3. ./src/main.js。页面入口js文件，实例化一个Vue，平且引入vue和主入口组件。**componens和template属性缺一不可。**

```
new Vue({
  el: '#app',
  router,
  components: { App },  // 定义组件映射
  template: '<App/>'   // 定义组件模板
})
```

4. 打包项目提交到Svn或github注意不要提交node_modules文件夹，以免造成资源浪费

## 附件

1. 帮助文档

   > **vuex状态管理库**:https://vuex.vuejs.org/zh/guide/

   > **vue中文网**：https://cn.vuejs.org/

   > **vue-axios**https://www.npmjs.com/package/vue-axios
  
   > **vue-router**https://router.vuejs.org/zh/

   > **webpack中文网**https://www.webpackjs.com/

2. 安装 cnpm 淘宝镜像避免翻墙

   `npm install -g cnpm --registry=https://registry.npm.taobao.org`
   完成后安装相关命令可用 cnpm 代替 npm。

   > **淘宝镜像包与原包存在一定差异，避免莫名其妙问题起见，尽量使用原包命令 npm 安装，可以使用 hosts 翻墙模式。**

3. 依赖包出错删除重装

   删除全局包
   `npm uninstall -g` 包名

   删除本地包
   `npm uninstall` 包名

   > ***不成功可以采用 remove 代替 uninstall***

4. 引用外部 js
      > 引用外部 js 有全局引用、VUE 外部引用、VUE 内部引用等多种方法
   1. 内部引用

        A. 安装模块至项目目录（jQuery案例）
        `npm install jquery --save`

        B. 确认 package.json dependencies 节点已添加依赖
        "jquery": "^3.3.1",

        C. Vue 文件直接引用
        import $ from 'jquery'
   2. 全局引用

        A. 在package.json中添加依赖文件`dependencies:{"jquery":"^2.2.1"} //可以自己指定版本`

        B. 重新安装项目依赖`cnpm install`

        c. 在webpack.base.conf.js中module.exports中提供一个全局变量:$

