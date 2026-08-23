(function(){
  const icons = { dashboard:'▦', chits:'◫', members:'◎', calculator:'∑', auction:'⌁', payments:'₹', menu:'☰', bell:'◌' };
  const nav = [
    ['dashboard.html','dashboard','Dashboard'],['chits.html','chits','Chits'],['members.html','members','Members'],['calculator.html','calculator','Chit Calculator'],['auction.html','auction','Monthly Auction'],['payments.html','payments','Collections & Payouts']
  ];
  function init(){
    const page = document.body.dataset.page || 'dashboard'; const title = document.body.dataset.title || 'Dashboard'; const tpl = document.querySelector('#page-template'); const content = tpl ? tpl.innerHTML : '';
    document.body.innerHTML = `<div class="app"><aside class="sidebar" id="sidebar"><div class="brand"><div class="brand-mark">CF</div><div class="brand-copy"><strong>ChitFlow</strong><span>Operations Console</span></div></div><div class="nav-label">MVP Workspace</div><nav class="nav">${nav.map(([href,key,label])=>`<a href="${href}" class="${key===page?'active':''}"><span class="nav-icon">${icons[key]}</span><span>${label}</span></a>`).join('')}</nav><div class="sidebar-bottom"><div class="user-mini"><div class="avatar">SA</div><div><strong>Super Admin</strong><span>Head Office</span></div></div></div></aside><div class="main-wrap"><header class="topbar"><div style="display:flex;align-items:center;gap:12px"><button class="icon-btn mobile-toggle" id="mobileToggle">${icons.menu}</button><div class="breadcrumb"><span>ChitFlow</span><span>›</span><strong>${title}</strong></div></div><div class="top-actions"><span class="badge badge-neutral">Prototype · MVP</span><button class="icon-btn" title="Notifications">${icons.bell}</button><div class="avatar">SA</div></div></header><main class="page">${content}</main><footer class="footer"><span>ChitFlow MVP Prototype</span><span>Admin operations · Static HTML/CSS/JS</span></footer></div></div>`;
    document.getElementById('mobileToggle')?.addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open')); window.dispatchEvent(new CustomEvent('layout:ready'));
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
