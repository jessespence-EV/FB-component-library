(function(){
  var root=document.querySelector('[data-fb-stack]'); if(!root)return;
  var uses=+root.getAttribute('data-uses'),ins=root.querySelectorAll('input'),outs=root.querySelectorAll('output'),
      segs=root.querySelectorAll('.fb-seg'),mark=root.querySelector('.fb-mark'),st=root.querySelector('[data-status]'),
      ico=st.querySelector('.fb-status-ico'),strong=st.querySelector('strong'),sub=st.querySelector('div span');
  function gbp(v){return '£'+v.toLocaleString('en-GB')}
  function upd(){
    var v=[],t=0;ins.forEach(function(i,k){var x=+i.value;v.push(x);t+=x;outs[k].textContent=gbp(x)});
    var scale=Math.max(t,uses);
    v.forEach(function(x,k){segs[k].style.width=(x/scale*100)+'%'});
    mark.style.left=(uses/scale*100)+'%';
    var d=t-uses;
    if(d===0){st.className='fb-status ok';ico.textContent='✅';strong.textContent='Sources match uses: '+gbp(t);sub.textContent='The schedule balances. Now test whether repayments are affordable after completion.'}
    else if(d<0){st.className='fb-status gap';ico.textContent='⚠️';strong.textContent='Funding gap of '+gbp(-d);sub.textContent='Look at the buyer contribution, the repayment profile, deferred consideration or the price.'}
    else{st.className='fb-status over';ico.textContent='ℹ️';strong.textContent=gbp(d)+' more than needed';sub.textContent='Raising more than you need adds cost and repayment pressure. A smaller debt burden can protect cash flow.'}
  }
  ins.forEach(function(i){i.addEventListener('input',upd)});upd();
})();
