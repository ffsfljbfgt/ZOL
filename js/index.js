document.addEventListener("DOMContentLoaded",function(){
    var list_b =document.getElementsByClassName("list_b")[0]
    var list_t =document.getElementsByClassName("list_t")[0]
    // 最新团购排序
    // console.log(list_t.children[1])
    list_t.children[1].onclick =function(){
      AJAX1("get","api/news.php","search=new",function(str){
        init(str)
      })
    }
    // 默认排序
    list_t.children[0].onclick =function(){
      AJAX1("get","api/index.php","a",function(str){
        init(str)
      })
    }
    // 销量排序
    list_t.children[2].onclick =function(){
      AJAX1("get","api/news.php","search=nprice",function(str){
        init(str)
      })
    }
    // 销量排序
    list_t.children[3].onclick =function(){
      AJAX1("get","api/news.php","search=hot",function(str){
        init(str)
      })
    }
    // 详情页渲染
    AJAX1("get","api/index.php","a",function(str){
        init(str)
    })

    function init(str){
        var str =JSON.parse(str)
       var res= str.map(function(item){
        
        var price =item.price-item.nprice;
           return `<li class="lists_b" data="${item.id}"><img src="img/${item.pic}" alt=""><p><nobr>${item.name}</nobr></p><i><nobr>${item.jianjie}</nobr></i><ul class="clearfix"><li><h3>￥${item.nprice}</h3></li><li><h4>${item.price}</h4></li><li><span>立省${price}</span></li><li><a href="">马上抢购</a></li></ul><div title="${item.stime}"></div></li>`
       }).join('');
       list_b.innerHTML= res;
       var nowT = new Date();
        var nowTs = parseInt(nowT.getTime()/1000);
       for(var i =0;i<list_b.children.length;i++){
        let resta =list_b.children[i].children[4]
        var restime = list_b.children[i].children[4].title-nowTs    
        // 倒计时定时器
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
              resta.innerHTML= "剩余时间:"+day+"天:"+hour+"小时："+minute+"分钟："+second+"秒"
              }
              rtime();
            timer=setInterval(rtime,1000);
          }
        countDown(restime)    
       }}

})