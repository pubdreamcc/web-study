var imgArr=["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];
var index= 0; 
var img=document.getElementById("plant");
var b1=document.getElementById("prev");
var h3 = document.getElementById("info");
h3.innerHTML="总共5张图片,这是第"+(index+1)+"张";
b1.onclick=function(){
   index--; 
   if(index<0){
      index=imgArr.length-1;
    }
    img.src =imgArr[index];
h3.innerHTML="总共5张图片,这是第"+(index+1)+"张";
}
var b2=document.getElementById("next");
b2.onclick= function(){
    index++;
    if(index >imgArr.length-1){
        index=0;
    }
    img.src=imgArr[index];
h3.innerHTML="总共5张图片,这是第"+(index+1)+"张";
}
var allchecked = document.getElementById("allchecked");
var items= document.getElementsByName("items");
var nochecked= document.getElementById("nochecked");
var revchecked= document.getElementById("revchecked");
var subchecked= document.getElementById("subchecked");
var checkallbox= document.getElementById("checkallbox");
allchecked.onclick= function(){
    // 获取四个选中的多选项；
    //items.checked=true;
    for(var i=0;i<items.length; i++){
        //alert(items[i].checked);
        items[i].checked=true;
    }
    checkallbox.checked=true;
}
nochecked.onclick= function(){
    for(var i=0;i<items.length; i++){
        items[i].checked=false;
    }
    checkallbox.checked=false;

}
subchecked.onclick= function(){
    for(var i= 0;i<items.length; i++){
        if(items[i].checked){
            alert(items[i].value);
        }
    }
}
revchecked.onclick= function(){
    checkallbox.checked=true;
    for(var i=0;i<items.length;i++){
        items[i].checked=!items[i].checked;        
        if(!items[i].checked){
           checkallbox.checked=false;
        }
    }
}
checkallbox.onclick= function(){
    for(var i=0;i< items.length;i++){
     items[i].checked=this.checked;   
    }
}
for(var i=0;i<items.length;i++){
    items[i].onclick=function(){
        checkallbox.checked=true;
        for(var j=0;j<items.length;j++){
            if(!items[j].checked){
                checkallbox.checked=false;
                break;
            }
        }
    }

}