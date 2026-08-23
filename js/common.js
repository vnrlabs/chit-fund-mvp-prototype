window.UI = {
  money(v){ return new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(v); },
  initials(name){ return name.split(' ').map(x=>x[0]).join('').slice(0,2).toUpperCase(); },
  initTabs(root=document){
    root.querySelectorAll('[data-tabs]').forEach(group=>{
      const tabs=group.querySelectorAll('.tab'); const panels=group.querySelectorAll('.tab-panel');
      tabs.forEach(t=>t.addEventListener('click',()=>{tabs.forEach(x=>x.classList.remove('active'));panels.forEach(x=>x.classList.remove('active'));t.classList.add('active');group.querySelector(`#${t.dataset.target}`)?.classList.add('active');}));
    });
  },
  filterTable(input, table){
    const q=(input.value||'').toLowerCase();
    table.querySelectorAll('tbody tr').forEach(r=>r.style.display=r.innerText.toLowerCase().includes(q)?'':'none');
  },
  modal(title, body, onSave){
    const wrap=document.createElement('div');wrap.className='modal-backdrop open';
    wrap.innerHTML=`<div class="modal"><div class="modal-head"><h3>${title}</h3><button class="icon-btn" data-close>×</button></div><div class="modal-body">${body}</div><div class="modal-foot"><button class="btn btn-secondary" data-close>Cancel</button><button class="btn btn-primary" data-save>Save</button></div></div>`;
    document.body.appendChild(wrap);wrap.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>wrap.remove());wrap.querySelector('[data-save]').onclick=()=>{onSave?.(wrap);wrap.remove();};
  }
};
window.addEventListener('layout:ready',()=>UI.initTabs());
