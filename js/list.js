window.onload= function(){
    var list_b =document.getElementsByClassName("list_b")[0]
    var list_t =document.getElementsByClassName("list_t")[0]
    console.log(list_b)
    var headr =document.getElementById("h_top_l")
    var pagebtn =document.getElementById("pagebtn")
    var isok="new"
     list_t.children[0].children[0].onclick=function(){
      isok="new"
      init2(1)
     }
     list_t.children[1].children[0].onclick=function(){
      isok="new"
      init3(1,"new")
     }
     list_t.children[2].children[0].onclick=function(){
      isok="nprice"
      init3(1,"nprice")
     }
     list_t.children[3].children[0].onclick=function(){
      isok="hot"
      init3(1,"hot")
     }
    //  分页请求
    init2(1)
    function init2(ipage,type){
        var type =type
        var num = 12;
        AJAX1("get","../api/list.php",'page=' + ipage + '&num=' + num+'&type=' + type,function(str){
            init(str)
        })
    }
    
    function init3(ipage,type){
      var type =type
      var num = 12;
      AJAX1("get","../api/list1.php",'page=' + ipage + '&num=' + num+'&type=' + type,function(str){
          init(str)
      })
  }
    // 列表渲染
    function init(str){
        var str =JSON.parse(str)
       var res= str.goodslist.map(function(item){
        
        var price =item.price-item.nprice;
           return `<li class="lists_b" data="${item.id}"><img src="../img/${item.pic}" alt=""><p><nobr>${item.name}</nobr></p><i><nobr>${item.jianjie}</nobr></i><ul class="clearfix"><li><h3>￥${item.nprice}</h3></li><li><h4>${item.price}</h4></li><li><span>立省${price}</span></li><li><a href="#" date="${item.id}">马上抢购</a></li></ul><div title="${item.stime}"></div></li>`
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
       }
       var pages = Math.ceil(str.total / str.num);
		   var html = '';
	    	for(var i = 0; i < pages; i++) {
			 html += '<a href="javascript:;">'+(i+1)+'</a>';
				}
		   pagebtn.innerHTML = html;
       pagebtn.children[str.page-1].className = 'active';
    }
    pagebtn.onclick = function(ev) {
      if(ev.target.tagName.toLowerCase() == 'a') {
        var page = ev.target.innerHTML;
        init3(page,isok);
      }
    }
  // cookie
  var bth = headr.children[2].children[0]
  bth.onclick=function(){
      clearCookie("name")
      location=location
    }
  var arrs = document.cookie.split("; ")
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
  list_b.onclick=function(e){
    console.log(window.location.href)
    e.target.nodeName.toLocaleLowerCase() == 'a'?window.location.href="dlist.html"+"?"+e.target.getAttribute("date"):0
  }
   
  
}