(function(){
  var st=document.getElementById('fbSticky'),x=document.getElementById('fbStickyX'); if(!st||!x)return;
  var closed=false; try{closed=sessionStorage.getItem('fbStickyX')==='1'}catch(e){}
  function on(){
    var h=document.documentElement,max=h.scrollHeight-h.clientHeight,p=max>0?(h.scrollTop||document.body.scrollTop)/max:0;
    if(!closed) st.classList.toggle('show',p>.3&&p<.97);
  }
  x.addEventListener('click',function(){closed=true;st.classList.remove('show');try{sessionStorage.setItem('fbStickyX','1')}catch(e){}});
  window.addEventListener('scroll',on,{passive:true});on();
})();
