// ── CONSTANTS ──────────────────────────────────────────────────────────────────
const EMOJIS = ['❤️','🏃','📚','💧','🧘','✍️','🎸','🥗','💪','🌿','🎨','🧹','💊','🌅','🎯','🛌','🧠','🚴','🏋️','🎵'];
const COLORS = ['#f43f5e','#ef4444','#f97316','#f59e0b','#eab308','#84cc16','#22c55e','#14b8a6','#06b6d4','#3b82f6','#6366f1','#a855f7','#8b5cf6','#ec4899'];
const CNAMES = ['Rose','Red','Orange','Amber','Yellow','Lime','Green','Teal','Cyan','Blue','Indigo','Purple','Violet','Pink'];
const DAY_S  = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const MON_S  = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// ── STATE ──────────────────────────────────────────────────────────────────────
let habits     = JSON.parse(localStorage.getItem('ht3_habits') || '[]');
let editId     = null;
let deleteId   = null;
let openMenuId = null;
let selEmoji   = '❤️';
let selColor   = '#f43f5e';

// drag state
let dragSrcIdx = null;

const today    = new Date();
const todayStr = fmt(today);

function fmt(d){ return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}`; }
function p(n){ return String(n).padStart(2,'0'); }
function uid(){ return Math.random().toString(36).slice(2,9); }
function save(){ localStorage.setItem('ht3_habits', JSON.stringify(habits)); }
function hexA(hex,a){
  const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${a})`;
}

// ── HEADER DATE ────────────────────────────────────────────────────────────────
document.getElementById('hDate').textContent =
  `${DAY_S[today.getDay()]}, ${MON_S[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

// ── TODAY BANNER (gap #4) ─────────────────────────────────────────────────────
function updateBanner(){
  const total = habits.length;
  const done  = habits.filter(h => h.log?.[todayStr]).length;
  const pct   = total ? Math.round(done / total * 100) : 0;
  const accent = habits.find(h=>h.color)?.color || '#a855f7';

  document.getElementById('tbCount').innerHTML = `${done} <span>/ ${total} habit${total!==1?'s':''}</span>`;
  document.getElementById('tbBar').style.width   = `${pct}%`;
  document.getElementById('tbBar').style.background = accent;
  document.getElementById('tbPct').textContent   = `${pct}%`;
  document.getElementById('tbPct').style.color   = pct===100 ? '#34d399' : 'var(--text)';
}

// ── WEEK STRIP ─────────────────────────────────────────────────────────────────
function renderWeek(){
  const el     = document.getElementById('weekStrip');
  el.innerHTML = '';
  const accent = habits.find(h=>h.color)?.color || '#a855f7';
  document.documentElement.style.setProperty('--t-accent',    accent);
  document.documentElement.style.setProperty('--t-accent-bg', hexA(accent,.12));

  const dow = today.getDay();
  const mon = new Date(today); mon.setDate(today.getDate() - ((dow+6)%7));

  for(let i=0;i<7;i++){
    const d  = new Date(mon); d.setDate(mon.getDate()+i);
    const ds = fmt(d);
    const pill = document.createElement('div');
    pill.className = 'day-pill'+(ds===todayStr?' today':'')+(habits.some(h=>h.log?.[ds])?' has-dot':'');
    pill.innerHTML = `<div class="dp-name">${DAY_S[d.getDay()]}</div><div class="dp-num">${d.getDate()}</div><div class="dp-dot"></div>`;
    el.appendChild(pill);
  }
}

// ── STATS for one habit (gap #2) ───────────────────────────────────────────────
function getStats(habit){
  // Current month: days 1 → today
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  let monthTotal = 0, monthDone = 0;
  const cursor = new Date(monthStart);
  while(cursor <= today){ monthTotal++; if(habit.log?.[fmt(cursor)]) monthDone++; cursor.setDate(cursor.getDate()+1); }

  // Current streak (consecutive days ending today going back)
  let streak = 0;
  const sc = new Date(today);
  while(habit.log?.[fmt(sc)]){ streak++; sc.setDate(sc.getDate()-1); }

  // Best streak ever
  const allDates = Object.keys(habit.log||{}).sort();
  let best=0, cur=0, prev=null;
  allDates.forEach(ds=>{
    if(!habit.log[ds]){ cur=0; prev=null; return; }
    if(!prev){ cur=1; }
    else{
      const pd=new Date(prev), cd=new Date(ds);
      const diff=(cd-pd)/(1000*60*60*24);
      cur = diff===1 ? cur+1 : 1;
    }
    if(cur>best) best=cur;
    prev=ds;
  });

  const pct = monthTotal ? Math.round(monthDone/monthTotal*100) : 0;
  return { monthDone, monthTotal, pct, streak, best };
}

// ── TRACKER GRID (gap #1: past cells are clickable) ───────────────────────────
function buildTracker(habit){
  const WEEKS      = 18;
  const CELL       = 11;
  const GAP        = 3;
  const STRIDE     = CELL + GAP;
  const color      = habit.color || '#a855f7';

  const todayDow   = today.getDay();
  const thisMonday = new Date(today); thisMonday.setDate(today.getDate() - ((todayDow+6)%7));
  const firstMon   = new Date(thisMonday); firstMon.setDate(thisMonday.getDate() - (WEEKS-1)*7);

  const weeks = [];
  for(let w=0;w<WEEKS;w++){
    const week=[];
    for(let d=0;d<7;d++){
      const day=new Date(firstMon); day.setDate(firstMon.getDate()+w*7+d);
      const ds=fmt(day);
      const isFuture = day.getTime() > today.getTime();
      week.push({ ds, day, isFuture, done:!!(habit.log?.[ds]) });
    }
    weeks.push(week);
  }

  const wrap = document.createElement('div'); wrap.className='tracker-inner';

  // Day labels
  const lbls = document.createElement('div'); lbls.className='tracker-day-labels';
  ['M','','W','','F','','S'].forEach(t=>{
    const el=document.createElement('div'); el.className='day-label-txt'; el.textContent=t; lbls.appendChild(el);
  });

  const area = document.createElement('div'); area.className='tracker-cols-area';

  // Month labels
  const mrow = document.createElement('div'); mrow.className='tracker-months';
  let lastM=-1;
  weeks.forEach((week,wi)=>{
    const m=week[0].day.getMonth();
    if(m!==lastM){
      const lbl=document.createElement('div'); lbl.className='month-lbl';
      lbl.style.left=`${wi*STRIDE}px`;
      lbl.textContent=`${MON_S[m]} '${String(week[0].day.getFullYear()).slice(2)}`;
      mrow.appendChild(lbl); lastM=m;
    }
  });

  // Cells
  const cols=document.createElement('div'); cols.className='tracker-cols';
  const tip=document.getElementById('cellTip');

  weeks.forEach(week=>{
    const col=document.createElement('div'); col.className='tracker-week';
    week.forEach(day=>{
      const cell=document.createElement('div'); cell.className='t-cell';

      if(day.isFuture){
        cell.classList.add('invisible');
      } else {
        // ALL past cells (including today) are clickable
        cell.classList.add('past-cell');

        if(day.done){
          cell.style.background = color;
          cell.style.boxShadow  = `0 0 4px ${color}66`;
        } else if(day.ds===todayStr){
          cell.style.background   = 'transparent';
          cell.style.border       = `1.5px solid ${color}`;
          cell.style.borderRadius = '2px';
          cell.style.boxSizing    = 'border-box';
        }

        // Click to toggle any past day
        cell.addEventListener('click', e=>{
          e.stopPropagation();
          toggleDay(habit.id, day.ds, cell, color);
        });

        // Tooltip
        cell.addEventListener('mouseenter', e=>{
          tip.textContent = `${day.ds}${day.done?' · ✓ done':''}`;
          tip.classList.add('show');
        });
        cell.addEventListener('mousemove', e=>{
          tip.style.left = `${e.clientX+12}px`;
          tip.style.top  = `${e.clientY-28}px`;
        });
        cell.addEventListener('mouseleave', ()=>tip.classList.remove('show'));
      }

      col.appendChild(cell);
    });
    cols.appendChild(col);
  });

  area.appendChild(mrow); area.appendChild(cols);
  wrap.appendChild(lbls); wrap.appendChild(area);
  return wrap;
}

// Toggle any past day in-place (no full re-render needed for the grid)
function toggleDay(habitId, ds, cellEl, color){
  const h = habits.find(h=>h.id===habitId);
  if(!h) return;
  if(!h.log) h.log={};

  if(h.log[ds]){
    delete h.log[ds];
    // revert cell
    cellEl.style.background  = '';
    cellEl.style.boxShadow   = '';
    if(ds===todayStr){
      cellEl.style.background   = 'transparent';
      cellEl.style.border       = `1.5px solid ${color}`;
      cellEl.style.borderRadius = '2px';
      cellEl.style.boxSizing    = 'border-box';
    } else {
      cellEl.style.border = '';
    }
  } else {
    h.log[ds] = true;
    cellEl.style.background = color;
    cellEl.style.boxShadow  = `0 0 4px ${color}66`;
    cellEl.style.border     = '';
    // pop animation
    cellEl.style.transform = 'scale(1.4)';
    setTimeout(()=>{ cellEl.style.transform=''; }, 150);
  }

  save();

  // Update streak label on the card without full re-render
  const card = document.querySelector(`.habit-card[data-id="${habitId}"]`);
  if(card){
    const { streak } = getStats(h);
    const sl = card.querySelector('.habit-streak');
    if(sl) sl.textContent = `${streak>0?'🔥':'○'} Streak: ${streak}`;
    // today's check button + done class
    if(ds===todayStr){
      const done = !!(h.log[todayStr]);
      const chk  = card.querySelector('.habit-check-btn');
      if(chk){
        chk.classList.toggle('checked', done);
        chk.style.background = done ? hexA(color,.9) : 'transparent';
      }
      card.classList.toggle('done', done);
    }
  }

  // Update stats boxes
  const sb = document.querySelector(`.habit-card[data-id="${habitId}"] .stats-row`);
  if(sb) updateStatsBoxes(h, sb);

  updateBanner();
  renderWeek();
}

function updateStatsBoxes(habit, container){
  const { monthDone, monthTotal, pct, streak, best } = getStats(habit);
  const color = habit.color||'#a855f7';
  const boxes = container.querySelectorAll('.stat-box');
  if(boxes[0]){
    boxes[0].querySelector('.stat-val').textContent = `${monthDone}/${monthTotal}`;
    boxes[0].querySelector('.stat-bar').style.width = `${pct}%`;
  }
  if(boxes[1]) boxes[1].querySelector('.stat-val').textContent = `${pct}%`;
  if(boxes[2]) boxes[2].querySelector('.stat-val').textContent = best;
}

// ── RENDER HABITS ─────────────────────────────────────────────────────────────
function renderHabits(){
  const list=document.getElementById('habitsList');
  list.innerHTML='';

  if(!habits.length){
    list.innerHTML=`<div class="empty"><div class="empty-icon">🌱</div><p>No habits yet.<br>Tap "Add New Habit" to begin!</p></div>`;
    updateBanner(); renderWeek(); return;
  }

  habits.forEach((habit,idx)=>{
    const done   = !!(habit.log?.[todayStr]);
    const { monthDone, monthTotal, pct, streak, best } = getStats(habit);
    const color  = habit.color||'#a855f7';

    const card=document.createElement('div');
    card.className='habit-card'+(done?' done':'');
    card.dataset.id=habit.id;
    card.dataset.idx=idx;

    // ── DRAG & DROP (gap #3) ──────────────────────────────────────────────────
    card.setAttribute('draggable','true');

    card.addEventListener('dragstart', e=>{
      dragSrcIdx = idx;
      setTimeout(()=>card.classList.add('dragging'),0);
      e.dataTransfer.effectAllowed='move';
    });
    card.addEventListener('dragend', ()=>{
      card.classList.remove('dragging');
      document.querySelectorAll('.habit-card').forEach(c=>c.classList.remove('drag-over'));
      dragSrcIdx=null;
    });
    card.addEventListener('dragover', e=>{
      e.preventDefault(); e.dataTransfer.dropEffect='move';
      document.querySelectorAll('.habit-card').forEach(c=>c.classList.remove('drag-over'));
      if(dragSrcIdx!==null && dragSrcIdx!==idx) card.classList.add('drag-over');
    });
    card.addEventListener('drop', e=>{
      e.preventDefault();
      if(dragSrcIdx===null || dragSrcIdx===idx) return;
      const moved = habits.splice(dragSrcIdx,1)[0];
      habits.splice(idx,0,moved);
      save(); renderHabits();
    });

    // Touch drag support
    let touchStartY=0, touchClone=null, touchOrigIdx=null;
    card.addEventListener('touchstart', e=>{
      if(!e.target.closest('.drag-handle')) return;
      touchOrigIdx=idx;
      touchStartY=e.touches[0].clientY;
      card.classList.add('dragging');
    }, {passive:true});
    card.addEventListener('touchmove', e=>{
      if(touchOrigIdx===null) return;
      e.preventDefault();
      const y=e.touches[0].clientY;
      const cards=[...document.querySelectorAll('.habit-card')];
      cards.forEach(c=>c.classList.remove('drag-over'));
      const target=document.elementFromPoint(e.touches[0].clientX,y)?.closest('.habit-card');
      if(target && target!==card) target.classList.add('drag-over');
    }, {passive:false});
    card.addEventListener('touchend', e=>{
      if(touchOrigIdx===null) return;
      card.classList.remove('dragging');
      const cards=[...document.querySelectorAll('.habit-card')];
      cards.forEach(c=>c.classList.remove('drag-over'));
      const y=e.changedTouches[0].clientY;
      const target=document.elementFromPoint(e.changedTouches[0].clientX,y)?.closest('.habit-card');
      if(target && target!==card){
        const targetIdx=parseInt(target.dataset.idx);
        const moved=habits.splice(touchOrigIdx,1)[0];
        habits.splice(targetIdx,0,moved);
        save(); renderHabits();
      }
      touchOrigIdx=null;
    });

    // ── HEAD ──
    const head=document.createElement('div'); head.className='habit-head';

    // drag handle
    const dh=document.createElement('div'); dh.className='drag-handle';
    dh.innerHTML='<div class="dh-line"></div><div class="dh-line"></div><div class="dh-line"></div>';

    const icon=document.createElement('div'); icon.className='habit-icon';
    icon.style.background=hexA(color,.22); icon.textContent=habit.emoji||'❤️';

    const mid=document.createElement('div'); mid.className='habit-mid';
    mid.innerHTML=`<div class="habit-name">${habit.name}</div>
      <div class="habit-streak">${streak>0?'🔥':'○'} Streak: ${streak}</div>`;

    const chk=document.createElement('div');
    chk.className='habit-check-btn'+(done?' checked':'');
    chk.style.background=done?hexA(color,.9):'transparent';
    chk.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10l4.5 4.5 8.5-8.5" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    chk.addEventListener('click',()=>{
      chk.classList.add('pop');
      chk.addEventListener('animationend',()=>chk.classList.remove('pop'),{once:true});
      toggleDay(habit.id, todayStr, card.querySelector('.t-cell.past-cell[title="'+todayStr+'"]')||document.createElement('div'), color);
    });

    const menu=document.createElement('div'); menu.className='habit-menu-btn';
    menu.innerHTML='···';
    menu.addEventListener('click',e=>{ e.stopPropagation(); openMenu(habit.id,menu); });

    head.appendChild(dh); head.appendChild(icon); head.appendChild(mid); head.appendChild(chk); head.appendChild(menu);

    // ── TRACKER ──
    const tw=document.createElement('div'); tw.className='tracker-wrap';
    tw.appendChild(buildTracker(habit));

    // ── STATS ROW (gap #2) ────────────────────────────────────────────────────
    const sr=document.createElement('div'); sr.className='stats-row';

    function makeBox(val,lbl,barPct){
      const b=document.createElement('div'); b.className='stat-box';
      b.innerHTML=`<div class="stat-val">${val}</div><div class="stat-lbl">${lbl}</div>
        ${barPct!==undefined?`<div class="stat-bar-wrap"><div class="stat-bar" style="width:${barPct}%;background:${color}"></div></div>`:''}`;
      return b;
    }
    sr.appendChild(makeBox(`${monthDone}/${monthTotal}`, 'This month', pct));
    sr.appendChild(makeBox(`${pct}%`,                   'Completion'));
    sr.appendChild(makeBox(best,                         'Best streak'));

    card.appendChild(head);
    card.appendChild(tw);
    card.appendChild(sr);
    list.appendChild(card);
  });

  updateBanner();
  renderWeek();
}

// ── TOGGLE TODAY (main checkbox) ──────────────────────────────────────────────
function toggleHabit(id){
  const h=habits.find(h=>h.id===id);
  if(!h) return;
  if(!h.log) h.log={};
  if(h.log[todayStr]) delete h.log[todayStr]; else h.log[todayStr]=true;
  save(); renderHabits();
}

// ── MENU ──────────────────────────────────────────────────────────────────────
function openMenu(id,btn){
  closeMenu();
  if(openMenuId===id){ openMenuId=null; return; }
  openMenuId=id;
  const dd=document.createElement('div'); dd.className='dropdown'; dd.id='openDD';
  dd.innerHTML=`<div class="dd-item" data-a="edit">✏️ &nbsp;Edit</div>
    <div class="dd-item danger" data-a="del">🗑️ &nbsp;Delete</div>`;
  dd.addEventListener('click',e=>{
    const a=e.target.closest('[data-a]')?.dataset.a; closeMenu();
    if(a==='edit') doEdit(id);
    if(a==='del')  doConfirm(id);
  });
  btn.appendChild(dd);
}
function closeMenu(){ document.getElementById('openDD')?.remove(); openMenuId=null; }
document.addEventListener('click', closeMenu);

// ── MODAL ─────────────────────────────────────────────────────────────────────
const overlay    = document.getElementById('modalOverlay');
const habitInput = document.getElementById('habitInput');

function openModal(title){
  document.getElementById('modalTitle').textContent=title;
  renderEmojiPicker(); renderColorPicker();
  overlay.classList.add('open');
  setTimeout(()=>habitInput.focus(),300);
}
function closeModal(){
  overlay.classList.remove('open');
  habitInput.value=''; editId=null; selEmoji='❤️'; selColor='#f43f5e';
}

document.getElementById('addBtn').addEventListener('click',()=>{ editId=null; openModal('New Habit'); });
document.getElementById('btnCancel').addEventListener('click', closeModal);
overlay.addEventListener('click',e=>{ if(e.target===overlay) closeModal(); });

document.getElementById('btnSave').addEventListener('click',()=>{
  const name=habitInput.value.trim();
  if(!name){ habitInput.style.borderColor='#f87171'; setTimeout(()=>habitInput.style.borderColor='',1200); return; }
  if(editId){
    const h=habits.find(h=>h.id===editId);
    if(h){ h.name=name; h.emoji=selEmoji; h.color=selColor; }
  } else {
    habits.push({id:uid(),name,emoji:selEmoji,color:selColor,log:{}});
  }
  save(); renderHabits(); closeModal();
});
habitInput.addEventListener('keydown',e=>{ if(e.key==='Enter') document.getElementById('btnSave').click(); });

function doEdit(id){
  const h=habits.find(h=>h.id===id); if(!h) return;
  editId=id; habitInput.value=h.name; selEmoji=h.emoji||'❤️'; selColor=h.color||'#f43f5e';
  openModal('Edit Habit');
}
function doConfirm(id){ deleteId=id; document.getElementById('confirmOverlay').classList.add('open'); }
document.getElementById('confirmNo').addEventListener('click',()=>{ document.getElementById('confirmOverlay').classList.remove('open'); deleteId=null; });
// confirmYes handled in Data Safety section below

// ── PICKERS ───────────────────────────────────────────────────────────────────
function renderEmojiPicker(){
  const p=document.getElementById('emojiPicker'); p.innerHTML='';
  document.documentElement.style.setProperty('--sel-color',selColor);
  EMOJIS.forEach(em=>{
    const b=document.createElement('div');
    b.className='emoji-opt'+(em===selEmoji?' sel':''); b.textContent=em;
    b.addEventListener('click',()=>{ selEmoji=em; renderEmojiPicker(); });
    p.appendChild(b);
  });
}
function renderColorPicker(){
  const p=document.getElementById('colorPicker'); p.innerHTML='';
  document.documentElement.style.setProperty('--sel-color',selColor);
  COLORS.forEach((c,i)=>{
    const s=document.createElement('div');
    s.className='color-sw'+(c===selColor?' sel':'');
    s.style.background=c; s.style.setProperty('--sw-col',c); s.title=CNAMES[i]||c;
    s.addEventListener('click',()=>{
      selColor=c;
      document.documentElement.style.setProperty('--sel-color',c);
      renderColorPicker(); renderEmojiPicker();
    });
    p.appendChild(s);
  });
}

// ── SETTINGS ──────────────────────────────────────────────────────────────────
document.getElementById('settingsBtn').addEventListener('click',()=>{
  document.getElementById('settingsPanel').classList.add('open');
  document.getElementById('settingsOverlay').classList.add('open');
});
function closeSettings(){
  document.getElementById('settingsPanel').classList.remove('open');
  document.getElementById('settingsOverlay').classList.remove('open');
}
document.getElementById('settingsClose').addEventListener('click', closeSettings);
document.getElementById('settingsOverlay').addEventListener('click', closeSettings);

// ── TOAST ─────────────────────────────────────────────────────────────────────
function showToast(msg, type='success'){
  const t = document.getElementById('toast');
  t.textContent = type==='success' ? '✓  '+msg : type==='error' ? '✕  '+msg : 'ℹ  '+msg;
  t.className = `toast ${type} show`;
  clearTimeout(t._timer);
  t._timer = setTimeout(()=>t.classList.remove('show'), 3000);
}

// ── DATA SAFETY ────────────────────────────────────────────────────────────────

// EXPORT
document.getElementById('exportBtn').addEventListener('click', ()=>{
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    habits
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  const date = fmt(today);
  a.href     = url;
  a.download = `habit-tracker-backup-${date}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(`Backup saved — ${habits.length} habit${habits.length!==1?'s':''} exported`);
  closeSettings();
});

// IMPORT
document.getElementById('importBtn').addEventListener('click', ()=>{
  document.getElementById('importFile').click();
});

document.getElementById('importFile').addEventListener('change', e=>{
  const file = e.target.files[0];
  if(!file){ return; }
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);

      // Accept either raw array or wrapped {version, habits}
      const incoming = Array.isArray(data) ? data : data.habits;
      if(!Array.isArray(incoming)) throw new Error('Invalid format');

      // Validate each habit has at least id + name
      incoming.forEach(h => {
        if(!h.id || !h.name) throw new Error('Malformed habit entry');
      });

      // Merge: incoming habits not already in library (matched by id) are added
      let added = 0, updated = 0;
      incoming.forEach(ih => {
        const existing = habits.find(h => h.id === ih.id);
        if(existing){
          // Merge logs — incoming wins for any day key
          existing.log = { ...existing.log, ...ih.log };
          updated++;
        } else {
          habits.push(ih);
          added++;
        }
      });

      save();
      renderHabits();
      closeSettings();
      showToast(`Import complete — ${added} added, ${updated} updated`);
    } catch(err) {
      showToast('Import failed: invalid backup file', 'error');
    }
    // Reset so the same file can be re-imported if needed
    e.target.value = '';
  };
  reader.readAsText(file);
});

// CLEAR ALL DATA
document.getElementById('clearDataBtn').addEventListener('click', ()=>{
  // Reuse confirm dialog
  deleteId = '__ALL__';
  const box = document.getElementById('confirmOverlay');
  box.querySelector('h3').textContent  = 'Clear All Data?';
  box.querySelector('p').textContent   = 'This permanently deletes ALL habits and tracking history. Export a backup first.';
  box.querySelector('.btn-yes').textContent = 'Clear Everything';
  box.classList.add('open');
  closeSettings();
});

// Override confirm yes to handle __ALL__
document.getElementById('confirmYes').addEventListener('click', ()=>{
  if(deleteId === '__ALL__'){
    habits = []; save(); renderHabits();
    showToast('All data cleared');
    // Reset confirm text
    const box = document.getElementById('confirmOverlay');
    box.querySelector('h3').textContent = 'Delete Habit?';
    box.querySelector('p').textContent  = 'All tracking data will be permanently removed.';
    box.querySelector('.btn-yes').textContent = 'Delete';
  } else if(deleteId){
    habits = habits.filter(h=>h.id!==deleteId); save(); renderHabits();
  }
  document.getElementById('confirmOverlay').classList.remove('open');
  deleteId = null;
});

// ── SERVICE WORKER REGISTRATION ──────────────────────────────────────────────
if('serviceWorker' in navigator){
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('./sw.js', { scope: './' });

      // Check for updates every 60 seconds while the app is open
      setInterval(() => reg.update(), 60_000);

      // Show update banner when a new SW is waiting
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        newWorker.addEventListener('statechange', () => {
          if(newWorker.state === 'installed' && navigator.serviceWorker.controller){
            document.getElementById('updateBanner').classList.add('show');
          }
        });
      });

      console.log('[PWA] Service worker registered ✓');
    } catch(err) {
      console.warn('[PWA] SW registration failed:', err);
    }
  });

  // When user clicks Reload — tell the waiting SW to activate, then reload
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if(!refreshing){ refreshing = true; window.location.reload(); }
  });
}

document.getElementById('updateReload')?.addEventListener('click', () => {
  navigator.serviceWorker.getRegistration().then(reg => {
    reg?.waiting?.postMessage({ type: 'SKIP_WAITING' });
  });
});
document.getElementById('updateDismiss')?.addEventListener('click', () => {
  document.getElementById('updateBanner').classList.remove('show');
});

// Offline / online indicator
window.addEventListener('offline', () => { document.getElementById('offlineBar').style.display='block'; });
window.addEventListener('online',  () => { document.getElementById('offlineBar').style.display='none'; });

// ── INIT ──────────────────────────────────────────────────────────────────────
renderEmojiPicker();
renderColorPicker();
renderHabits();