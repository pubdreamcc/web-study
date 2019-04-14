window.onload=function(){
    var headArrow=document.querySelector(".header .container .head-arrow");
    var headLi=document.querySelectorAll(".header .container li");
    var upAllNodes=document.querySelectorAll(".header .container li .up");
    var content=document.querySelector(".wrap .content");
    var header=document.querySelector(".wrap .header");
    var contentLi=document.querySelectorAll(".content .list > li");
    var contentList=document.querySelector(".content > .list");
    var home2AllLi=document.querySelectorAll(".content > .list > .home > div > .home2 li");
    var home1AllLi=document.querySelectorAll(".content > .list > .home > div > .home1 li");
    var about4UlNodes=document.querySelectorAll(".content > .list > .about .about4 > .items >ul");
    var team3Li=document.querySelectorAll(".content > .list > .team > div > .team3 li");
    var dotLi=document.querySelectorAll(".content > .dot > li");
    var team3=document.querySelector(".content > .list > .team > div > .team3");
    var music=document.querySelector(".header .container .music");
    var audio=document.querySelector(".header .container .music audio");
    var laodAn=document.querySelector(".loadAn");
    var loadAnUP=document.querySelector(".loadAn .up");
    var loadAnDown=document.querySelector(".loadAn .down");
    var loadAnLine=document.querySelector(".loadAn .line");
    // 同步当前屏的索引；
    var index=0;
    // 定义一个鼠标滚轮事件触发定时器的标识；
    var timer=0;



    // 开机动画；

    loadingAn();
    function loadingAn(){
        var flag=0;
        var imgArr=['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','about1.jpg','about2.jpg','about3.jpg','about4.jpg','worksimg1.jpg','worksimg2.jpg','worksimg3.jpg','worksimg4.jpg','team.png','greenLine.png'];
        for(var i=0;i<imgArr.length;i++){
            var img=new Image();
            img.src="img/"+imgArr[i];
            img.onload=function(){
                flag++;
                loadAnLine.style.width=flag/imgArr.length*100+"%";
            }

        }
        loadAnLine.addEventListener("transitionend",function(){
            if(flag===imgArr.length){
                loadAnUP.style.height=0;
                loadAnDown.style.height=0;
                this.remove();
            }
        });
        loadAnDown.addEventListener("transitionend",function(){
            laodAn.remove();
            audio.play();
            home3D();
            anArr[0]["inAn"]();
        });
    }




    // 音频；
    music.onclick=function(){
        if(audio.paused){
            audio.play();
            music.style.background="url(img/musicon.gif)";
        }else{
            audio.pause();
            music.style.background="url(img/musicoff.gif)";
        }
    }

    var preIndex=0;

    // 出入场动画；
    var anArr=[
        {
            inAn:function(){
                var home1=document.querySelector(".content > .list > .home > div > .home1");
                var home2=document.querySelector(".content > .list > .home > div > .home2");
                home1.style.transform="translateY(0)";
                home2.style.transform="translateY(0)";
                home1.style.opacity=1;
                home2.style.opacity=1;
            },
            outAn:function(){
                var home1=document.querySelector(".content > .list > .home > div > .home1");
                var home2=document.querySelector(".content > .list > .home > div > .home2");
                home1.style.transform="translateY(-400px)";
                home2.style.transform="translateY(100px)";
                home1.style.opacity=0;
                home2.style.opacity=0;
            }
        },
        {
            inAn:function(){
                var plane1=document.querySelector(".content > .list > .course > div > .plane1");
                var plane2=document.querySelector(".content > .list > .course > div > .plane2");
                var plane3=document.querySelector(".content > .list > .course > div > .plane3");
                plane1.style.transform="translate(0px,0px)";
                plane2.style.transform="translate(0px,0px)";
                plane3.style.transform="translate(0px,0px)";
            },
            outAn:function(){
                var plane1=document.querySelector(".content > .list > .course > div > .plane1");
                var plane2=document.querySelector(".content > .list > .course > div > .plane2");
                var plane3=document.querySelector(".content > .list > .course > div > .plane3");
                plane1.style.transform="translate(-200px,-200px)";
                plane2.style.transform="translate(-200px,200px)";
                plane3.style.transform="translate(200px,-200px)";
            }
        },
        {
            inAn:function(){
                var pencil1=document.querySelector(".content > .list > .works > div > .pencil1");
                var pencil2=document.querySelector(".content > .list > .works > div > .pencil2");
                var pencil3=document.querySelector(".content > .list > .works > div > .pencil3");
                pencil1.style.transform="translateY(0px)";
                pencil2.style.transform="translateY(0px)";
                pencil3.style.transform="translateY(0px)";
            },
            outAn:function(){
                var pencil1=document.querySelector(".content > .list > .works > div > .pencil1");
                var pencil2=document.querySelector(".content > .list > .works > div > .pencil2");
                var pencil3=document.querySelector(".content > .list > .works > div > .pencil3");
                pencil1.style.transform="translateY(-100px)";
                pencil2.style.transform="translateY(100px)";
                pencil3.style.transform="translateY(100px)";
            }
        },
        {
            inAn:function(){
                var rect1=document.querySelector(".content > .list > .about .about4 > .items:nth-child(1)");
                var rect2=document.querySelector(".content > .list > .about .about4 > .items:nth-child(2)");
                rect1.style.transform="rotate(0deg)";
                rect2.style.transform="rotate(0deg)";
            },
            outAn:function(){
                var rect1=document.querySelector(".content > .list > .about .about4 > .items:nth-child(1)");
                var rect2=document.querySelector(".content > .list > .about .about4 > .items:nth-child(2)");
                rect1.style.transform="rotate(45deg)";
                rect2.style.transform="rotate(-45deg)";
            }
        },
        {
            inAn:function(){
                var team1=document.querySelector(".content > .list > .team > div > .team1");
                var team2=document.querySelector(".content > .list > .team > div > .team2");
                team1.style.transform="translateX(0px)";
                team2.style.transform="translateX(0px)";
            },
            outAn:function(){
                var team1=document.querySelector(".content > .list > .team > div > .team1");
                var team2=document.querySelector(".content > .list > .team > div > .team2");
                team1.style.transform="translateX(-200px)";
                team2.style.transform="translateX(200px)";
            }
        },
    ];

    for(var i=0;i<anArr.length;i++){
        anArr[i]["outAn"]();
    }

    // setTimeout(function(){
    //     anArr[0]["inAn"]();
    // },3000);
    // 测试专用；
    // anArr[0].outAn();
    // setTimeout(function(){
    //     anArr[0].inAn();
    //     anArr[4].inAn();
    // },5000)
    // anArr[4].outAn();
     // 头部导航
    headBind();
    function headBind(){
        headArrow.style.left=headLi[0].offsetLeft+headLi[0].offsetWidth/2-headArrow.offsetWidth/2+"px";
        upAllNodes[0].style.width="100%";
        for(var i=0;i<headLi.length;i++){
            headLi[i].index=i;
            headLi[i].onclick=function(){
                move(this.index); 
                preIndex=index;
                index=this.index;
            }
        }
        for(var i=0;i<dotLi.length;i++){
            dotLi[i].index=i;
            dotLi[i].onclick=function(){
                move(this.index); 
                preIndex=index;
                index=this.index;
            }
        }
    }
    // 动画的核心函数；
    function move(index){
        for(var j=0;j<upAllNodes.length;j++){
            upAllNodes[j].style.width="";
        }
        upAllNodes[index].style.width="100%";
        headArrow.style.left=headLi[index].offsetLeft+headLi[index].offsetWidth/2-headArrow.offsetWidth/2+"px";   
        contentList.style.top=-index*(document.documentElement.clientHeight-header.offsetHeight)+"px";
        for(var j=0;j<dotLi.length;j++){
            dotLi[j].className="";
        }
        dotLi[index].className="active";
        if(anArr[index]&&typeof anArr[index]["inAn"]==="function"){
            anArr[index]["inAn"]();
        }
        if(anArr[preIndex]&&typeof anArr[preIndex]["outAn"]==="function"){
            anArr[preIndex]["outAn"]();
        }
    }
    // 屏幕重新调整大小的时候，保证每一屏的布局不变
    window.onresize=function(){
        contentBind();
        contentList.style.top=-index*(document.documentElement.clientHeight-header.offsetHeight)+"px";
        headArrow.style.left=headLi[index].offsetLeft+headLi[index].offsetWidth/2-headArrow.offsetWidth/2+"px";
    }
    // 内容区
    contentBind();
    function contentBind(){
        content.style.height=document.documentElement.clientHeight-header.offsetHeight+"px";
        for(var i=0;i<contentLi.length;i++){
            contentLi[i].style.height=document.documentElement.clientHeight-header.offsetHeight+"px";
        }
    }





    // 第五屏的图片气泡效果；
    pcBubble();
    function pcBubble(){
        var oc=null;
        var time1=0;
        var time2=0;
        var w=team3Li[0].offsetWidth;
        for(var i=0;i<team3Li.length;i++){
            // 第一张： x 0 y 0;
            // 第er张： x 0 y 0;
            // 第san张： x 0 y 0;
            // 第si张： x 0 y 0;
            // 第wu张： x 0 y 0;
            // 第liu张： x 0 y 0;
            // 第qi张： x 0 y 0;
            // 第ba张： x 0 y 0;
            team3Li[i].flag=i;
            team3Li[i].style.backgroundPositionX=-i*w+"px";
            team3Li[i].style.backgroundPositionY=0;
            team3Li[i].onmouseenter=function(){
                for(var i=0;i<team3Li.length;i++){
                    team3Li[i].style.opacity=0.2;
                }
                this.style.opacity=1;
                addCanvas();
                oc.style.left=this.flag*w+"px";
            }
        }
        function addCanvas(){
            if(!oc){
                oc=document.createElement("canvas");
                oc.width=w;
                oc.height=team3Li[0].offsetHeight*2/3;
                // oc.style.backgroundColor="yellow";
               

                team3.appendChild(oc);
                // oc.onmouseenter=function(){
                //     for(var i=0;i<team3Li.length;i++){
                //         team3Li[i].style.opacity=0.2;
                //     }
                //     team3Li[flag].style.opacity=1;
                // }
                qipao();
                oc.onmouseleave=function(){
                    for(var i=0;i<team3Li.length;i++){
                        team3Li[i].style.opacity=1;
                    }
                    removeCanvas();
                }
            }
        }
        function removeCanvas(){
            oc.remove();
            oc=null;
            clearInterval(time1);
            clearInterval(time2);
        }
        function qipao(){
            if(oc.getContext){
                var ctx=oc.getContext("2d");
                // 定义一个数组，用来保存canvas中各个圆的信息；
                var arr=[];
                //随机取出数组中的圆，绘制在canvas中；
                time1=setInterval(function(){
                    for(var i=0;i<arr.length;i++){
                        arr[i].deg+=15;
                        arr[i].x=arr[i].startX+Math.sin(arr[i].deg*Math.PI/180)*arr[i].step/2;
                        arr[i].y=arr[i].startY-(arr[i].deg*Math.PI/180)*arr[i].step;
                        if(arr[i].y<=50){
                            arr.splice(i,1);
                        }     
                    }
                    ctx.clearRect(0,0,oc.width,oc.height);
                    for(var i=0;i<arr.length;i++){
                        ctx.save();
                        ctx.fillStyle="rgba("+arr[i].red+","+arr[i].green+","+arr[i].blue+","+arr[i].apl+")";
                        ctx.beginPath();
                        ctx.arc(arr[i].x,arr[i].y,arr[i].r,0,2*Math.PI);
                        ctx.fill();
                        ctx.restore();
                    }
                },1000/60);
                // 向数组中随机注入圆的信息；
                time2=setInterval(function(){
                    var red=Math.round(Math.random()*255);
                    var green=Math.round(Math.random()*255);
                    var blue=Math.round(Math.random()*255);
                    var r=Math.random()*6+2;
                    var apl=1;
                    var x=Math.random()*oc.width;
                    var y=oc.height-r;
                    var deg=0;
                    var step=Math.random()*20+10;
                    var startX=x;
                    var startY=y;
                    arr.push(
                        {
                            red:red,
                            green:green,
                            blue:blue,
                            apl:apl,
                            x:x,
                            y:y,
                            r:r,
                            deg:deg,
                            step:step,
                            startX:startX,
                            startY:startY
                        }
                    );
                },50);
            }
        }
        
    }




    // 第四屏的图片炸裂效果；
    pcBoom();
    function pcBoom(){
        for(var i=0;i<about4UlNodes.length;i++){
            Change(about4UlNodes[i]);
        }

        function Change(ul){
            for(var j=0;j<4;j++){
                var liNodes=document.createElement("li");
                var imgNodes=document.createElement("img");
                liNodes.style.width=ul.offsetWidth/2+"px";
                liNodes.style.height=ul.offsetHeight/2+"px";
                imgNodes.src=ul.dataset.src;
                // 第一张：left ：0  top 0
                // 第二张：left ：-w top 0
                // 第三张：left ：0 top -h
                // 第四张：left ：-w top -h
                var w=ul.offsetWidth/2;
                var h=ul.offsetHeight/2;
                imgNodes.style.left=-(j%2)*w+"px";
                imgNodes.style.top=-Math.floor(j/2)*h+"px";

                liNodes.appendChild(imgNodes);
                ul.appendChild(liNodes);
            }
            ul.onmouseenter=function(){
               // 第一张：left ：0  top h
                // 第二张：left ：-2w top 0
                // 第三张：left ：w top -h
                // 第四张：left ：-w top -2h
                var imgAll=this.querySelectorAll("li > img");
                imgAll[1].style.left=-2*w+"px";
                imgAll[2].style.left=w+"px";
                imgAll[0].style.top=h+"px";
                imgAll[3].style.top=-2*h+"px";



            }
            ul.onmouseleave=function(){
                var imgAll=this.querySelectorAll("li > img");
                imgAll[1].style.left=-w+"px";
                imgAll[2].style.left=0+"px";
                imgAll[0].style.top=0+"px";
                imgAll[3].style.top=-h+"px";
            }
        }
    }
    var oldNum=0;
    var autoIndex=0;
    var timer3D=0;
    // 第一屏的交互逻辑；
    // home3D();
    function home3D(){
        for(var i=0;i<home2AllLi.length;i++){
            home2AllLi[i].num=i;
            home2AllLi[i].onclick=function(){
                for(var j=0;j<home2AllLi.length;j++){
                    home2AllLi[j].classList.remove("active");
                    this.classList.add("active");
                }
                // 当手点击的时候取消自动轮播
                clearInterval(timer3D);
                // 判断是从左往右点，还是从右往左点
                //从左边往右边点击li；
                if(this.num>oldNum){
                    home1AllLi[this.num].classList.add("rightShow");
                    home1AllLi[this.num].classList.remove("rightHide");
                    home1AllLi[this.num].classList.remove("leftHide");
                    home1AllLi[this.num].classList.remove("leftShow");

                    home1AllLi[oldNum].classList.add("leftHide");
                    home1AllLi[oldNum].classList.remove("leftShow");
                    home1AllLi[oldNum].classList.remove("rightHide");
                    home1AllLi[oldNum].classList.remove("rightShow");
                }
                // 从右往左点击li；
                if(this.num<oldNum){
                    home1AllLi[this.num].classList.add("leftShow");
                    home1AllLi[this.num].classList.remove("rightHide");
                    home1AllLi[this.num].classList.remove("leftHide");
                    home1AllLi[this.num].classList.remove("rightShow");

                    home1AllLi[oldNum].classList.add("rightHide");
                    home1AllLi[oldNum].classList.remove("leftShow");
                    home1AllLi[oldNum].classList.remove("leftHide");
                    home1AllLi[oldNum].classList.remove("rightShow");
                }




                oldNum=this.num;
                // 手动轮播同步自动轮播的问题；
                autoIndex=this.num;
               // threeDMove();
            }
            home1AllLi[i].onmouseenter=function(){
                clearInterval(timer3D);
            }
            home1AllLi[i].onmouseleave=function(){
                threeDMove();
            }
        }
        threeDMove();
        function threeDMove(){
            clearInterval(timer3D);
            timer3D=setInterval(function(){
                autoIndex++;
                if(autoIndex==home1AllLi.length){
                    autoIndex=0;
                }
                // 同步小圆点问题；
                for(var j=0;j<home2AllLi.length;j++){
                    home2AllLi[j].classList.remove("active");
                    home2AllLi[autoIndex].classList.add("active");
                }
                home1AllLi[autoIndex].classList.add("rightShow");
                home1AllLi[autoIndex].classList.remove("rightHide");
                home1AllLi[autoIndex].classList.remove("leftHide");
                home1AllLi[autoIndex].classList.remove("leftShow");

                home1AllLi[oldNum].classList.add("leftHide");
                home1AllLi[oldNum].classList.remove("leftShow");
                home1AllLi[oldNum].classList.remove("rightHide");
                home1AllLi[oldNum].classList.remove("rightShow");
                //自动轮播同步手动轮播；
                oldNum=autoIndex;
            },3000);
        }

    }

    // 鼠标滚轮
    if(content.addEventListener){
        content.addEventListener("DOMMouseScroll",function(ev){
            ev=window.event||ev
            // 让fn的逻辑在滚轮事件多次触发时，只执行一次
            clearTimeout(timer);
            timer=setTimeout(function(){
                fn(ev);
            },200);
        });  // 火狐鼠标滚轮事件绑定形式
    }
    content.onmousewheel=function(ev){
        ev=ev||window.event;
        clearTimeout(timer);
        timer=setTimeout(function(){
            fn(ev);
        },200);
    };
    function fn(event){
        var dir="";
        if(event.wheelDelta){
            dir=event.wheelDelta>0?"up":"down";
        }else if(event.detail){
            dir=event.detail<0?"up":"down";  // 火狐下的鼠标滚轮方向判断，向下为正；
        }
        preIndex=index;
        switch (dir) {
            case "up":
                if(index>0){
                    index--;
                    move(index);
                }
                break;
            case "down":
                if(index<contentLi.length-1){
                    index++;
                    move(index);
                }
                break;
        }
    }

}