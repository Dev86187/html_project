/* Temporary placeholder for pages built in later milestones. Replaced by real page scripts. */
window.VF=window.VF||{};
VF.utils.ready(function(){
  var b=document.body,pg=b.getAttribute('data-page');VF.chrome.mount(pg);
  VF.reveal.init();VF.cursor.init();VF.transitions.init();
});
