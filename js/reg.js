document.addEventListener("DOMContentLoaded",function(){
   var usname =document.getElementById("usname")
   var psw = document.getElementById("psw")
   var rpsw = document.getElementById("rpsw")
   var bth=document.getElementById("reg")
   var isok1 =false
   var isok2 =false
   var isok3 =false
   init()
   disaBled()
   function disaBled(){
     bth.setAttribute("disabled", true)
    bth.style.backgroundColor  = '#555555'
   }
   
   usname.onblur=function(){
    usname.parentNode.parentNode.children[1].innerHTML= ""
       if(!/^1[0-9]\d{9}$/.test(usname.value)){
          usname.parentNode.parentNode.children[1].innerHTML="请输入正确的手机号"
          usname.parentNode.parentNode.children[1].style.color ="red"
          isok1 =false
          disaBled()
          return
       }
       AJAX1("get","../api/reg.php","usname="+usname.value,function(str){
           if(str==1){
            usname.parentNode.parentNode.children[1].innerHTML="该手机可以注册"
            isok1=true
            init()
           }else{
            usname.parentNode.parentNode.children[1].innerHTML="该手机已经注册"
            isok1 =false
            disaBled()
           }
       })
   }
   psw.onblur= function(){
    psw.parentNode.parentNode.children[1].innerHTML=""
       if(!/^[0-9A-Za-z]{6,16}$/.test(psw.value)){
        psw.parentNode.parentNode.children[1].innerHTML="请输入正确的密码，6-16位数字字母组合，不可用特殊字符"
         isok2 =false
         disaBled()
       }else{
         isok2 =true
        psw.parentNode.parentNode.children[1].innerHTML="密码可以使用"
        init()
       }
   }
   rpsw.onblur= function(){
    rpsw.parentNode.parentNode.children[1].innerHTML=""
       if(!(psw.value==rpsw.value)){
        rpsw.parentNode.parentNode.children[1].innerHTML="两次密码不一致"
         isok3 =false
         disaBled()
       }else{
         isok3 =true
         rpsw.parentNode.parentNode.children[1].innerHTML="两次密码一致"
         init()
       }
   } 

   function init(){
       if(isok3&&isok2&&isok1){
         bth.removeAttribute("disabled")
         bth.style.background="red"
         

       }

   }
   bth.onclick= function(){
      AJAX1("get","../api/reg1.php","usname="+usname.value+"&psw="+psw.value,function(str){
         console.log(str)
        if(str==1){
           console.log(666)
          var a = confirm("注册成功是否跳转到登陆界面")
          if(a){
            window.location.href="login.html"
          }
        }
      })
   }
   
})
