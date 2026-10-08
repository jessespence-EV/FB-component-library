(function(){
  var bar=document.getElementById('fbProgress'); if(!bar)return;
  function on(){
    var h=document.documentElement,max=h.scrollHeight-h.clientHeight,p=max>0?(h.scrollTop||document.body.scrollTop)/max:0;
    bar.style.width=(p*100)+'%';
  }
  window.addEventListener('scroll',on,{passive:true});on();
})();
