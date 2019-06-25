# 前言

掌握 `JavaScript` 中常见的一些设计模式，对我们书写规范性代码，可维护性代码有很大的帮助，今天 `pubdreamcc` 在这里给大家梳理下常见的js设计模式。

## 内容主体

### 单例模式

所谓单例模式即为：保证一个类仅有一个实例，并提供一个访问它的全局访问点。

这里其实利用的是 `js闭包` 来实现这样的功能。

假如现在我们有这样的需求，设置一个管理员，无论创建多次都只是设置一次。

```javascript

function SetManager(name) {
  this.manager = name;
}

SetManager.prototype.getName = function() {
  console.log(this.manager);
};

var SingletonSetManager = (function() {
  var manager = null;

  return function(name) {
    if (!manager) {
        manager = new SetManager(name);
    }

    return manager;
  }
})();

SingletonSetManager('a').getName(); // a
SingletonSetManager('b').getName(); // a
SingletonSetManager('c').getName(); // a
```
这种方法有一个缺点就是：如果我们需要再次创建一个 HR，则需要将代码再复制一遍，所以我们可以提取通用的单例。

```javascript
function getSingleton(fn) {
  var instance = null;

  return function() {
    if (!instance) {
        instance = fn.apply(this, arguments);
    }

    return instance;
  }
}


// 设置管理员
var managerSingleton = getSingleton(function(name){
  var manager = new SetManager(name);
  return manager;
})

managerSingleton('a').getName(); // a
managerSingleton('b').getName(); // a
managerSingleton('c').getName(); // a

// 设置 HR

function SetHr(name) {
  this.hr = name;
}

SetHr.prototype.getName = function() {
  console.log(this.hr);
};

var hrSingleton = getSingleton(function(name) {
  var hr = new SetHr(name);
  return hr;
});

hrSingleton('aa').getName(); // aa
hrSingleton('bb').getName(); // aa
hrSingleton('cc').getName(); // aa
```

这样我们的代码可通用性就会变得更好，省去了一些重复性的代码。

### 代理模式

所谓代理模式就是：我们不方便直接访问某个对象时，可以为对象创建一个占位符（代理），以便控制对它的访问，我们实际上访问的是代理对象。

这里我们以一个过滤敏感字符来说明这种模式

```javascript
// 主体，发送消息
function sendMsg(msg) {
  console.log(msg);
}

// 代理，对消息进行过滤
function proxySendMsg(msg) {
  // 无消息则直接返回
  if (typeof msg === 'undefined') {
    console.log(null);
    return;
  }
  
  // 有消息则进行过滤
  msg = ('' + msg).replace(/泥\s*煤/g, '');

  sendMsg(msg);
}


sendMsg('泥煤呀泥 煤呀'); // 泥煤呀泥 煤呀
proxySendMsg('泥煤呀泥 煤'); // 呀
proxySendMsg(); // null
```

这样操作的意图很明显，当没有消息的时候，控制对主体对象的访问，代理直接返回一个 `null` ，有消息，则会过滤掉敏感字符，实现虚拟代理。

### 策略模式

策略模式就是内部封装一些算法，它们之间可以互相替换，但是它们不随客户端变化而变化。

策略模式我们外部看不到算法的具体实现，我们也只关心算法实现的结果，不关注过程。

这里以一个商品促销的例子来说明下：在圣诞节，某些商品需要八折出售，有些商品需要九折出售，到了元旦节，普通客户满100减30，vip客户满100减50。可以看到商品出售的价格需要根据不同的条件来规定，分别采取不同的算法实现，所以我们采用策略模式。

```javascript
// 价格策略对象
class PriceStrategy {
  constructor() {
      // 内部算法对象
    this.stragtegy = {
        // 100返30
      return30(price) {
          return +price + parseInt( price / 100) * 30;
      },
      // 100 返 50
      return50(price) {
          return +price + parseInt(price/ 100) * 50;
      },
      // 9 折
      percent90(price) {
          return price * 100 * 90 / 10000
      },
      percent80(price) {
          return price * 100 * 80 / 10000
      },
      percent50(price) {
          return price * 100 * 50 / 10000
      }
    }
  }
  // 策略算法调用接口
  getPrice(algorithm, price) {
    return this.stragtegy[algorithm] && this.stragtegy[algorithm](price);
  }
}
let priceStrategy = new PriceStrategy();
let price = priceStrategy.getPrice('return50', 314.67);
console.log(price);
```

这样，我们可以采取不同的策略算法得到商品的不同价格。

### 观察者模式

观察者模式又称为 “发布-订阅模式”，通过定义一种依赖关系，当一个对象状态发生改变时，订阅者会得到通知。

其实，我们传统的 DOM 事件绑定就是一种发布-订阅模式。

```javascript
// 订阅
document.body.addEventListener('click', function() {
  console.log('click1');
}, false);

document.body.addEventListener('click', function() {
  console.log('click2');
}, false);

// 发布
document.body.click(); // click1  click2
```

### 装饰者模式

装饰者模式就是在不改变原对象基本功能的基础上，通过增加功能使得原本对象满足用户的更为复杂的需求。

比如有这么一个需求：

用户点击输入框时，如果输入框输入的内容有限制，那么在其后面显示用户输入内容的限制格式的提示文案

---------------->>>>>>> 现在要改为：

多加一条需求，默认输入框上边显示一行文案，当用户点击输入框的时候，文案消失。

这里是以前的代码：

```javascript
// 输入框元素
let telInput = document.getElementById('tel_input');
// 输入框提示文案
let telWarnText = document.getElementById('tel_warn_text');
// 点击输入框显示输入框输入格式提示文案
input.onclick = function () {
  telWarnText.style.display = 'inline-block';
};
```

修改之后的代码：

```javascript
// 输入框元素
let telInput = document.getElementById('tel_input');
// 输入框输入格式提示文案
let telWarnText = document.getElementById('tel_warn_text');
// 输入框提示输入文案
let telDemoText = document.getElementById('tel_demo_text');
// 点击输入框显示输入框输入格式提示文案
input.onclick = function () {
  telWarnText.style.display = 'inline-block';
  telDemoText.style.display = 'none';
};
```

但是紧接着悲剧就来了，修改了电话输入框，还有姓名、地址输入框等等；

**装饰已有的功能对象**

原有的功能已经不满足用户的需求了，此时需要做的是对原有的功能添加，设置新的属性和方法来满足新的需求，但是有不影响原来已经有的部分。

```javascript
let decorator = function (input, fn) {
  let getInput = document.getElementById(input);
  if(typeof getInput.onclick === 'function') {
    let oldClick = getInput.onclick;
    getInput.onclick = function() {
        // 原来的事件回调函数
        oldClick();
        // 新增的事件回调函数
        fn();
    }
  } else {
    getInput.onclick = fn;
  }
  // 其他事件
};

// 电话输入框功能装饰
decorator('tel_input', function() {
  document.getElementById('tel_demo_text').sytle.display = 'none'
});
// 姓名输入框装饰
decorator('name_input', function() {
  document.getElementById('name_demo_text').sytle.display = 'none'
});
// 地址输入框装饰
decorator('address_input', function() {
  document.getElementById('address_demo_text').sytle.display = 'none'
});
```

## 后语

本编文章出自于我的 `github` 仓库 ，欢迎喜欢的伙伴 `star` ，谢谢 。

> 仓库地址 [前端学习](https://github.com/pubdreamcc/web-study)