// 定义一个函数用来获取指定元素的样式属性；
// 参数：
// 1, 要获取样式的元素；
// 2，要获取的样式属性；

function getStyle(obj,name){
    // 正常浏览器的方式；具备getComputedStyle方法；
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[name];
    }else{
        // IE8形式；
        return obj.currentStyle[name];
    }
}

// 定义一个执行动画的move函数；
/* 
参数：
1，执行动画的对象。
2，执行动画的样式；
3，执行动画的目标位置；
4，执行动画的速度
5，回调函数；
*/
function move(obj,attr,target,speed,callback){
    clearInterval(obj.timer);
    var current=parseInt(getStyle(obj,attr));
    if(current > target ){
        speed= -speed;
    }
    obj.timer=setInterval(function(){
            var oldValue =parseInt(getStyle(obj,attr));
            var newValue=oldValue+speed;
            if(newValue>target && speed>0 || speed<0 && newValue<target){
                newValue=target;
            }
            obj.style[attr]=newValue+"px";
            if(newValue == target){
                clearInterval(obj.timer);
               callback && callback();
            }
        },30);
}


// 定义一个函数用来向一个元素中添加指定类名；
//  参数：1，要添加类的元素 ，2 ，添加的类名；
function addClass(obj,cn){
    // 判断obj中是否有cn类；
    if(!hasClass(obj,cn)){
        obj.className+=" "+cn;
    }
}
// 定义一个函数，用来判断一个元素中是否含有指定的类. 如有有，则返回true，没有，则返回false.
// 参数：1，要判断的元素对象；2，要判断的类名
function hasClass(obj,cn){
    //定义一个正则表达式；
    var reg=new RegExp("\\b"+cn+"\\b");
    return reg.test(obj.className);
}
// 定义一个函数用来删除指定元素中的类；
function removeClass(obj,cn){
    var reg=new RegExp("\\b"+cn+"\\b");
    obj.className=obj.className.replace(reg,""); 
}
// toggleClass 可以用来切换一个类；
// 如果一个元素中具有该类，则删除；
// 如果元素中没有该类，则添加；
function toggleClass(obj,cn){
    if(hasClass(obj,cn)){
        //有， 删除该类
        removeClass(obj,cn);
    }else{
        addClass(obj,cn);
    }
}



// 鼠标滚轮事件兼容性处理函数；

var cc; // cc代表鼠标滚轮事件指定的对象元素；

if(addEventListener){
    cc.addEventListener("DOMMouseScroll",fn);  // 火狐；
}
cc.onmousewheel=fn;  // 非火狐浏览器绑定鼠标滚轮事件

// 处理鼠标滚轮方向问题的函数；
function fn(){
    event=event || window.event;
    var dir=""; // 鼠标滚动的方向；
    if(event.wheelDelta){
        dir=event.wheelDelta > 0?"up":"down"; // 非火狐浏览器；
    }else{
        dir=event.detail<0?"up":"down";  // 火狐浏览器；
    }
}