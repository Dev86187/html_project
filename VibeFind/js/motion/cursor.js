window.VF=window.VF||{};
(function(VF){
  var U=VF.utils;
  VF.cursor={init:function(){
    var c=U.$('#cursor');if(!c||!U.finePointer()||U.reduceMotion())return;
    document.documentElement.classList.add('has-cursor');
    var x=0,y=0,tx=0,ty=0,on=false;
    addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY;if(!on){on=true;x=tx;y=ty;c.classList.add('is-on');requestAnimationFrame(loop)}});
    document.addEventListener('pointerleave',function(){c.classList.remove('is-on')});
    function loop(){x+=(tx-x)*.22;y+=(ty-y)*.22;c.style.transform='translate3d('+x.toFixed(1)+'px,'+y.toFixed(1)+'px,0)';requestAnimationFrame(loop)}
    document.addEventListener('pointerover',function(e){var t=e.target.closest('a,button,.rail,[data-cursor]');c.classList.toggle('is-big',!!t&&!t.classList.contains('rail'));c.classList.toggle('is-drag',!!(t&&t.classList.contains('rail')));if(t&&t.classList.contains('rail'))c.classList.add('is-big')});
  }};
})(window.VF);
