document.addEventListener("DOMContentLoaded",function(){
    var headr =document.getElementById("h_top_l")
    var bth = headr.children[2].children[0]
    var choose =  document.getElementById("choose")
    var carin= document.getElementById("carin")
    //详情页渲染
   AJAX1("get","../api/dlist.php","id="+location.search.slice(1),function(str){
        var str =JSON.parse(str)
        var main=document.getElementById('main_b_c_t')    
        var nowT = new Date();
        var nowTs = parseInt(nowT.getTime()/1000);
        var restime=str[0].stime-nowTs
        big.children[0].setAttribute("src","../img/"+str[0].pic)
        small.children[0].setAttribute("src","../img/"+str[0].pic)
        main.children[0].innerHTML=str[0].name
        main.children[1].innerHTML=str[0].jianjie
        main.children[3].children[0].innerHTML="￥"+str[0].nprice
        main.children[3].children[1].innerHTML=str[0].price
        main.children[3].children[2].innerHTML="立省"+(str[0].price-str[0].nprice)
        main.children[6].children[0].children[0].innerHTML=str[0].shop
        main.children[8].children[0].children[0].innerHTML=str[0].color
        main.children[8].children[0].children[1].innerHTML=str[0].type
        main.children[8].children[0].children[2].innerHTML=str[0].buy
        main.children[9].children[0].innerHTML=str[0].color
        main.children[10].children[0].innerHTML=str[0].type
        main.children[11].children[0].innerHTML=str[0].buy
        // big.children[0].innerHTML="../img/"+str[0].pic

        function countDown(times){
            var timer=null;
            function rtime(){
                var day=0,
                hour=0,
                minute=0,
                second=0;//时间默认值
                if(times > 0){
                day = Math.floor(times / (60 * 60 * 24));
                hour = Math.floor(times / (60 * 60)) - (day * 24);
                minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
                }
                if (day <= 9) day = '0' + day;
                if (hour <= 9) hour = '0' + hour;
                if (minute <= 9) minute = '0' + minute;
                if (second <= 9) second = '0' + second;
                times--;
                if(times<=0){
                clearInterval(timer);
            }
            main.children[2].children[1].innerHTML= "剩余时间:"+day+"天:"+hour+"小时:"+minute+"分钟:"+second+"秒"
            }
            rtime();
            timer=setInterval(rtime,1000);
        }
        countDown(restime)  
        
        })
    //  账户退出
    bth.onclick=function(){
            clearCookie("name")
            location=location
          }
    // cookie渲染 
    
    var arrs = document.cookie.split("; ")
    var arrs1 =arrs.join("")
    var res1 = arrs1.split("=");
    res1[1]
    arrs.forEach(function(item){
    var res = item.split("=");
    if(res[0] == "name"){
    headr.children[1].children[0].innerHTML=""
    headr.children[1].children[1].innerHTML="欢迎回来"+res[1]
    }else{
    headr.children[1].children[0].innerHTML="欢迎来到Z商城请"
    headr.children[1].children[1].innerHTML="登陆"
     }
    })
    // 购物车
    choose.children[0].onclick=function(){
        choose.children[1].value--
        innit()
    }
    choose.children[2].onclick=function(){
        choose.children[1].value++
        innit()
        

    }
    function innit(){
    choose.children[1].value<=1?choose.children[1].value=1:choose.children[1].value
    if(choose.children[1].value>=10){
        choose.children[1].value=10;
        choose.children[3].innerHTML="最多只能购买十件"
    }else{
        choose.children[1].value
        choose.children[3].innerHTML=""
    }
    }
   carin.children[0].onclick=function(){
      console.log(666)
   }
   function innit2(){
       AJAX1("get","../api/car.php","id="+location.search.slice(1)+"&usname="+res1[1],function(str){
            if(str=="true"){
                console.log(666)
            }else{
                str =JSON.parse(str)
                console.log(str)
            }
       })
   }
   innit2()
  
})
 
    
