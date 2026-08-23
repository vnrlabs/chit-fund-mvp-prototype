window.addEventListener('layout:ready',()=>{
  const rows=document.getElementById('auctionRows'); if(!rows) return;
  rows.innerHTML=ChitData.chits.filter(x=>x.status==='Active').map(c=>`<tr><td><div class="chit-name"><strong>${c.name}</strong><span>${c.id}</span></div></td><td>${c.cycle+1} of ${c.duration}</td><td><strong>${c.nextAuction}</strong></td><td>${c.filled}/${c.members}</td><td><span class="badge badge-info">${c.strategy}</span></td><td><span class="badge badge-success"><span class="dot"></span>Scheduled</span></td></tr>`).join('');
});
