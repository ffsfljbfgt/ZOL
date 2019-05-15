window.onload=function(){
    console.log(location.search.slice(1))
    AJAX1("get","../api/dlist.php","id="+location.search.slice(1),function(str){
        var str =JSON.parse(str)
        var main=document.getElementById('main_b_c_t')
       console.log(main) 
       main.children[0].innerHTML=str[0].name
       main.children[1].innerHTML=str[0].jianjie
        console.log(str[0].name)


    })
}
  
