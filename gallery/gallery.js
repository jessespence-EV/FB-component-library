(function(){
  var status=document.querySelector('[data-g-status]');
  function say(msg){if(status){status.textContent='';setTimeout(function(){status.textContent=msg},30)}}

  function legacyCopy(text){
    var ta=document.createElement('textarea'),active=document.activeElement;
    ta.value=text;ta.setAttribute('readonly','');ta.style.position='fixed';ta.style.top='0';ta.style.opacity='0';
    document.body.appendChild(ta);ta.select();
    var ok=false;try{ok=document.execCommand('copy')}catch(e){}
    document.body.removeChild(ta);if(active)active.focus();
    return ok?Promise.resolve():Promise.reject();
  }
  function copyText(text){
    if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(text).catch(function(){return legacyCopy(text)});
    return legacyCopy(text);
  }

  document.querySelectorAll('[data-g-copy]').forEach(function(btn){
    btn.addEventListener('click',function(){
      var src=document.getElementById(btn.getAttribute('data-g-copy'));
      var label=btn.getAttribute('data-g-label');
      copyText(src.textContent).then(function(){say(label+' copied to clipboard.')},function(){say('Copy failed. Open the code below and copy it manually.')});
    });
  });

  var frame=document.querySelector('[data-g-frame]');
  if(!frame)return;
  document.querySelectorAll('[data-g-width]').forEach(function(btn,i,all){
    btn.addEventListener('click',function(){
      all.forEach(function(b){b.setAttribute('aria-pressed',b===btn?'true':'false')});
      frame.setAttribute('data-width',btn.getAttribute('data-g-width'));
    });
  });
  if(frame.hasAttribute('data-g-autoheight')){
    window.addEventListener('message',function(e){
      if(e.source===frame.contentWindow&&e.data&&e.data.fbDemoHeight)frame.style.height=Math.ceil(e.data.fbDemoHeight+frame.offsetHeight-frame.clientHeight)+'px';
    });
  }
})();
