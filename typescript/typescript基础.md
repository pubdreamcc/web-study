# typescript基础教程

## typescript简单了解

TypeScript 是 JavaScript 的一个超集，主要提供了类型系统和对 ES6 的支持，它由 Microsoft 开发，代码开源于 GitHub 上。

首先我们需要了解 typescript 本身浏览器是不能解析执行，需要编译成js文件才能在浏览器中执行。typescript 编译工具可以运行在任何系统和服务器上面。

### 安装

TypeScript 的命令行工具安装方法如下：

```shell

npm install -g typescript
```

以上命令会在全局环境下安装 tsc 命令，安装完成之后，我们就可以在任何地方执行 tsc 命令了。

编译一个 TypeScript 文件很简单：

```shell
tsc hello.ts
```

我们约定使用 TypeScript 编写的文件以 .ts 为后缀，用 TypeScript 编写 React 时，以 .tsx 为后缀。

### hello world typescript

现在我们就来实现一个 typescript 中的 hello world。

把以下代码复制到 `hello.ts` 中:

```ts
function cc (name: string): string {
  return `my name is ${name}`
}

cc('pubdreamcc')
```

然后执行:

```shell
tsc hello.ts
```

会发现编译后生成一个 `hello.js` 文件， 代码如下：

```js
function cc(name) {
  return 'my name is' + name
}

cc('pubdreamcc')
```

生成的 js 文件并没有什么检查类型的代码被插入进来。

**TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。**

TypeScript 中，使用 : 指定变量的类型，: 的前后有没有空格都可以。

在上述 example 中我们指定 函数参数为 string 类型，返回值也为 string 类型，如果我们调用的时候传入非指定类型参数，typescript 编译会报错。

### tsconfig.json

如果一个目录下存在一个tsconfig.json文件，那么它意味着这个目录是TypeScript项目的根目录。 tsconfig.json文件中指定了用来编译这个项目的根文件和编译选项。 一个项目可以通过以下方式之一来编译：

* 不带任何输入文件的情况下调用tsc，编译器会从当前目录开始去查找tsconfig.json文件，逐级向上搜索父目录。
* 不带任何输入文件的情况下调用tsc，且使用命令行参数--project（或-p）指定一个包含tsconfig.json文件的目录。

当命令行上指定了输入文件时，tsconfig.json文件会被忽略。

#### tsconfig.json 文件模板

* 使用 "files" 属性

```json

{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true
  },
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "emitter.ts",
    "program.ts",
    "commandLineParser.ts",
    "tsc.ts",
    "diagnosticInformationMap.generated.ts"
  ]
}
```

* 使用 "include" 和 "exclude" 属性

```json
{
  "compilerOptions": {
    "module": "system",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "outFile": "../../built/local/tsc.js",
    "sourceMap": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}
```

这里具体每个配置选项的含义大家可以参考： [typescript 中文文档](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html)。

## 数据类型

在 JavaScript 中我们有 原始数据类型和引用数据类型，原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。

### 布尔值

```ts
let isDone: boolean = false
```

注意，使用构造函数 `Boolean` 创造的对象不是布尔值：

```ts
let createdByNewBoolean: boolean = new Boolean(1)
```

这样子会报错，事实上 new Boolean() 返回的是一个 Boolean 对象：

```ts
let createdByNewBoolean: Boolean = new Boolean(1)
```

直接调用 Boolean 也可以返回一个 boolean 类型：

```ts

let createdByBoolean: boolean = Boolean(1)
```

在 TypeScript 中，boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。其他基本类型（除了 null 和 undefined）一样，不再赘述。

有了布尔值类型定义，其它基本数据类型像：number，string 用法类似，这里不再赘述。

```ts

// 定义一个 number类型变量
let n: number = 123

// 定义一个 string 类型变量

let str: string = 'pubdreamcc'
```

### null 和 undefined

在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：

```ts
let n: null = null
let u: undefined = undefined
```

undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

```ts
let u: undefined
let num: number = u // 这样不会报错
```

### 空值

在 JavaScript 中没有 空值（void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：

```ts
function alertName(): void {
  alert('My name is Tom')
}
```

声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：

```ts

let unusable: void = undefined
```

**重点**

void 和 undefined，null 的区别：

* undefined 和 null 是所有类型的子类型，void 类型的变量没啥实质性作用，它只能赋值给 undefined 和null。

### 任意值

在  typescript 中用 any 来表示任意类型。

任意类型说白了就是：一个任意类型的变量可以被赋值为任意类型。

```ts

let myFavoriteNumber: string = 'seven'
myFavoriteNumber = 7 // 报错，因为myFavoriteNumber必须为 string 类型

let myFavoriteNumber: any = 'seven'
myFavoriteNumber = 7 // 不会报错
```

任意类型的变量上访问任何属性和方法都是被允许的，可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。

```ts

let anyThing: any = 'hello'
console.log(anyThing.myName)

let anyThing02: any = 'hello'
anyThing02.setName('cc') // 调用方法
```

实际上变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

```js
let something
something = 'seven'
something = 7
```

等价于:

```ts

let something: any
something = 'seven'
something = 7
```

### 联合类型

在 typescript 中，联合类型（Union Types）表示取值可以为多种类型中的一种。

联合类型使用 | 分隔每个类型。

```ts

let myFavoriteNumber: string | number
myFavoriteNumber = 'seven'
myFavoriteNumber = 7 

// 报错

let myFavoriteNumber: string | number
myFavoriteNumber = true // myFavoriteNumber 必须为 number或者string类型
```
