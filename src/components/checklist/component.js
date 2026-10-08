(function(){
  var root=document.querySelector('[data-fb-check]'); if(!root)return;
  var boxes=root.querySelectorAll('input'),bar=root.querySelector('.fb-meter i'),n=root.querySelector('[data-n]'),
      lab=root.querySelector('[data-label]'),msg=root.querySelector('[data-msg]'),mt=root.querySelector('[data-msg-t]'),mp=root.querySelector('[data-msg-p]');
  function upd(){
    var c=0;boxes.forEach(function(b){if(b.checked)c++});
    n.textContent=c;bar.style.width=(c/boxes.length*100)+'%';
    lab.textContent=c===0?'Tick each item as you get it together':c<5?'Good start':c<10?'Getting there':c<14?'Nearly lender-ready':'Fully prepared';
    if(c>=10){
      msg.classList.add('show');
      mt.textContent=c===14?'You have the full pack together':'Most of the pack is in place';
      mp.textContent=c===14?'A broker can now adapt your submission to relevant lender criteria. Approval is never guaranteed and remains subject to underwriting.':'Compare which lenders may fit now, and use the remaining items to close any gaps before submission.';
    }else msg.classList.remove('show');
  }
  boxes.forEach(function(b){b.addEventListener('change',upd)});
})();
