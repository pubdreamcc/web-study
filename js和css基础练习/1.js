// var num1= prompt("请输入数字1：");
// var num2 =window.prompt("请输入数字2：");
// var num3 =prompt("请输入数字3：");

// if(num1>num2 && num1>num3){
//             alert("最大值"+num1);
// }else if(num2>num3 && num2>num1){
//       alert("最大值："+num2);
// }
// else{
//      alert("最大值是："+num3);
/* for(var i=1; i<=9;i++){
     //定义内层循环控制乘法表的宽度
     for(var j=1;j<=i;j++){
       document.write("<span>"+j+"*"+i+"="+i*j+"</span>");

     }
     document.write("<br/>");
}
for(var i=2; i<=100; i++){
     var flag= true;
     for(var j=2; j<i; j++){
        if(i%j==0){
             flag=false;
        }
     }
     if(flag){
        console.log(i);  
     }
     
} */


// for(var i=0; i<5; i++){
    
//      if(i==2){
//                continue;
//           }
//       console.log(i);
// }

// 打印 1-100之间所有的质数；
// console.time("test");
// for(var i=2; i<=100; i++){
//      var flag= true;
//      for(var j=2;j<Math.sqrt(i);j++){
//           if(i%j==0){
//                flag=false;
//                break;
//           }
//      }
//      if(flag){
//           console.log(i);
//      }
// }
// console.timeEnd("test");
// var xx=parseInt(7.83);
// console.log(xx);
// var obj= new Object()
// console.log(obj);
// obj.name="wanzgan";
// obj.age="18";
// obj.cc=null;
// obj["11"]="lv";
// console.log("11" in obj);
// 属性名都会被js隐形的转换成字符串的形式；
// 对象的字面量形式创建对象；

// var wang = {
//     name : "wangzhan",
//     age: 18,
//     gander : "男"
// }
// js中万物皆对象；

// var fun= new Function("alert('大家好，这是我的一个函数');");
// fun();
// fun();
// fun();
// fun();
// function cc(x){
//      if(x % 2==0){
//           return true;
//      }
//      return false;
// }
// // var result=cc(2);
// console.log(cc(5));

// // for(;true;){
// //      alert("cc");
// // }

// function cc(o){
//      console.log(o);
// }
// cc("obj");

// 谁调用this，this就会指向谁；
// function fun(){
//      console.log(this.name);
// }

// fun();

// var obj={
//      name: "孙悟空",
//      sayHello: fun
// }
// obj.sayHello();

// var obj2={
//      name: "猪八戒",
//      sayHello: fun
// }
// // obj2.sayHello();
// var name="我是全局的name变量";
// fun();
/* 
   1，以函数的形式调用，this永远指向window；
   2，以对象的方法调用，this永远指向该方法的对象
谁调用了this，this就会指向谁
*/
/*
function createPerson(name,age,gender){
     this.name=name;
     this.age=age;
     this.gender=gender;
     this.sayHello=function(){
          alert(this.name);
     };
}
var obj1=new createPerson("孙悟空",18,"男");
var obj2= new createPerson("蜘蛛精",20,"女");
*/
// 采用工厂的形式创建一个对象；

function createPerson(name,age,gender){
     var obj= new Object();
     obj.name=name;
     obj.age=age;
     obj.gender=gender;
     obj.sayHello=function(){
          alert(this.name);
     };
     return obj;
}
// 创建一个孙悟空；

var obj1=createPerson("孙悟空",18,"男");

var obj2=createPerson("猪八戒",20,"男");
// 通过构造函数创建一个数组；
var arr =new Array();
arr[0]=1;
arr[1]=2;
arr[2]=3;
console.log(arr);
// 通过数组的字面量来创建一个数组；

var arr1=["孙悟空","猪八戒","沙和尚","白骨精"];
console.log(arr1);

var arr2= new Array(3);
console.log(arr2);

var arr3=[3];
console.log(arr3);
arr3.push(); // 像数组最后的添加一个或多个元素，并返回数组的新的长度
arr2.pop();  // 删除数组的最后一位元素，并且反回数组新的长度
arr.unshift("牛魔二"); // 添加一些元素到数组的最前面，并且返回数组新的长度；
arr.shift(); // 删除数组的第一位元素，并且返回它

var obj3=new createPerson("二郎神",12,"男");
var obj4=new createPerson("白骨精",20,"女");
var obj5=new createPerson("玉兔精",14,"女");

var arrPerson=[obj1,obj2,obj3,obj4,obj5];

 console.log(arrPerson);
function getAdult(a){
     // 创建一个数组
     var newArray=[];
     // 获取arrPerson数组中所有对象元素
     for(var i=0; i<a.length; i++){
          if(a[i].age>=18){
               newArray.unshift(a[i]);
          }
     }
     // 返回一个数组；
     return newArray;
}
  var result=getAdult(arrPerson);
  console.log(result);

  var ll=["孙悟空","猪八戒","沙和尚","白骨精","二郎神"];

//   ll.forEach(function(value,index){
//        console.log(value);
//       });
// ll.splice(0,2,"牛魔王","铁扇公主");
// ll.slice(1,3);
// 数组去重；

var  lk= [1,2,3,2,2,1,3,3,4,5];
// 数组去重练习；

// for(var i=0;i<lk.length;i++){
//      for(var j=i+1; j<lk.length;j++){
//           if(lk[i]==lk[j]){
//                lk.splice(j,1);
//                j--;
//           }
//      }
// }
// console.log(lk);

function fun0(a,br){
     console.log(arguments.callee);
}
fun0(1,2);
var dd=new Date();
// alert(dd);
var dd1= new Date("3/11/1998 12:21:21");
// alert(dd1);
// 生产一个x到y之间的随机数；

  // Math.round(Math.random()*(y-x)+x);

  // 生成2-10之间的随机数；
//    for(var j=0;j<10;j++){
//          console.log(Math.round(Math.random()*8+2));
//    }
//var str= "abcdefg";
// 创建一个正则表达式
var reg = new RegExp("a","i");

console.log(reg.test("ABcghf"));

