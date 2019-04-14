var person1={
     name: "wangzhan",
     sex : "male",
     age: "18",
     slogan:function(){
           for(var i=0;i<=10;i++){
                  console.log("我叫王展");
                } ;
              
     },
}
var obj1={
    x:23,
    
    //  'x': "25",
     1 : "wangzhan",
    //  "1":"22",
    "first-name": "cc",
}
var person2={
    name: "wangzhan",
    sex : "male",
    age: "18",
    slogan:function(){
          for(var i=0;i<=10;i++){
                 console.log("我叫王展");
               } ;
             
    },
}

var person3=person2; // 对象的一个引用；
person3.name="wang";

//  用类来创建一个新的对象；

//  function PersonClass(PName,PSex,PAge){
//     this.name=PName;
//     this.age=PAge;
//     this.sex=PSex;
//  }

//  var person6= new PersonClass("cc","male",1);
//  var person7= new PersonClass("tt","female",0);


var love= new Object();
love.name="tt";
love.sex="male";
love.age=11;
love.happy=function(){
    console.log("i like play basketball");
};
