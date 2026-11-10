/* Page transitions: native cross-document View Transitions where supported (CSS @view-transition), otherwise a lime wipe. */
window.VF=window.VF||{};
(function(VF){
  var U=VF.utils;
  VF.transitions={init:function(){
    var root=document.documentElement;
    requestAnimationFrame(function(){requestAnimationFrame(function(){root.classList.add('is-ready')})});
    var native=window.CSSViewTransitionRule!==undefined||(window.CSS&&CSS.supports&&CSS.supports('selector(:active-view-transition)'));
    if(native||U.reduceMotion())return;
    var wipe=U.$('#wipe');if(!wipe)return;
    document.addEventListener('click',function(e){
      var a=e.target.closest('a[href]');if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.button!==0||a.target==='_blank'||a.hasAttribute('download'))return;
      var u=new URL(a.href,location.href);if(u.origin!==location.origin||(u.pathname===location.pathname&&u.search===location.search))return;
      e.preventDefault();wipe.classList.add('is-in');setTimeout(function(){location.href=u.href},620);
    });
    addEventListener('pageshow',function(e){if(e.persisted)wipe.classList.remove('is-in')});
  }};
})(window.VF);
