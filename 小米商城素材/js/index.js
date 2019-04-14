var tabs=document.getElementById("tabs").getElementsByTagName("li");
// console.log(tabs);
var lists=document.getElementById("lists").getElementsByTagName("ul");
// console.log(lists);
var seckillNav=document.getElementById("seckillNav");

for(var i=0; i<tabs.length; i++){
    tabs[i].onclick=showlist;
}
function showlist(){
    for(var i=0 ;i<tabs.length; i++){
        if(tabs[i]===this){
            tabs[i].className="active";
            lists[i].className="clearfix active";
        }
        else{
            tabs[i].className=" ";
            lists[i].className="clearfix";
        }
    }
}
function vv(){
    var scrollTop = document.documentElement.scrollTop;
    if(scrollTop>=260){
        seckillNav.className="seckill-body-nav seckill-body-navfixed";
    }
    else{
        seckillNav.className="seckill-body-nav";
    }
}
window.onscroll=vv;