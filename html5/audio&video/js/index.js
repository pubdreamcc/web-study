// 定义拖拽函数；
(function(w){
    w.$={};
    w.$.drag=function(testNode,callBack){
        // 确定元素一开始的位置；
        var elementPoint={x:0,y:0};
        // 鼠标一开始的位置；
        var startPoint={x:0,y:0};
        testNode.onmousedown=function(event){
            event=event||window.event;
            elementPoint.x=this.offsetLeft;
            elementPoint.y=this.offsetTop;
            // 参照于浏览器窗口的坐标；
            startPoint.x=event.clientX;
            startPoint.y=event.clientY;
            document.onmousemove=function(event){
                event=event||window.event;
                var nowPoint={x:0,y:0};
                nowPoint.x=event.clientX;
                nowPoint.y=event.clientY;
                var L=nowPoint.x-startPoint.x+elementPoint.x;
                // var T=nowPoint.y-startPoint.y+elementPoint.y;
                if(L>testNode.parentNode.clientWidth-testNode.offsetWidth){
                    L=testNode.parentNode.clientWidth-testNode.offsetWidth;
                }else if(L<=0){
                    L=0;
                }
                testNode.style.left=L+"px";
                // testNode.style.top=T;
                if(callBack && callBack["move"] && typeof(callBack["move"])==="function"){
                    callBack["move"]();
                }
            }
            document.onmouseup=function(){
                document.onmousemove=document.onmouseup=null;
            }
            return false;
        }

    }


} )(window);