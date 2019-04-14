
// function slogan(num)
// {
//     for(var a=1;a<=num;a++){
//         console.log(a+"好好工作，努力工作");
//     }        
// }


// var time=7;
// for(var a=1;a<=10;a++){
//     console.log(a+"好好工作，努力赚钱");
// }
// slogan(10);


// var time=12;
// for( var a=1;a<=10;a++){
//     console.log(a+"好好工作，努力赚钱");
// }
// slogan(20);



// var  time=8;
// for(var a=1;a<=10;a++){
//     console.log(a+"好好工作，努力赚钱");
// }
function add(){
     var z=0;
     for(i=0; i<arguments.length; i++){
         z=z+arguments[i];
     }
     return z;
}
 var h=add(1,3,6,6,6);
    console.log(h);