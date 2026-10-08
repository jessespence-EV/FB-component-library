(function(){
  function gbp(v,pence){return v.toLocaleString('en-GB',{style:'currency',currency:'GBP',minimumFractionDigits:pence?2:0,maximumFractionDigits:pence?2:0})}
  function num(s){var n=parseFloat(String(s).replace(/[^0-9.]/g,''));return isNaN(n)?null:n}

  function init(root){
    if(root.hasAttribute('data-fb-ready'))return;
    root.setAttribute('data-fb-ready','');
    var min=+root.getAttribute('data-min')||1000,max=+root.getAttribute('data-max')||500000,step=+root.getAttribute('data-step')||1000;
    var terms=(root.getAttribute('data-terms')||'12,24,36').split(',').map(Number);
    var term=+root.getAttribute('data-term')||terms[0];
    var amountText=root.querySelector('[data-fb-amount-text]'),range=root.querySelector('[data-fb-amount-range]'),
        rate=root.querySelector('[data-fb-rate]'),pills=root.querySelector('[data-fb-terms]'),
        monthly=root.querySelector('[data-fb-monthly]'),total=root.querySelector('[data-fb-total]'),interest=root.querySelector('[data-fb-interest]'),
        error=root.querySelector('[data-fb-error]'),announce=root.querySelector('[data-fb-announce]'),timer;

    range.min=min;range.max=max;range.step=step;
    range.value=Math.min(max,Math.max(min,+root.getAttribute('data-amount')||min));
    amountText.value=(+range.value).toLocaleString('en-GB');
    rate.value=root.getAttribute('data-rate')||'';
    root.querySelector('[data-fb-min-label]').textContent=gbp(min);
    root.querySelector('[data-fb-max-label]').textContent=gbp(max);

    var name='fb-calc-'+Math.random().toString(36).slice(2,8);
    pills.innerHTML=terms.map(function(t){
      return '<label class="fb-calc-pill"><input type="radio" name="'+name+'" value="'+t+'"'+(t===term?' checked':'')+'><span>'+t+' months</span></label>';
    }).join('');

    function show(msg){
      error.textContent=msg;error.hidden=!msg;
      if(msg){monthly.textContent='\u2013';total.textContent='\u2013';interest.textContent='\u2013'}
    }
    function upd(){
      var p=num(amountText.value),r=num(rate.value),n=+pills.querySelector('input:checked').value;
      if(p===null||p<min||p>max)return show('Enter an amount between '+gbp(min)+' and '+gbp(max)+'.');
      if(r===null||r>100)return show('Enter an interest rate between 0% and 100%.');
      show('');
      var i=r/100/12,m=i===0?p/n:p*i/(1-Math.pow(1+i,-n)),t=m*n;
      monthly.textContent=gbp(m,true);total.textContent=gbp(t,true);interest.textContent=gbp(t-p,true);
      clearTimeout(timer);
      timer=setTimeout(function(){announce.textContent='Monthly repayment '+gbp(m,true)+' over '+n+' months. Total repayable '+gbp(t,true)+'.'},600);
    }

    range.addEventListener('input',function(){amountText.value=(+range.value).toLocaleString('en-GB');upd()});
    amountText.addEventListener('input',function(){var p=num(amountText.value);if(p!==null&&p>=min&&p<=max)range.value=p;upd()});
    amountText.addEventListener('blur',function(){var p=num(amountText.value);if(p!==null){p=Math.min(max,Math.max(min,p));amountText.value=p.toLocaleString('en-GB');range.value=p;upd()}});
    rate.addEventListener('input',upd);
    pills.addEventListener('change',upd);
    upd();
  }

  document.querySelectorAll('[data-fb-calc]').forEach(init);
})();
