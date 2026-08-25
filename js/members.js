window.addEventListener('layout:ready',()=>{
 const rows=document.getElementById('memberRows');
 const table=document.getElementById('memberTable');
 const headRow=table?.querySelector('thead tr');
 if(headRow){
   const lastHead=headRow.lastElementChild;
   if(lastHead) lastHead.textContent='Actions';
   if(!headRow.querySelector('[data-member-status-head]')){
     const statusHead=document.createElement('th');statusHead.dataset.memberStatusHead='';statusHead.textContent='Member Status';
     headRow.insertBefore(statusHead,lastHead);
   }
 }
 ChitData.members.forEach(m=>{if(!m.memberStatus)m.memberStatus='Active';});
 const render=()=>{
   const q=(document.getElementById('memberSearch')?.value||'').toLowerCase();
   const list=ChitData.members.filter(m=>`${m.name} ${m.id} ${m.phone} ${m.memberStatus}`.toLowerCase().includes(q));
   rows.innerHTML=list.map(m=>`<tr class="${m.memberStatus==='Inactive'?'is-inactive':''}"><td><div class="member-cell"><div class="avatar">${UI.initials(m.name)}</div><div><strong>${m.name}</strong><span>${m.id} · ${m.phone}</span></div></div></td><td>${m.city}</td><td>${m.active}</td><td class="amount">${UI.money(m.pending)}</td><td>${m.lastPay}</td><td><span class="badge ${m.regularity==='Regular'?'badge-success':m.regularity==='Delinquent'?'badge-danger':'badge-warning'}">${m.regularity}</span></td><td><span class="badge ${m.memberStatus==='Active'?'badge-success':'badge-neutral'}"><span class="dot"></span>${m.memberStatus}</span></td><td><div style="display:flex;gap:12px;align-items:center;white-space:nowrap"><a class="action-link" data-edit-member="${m.id}">Edit</a><a class="action-link" data-360="${m.id}">Member 360 →</a></div></td></tr>`).join('');
   rows.querySelectorAll('[data-360]').forEach(a=>a.onclick=()=>document.querySelector('[data-target="member360"]').click());
   rows.querySelectorAll('[data-edit-member]').forEach(a=>a.onclick=()=>openEdit(a.dataset.editMember));
 };
 const openEdit=id=>{
   const m=ChitData.members.find(x=>x.id===id);if(!m)return;
   UI.modal(`Edit Member · ${m.id}`,`<div class="form-grid"><div class="field"><label>Full Name</label><input class="input" data-edit-name value="${m.name}"></div><div class="field"><label>Mobile Number</label><input class="input" data-edit-phone value="${m.phone}"></div><div class="field"><label>City</label><input class="input" data-edit-city value="${m.city}"></div><div class="field"><label>Member Status</label><select class="select" data-edit-status><option ${m.memberStatus==='Active'?'selected':''}>Active</option><option ${m.memberStatus==='Inactive'?'selected':''}>Inactive</option></select></div></div><div class="callout ${m.memberStatus==='Inactive'?'callout-warning':''}" style="margin-top:14px"><strong>${m.memberStatus==='Active'?'Active member':'Inactive member'}</strong><br><span class="muted">${m.memberStatus==='Active'?'Deactivate this member to prevent new chit enrolments while retaining historical participation and payment records.':'Activate this member again to allow future chit enrolments. Existing history remains unchanged.'}</span></div><div class="kv" style="margin-top:14px"><div class="kv-row"><span>Current active chits</span><strong>${m.active}</strong></div><div class="kv-row"><span>Pending amount</span><strong>${UI.money(m.pending)}</strong></div><div class="kv-row"><span>Payment pattern</span><strong>${m.regularity}</strong></div></div>`,wrap=>{
     m.name=wrap.querySelector('[data-edit-name]').value.trim()||m.name;
     m.phone=wrap.querySelector('[data-edit-phone]').value.trim()||m.phone;
     m.city=wrap.querySelector('[data-edit-city]').value.trim()||m.city;
     m.memberStatus=wrap.querySelector('[data-edit-status]').value;
     render();
   });
 };
 render();document.getElementById('memberSearch')?.addEventListener('input',render);
 const openCreate=()=>document.querySelector('[data-target="member-create"]')?.click();document.getElementById('newMember')?.addEventListener('click',openCreate);
 document.getElementById('saveAddChit')?.addEventListener('click',()=>UI.modal('Add Ravi Chandran to a chit',`<div class="field"><label>Select Chit</label><select class="select"><option>Mangalam 5L / 20 · Open · 3 slots available</option><option>Nidhi 8L / 20 · Open · 12 slots available</option></select></div><div class="field" style="margin-top:12px"><label>Member position</label><select class="select"><option>Next available position</option><option>#18</option><option>#19</option><option>#20</option></select></div>`,()=>{}));
});
