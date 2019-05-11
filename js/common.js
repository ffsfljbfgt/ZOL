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
