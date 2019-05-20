document.addEventListener("DOMContentLoaded",function(){
    var headr =document.getElementById("h_top_l");
    var bth = headr.children[2].children[0];
    var main =document.getElementsByClassName("main_c_c")[0];
    var ffc =document.getElementsByClassName("ffc");
    var main_t =document.getElementsByClassName("main_t")[0]
    var main_b =document.getElementsByClassName("main_c_b")[0]
    var deletAll=document.getElementsByClassName("deletAll")[0]
    console.log(deletAll.children[0])
    console.log(main_t.children[0].children[1])
    console.log(main_b.children[0].children[0])
    var total
    var resta =""
    var res1
    init();
    // cookie渲染
    function init(){
      var akg=""
      var arrs = document.cookie.split("; ")
      var arrs1 =arrs.join("");
       res1 = arrs1.split("=");
      arrs.forEach(function(item){
      var res = item.split("=");
      if(res[0] == "name"){
        headr.children[1].children[0].innerHTML="";
        headr.children[1].children[1].innerHTML="欢迎回来"+res[1];
      }else{
        headr.children[1].children[0].innerHTML="欢迎来到Z商城请";
        headr.children[1].children[1].innerHTML="登陆";
      }
    })
  // 账户退出
    bth.onclick=function(){
      clearCookie("name");
      location=location;
      }
    var fc=""
  // 购物车渲染
    AJAX1('get',"../api/car3.php","usname="+res1[1],function(str){
      total=0;
      var stro=JSON.parse(str);
      var strn=""  ; 
      for(var i=0;i<stro.length;i++){
          let number =i;
          let number2=stro[i].number;
          let nowT =new Date();
          let nowTs = parseInt(nowT.getTime()/1000);
        AJAX1("get","../api/car4.php","id="+stro[i].id,function(str){
          str = JSON.parse(str);
          let resta ="" 
          var restime =str[0].stime-nowTs;
          countDown(restime)
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
                resta= day+"天:"+hour+"时"
              }
              rtime();
            timer=setInterval(rtime,1000);
          }
          var a = str[0].price-str[0].nprice;
          total+=(str[0].nprice*number2)
          main_t.children[0].children[1].innerHTML="￥"+total
          main_b.children[0].children[0].innerHTML="￥"+total
          fc +='<li class="clearfix ffc"><input type="checkbox"><img src="../img/'+str[0].pic+'" alt=""><span><ul><li>'+str[0].jianjie+'</li><li>颜色:'+str[0].color+'&nbsp'+str[0].type+'&nbsp'+str[0].buy+'</li><li>套装:官方标配</li></ul></span><span><ul><li>'+str[0].nprice+'</li><li>'+str[0].price+'</li></ul></span><span id="vln"><a id="vln" date="'+str[0].id+'" href="javascript:void(0)">+</a><input type="text" value="'+number2+'"><a id="vlns" date="'+str[0].id+'" href="javascript:void(0)">-</a></span><span>'+resta+'</span><span>'+a+'</span><span><a href="javascript:void(0)" id="dele" date="'+str[0].id+'">删除</a></span></li>'
          AKG()
          })}
        function AKG(){
          main.innerHTML=fc  
        }
      }) }




    main.onclick=function(e){
      if(e.target.getAttribute("id").toLocaleLowerCase() == 'dele'){
          var id =e.target.getAttribute("date")
          console.log(6666)
          AJAX1("get","../api/car5.php","id="+e.target.getAttribute("date")+"&usname="+res1[1],function(str){
            init()
            location.href=location.href
          })
      }else{
        if(e.target.getAttribute("id").toLocaleLowerCase() == 'vln'){
          AJAX1("get","../api/car7.php","id="+e.target.getAttribute("date")+"&usname="+res1[1],function(str){
            str = JSON.parse(str)
            str[0].number++
             AJAX1("get","../api/car2.php","id="+e.target.getAttribute("date")+"&vl="+str[0].number,function(str){
               console.log(str)
               init()
             })
          })
      }else{
        if(e.target.getAttribute("id").toLocaleLowerCase() == 'vlns'){
          AJAX1("get","../api/car7.php","id="+e.target.getAttribute("date")+"&usname="+res1[1],function(str){
            str = JSON.parse(str)
            str[0].number--
             AJAX1("get","../api/car2.php","id="+e.target.getAttribute("date")+"&vl="+str[0].number,function(str){
               console.log(str)
               init()
             })
          })
        }
      }
      }
      // console.log(e.target.parent)
    }
    deletAll.children[0].onclick=function(){
      AJAX1("get","../api/car6.php","usname="+res1[1],function(str){
        init()
        location.href=location.href
      })
    }
})