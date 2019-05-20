window.onload=function(){
    var usname =document.getElementById("usname")
    var psw =document.getElementById("psw")
    var btn =document.getElementById("bth")
    bth.onclick =function(){
        if(false){
            //拿到了：登陆状态，不给登陆
            alert('请先退出账号');
        } else {
            AJAX1("post","../api/login.php","usname="+usname.value+"&psw="+psw.value,function(str){
                if(str == 'yes') {
                    var exp = new Date()
                    exp.setTime(exp.getTime()+100*60*2000)
                    location.href = '../index.html';
                    document.cookie="name="+usname.value+"; path=/"+"; expires="+exp.toGMTString()
                } else {
                    alert('登陆失败');
                }
       })

        }
       
    }


}