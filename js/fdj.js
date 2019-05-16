window.onload=function(){
    var small = document.getElementById("small")
    var big = document.getElementById("big")
    var small_box = document.getElementById("small_box")
    small.onmousemove=function(e){
        small.children[1].style.display="block"
         big.style.display="block"
        let X =e.clientX-small.offsetLeft-small_box.offsetWidth*2
        let Y =e.clientY-small.offsetTop-small_box.offsetHeight*1.5
        X<=0?X=0:X
        Y<=0?Y=0:Y
        X>=small.offsetWidth-small_box.offsetWidth?X=small.offsetWidth-small_box.offsetWidth:X
        Y>=small.offsetHeight-small_box.offsetHeight?Y=small.offsetHeight-small_box.offsetHeight:Y
        small_box.style.left= X+"px"
        small_box.style.top= Y+"px"
        let bigx= X* (big.children[0].offsetWidth-big.offsetWidth)/(small.children[0].offsetWidth-small.children[1].offsetWidth)
        let bigy= Y*(big.children[0].offsetHeight-big.offsetHeight)/(small.children[0].offsetHeight-small.children[1].offsetHeight)
        big.children[0].style.marginLeft=-bigx+"px"
        big.children[0].style.marginTop=-bigy+"px"
    }
    small.onmouseout=function(){
        small.children[1].style.display="none"
         big.style.display="none"
    }

}