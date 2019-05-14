//  //get 方式
//  var xhr = new XMLHttpRequest();
//  xhr.open("get",url+Data,true);
//  xhr.send(null);
//  xhr.onreadystatechange = function(){
//      if(xhr.readyState==4){
//         if(xhr.status==200){
//               alert(xhr.response)
//         }else{
//             console.log(xhr.status)
//         }

//      }
//  };
// //post 方式
//  var xhr = new XMLHttpRequest();
//  xhr.open("get",url+Data,true);
//  xhr.send(data);
//  xhr.onreadystatechange = function(){
//      if(xhr.readyState==4){
//          if(xhr.status == 200){

//          }else{
//             alert(NO)
//          }
//      }
//  }
//函数回调封装
 function AJAX1(type,url,data,fn){
     var xhr = new XMLHttpRequest()
     if(type.toLowerCase() == 'get'){
        url += '?'+data;
        console.log(url)
        xhr.open(type,url);
        xhr.send(null);
        xhr.onreadystatechange= function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    fn(xhr.responseText)
                }else{
                    alert(xhr.status)
                }

            }
        }
     }else{
         xhr.open("post",url)
         xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
         xhr.send(data)
         xhr.onreadystatechange = function(){
             if(xhr.readyState==4){
                 if(xhr.status==200){
                    fn(xhr.responseText)
                 }else{
                    alert(xhr.status)
                 }
             }
         }
     }
 }
 //面向对象封装
 function AJAX2(opt){
     console.log()
    var xhr = new XMLHttpRequest()
    if(opt.type.toLowerCase() == 'get'){
       opt.url += '?'+opt.data;
       xhr.open(opt.type,opt.url);
       xhr.send(null);
       xhr.onreadystatechange= function(){
           if(xhr.readyState==4){
               if(xhr.status==200){
                opt.suecces(xhr.responseText)
               }else{
                   alert(xhr.status)
               }

           }
       }
    }else{
        xhr.open("post",opt.url)
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(opt.data)
        xhr.onreadystatechange = function(){
            if(xhr.state==4){
                if(xhr.status==200){
                    opt.suecces(xhr.responseText)
                }else{
                   alert(xhr.status)
                }
            }
        }
    }
 }
 var Cookie = {
	setCookie : function(name,value,data,path){
		var str = `${name}=${value}`;
		if(data){
			str += `; expires=${data.toUTCString()}`;
		}
		if(path){
			str += `; path=${path}`;
		}

		document.cookie = str;
	},
	getCookie : function(name){
		var cookieArr = document.cookie.split("; ");
		var res = "";
		cookieArr.forEach(function(item){
			var arr = item.split("=");
			if(arr[0] == name){
				res = arr[1];
			}
		})
		return res;
	},
	removeCookie : function(name,path){
		var d = new Date();
		d.setDate(d.getDate()-1);
		this.setCookie(name,"",d,path)
	}
}

//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires+"; path=/";
}
//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
// 删除元素
function clearCookie(name) {  
    setCookie(name, "", -1);  
} 
// 获取元素
function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}
// checkCookie(); 
