# 前言

本篇文章主要讲 ts 中的接口，元组，枚举等概念，这些可能对于我们前端来说相对陌生，但是这些却是 typescript 中比较重要的一些概念。

## 接口

> 利用接口来定义对象类型

前面学习了如何定义基本数据类型，那么对于复杂数据类型，比如对象，数组这些又是如何。ts 中利用接口来定义一个对象类型的数据。

```typescript
interface IPerson {
  name: string;
  age: number;
}

const p: IPerson = {
  name: 'cc',
  age: 23
}

// 可选属性

interface IPerson1 {
  name: string;
  age: number;
  sex?: string;
}

const p1: IPerson1 = {
  name: 'cc',
  age: 23,
  sex: 'male'
}

const p12: IPerson1 = {
  name: 'cc',
  age: 23
}

```

上面定义一个接口 IPerson，规定此类型的对象必须有name，age 两个属性，且分别为 string和number 类型，多一个或少一个属性都不可以，对象的结构必须和接口定义的完全一致。

## 数组

* 利用 `类型+[]` 方式；
* 利用 `Array<类型>` 方式定义

```ts

const arr: string[] = ['1', '2'];

// or

const arr02: Array<string> = ['1', '2'];

const arr03: any[] = [1, '2', false, {}];
```

## 函数

* 方式一：函数声明

* 方式二：函数表达式

```ts

// 函数声明

function fun (name: string): string {
  return name.toString();
}

// 函数表达式

const fun: (name: string) => string = function fun (name: string): string {
  return name.toString();
}

// or 利用 ES6 箭头函数的形式

const fun: (name: string) => string = (name: string): string => name.toString();
```

上面分别用两种方式定义了一个参数 ( name)为 string 类型，返回值为string 类型的函数 fun，我们在调用fun的时候，参数只能有且只有一个string类型，多传或少传都会报错，比如以下情况 ts 编译都会报错。

```ts

fun(1) // 报错，参数必须为string；
fun('cc', 23) // 报错，参数多传；
```

### 剩余参数

```ts

function fun (name: string, ...args: any[]): string {
  return args.push(name).toString();
}

fun('cc', 1, false, {});
```

### 可选参数

```ts
function fun (x: string, y?: string): string {
  return x.toString();
}

fun('cc');
fun('cc', 'cc1');
```

### 形参默认值

```ts

function func(name: string, age: number = 23): string {
  return name + age;
}

func('cc'); // 'cc23'
func('cc', 21); // 'cc21'
```

## 元组

元组的作用说白了就是规定了数组中元素的顺序和类型。

```ts

const arr: [string, number] = ['cc', 123];

// 下面的形式都会报错
const arr: [string, number] = ['cc', 123, false];
const arr: [string, number] = [123, 'cc'];

// 如果利用数组方法越界，则新增的数组元素必须为元组指定类型的联合类型。

arr.push('cc'); /* or */ arr.push(1);

// 下面的形式会报错

arr.push(false);
```

## 枚举

枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。

```ts

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

```

枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射:

```ts

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
```

事实上上面的例子会被编译为：

```ts
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
```

## 泛型

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

### 泛型变量

```typescript

function getDate<T> (value: T): T {
  return value;
}

getDate<number>(123); 
getDate<string>('123');
```

### 泛型类

```ts


class MinClass<T> {
  public list: T[] = [];
  add(num: T): void{
    this.list.push(num);
  }

  getMinNum (): T {
    let minNum = this.list[0];
    for (let i=0; i<this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum;
  }
}

const m = MinClass<number>();
m.add(123);
m.add('1231'); // 报错
m.getMinNum();
```

### 泛型接口

```ts


interface Configfunc {
  <T>(value1: T, value2: T): T;
}

const funcccc: Configfunc = <T>(value1: T, value2: T): T => value1;

funcccc<string>('123', '213');

// 或者可以把泛型参数提前到接口名上

interface Configfunc<T> {
  (value1: T, value2: T): T;
}

const funcccc: Configfunc<number> = <T>(value1: T, value2: T): T => value1;

funcccc(123, 1321); // 正确
funcccc('123', '1321'); // 错误
```

