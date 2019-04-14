// function add(){
//     // var x=1;
//  x=200;
//     console.log("局部变量x="+x);
       
// }
// // add();

// // var x=100;
// // add();

// console.log("全局变量x="+x);
// add();


// function add(){
    
//     console.log("add()");
// }
// var y=10;

// add();

// console.log("全局变量="+y);

 var plus=(function(){  //定义一个变量plus为函数
   var counter=0;  //定义一个局部变量
   return function(){    //返回一个函数
       counter++;        //使局部变量具备全局变量的生命周期
       console.log(counter);
   };
})();  //匿名函数 的立即执行
plus();
plus();
plus();
plus();
plus();
plus();
plus();
plus();
