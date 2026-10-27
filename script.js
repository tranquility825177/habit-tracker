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

let today    = new Date();
let todayStr = fmt(today);

function fmt(d){ return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}`; }
function p(n){ return String(n).padStart(2,'0'); }
function uid(){ return Math.random().toString(36).slice(2,9); }
function save(){ localStorage.setItem('ht3_habits', JSON.stringify(habits)); }
function hexA(hex,a){
  const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${a})`;
}

// ── THEME (System / Light / Dark) ──────────────────────────────────────────────
let themePref = localStorage.getItem('ht3_theme') || 'system';
const darkMQ  = window.matchMedia('(prefers-color-scheme: dark)');
function applyTheme(){
  const resolved = themePref==='system' ? (darkMQ.matches ? 'dark' : 'light') : themePref;
  document.documentElement.setAttribute('data-theme', resolved);
  const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg || '#141218');
  document.querySelectorAll('.seg-btn').forEach(b=>b.classList.toggle('sel', b.dataset.theme===themePref));
}
darkMQ.addEventListener?.('change', ()=>{ if(themePref==='system') applyTheme(); });
document.querySelectorAll('.seg-btn').forEach(b=>{
  b.addEventListener('click', ()=>{
    themePref = b.dataset.theme;
    localStorage.setItem('ht3_theme', themePref);
    applyTheme();
  });
});
applyTheme();

// ── HEADER DATE ────────────────────────────────────────────────────────────────
function renderHeaderDate(){
  document.getElementById('hDate').textContent =
    `${DAY_S[today.getDay()]}, ${MON_S[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
}
renderHeaderDate();

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

  // Month labels — placed on the column containing the 1st of each month.
  // A leading label for the oldest (partial) month is only shown if there is
  // enough room before the next label, so labels never overlap.
  const mrow = document.createElement('div'); mrow.className='tracker-months';
  const labels = [];
  weeks.forEach((week,wi)=>{
    const first = week.find(d=>d.day.getDate()===1);
    if(first) labels.push({ wi, day:first.day });
  });
  if(!labels.length || labels[0].wi >= 3) labels.unshift({ wi:0, day:weeks[0][0].day });
  labels.forEach(l=>{
    const lbl=document.createElement('div'); lbl.className='month-lbl';
    lbl.style.left=`${l.wi*STRIDE}px`;
    lbl.textContent=`${MON_S[l.day.getMonth()]} '${String(l.day.getFullYear()).slice(2)}`;
    mrow.appendChild(lbl);
  });

  // Cells
  const cols=document.createElement('div'); cols.className='tracker-cols';
  const tip=document.getElementById('cellTip');

  weeks.forEach(week=>{
    const col=document.createElement('div'); col.className='tracker-week';
    week.forEach(day=>{
      const cell=document.createElement('div'); cell.className='t-cell';
      cell.dataset.ds = day.ds;

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

  // Always resolve the grid cell by date, so the big tick button updates it too
  const cardEl = document.querySelector(`.habit-card[data-id="${habitId}"]`);
  cellEl = cardEl?.querySelector(`.t-cell[data-ds="${ds}"]`) || cellEl || document.createElement('div');

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
    mid.innerHTML=`<div class="habit-name"></div>
      <div class="habit-streak">${streak>0?'🔥':'○'} Streak: ${streak}</div>`;
    mid.querySelector('.habit-name').textContent = habit.name;

    const chk=document.createElement('div');
    chk.className='habit-check-btn'+(done?' checked':'');
    chk.style.background=done?hexA(color,.9):'transparent';
    chk.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10l4.5 4.5 8.5-8.5" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    chk.addEventListener('click',()=>{
      chk.classList.add('pop');
      chk.addEventListener('animationend',()=>chk.classList.remove('pop'),{once:true});
      toggleDay(habit.id, todayStr, null, color);
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
    e.stopPropagation();
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
// ── CONFIRM DIALOG (generic) ──────────────────────────────────────────────────
let confirmCb = null;
function askConfirm({ title, text, yes='Delete', onYes }){
  const box = document.getElementById('confirmOverlay');
  box.querySelector('h3').textContent = title;
  box.querySelector('p').textContent  = text;
  box.querySelector('.btn-yes').textContent = yes;
  confirmCb = onYes;
  box.classList.add('open');
}
function doConfirm(id){
  askConfirm({
    title:'Delete Habit?', text:'All tracking data will be permanently removed.',
    onYes:()=>{ habits = habits.filter(h=>h.id!==id); save(); renderHabits(); }
  });
}
document.getElementById('confirmNo').addEventListener('click', ()=>{
  document.getElementById('confirmOverlay').classList.remove('open'); confirmCb = null;
});
document.getElementById('confirmYes').addEventListener('click', ()=>{
  const cb = confirmCb; confirmCb = null;
  document.getElementById('confirmOverlay').classList.remove('open');
  if(cb) cb();
});

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

// ══════════════════════════════════════════════════════════════════════════════
//  v5 MODULES — Tabs · Routine · Attendance · Weekend Planner · Daily Mind Game
// ══════════════════════════════════════════════════════════════════════════════

// ── shared helpers ────────────────────────────────────────────────────────────
const esc   = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const load  = (k, d) => { try{ const v = JSON.parse(localStorage.getItem(k)); return v ?? d; }catch(e){ return d; } };
const store = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const addDays   = (d, n) => { const x = new Date(d); x.setDate(x.getDate()+n); return x; };
const isWeekend = d => d.getDay()===0 || d.getDay()===6;
const CHECK_SVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.5 10l4.5 4.5 8.5-8.5" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

let prefs = Object.assign({ autoWeekend:true }, load('ht5_prefs', {}));
const savePrefs = () => store('ht5_prefs', prefs);

// Generic ⋯ popup menu (re-uses the .dropdown look)
function popMenu(btn, items){
  closeMenu();
  const dd = document.createElement('div'); dd.className='dropdown'; dd.id='openDD';
  dd.innerHTML = items.map((it,i)=>`<div class="dd-item${it.danger?' danger':''}" data-i="${i}">${it.label}</div>`).join('');
  dd.addEventListener('click', e=>{
    e.stopPropagation();
    const i = e.target.closest('[data-i]')?.dataset.i;
    closeMenu();
    if(i!==undefined) items[i].fn();
  });
  btn.appendChild(dd);
}

// ══ TIMETABLES (Routine + Weekend Planner share one engine) ═══════════════════
const SLOT_TYPES = {
  class:   { l:'Class',     e:'🎓', c:'#3b82f6' },
  study:   { l:'Study',     e:'📚', c:'#6366f1' },
  deep:    { l:'Deep work', e:'🧠', c:'#a855f7' },
  skill:   { l:'Skill',     e:'🛠️', c:'#06b6d4' },
  project: { l:'Project',   e:'🚀', c:'#ec4899' },
  workout: { l:'Workout',   e:'💪', c:'#f97316' },
  meal:    { l:'Meal',      e:'🥗', c:'#22c55e' },
  break:   { l:'Break',     e:'☕', c:'#14b8a6' },
  rest:    { l:'Wind down', e:'🌙', c:'#8b5cf6' },
  other:   { l:'Other',     e:'⭐', c:'#f59e0b' }
};
const toMin   = t => { const [h,m] = t.split(':').map(Number); return h*60+m; };
const minToT  = m => `${p(Math.floor(m/60))}:${p(m%60)}`;
const fmtTime = t => { const [h,m] = t.split(':').map(Number); return `${h%12||12}:${p(m)} ${h>=12?'PM':'AM'}`; };
const durText = (a,b) => { const m=toMin(b)-toMin(a), h=Math.floor(m/60), r=m%60; return (h?`${h}h`:'')+(h&&r?' ':'')+(r?`${r}m`:''); };

const WEEKDAY_SEED = [
  ['06:00','07:00','Workout','workout'],        ['07:00','08:00','Breakfast & get ready','meal'],
  ['08:00','09:00','Commute & quick revision','study'], ['09:00','13:00','Lectures','class'],
  ['13:00','14:00','Lunch & break','meal'],     ['14:00','16:00','Labs / tutorials','class'],
  ['16:00','17:00','Rest','break'],             ['17:00','19:00','Self study','study'],
  ['19:00','20:00','Dinner','meal'],            ['20:00','22:00','Assignments & revision','study'],
  ['22:00','23:00','Plan tomorrow & wind down','rest']
];
const WEEKEND_SEED = [
  ['06:30','07:30','Workout','workout'],        ['07:30','08:30','Breakfast','meal'],
  ['08:30','11:30','Deep work block','deep'],   ['11:30','12:00','Break','break'],
  ['12:00','14:00','Skill development','skill'],['14:00','15:00','Lunch & rest','meal'],
  ['15:00','18:00','Side project','project'],   ['18:00','19:00','Walk & free time','break'],
  ['19:00','20:30','Weekly review & planning','deep'], ['21:00','22:00','Reading','study']
];

const TIME_RE = /^\d{1,2}:\d{2}$/;
function cleanSlots(arr){
  if(!Array.isArray(arr)) return [];
  return arr.filter(s => s && typeof s==='object' && s.id && typeof s.title==='string'
                      && TIME_RE.test(s.start||'') && TIME_RE.test(s.end||''))
            .map(s => ({ ...s, start:s.start.padStart(5,'0'), end:s.end.padStart(5,'0'),
                         type:SLOT_TYPES[s.type]?s.type:'other', log:(s.log&&typeof s.log==='object')?s.log:{} }));
}
function makeTimetable(cfg){
  const T = { cfg, slots: cleanSlots(load(cfg.key, [])), editId:null };
  const root = document.getElementById(cfg.view);
  const persist = () => store(cfg.key, T.slots);
  T.persist = persist;

  T.nextStart = () => {
    const last = T.slots.reduce((m,s)=>Math.max(m, toMin(s.end)), 0);
    return minToT(last && last < 23*60 ? last : toMin(cfg.firstStart));
  };

  T.render = function(){
    const canCheck = cfg.canCheck();
    const sorted   = [...T.slots].sort((a,b)=> toMin(a.start)-toMin(b.start) || toMin(a.end)-toMin(b.end));
    const total    = sorted.length;
    const done     = sorted.filter(s=>s.log && s.log[todayStr]).length;
    const pct      = total ? Math.round(done/total*100) : 0;
    const planned  = sorted.reduce((m,s)=>m+toMin(s.end)-toMin(s.start), 0);
    const plannedT = `${Math.floor(planned/60)}h${planned%60?` ${planned%60}m`:''}`;
    const n = new Date(), nowMin = n.getHours()*60 + n.getMinutes();
    const plural = total!==1 ? 's' : '';

    const items = sorted.map(s=>{
      const t = SLOT_TYPES[s.type] || SLOT_TYPES.other;
      const isDone = !!(s.log && s.log[todayStr]);
      const isNow  = cfg.canCheck() && nowMin>=toMin(s.start) && nowMin<toMin(s.end);
      return `<div class="tl-item${isDone?' done':''}${isNow?' now':''}" data-id="${s.id}" style="--tc:${t.c}">
        <div class="tl-time"><b>${fmtTime(s.start)}</b><span>${fmtTime(s.end)}</span></div>
        <div class="tl-rail"><i class="tl-dot"></i></div>
        <div class="tl-card">
          <div class="habit-icon tl-ico" style="background:${hexA(t.c,.22)}">${t.e}</div>
          <div class="tl-mid">
            <div class="tl-name">${esc(s.title)}</div>
            <div class="tl-meta">${durText(s.start,s.end)} · ${t.l}${isNow?'<em class="now-chip">Now</em>':''}</div>
          </div>
          <div class="habit-check-btn tl-chk${isDone?' checked':''}${canCheck?'':' locked'}" data-act="chk" role="button" aria-label="Mark complete" style="${isDone?`background:${hexA(t.c,.9)}`:''}">${CHECK_SVG}</div>
          <div class="habit-menu-btn" data-act="menu" role="button" aria-label="More">···</div>
        </div>
      </div>`;
    }).join('');

    root.innerHTML = `
      <div class="today-banner">
        <div class="tb-left">
          <div class="tb-label">${canCheck ? cfg.bannerLabel : cfg.bannerLabelIdle}</div>
          <div class="tb-count">${canCheck ? `${done} <span>/ ${total} block${plural}</span>` : `${total} <span>block${plural} planned</span>`}</div>
          <div class="tb-bar-wrap"><div class="tb-bar" style="width:${canCheck?pct:0}%;background:var(--primary)"></div></div>
        </div>
        <div class="tb-pct" style="color:${canCheck&&pct===100&&total?'var(--success)':'inherit'}">${canCheck ? pct+'%' : plannedT}</div>
      </div>
      ${cfg.hint()}
      <div class="add-wrap"><button class="add-btn" data-act="add"><span class="add-plus">+</span> Add Time Block</button></div>
      <div class="timeline">${items || `<div class="empty"><div class="empty-icon">${cfg.emptyIcon}</div><p>${cfg.emptyText}</p><button class="chip-btn" data-act="seed">Load a starter template</button></div>`}</div>`;
  };

  T.toggle = id => {
    if(!cfg.canCheck()){ showToast(cfg.lockMsg, 'info'); return; }
    const s = T.slots.find(x=>x.id===id); if(!s) return;
    s.log = s.log || {};
    const nowDone = !s.log[todayStr];
    if(nowDone) s.log[todayStr] = true; else delete s.log[todayStr];
    persist(); T.render();
    if(nowDone){
      root.querySelector(`.tl-item[data-id="${id}"] .tl-chk`)?.classList.add('pop');
      if(T.slots.every(x=>x.log && x.log[todayStr])) showToast('Every block done — great day!');
    }
  };

  root.addEventListener('click', e=>{
    const go = e.target.closest('[data-go]'); if(go){ showTab(go.dataset.go); return; }
    const el = e.target.closest('[data-act]');  if(!el) return;
    const id = el.closest('.tl-item')?.dataset.id;
    switch(el.dataset.act){
      case 'add':  openSlot(T, null); break;
      case 'chk':  T.toggle(id); break;
      case 'seed':
        T.slots = cfg.seed.map(([start,end,title,type])=>({ id:uid(), start, end, title, type, log:{} }));
        persist(); T.render(); showToast('Starter template loaded'); break;
      case 'menu':
        e.stopPropagation();
        popMenu(el, [
          { label:'✏️ &nbsp;Edit',   fn:()=>openSlot(T, id) },
          { label:'🗑️ &nbsp;Delete', danger:true, fn:()=>askConfirm({
              title:'Delete time block?', text:'This block will be removed from your timetable.',
              onYes:()=>{ T.slots = T.slots.filter(s=>s.id!==id); persist(); T.render(); }
          })}
        ]);
        break;
    }
  });
  return T;
}

const RT = makeTimetable({
  key:'ht5_routine', view:'view-routine', firstStart:'06:00', defaultType:'study', seed:WEEKDAY_SEED,
  bannerLabel:"Today's routine", bannerLabelIdle:'Daily routine',
  emptyIcon:'🗓️', emptyText:'No time blocks yet.<br>Map out your day from 6 AM to 11 PM.',
  canCheck:()=>true, lockMsg:'',
  hint:()=> isWeekend(today)
    ? `<div class="hint-chip" data-go="planner" role="button"><span>🌿</span><div><b>It's the weekend</b><small>Classes are off — open your Weekend Planner</small></div></div>`
    : ''
});
const WK = makeTimetable({
  key:'ht5_weekend', view:'view-planner', firstStart:'07:00', defaultType:'deep', seed:WEEKEND_SEED,
  bannerLabel:"Weekend plan", bannerLabelIdle:'Weekend plan',
  emptyIcon:'🌿', emptyText:'Design your Saturday &amp; Sunday.<br>Deep work, skills and side projects.',
  canCheck:()=>isWeekend(today), lockMsg:'Check-offs unlock on Saturday & Sunday',
  hint:()=>{
    if(isWeekend(today)) return `<div class="hint-chip on"><span>✨</span><div><b>Weekend mode is on</b><small>One plan, tracked separately for Saturday and Sunday</small></div></div>`;
    const d = (6 - today.getDay() + 7) % 7;
    return `<div class="hint-chip"><span>⏳</span><div><b>Weekend starts in ${d} day${d!==1?'s':''}</b><small>Edit your plan now — check-offs unlock on Saturday</small></div></div>`;
  }
});

// ── time-block sheet ──────────────────────────────────────────────────────────
const slotOv = document.getElementById('slotOverlay');
const slotName = document.getElementById('slotName'), slotStart = document.getElementById('slotStart'),
      slotEnd  = document.getElementById('slotEnd'),  slotErr   = document.getElementById('slotErr');
let slotCtx = null, slotType = 'other';

function renderSlotTypes(){
  document.getElementById('slotTypes').innerHTML = Object.entries(SLOT_TYPES).map(([k,t])=>
    `<button type="button" class="type-chip${k===slotType?' sel':''}" data-k="${k}" style="--tc:${t.c}">${t.e} ${t.l}</button>`).join('');
}
document.getElementById('slotTypes').addEventListener('click', e=>{
  const b = e.target.closest('[data-k]'); if(!b) return; slotType = b.dataset.k; renderSlotTypes();
});
function openSlot(T, id){
  slotCtx = T; T.editId = id;
  const s = id ? T.slots.find(x=>x.id===id) : null;
  document.getElementById('slotTitle').textContent = s ? 'Edit Time Block' : (T===WK ? 'New Weekend Block' : 'New Time Block');
  slotName.value = s?.title || '';
  slotStart.value = s?.start || T.nextStart();
  slotEnd.value   = s?.end   || minToT(Math.min(toMin(slotStart.value)+60, 23*60+59));
  slotType = s?.type || T.cfg.defaultType;
  slotErr.textContent = ''; renderSlotTypes();
  slotOv.classList.add('open'); setTimeout(()=>slotName.focus(), 300);
}
function closeSlot(){ slotOv.classList.remove('open'); slotCtx = null; }
document.getElementById('slotCancel').addEventListener('click', closeSlot);
slotOv.addEventListener('click', e=>{ if(e.target===slotOv) closeSlot(); });
slotName.addEventListener('keydown', e=>{ if(e.key==='Enter') document.getElementById('slotSave').click(); });
document.getElementById('slotSave').addEventListener('click', ()=>{
  const T = slotCtx; if(!T) return;
  const title = slotName.value.trim(), start = slotStart.value, end = slotEnd.value;
  if(!title){ slotErr.textContent = 'Give this block a name.'; slotName.focus(); return; }
  if(!start || !end){ slotErr.textContent = 'Pick a start and end time.'; return; }
  if(toMin(end) <= toMin(start)){ slotErr.textContent = 'End time must be after the start time.'; return; }
  const clash = T.slots.find(o=>o.id!==T.editId && toMin(o.start)<toMin(end) && toMin(start)<toMin(o.end));
  if(T.editId){
    const s = T.slots.find(x=>x.id===T.editId);
    if(s){ s.title=title; s.start=start; s.end=end; s.type=slotType; }
  } else {
    T.slots.push({ id:uid(), title, start, end, type:slotType, log:{} });
  }
  T.persist(); T.render(); closeSlot();
  if(clash) showToast(`Overlaps with “${clash.title}”`, 'info');
});

// ══ ATTENDANCE ════════════════════════════════════════════════════════════════
let att = (()=>{
  const a = load('ht5_attendance', null);
  if(!a || !Array.isArray(a.subjects)) return { threshold:75, subjects:[] };
  a.subjects = a.subjects.filter(s => s && s.id && typeof s.name==='string' && Number.isInteger(s.a) && Number.isInteger(s.t) && s.a>=0 && s.a<=s.t)
                         .map(s => ({ ...s, h: typeof s.h==='string' ? s.h : '' }));
  a.threshold = Number.isFinite(a.threshold) ? Math.min(95, Math.max(50, a.threshold)) : 75;
  return a;
})();
const saveAtt = () => store('ht5_attendance', att);
const pctTxt  = v => { const f = Math.floor(v*10)/10; return (Number.isInteger(f) ? f : f.toFixed(1)) + '%'; };
const attOk   = (a,t,T) => t>0 && a*100 >= T*t;
let attJustAdded = null, attBump = null;

function attTip(s, T){
  if(!s.t) return 'Log your first class to start tracking.';
  if(attOk(s.a, s.t, T)){
    const m = Math.floor((s.a*100 - T*s.t)/T);
    return m>0 ? `You can miss ${m} more class${m>1?'es':''} and stay above ${T}%.` : `Right at the line — don’t miss the next class.`;
  }
  const n = Math.ceil((T*s.t - 100*s.a)/(100-T));
  return `Attend the next ${n} class${n>1?'es':''} in a row to reach ${T}%.`;
}

function renderAttendance(){
  const root = document.getElementById('view-attendance'), T = att.threshold;
  const A = att.subjects.reduce((m,s)=>m+s.a,0), TT = att.subjects.reduce((m,s)=>m+s.t,0);
  const overall = TT ? A/TT*100 : 0;
  const safe = att.subjects.filter(s=>attOk(s.a,s.t,T)).length;
  const risk = att.subjects.filter(s=>s.t>0 && !attOk(s.a,s.t,T)).length;

  const cards = att.subjects.map(s=>{
    const has = s.t>0, ok = attOk(s.a,s.t,T), v = has ? s.a/s.t*100 : 0;
    const col = COLORS[[...s.name].reduce((h,c)=>h+c.charCodeAt(0),0) % COLORS.length];
    return `<div class="att-card${has&&!ok?' low':''}${s.id===attJustAdded?' enter':''}" data-id="${s.id}">
      <div class="att-top">
        <div class="habit-icon att-ico" style="background:${hexA(col,.22)};color:${col}">${esc(s.name.trim().charAt(0).toUpperCase())}</div>
        <div class="att-mid"><div class="att-name">${esc(s.name)}</div><div class="att-count">${s.a} / ${s.t} classes attended</div></div>
        <span class="att-badge ${!has?'na':ok?'ok':'bad'}${s.id===attBump?' bump':''}">${has?pctTxt(v):'—'}</span>
        <div class="habit-menu-btn" data-act="menu" role="button" aria-label="More">···</div>
      </div>
      <div class="att-bar"><div class="att-fill" style="width:${Math.min(100,v)}%"></div><i class="att-mark" style="left:${T}%"></i></div>
      <div class="att-tip">${attTip(s,T)}</div>
      <div class="att-actions">
        <button class="att-btn present" data-act="p">+ Present</button>
        <button class="att-btn absent"  data-act="a">+ Absent</button>
        <button class="att-undo" data-act="u" aria-label="Undo last entry" ${s.h?'':'disabled'}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/></svg></button>
      </div>
    </div>`;
  }).join('');

  root.innerHTML = `
    <div class="today-banner att-banner">
      <div class="tb-left">
        <div class="tb-label">Overall attendance</div>
        <div class="tb-count">${TT?pctTxt(overall):'—'} <span>${A} / ${TT} classes</span></div>
        <div class="tb-bar-wrap att-bar-wrap"><div class="tb-bar" style="width:${Math.min(100,overall)}%;background:${TT&&!attOk(A,TT,T)?'var(--danger)':'var(--success)'}"></div><i class="att-mark" style="left:${T}%"></i></div>
      </div>
      <div class="thr">
        <div class="tb-label">Safe level</div>
        <div class="thr-ctl"><button data-act="thr-" aria-label="Lower safe level">−</button><b>${T}%</b><button data-act="thr+" aria-label="Raise safe level">+</button></div>
      </div>
    </div>
    ${att.subjects.length ? `<div class="stat-chips"><span class="s-chip ok">✓ ${safe} on track</span><span class="s-chip ${risk?'bad':''}">⚠ ${risk} below ${T}%</span></div>` : ''}
    <div class="add-wrap"><button class="add-btn" data-act="add"><span class="add-plus">+</span> Add Subject</button></div>
    <div class="att-list">${cards || `<div class="empty"><div class="empty-icon">🎓</div><p>No subjects yet.<br>Add your courses to track attendance.</p></div>`}</div>`;
  attJustAdded = null; attBump = null;
}

document.getElementById('view-attendance').addEventListener('click', e=>{
  const el = e.target.closest('[data-act]'); if(!el) return;
  const id = el.closest('.att-card')?.dataset.id, s = att.subjects.find(x=>x.id===id);
  switch(el.dataset.act){
    case 'add':  openSubj(null); break;
    case 'thr-': att.threshold = Math.max(50, att.threshold-5); saveAtt(); renderAttendance(); break;
    case 'thr+': att.threshold = Math.min(95, att.threshold+5); saveAtt(); renderAttendance(); break;
    case 'p': case 'a':
      if(!s) break;
      s.t++; if(el.dataset.act==='p') s.a++;
      s.h = ((s.h||'') + (el.dataset.act==='p'?'P':'A')).slice(-50);
      saveAtt(); attBump = id; renderAttendance(); break;
    case 'u':
      if(!s || !s.h) break;
      if(s.h.slice(-1)==='P') s.a--; s.t--; s.h = s.h.slice(0,-1);
      saveAtt(); attBump = id; renderAttendance(); showToast('Last entry undone', 'info'); break;
    case 'menu':
      e.stopPropagation();
      popMenu(el, [
        { label:'✏️ &nbsp;Edit',   fn:()=>openSubj(id) },
        { label:'🗑️ &nbsp;Delete', danger:true, fn:()=>askConfirm({
            title:'Delete subject?', text:`“${s.name}” and its attendance record will be removed.`,
            onYes:()=>{ att.subjects = att.subjects.filter(x=>x.id!==id); saveAtt(); renderAttendance(); }
        })}
      ]);
      break;
  }
});

// subject sheet
const subjOv = document.getElementById('subjOverlay'), subjName = document.getElementById('subjName'),
      subjA = document.getElementById('subjA'), subjT = document.getElementById('subjT'), subjErr = document.getElementById('subjErr');
let subjEditId = null;
function openSubj(id){
  subjEditId = id;
  const s = id ? att.subjects.find(x=>x.id===id) : null;
  document.getElementById('subjTitle').textContent = s ? 'Edit Subject' : 'New Subject';
  subjName.value = s?.name || ''; subjA.value = s ? s.a : 0; subjT.value = s ? s.t : 0; subjErr.textContent = '';
  subjOv.classList.add('open'); setTimeout(()=>subjName.focus(), 300);
}
function closeSubj(){ subjOv.classList.remove('open'); subjEditId = null; }
document.getElementById('subjCancel').addEventListener('click', closeSubj);
subjOv.addEventListener('click', e=>{ if(e.target===subjOv) closeSubj(); });
document.getElementById('subjSave').addEventListener('click', ()=>{
  const name = subjName.value.trim(), a = parseInt(subjA.value,10), t = parseInt(subjT.value,10);
  if(!name){ subjErr.textContent = 'Enter a subject name.'; return; }
  if(!Number.isInteger(a) || !Number.isInteger(t) || a<0 || t<0){ subjErr.textContent = 'Class counts must be whole numbers, 0 or more.'; return; }
  if(a > t){ subjErr.textContent = 'Attended classes can’t exceed total classes.'; return; }
  if(subjEditId){
    const s = att.subjects.find(x=>x.id===subjEditId);
    if(s){ if(s.a!==a || s.t!==t) s.h = ''; s.name=name; s.a=a; s.t=t; }
  } else {
    const id = uid(); att.subjects.push({ id, name, a, t, h:'' }); attJustAdded = id;
  }
  saveAtt(); renderAttendance(); closeSubj();
});
subjName.addEventListener('keydown', e=>{ if(e.key==='Enter') document.getElementById('subjSave').click(); });

// ══ DAILY MIND GAME ═══════════════════════════════════════════════════════════
let game = Object.assign({ points:0, best:0, streak:0, lastWon:null, days:{} }, load('ht5_game', {}));
if(typeof game.days!=='object' || !game.days) game.days = {};
['points','best','streak'].forEach(k=>{ if(!Number.isFinite(game[k])) game[k]=0; });
const saveGame = () => store('ht5_game', game);

function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
function dayNumOf(ds){ const [y,m,d] = ds.split('-').map(Number); return Math.floor(Date.UTC(y,m-1,d)/864e5); }

const TECH_WORDS = [
  ['COMPILER','Translates source code into machine code'], ['VARIABLE','A named container for a value'],
  ['FUNCTION','A reusable block of code you can call'],    ['RECURSION','When a function calls itself'],
  ['ALGORITHM','A step-by-step procedure to solve a problem'], ['DATABASE','An organised collection of stored data'],
  ['BOOLEAN','A value that is only true or false'],        ['POINTER','Holds the memory address of another value'],
  ['ITERATOR','Walks through the items of a collection'],  ['INTERFACE','A contract describing what a type can do'],
  ['FRAMEWORK','Reusable scaffolding for building apps'],  ['REPOSITORY','Where a project’s code and history live'],
  ['ENCRYPTION','Scrambling data so only key holders can read it'], ['BANDWIDTH','Maximum data a connection can carry per second'],
  ['CACHE','Fast storage for recently used data'],         ['DEBUGGER','A tool for stepping through code to find bugs'],
  ['SYNTAX','The grammar rules of a programming language'],['PROTOCOL','Agreed rules for how systems communicate'],
  ['KERNEL','The core of an operating system'],            ['LATENCY','The delay before a data transfer begins'],
  ['MIDDLEWARE','Software that sits between other layers'],['OVERFLOW','A value too big for its storage'],
  ['INHERITANCE','A class gaining traits from a parent class'], ['THREAD','Smallest unit of execution in a process'],
  ['SOCKET','Endpoint for network communication'],          ['QUEUE','First in, first out data structure'],
  ['COMPONENT','A self-contained, reusable piece of a UI'],['BINARY','The base-2 number system'],
  ['HASHMAP','Key-value store with near-instant lookups'],  ['DEPLOYMENT','Releasing software to its users']
];
const CODE_BANK = [
  { q:'What does this print?', code:'console.log(0.1 + 0.2 === 0.3)', o:['true','false','undefined','NaN'], a:1, why:'Floating-point rounding makes 0.1 + 0.2 equal 0.30000000000000004.' },
  { q:'What does this print?', code:'console.log(typeof null)', o:['"null"','"undefined"','"object"','"number"'], a:2, why:'A famous JavaScript quirk: typeof null is "object".' },
  { q:'What does this print?', code:'print(len(set([1, 2, 2, 3, 3, 3])))', o:['6','3','2','1'], a:1, why:'A set keeps only unique values: {1, 2, 3}.' },
  { q:'What does this print?', code:'console.log([1,2,3].map(x => x*2).filter(x => x>2).length)', o:['1','2','3','6'], a:1, why:'map gives [2,4,6]; filter keeps [4,6]; length is 2.' },
  { q:'What is binary 1011 in decimal?', code:'1011₂ = ?', o:['9','10','11','13'], a:2, why:'8 + 0 + 2 + 1 = 11.' },
  { q:'What does this print?', code:'print("ab" * 3)', o:['ab3','ababab','abbbb','Error'], a:1, why:'Python repeats a string when you multiply it by an integer.' },
  { q:'What does this print?', code:'console.log("5" + 3, "5" - 3)', o:['8 2','53 2','53 53','8 8'], a:1, why:'+ concatenates with a string ("53"), while − forces numbers (2).' },
  { q:'Binary search on a sorted list of 1024 items needs about how many steps?', code:'n = 1024', o:['10','32','512','1024'], a:0, why:'Each step halves the range, and log₂(1024) = 10.' },
  { q:'What does this print?', code:'a = [1, 2, 3]\nb = a\nb.append(4)\nprint(len(a))', o:['3','4','7','Error'], a:1, why:'b and a point to the same list, so appending through b changes a.' },
  { q:'Which item is on top of the stack at the end?', code:'push 1, push 2, push 3\npop\npush 4\npop', o:['1','2','3','4'], a:1, why:'[1,2,3] → pop → [1,2] → push 4 → [1,2,4] → pop → [1,2]. Top is 2.' },
  { q:'What does this print?', code:'console.log([] + [])', o:['0','"[]"','"" (empty string)','undefined'], a:2, why:'Both arrays convert to empty strings, and "" + "" is "".' },
  { q:'Which item is at the front of the queue at the end?', code:'enqueue A, B, C\ndequeue\nenqueue D\ndequeue', o:['A','B','C','D'], a:2, why:'[A,B,C] → [B,C] → [B,C,D] → [C,D]. Front is C.' },
  { q:'What does this print?', code:'print(10 // 3, 10 % 3)', o:['3 1','3.33 1','3 3','1 3'], a:0, why:'// is integer division (3) and % is the remainder (1).' },
  { q:'What does this print?', code:'console.log(Boolean("false"))', o:['true','false','"false"','Error'], a:0, why:'Any non-empty string is truthy, even the text "false".' }
];

function getPuzzle(ds){
  const n = dayNumOf(ds), rnd = mulberry32(n*7919+13), kind = n % 3, cyc = Math.floor(n/3);
  const ri = (lo,hi) => lo + Math.floor(rnd()*(hi-lo+1));

  if(kind === 0){
    const gens = [
      ()=>{ const a=ri(1,15), d=ri(2,9); return { s:Array.from({length:7},(_,i)=>a+d*i), hint:'Look at the gap between neighbouring numbers.', why:`Add ${d} each time.` }; },
      ()=>{ const a=ri(1,4), r=ri(2,3);  return { s:Array.from({length:6},(_,i)=>a*r**i), hint:'Each term is a multiple of the one before it.', why:`Multiply by ${r} each time.` }; },
      ()=>{ const k=ri(0,8); return { s:Array.from({length:7},(_,i)=>(i+1)**2+k), hint:'Think about perfect squares.', why:k?`Each term is n² + ${k}.`:'Each term is a perfect square.' }; },
      ()=>{ const a=ri(1,3), b=ri(2,5), s=[a,b]; while(s.length<7) s.push(s[s.length-1]+s[s.length-2]); return { s, hint:'Each number depends on the two before it.', why:'Each term is the sum of the previous two.' }; },
      ()=>{ const a=ri(2,6), b=a+ri(1,3), s=[ri(1,5)]; while(s.length<7) s.push(s[s.length-1] + (s.length%2 ? a : b)); return { s, hint:'The gap alternates between two values.', why:`Alternately add ${a} and ${b}.` }; },
      ()=>{ const s0=ri(1,5), k=ri(1,3); return { s:Array.from({length:7},(_,i)=>s0+k*i*(i+1)/2), hint:'The gaps themselves follow a pattern.', why:`The gap grows by ${k} each step.` }; }
    ];
    const g = gens[ri(0, gens.length-1)]();
    return { kind:'seq', label:'Number sequence', max:3, terms:g.s.slice(0,-1), answer:String(g.s[g.s.length-1]), hint:g.hint, why:g.why };
  }
  if(kind === 1){
    const [w,c] = TECH_WORDS[cyc % TECH_WORDS.length];
    let letters, tries = 0;
    do { letters = w.split(''); for(let i=letters.length-1;i>0;i--){ const j=Math.floor(rnd()*(i+1)); [letters[i],letters[j]]=[letters[j],letters[i]]; } } while(letters.join('')===w && ++tries<10);
    return { kind:'word', label:'Tech word scramble', max:3, letters, clue:c, answer:w, hint:`It starts with “${w[0]}”.`, why:`${w[0]+w.slice(1).toLowerCase()} — ${c.charAt(0).toLowerCase()+c.slice(1)}.` };
  }
  const b = CODE_BANK[cyc % CODE_BANK.length];
  const order = b.o.map((_,i)=>i); for(let i=order.length-1;i>0;i--){ const j=Math.floor(rnd()*(i+1)); [order[i],order[j]]=[order[j],order[i]]; }
  return { kind:'mc', label:'Code & logic', max:2, q:b.q, code:b.code, options:order.map(i=>b.o[i]), answer:String(order.indexOf(b.a)), hint:'Trace it one line at a time.', why:b.why };
}

const gameStreak = () => (game.lastWon===todayStr || game.lastWon===fmt(addDays(today,-1))) ? game.streak : 0;

function renderGame(){
  const root = document.getElementById('gMind'), pz = getPuzzle(todayStr);
  const rec  = game.days[todayStr] || { t:0, s:false, o:false, g:[], p:0 };
  const st   = gameStreak();
  const miss = rec.t>0 && !rec.o;

  let body = '';
  if(pz.kind==='seq'){
    body = `<p class="gc-q">What number comes next?</p><div class="tiles">${pz.terms.map(n=>`<div class="tile">${n}</div>`).join('')}<div class="tile q">?</div></div>`;
  } else if(pz.kind==='word'){
    body = `<p class="gc-q">Unscramble this tech term</p><div class="tiles">${pz.letters.map(l=>`<div class="tile">${l}</div>`).join('')}</div>
            <p class="gc-sub">${pz.letters.length} letters · ${esc(pz.clue)}</p>`;
  } else {
    body = `<p class="gc-q">${esc(pz.q)}</p><pre class="code">${esc(pz.code)}</pre>`;
  }

  const wrongTxt = rec.g.filter(g=>g!==pz.answer);
  let play = '';
  if(pz.kind==='mc'){
    play = `<div class="mc-list">${pz.options.map((o,i)=>{
      const tried = rec.g.includes(String(i)), right = rec.o && String(i)===pz.answer;
      return `<button class="mc-opt${tried&&String(i)!==pz.answer?' wrong':''}${right?' right':''}" data-i="${i}" ${rec.o||tried?'disabled':''}>${esc(o)}</button>`;
    }).join('')}</div>`;
  } else if(!rec.o){
    play = `${wrongTxt.length?`<div class="guess-chips">${wrongTxt.map(g=>`<span>${esc(g)}</span>`).join('')}</div>`:''}
      <div class="game-form">
        <input class="modal-input" id="gIn" autocomplete="off" autocapitalize="characters" spellcheck="false" ${pz.kind==='seq'?'inputmode="numeric"':''} placeholder="${pz.kind==='seq'?'Your answer':'Type the word'}">
        <button class="btn-save" id="gGo">Check</button>
      </div>`;
  }

  const ansTxt = pz.kind==='mc' ? pz.options[+pz.answer] : pz.answer;
  let result = '';
  if(rec.o){
    result = rec.s
      ? `<div class="gc-result win"><b>Solved in ${rec.t} ${rec.t>1?'tries':'try'}</b><span>+${rec.p} discipline points</span></div>`
      : `<div class="gc-result lose"><b>Out of tries</b><span>The answer was ${esc(ansTxt)}</span></div>`;
    result += `<p class="gc-why">${esc(pz.why)}</p><div class="gc-next">Next puzzle in <b id="gcCount">--:--:--</b></div>`;
  } else if(miss){
    result = `<div class="gc-hint">💡 ${esc(pz.hint)}</div>`;
  }

  const hist = Array.from({length:14},(_,i)=>{
    const ds = fmt(addDays(today, i-13)), r = game.days[ds];
    return `<i class="gh-dot${r?.s?' won':r?.o?' lost':''}${ds===todayStr?' now':''}" title="${ds}"></i>`;
  }).join('');

  root.innerHTML = `
    <div class="game-hero">
      <div class="gh-stat"><b>🔥 ${st}</b><span>Day streak</span></div>
      <div class="gh-stat"><b>⭐ ${game.points}</b><span>Discipline points</span></div>
      <div class="gh-stat"><b>🏆 ${game.best}</b><span>Best streak</span></div>
    </div>
    ${st>0 && !rec.s ? `<div class="hint-chip"><span>🔥</span><div><b>Keep your ${st}-day streak alive</b><small>Solve today’s puzzle before midnight</small></div></div>` : ''}
    <div class="game-card${rec.s?' solved':''}">
      <div class="gc-top"><span class="gc-chip">${pz.label}</span>
        <div class="gc-tries" aria-label="${pz.max-rec.t} tries left">${Array.from({length:pz.max},(_,i)=>`<i class="${i<rec.t?(rec.s&&i===rec.t-1?'win':'used'):''}"></i>`).join('')}</div></div>
      ${body}${play}${result}
    </div>
    <div class="sec-lbl hist-lbl">Last 14 days</div>
    <div class="game-hist">${hist}</div>`;
  tickCountdown();
}

function tickCountdown(){
  const el = document.getElementById('gcCount'); if(!el) return;
  const n = new Date(), mid = new Date(n.getFullYear(), n.getMonth(), n.getDate()+1);
  const s = Math.max(0, Math.floor((mid-n)/1000));
  el.textContent = `${p(Math.floor(s/3600))}:${p(Math.floor(s%3600/60))}:${p(s%60)}`;
}
setInterval(tickCountdown, 1000);

function submitGuess(raw){
  const pz = getPuzzle(todayStr);
  const rec = game.days[todayStr] || (game.days[todayStr] = { t:0, s:false, o:false, g:[], p:0 });
  if(rec.o) return;
  let guess = String(raw).trim();
  if(pz.kind==='seq'){ if(guess==='' || isNaN(Number(guess))){ showToast('Enter a number', 'error'); return; } guess = String(Number(guess)); }
  else if(pz.kind==='word'){ guess = guess.toUpperCase().replace(/[^A-Z]/g,''); if(!guess){ showToast('Type a word', 'error'); return; } }
  if(rec.g.includes(guess)){ showToast('You already tried that', 'info'); return; }

  rec.g.push(guess); rec.t++;
  const ok = guess === pz.answer;
  if(ok){
    rec.s = true; rec.o = true; rec.p = ({1:30,2:20,3:10})[rec.t] || 10;
    game.points += rec.p;
    if(game.lastWon !== todayStr){
      game.streak = game.lastWon===fmt(addDays(today,-1)) ? game.streak+1 : 1;
      game.lastWon = todayStr;
    }
    game.best = Math.max(game.best, game.streak);
  } else if(rec.t >= pz.max){ rec.o = true; }
  saveGame(); renderGame();

  const card = document.querySelector('#view-games .game-card');
  if(ok) showToast(`Correct! +${rec.p} points`);
  else {
    card?.classList.add('shake'); setTimeout(()=>card?.classList.remove('shake'), 450);
    if(!rec.o) document.getElementById('gIn')?.focus();
  }
}
document.getElementById('view-games').addEventListener('click', e=>{
  if(e.target.closest('#gGo')) submitGuess(document.getElementById('gIn').value);
  const o = e.target.closest('.mc-opt'); if(o && !o.disabled) submitGuess(o.dataset.i);
});
document.getElementById('view-games').addEventListener('keydown', e=>{
  if(e.key==='Enter' && e.target.id==='gIn') submitGuess(e.target.value);
});


// ══ ZIP — daily path puzzle + online leaderboard ═══════════════════════════════
// Draw ONE line that starts at 1, visits the numbers in order, and fills every square.
const ZIP_CONFIG = {
  supabaseUrl:     'https://pitlhetodizqnvtucfsk.supabase.co',   // e.g. 'https://abcdxyz.supabase.co'   (leave empty = leaderboard off)
  supabaseAnonKey: 'sb_publishable_KvhzU0SEhBEf8md0x_90gQ_NVmlhgGk',   // the PUBLIC anon / publishable key — safe to keep in this file
  size: 6,               // 6 → 6×6 board
  checkpoints: 7,        // how many numbers appear on the board
  tzOffsetMin: 330       // clock that decides "today" for everyone: 330 = India (UTC+5:30)
};
const zipOnlineReady = () => !!(ZIP_CONFIG.supabaseUrl && ZIP_CONFIG.supabaseAnonKey);

const zipFresh = (deviceId) => ({ deviceId: deviceId || zipNewId(), name:'', days:{}, streak:0, best:0, lastWon:null });
function zipNewId(){
  if(window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random()*16|0; return (c==='x' ? r : (r&3|8)).toString(16); });
}
let zip = Object.assign(zipFresh(''), load('ht5_zip', {}));
if(typeof zip.days !== 'object' || !zip.days) zip.days = {};
Object.keys(zip.days).forEach(d => { const r = zip.days[d]; if(!r || !Number.isFinite(r.ms)) delete zip.days[d]; });
if(typeof zip.name !== 'string') zip.name = '';
['streak','best'].forEach(k => { if(!Number.isFinite(zip[k])) zip[k] = 0; });
if(!zip.deviceId) zip.deviceId = zipNewId();
const saveZip = () => store('ht5_zip', zip);
saveZip();

// ── dates (one shared clock for everyone) ─────────────────────────────────────
const zipDay   = () => new Date(Date.now() + ZIP_CONFIG.tzOffsetMin*60000).toISOString().slice(0,10);
const dayShift = (ds, n) => { const [y,m,d] = ds.split('-').map(Number); return new Date(Date.UTC(y, m-1, d+n)).toISOString().slice(0,10); };
const zFmt = ms => `${Math.floor(ms/60000)}:${p(Math.floor(ms/1000)%60)}.${Math.floor(ms%1000/100)}`;

// ── puzzle generator: random Hamiltonian path ("backbite"), same for everyone on a given day ──
function zipPuzzle(ds){
  const N = ZIP_CONFIG.size, T = N*N, K = ZIP_CONFIG.checkpoints;
  const rnd = mulberry32(dayNumOf(ds)*104729 + 7);
  let path = [];
  for(let r=0;r<N;r++) for(let c=0;c<N;c++) path.push(r*N + (r%2 ? N-1-c : c));   // start from a snake
  const nbrs = i => { const r = Math.floor(i/N), c = i%N, o = [];
    if(r>0) o.push(i-N); if(r<N-1) o.push(i+N); if(c>0) o.push(i-1); if(c<N-1) o.push(i+1); return o; };
  for(let it=0; it<1500; it++){
    if(it%2) path.reverse();
    const end = path[T-1], prev = path[T-2], opts = nbrs(end).filter(x => x!==prev);
    const k = path.indexOf(opts[Math.floor(rnd()*opts.length)]);
    path = path.slice(0, k+1).concat(path.slice(k+1).reverse());
    if(it%2) path.reverse();
  }
  const idx = [0];
  for(let i=1;i<K-1;i++){
    const base = Math.round(i*(T-1)/(K-1)) + Math.floor(rnd()*5) - 2;
    idx.push(Math.max(idx[i-1]+2, Math.min(base, T-1-2*(K-1-i))));
  }
  idx.push(T-1);
  const nums = {}; idx.forEach((pi, i) => { nums[path[pi]] = i+1; });
  return { N, T, nums, max:K, sol:path };
}

// ── game state ────────────────────────────────────────────────────────────────
let Z = { day:null, pz:null, path:[], t0:0, ms:0, running:false, done:false, practice:false, dragging:false, editName:false, lb:{ state:'idle', rows:[] } };
function zipInit(){
  const d = zipDay();
  if(Z.day === d && Z.pz) return;
  Z.day = d; Z.pz = zipPuzzle(d); Z.path = []; Z.t0 = 0; Z.ms = 0; Z.running = false; Z.done = false; Z.practice = false; Z.dragging = false;
  Z.lb = { state:'idle', rows:[] };
  const r = zip.days[d];
  if(r){ Z.done = true; Z.ms = r.ms; Z.path = [...Z.pz.sol]; }
}
const zHead   = () => Z.path[Z.path.length-1];
const zNeeded = () => Z.path.filter(c => Z.pz.nums[c]).length + 1;
const zAdj    = (a, b) => { const N = Z.pz.N; return Math.abs(Math.floor(a/N)-Math.floor(b/N)) + Math.abs(a%N-b%N) === 1; };

function zCanEnter(c){
  if(Z.path.includes(c) || !zAdj(zHead(), c)) return false;
  const v = Z.pz.nums[c];
  if(v){ if(v !== zNeeded()) return false; if(v === Z.pz.max && Z.path.length !== Z.pz.T-1) return false; }
  return true;
}
function zStep(c){
  const L = Z.path.length;
  if(L >= 2 && c === Z.path[L-2]){ Z.path.pop(); return true; }   // dragging backwards erases
  if(zCanEnter(c)){ Z.path.push(c); return true; }
  return false;
}
function zMoveTo(target){            // walks cell-by-cell so fast swipes don't skip squares
  const N = Z.pz.N;
  for(let guard=0; guard<N && zHead()!==target; guard++){
    const h = zHead(), hr = Math.floor(h/N), hc = h%N, tr = Math.floor(target/N), tc = target%N;
    let next;
    if(hr === tr) next = h + (tc>hc ? 1 : -1);
    else if(hc === tc) next = h + (tr>hr ? N : -N);
    else break;
    if(!zStep(next)) break;
  }
}
function zDown(c){
  if(Z.done) return;
  if(!Z.path.length){ if(Z.pz.nums[c] === 1){ Z.path = [c]; Z.t0 = performance.now(); Z.running = true; } return; }
  const i = Z.path.indexOf(c);
  if(i >= 0) Z.path.length = i+1;   // tap an earlier square to rewind to it
}
const zWon = () => Z.path.length === Z.pz.T && Z.pz.nums[zHead()] === Z.pz.max;

function zFinish(){
  Z.running = false; Z.done = true; Z.dragging = false;
  Z.ms = Math.round(performance.now() - Z.t0);
  if(!Z.practice && !zip.days[Z.day]){
    zip.days[Z.day] = { ms:Z.ms, sent:false };
    zip.streak = zip.lastWon === dayShift(Z.day,-1) ? zip.streak+1 : 1;
    zip.lastWon = Z.day; zip.best = Math.max(zip.best, zip.streak);
    game.points += 30; saveGame(); saveZip();
    showToast('Zip solved! +30 points');
    zipSubmitPending();
  }
  if(navigator.vibrate) navigator.vibrate(40);
  renderZip();
}

// ── online leaderboard (Supabase REST) ────────────────────────────────────────
function zHeaders(extra){
  const k = ZIP_CONFIG.supabaseAnonKey, h = { apikey:k, 'Content-Type':'application/json' };
  if(k.startsWith('eyJ')) h.Authorization = 'Bearer ' + k;     // legacy JWT keys; new "publishable" keys go in apikey only
  return Object.assign(h, extra);
}
let zipSending = false;
async function zipSubmitPending(){
  if(zipSending || !zipOnlineReady() || !zip.name || !navigator.onLine) return;
  zipSending = true;
  try{
    for(const [day, r] of Object.entries(zip.days)){
      if(r.sent) continue;
      if(day < dayShift(zipDay(), -1)){ r.sent = true; continue; }          // too old to be accepted
      try{
        const res = await fetch(`${ZIP_CONFIG.supabaseUrl}/rest/v1/zip_scores`, {
          method:'POST', headers:zHeaders({ Prefer:'return=minimal' }),
          body: JSON.stringify({ day, device_id:zip.deviceId, name:zip.name, ms:r.ms })
        });
        if(res.ok || (res.status >= 400 && res.status < 500)) r.sent = true;   // 409 = already there; other 4xx = rejected, don't retry forever
      }catch(e){ break; }                                                    // offline — try again later
    }
    saveZip();
  } finally { zipSending = false; }
  if(curTab==='games' && gameSub==='zip'){ renderZipExtras(); zipLoadBoard(); }
}
async function zipLoadBoard(){
  if(!zipOnlineReady()){ Z.lb.state = 'off'; renderZipLb(); return; }
  Z.lb.state = 'loading'; renderZipLb();
  try{
    const res = await fetch(`${ZIP_CONFIG.supabaseUrl}/rest/v1/zip_scores?day=eq.${Z.day}&select=name,ms&order=ms.asc,created_at.asc&limit=25`,
                            { headers:zHeaders(), cache:'no-store' });
    if(!res.ok) throw new Error(res.status);
    Z.lb.rows = await res.json(); Z.lb.state = 'ok';
  }catch(e){ Z.lb.state = navigator.onLine ? 'error' : 'offline'; }
  renderZipLb(); renderZipHero();
}
window.addEventListener('online', () => zipSubmitPending());

// ── rendering ─────────────────────────────────────────────────────────────────
function zipRank(){
  const mine = zip.days[Z.day]; if(!mine || Z.lb.state !== 'ok') return null;
  const i = Z.lb.rows.findIndex(r => r.name === zip.name && r.ms === mine.ms);
  return i >= 0 ? i+1 : null;
}
function renderZipHero(){
  const el = document.getElementById('zipHero'); if(!el) return;
  const mine = zip.days[Z.day], rk = zipRank();
  const st = (zip.lastWon === Z.day || zip.lastWon === dayShift(Z.day,-1)) ? zip.streak : 0;
  el.innerHTML = `
    <div class="gh-stat"><b>⚡ ${mine ? zFmt(mine.ms) : '—'}</b><span>Today</span></div>
    <div class="gh-stat"><b>🔥 ${st}</b><span>Zip streak</span></div>
    <div class="gh-stat"><b>🏅 ${rk ? '#'+rk : '—'}</b><span>Rank</span></div>`;
}
function renderZip(){
  zipInit();
  const root = document.getElementById('gZip'), pz = Z.pz, N = pz.N;
  const cells = Array.from({length:pz.T}, (_, i) => `<div class="zc" data-i="${i}">${pz.nums[i] ? `<span class="zn">${pz.nums[i]}</span>` : ''}</div>`).join('');
  root.innerHTML = `
    <div class="game-hero" id="zipHero"></div>
    <div class="game-card zip-card${Z.done ? ' solved' : ''}">
      <div class="gc-top"><span class="gc-chip">Zip · ${N}×${N}${Z.practice ? ' · practice' : ''}</span><span class="zip-timer" id="zipTimer">${zFmt(Z.done ? Z.ms : 0)}</span></div>
      <p class="zip-help" id="zipHelp"></p>
      <div class="zip-board" id="zipBoard" style="--n:${N}">${cells}<svg viewBox="0 0 ${N} ${N}" aria-hidden="true"><polyline points="" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <div class="zip-actions">
        <button class="btn-cancel" data-z="restart" ${Z.done ? 'disabled' : ''}>Restart</button>
        <button class="btn-cancel" data-z="undo" ${Z.done ? 'disabled' : ''}>Undo step</button>
      </div>
      <div id="zipExtras"></div>
    </div>
    <div class="sec-lbl hist-lbl">Today’s leaderboard</div>
    <div class="zip-lb" id="zipLb"></div>`;
  zDraw(); renderZipHero(); renderZipExtras(); renderZipLb();
  if(zipOnlineReady() && Z.lb.state === 'idle'){ zipSubmitPending(); zipLoadBoard(); }
}
function zDraw(){
  const board = document.getElementById('zipBoard'); if(!board) return;
  const N = Z.pz.N, inPath = new Set(Z.path), h = zHead();
  board.querySelectorAll('.zc').forEach(el => {
    const i = +el.dataset.i;
    el.classList.toggle('on', inPath.has(i));
    el.classList.toggle('head', i === h && !Z.done);
    el.querySelector('.zn')?.classList.toggle('hit', inPath.has(i));
  });
  board.querySelector('polyline').setAttribute('points', Z.path.map(i => `${i%N + .5},${Math.floor(i/N) + .5}`).join(' '));
  const help = document.getElementById('zipHelp');
  if(help) help.textContent = Z.done ? 'Solved — every square filled in order.'
    : !Z.path.length ? 'Press on 1, then drag through the numbers in order and fill every square.'
    : `Next: ${zNeeded()} · ${Z.pz.T - Z.path.length} squares left`;
}
function renderZipExtras(){
  const el = document.getElementById('zipExtras'); if(!el) return;
  const mine = zip.days[Z.day];
  let h = '';
  if(Z.done){
    h += `<div class="gc-result win"><b>${Z.practice ? 'Practice run' : 'Solved'} in ${zFmt(Z.ms)}</b><span>${Z.practice ? 'Practice runs don’t go on the leaderboard' : (mine && mine.ms === Z.ms ? '+30 discipline points' : 'Your first run today counts: ' + zFmt(mine?.ms || Z.ms))}</span></div>
          <div class="zip-actions"><button class="btn-save" data-z="practice">Practice again</button></div>
          <div class="gc-next">New puzzle in <b id="zipCount">--:--:--</b></div>`;
  }
  if(zipOnlineReady()){
    if((!zip.name && mine) || Z.editName){
      h += `<div class="zip-name"><p class="gc-sub">${zip.name ? 'Change your display name' : 'Pick a name for the leaderboard'}</p>
        <div class="game-form"><input class="modal-input" id="zipNameIn" maxlength="16" autocomplete="off" placeholder="2–16 letters or numbers" value="${esc(zip.name)}"><button class="btn-save" data-z="name">Save</button></div>
        <div class="modal-err" id="zipNameErr"></div></div>`;
    } else if(zip.name){
      h += `<p class="gc-sub zip-who">Playing as <b>${esc(zip.name)}</b> · <a href="#" data-z="rename">change</a></p>`;
    }
    if(mine && !mine.sent) h += `<p class="gc-sub">${zip.name ? 'Score saved on this phone — it uploads as soon as you’re online.' : 'Score saved on this phone — add a name to post it.'}</p>`;
  }
  el.innerHTML = h;
  zipTick();
}
function renderZipLb(){
  const el = document.getElementById('zipLb'); if(!el) return;
  const s = Z.lb.state, mine = zip.days[Z.day];
  let h;
  if(!zipOnlineReady()) h = `<div class="zip-lb-msg">The online leaderboard isn’t switched on yet.</div>`;
  else if(s === 'idle' || s === 'loading') h = `<div class="zip-lb-msg">Loading scores…</div>`;
  else if(s === 'offline') h = `<div class="zip-lb-msg">You’re offline — the leaderboard needs internet.<br><button class="chip-btn" data-z="refresh">Try again</button></div>`;
  else if(s === 'error') h = `<div class="zip-lb-msg">Couldn’t load scores right now.<br><button class="chip-btn" data-z="refresh">Try again</button></div>`;
  else if(!Z.lb.rows.length) h = `<div class="zip-lb-msg">No scores yet today — be the first!</div>`;
  else h = Z.lb.rows.map((r, i) => {
      const me = mine && r.name === zip.name && r.ms === mine.ms;
      return `<div class="lb-row${me ? ' me' : ''}"><span class="lb-rk">${['🥇','🥈','🥉'][i] || i+1}</span><span class="lb-nm"><span class="lb-name">${esc(r.name)}</span>${me ? '<em>you</em>' : ''}</span><span class="lb-ms">${zFmt(r.ms)}</span></div>`;
    }).join('') + `<div class="zip-lb-foot"><button class="chip-btn" data-z="refresh">Refresh</button></div>`;
  el.innerHTML = h;
}

// countdown to the next puzzle (uses the shared clock, not the phone's midnight)
function zipTick(){
  const now = Date.now(), off = ZIP_CONFIG.tzOffsetMin*60000;
  if(Z.day && zipDay() !== Z.day && curTab === 'games' && gameSub === 'zip' && !Z.running){ renderZip(); return; }
  const el = document.getElementById('zipCount'); if(!el) return;
  const s = Math.max(0, Math.floor(((Math.floor((now+off)/864e5)+1)*864e5 - off - now)/1000));
  el.textContent = `${p(Math.floor(s/3600))}:${p(Math.floor(s%3600/60))}:${p(s%60)}`;
}
setInterval(zipTick, 1000);

// timer
setInterval(() => {
  if(!Z.running) return;
  const t = document.getElementById('zipTimer'); if(t) t.textContent = zFmt(performance.now() - Z.t0);
}, 100);

// ── input ─────────────────────────────────────────────────────────────────────
function zCellAt(board, e){
  const r = board.getBoundingClientRect(), N = Z.pz.N;
  const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
  if(x < 0 || y < 0 || x >= 1 || y >= 1) return -1;
  return Math.floor(y*N)*N + Math.floor(x*N);
}
function zAfter(){ zDraw(); if(!Z.done && zWon()) zFinish(); }
function zipBind(){
  const g = document.getElementById('gZip');
  // A touch only "belongs to the game" if it starts a drawing: on square 1 (empty board) or on the line's
  // head. Any other touch on the board is left alone so the page can scroll normally.
  const startsDraw = c => c >= 0 && !Z.done && ((!Z.path.length && Z.pz.nums[c] === 1) || (Z.path.length && c === zHead()));
  let tap = -1, tapX = 0, tapY = 0;

  g.addEventListener('pointerdown', e => {
    const b = e.target.closest('#zipBoard'); if(!b || Z.done) return;
    const c = zCellAt(b, e); if(c < 0) return;
    if(e.pointerType === 'touch' && !startsDraw(c)){
      tap = Z.path.includes(c) ? c : -1; tapX = e.clientX; tapY = e.clientY;   // maybe a tap-to-rewind, maybe a scroll
      return;
    }
    e.preventDefault(); b.setPointerCapture && b.setPointerCapture(e.pointerId);
    Z.dragging = true; zDown(c); zAfter();
  });
  g.addEventListener('pointermove', e => {
    if(!Z.dragging || Z.done || !Z.path.length) return;
    const b = document.getElementById('zipBoard'); if(!b) return;
    const c = zCellAt(b, e); if(c < 0) return;
    zMoveTo(c); zAfter();
  });
  g.addEventListener('pointerup', e => {
    if(tap >= 0 && Math.hypot(e.clientX - tapX, e.clientY - tapY) < 10 && !Z.done){ zDown(tap); zAfter(); }   // tap an earlier square → rewind
    tap = -1; Z.dragging = false;
  });
  g.addEventListener('pointercancel', () => { tap = -1; Z.dragging = false; });   // the browser took the gesture to scroll

  // Block page scrolling ONLY for gestures that started a drawing (needs non-passive listeners).
  g.addEventListener('touchstart', e => {
    const b = e.target.closest('#zipBoard'); if(!b || !e.touches[0]) return;
    if(startsDraw(zCellAt(b, e.touches[0])) && e.cancelable) e.preventDefault();
  }, { passive:false });
  g.addEventListener('touchmove', e => { if(Z.dragging && e.cancelable) e.preventDefault(); }, { passive:false });

  g.addEventListener('click', e => {
    const b = e.target.closest('[data-z]'); if(!b) return;
    e.preventDefault();
    switch(b.dataset.z){
      case 'restart': Z.path = []; Z.running = false; Z.t0 = 0; zDraw(); document.getElementById('zipTimer').textContent = zFmt(0); break;
      case 'undo':    if(Z.path.length > 1){ Z.path.pop(); zDraw(); } break;
      case 'practice': Z.practice = true; Z.done = false; Z.path = []; Z.ms = 0; Z.running = false; renderZip(); break;
      case 'refresh': zipLoadBoard(); break;
      case 'rename':  Z.editName = true; renderZipExtras(); document.getElementById('zipNameIn')?.focus(); break;
      case 'name': {
        const v = document.getElementById('zipNameIn').value.trim(), err = document.getElementById('zipNameErr');
        if(!/^[\p{L}\p{N} _.-]{2,16}$/u.test(v)){ err.textContent = 'Use 2–16 letters, numbers, spaces, _ . or -'; return; }
        zip.name = v; saveZip(); Z.editName = false; renderZipExtras(); zipSubmitPending(); break;
      }
    }
  });
  g.addEventListener('keydown', e => { if(e.key === 'Enter' && e.target.id === 'zipNameIn') g.querySelector('[data-z=name]').click(); });
}

// ── Games tab: Mind puzzle | Zip ──────────────────────────────────────────────
let gameSub = localStorage.getItem('ht5_gsub') === 'zip' ? 'zip' : 'mind';
function renderGames(){
  const root = document.getElementById('view-games');
  if(!document.getElementById('gMind')){
    root.innerHTML = `<div class="sub-seg" id="gSeg"><button data-sub="mind">🧩 Mind puzzle</button><button data-sub="zip">⚡ Zip</button></div><div id="gMind"></div><div id="gZip"></div>`;
    document.getElementById('gSeg').addEventListener('click', e => {
      const b = e.target.closest('[data-sub]'); if(!b) return;
      gameSub = b.dataset.sub; try{ localStorage.setItem('ht5_gsub', gameSub); }catch(err){}
      renderGames();
    });
    zipBind();
  }
  document.querySelectorAll('#gSeg button').forEach(b => b.classList.toggle('sel', b.dataset.sub === gameSub));
  document.getElementById('gMind').hidden = gameSub !== 'mind';
  document.getElementById('gZip').hidden  = gameSub !== 'zip';
  if(gameSub === 'mind') renderGame(); else renderZip();
}


// ══ TABS ══════════════════════════════════════════════════════════════════════
const TAB_TITLES = { habits:'Habit Tracker', routine:'Daily Routine', attendance:'Attendance', planner:'Weekend Planner', games:'Games' };
let curTab = 'habits';
function renderTab(n){
  ({ habits:renderHabits, routine:()=>RT.render(), attendance:renderAttendance, planner:()=>WK.render(), games:renderGames })[n]();
}
function showTab(name){
  if(!TAB_TITLES[name]) name = 'habits';
  curTab = name;
  closeMenu();
  document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active', v.id==='view-'+name));
  document.querySelectorAll('.nav-item').forEach(b=>{
    const on = b.dataset.tab===name; b.classList.toggle('active', on);
    if(on) b.setAttribute('aria-current','page'); else b.removeAttribute('aria-current');
  });
  document.getElementById('hTitle').textContent = TAB_TITLES[name];
  try{ localStorage.setItem('ht3_tab', name); }catch(e){}
  renderTab(name);
  window.scrollTo({ top:0 });
}
document.getElementById('bottomNav').addEventListener('click', e=>{
  const b = e.target.closest('.nav-item'); if(b) showTab(b.dataset.tab);
});

// weekend auto-open toggle (Settings)
const awT = document.getElementById('autoWkToggle');
awT.classList.toggle('on', prefs.autoWeekend);
awT.addEventListener('click', ()=>{ prefs.autoWeekend = !prefs.autoWeekend; awT.classList.toggle('on', prefs.autoWeekend); savePrefs(); });

// midnight rollover + live "now" marker
function checkDay(){
  const n = new Date();
  if(fmt(n) === todayStr) return;
  today = n; todayStr = fmt(n);
  renderHeaderDate(); renderTab(curTab);
  showToast('New day — fresh start!', 'info');
}
setInterval(checkDay, 20000);
setInterval(()=>{ if((curTab==='routine'||curTab==='planner') && !document.getElementById('openDD') && !document.querySelector('.modal-overlay.open')) renderTab(curTab); }, 60000);
document.addEventListener('visibilitychange', ()=>{ if(!document.hidden) checkDay(); });

// ── DATA SAFETY ────────────────────────────────────────────────────────────────

// EXPORT (v2 — habits + routine + weekend + attendance + game)
document.getElementById('exportBtn').addEventListener('click', ()=>{
  const payload = {
    version: 2,
    exportedAt: new Date().toISOString(),
    habits,
    routine: RT.slots,
    weekend: WK.slots,
    attendance: att,
    game,
    zip: { ...zip, deviceId: undefined },
    prefs
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `habit-tracker-backup-${fmt(today)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(`Backup saved — ${habits.length} habits, ${RT.slots.length + WK.slots.length} blocks, ${att.subjects.length} subjects`);
  closeSettings();
});

// IMPORT (accepts v1 habit backups and v2 full backups)
document.getElementById('importBtn').addEventListener('click', ()=>{
  document.getElementById('importFile').click();
});

function mergeSlots(target, incoming){
  let added = 0;
  incoming.forEach(s=>{
    if(!s || !s.id || !s.title || !/^\d\d:\d\d$/.test(s.start||'') || !/^\d\d:\d\d$/.test(s.end||'')) return;
    const ex = target.find(x=>x.id===s.id);
    if(ex) ex.log = { ...ex.log, ...s.log };
    else { target.push({ ...s, log:s.log||{} }); added++; }
  });
  return added;
}

document.getElementById('importFile').addEventListener('change', e=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      const incoming = Array.isArray(data) ? data : data.habits;
      if(incoming !== undefined && !Array.isArray(incoming)) throw new Error('Invalid format');
      if(incoming === undefined && !data.routine && !data.weekend && !data.attendance && !data.game && !data.zip) throw new Error('Invalid format');

      let added = 0, updated = 0;
      (incoming||[]).forEach(ih=>{
        if(!ih.id || !ih.name) throw new Error('Malformed habit entry');
      });
      (incoming||[]).forEach(ih=>{
        const existing = habits.find(h=>h.id===ih.id);
        if(existing){ existing.log = { ...existing.log, ...ih.log }; updated++; }
        else { habits.push(ih); added++; }
      });

      if(!Array.isArray(data)){
        if(Array.isArray(data.routine)) added += mergeSlots(RT.slots, data.routine);
        if(Array.isArray(data.weekend)) added += mergeSlots(WK.slots, data.weekend);

        const ia = data.attendance;
        if(ia && Array.isArray(ia.subjects)){
          if(Number.isFinite(ia.threshold)) att.threshold = Math.min(95, Math.max(50, ia.threshold));
          ia.subjects.forEach(s=>{
            if(!s || !s.id || !s.name || !Number.isInteger(s.a) || !Number.isInteger(s.t) || s.a>s.t) return;
            const ex = att.subjects.find(x=>x.id===s.id);
            if(!ex){ att.subjects.push({ id:s.id, name:s.name, a:s.a, t:s.t, h:s.h||'' }); added++; }
            else if(s.t > ex.t){ ex.a = s.a; ex.t = s.t; ex.h = s.h||''; updated++; }
          });
        }
        const ig = data.game;
        if(ig && typeof ig==='object'){
          game.points = Math.max(game.points, ig.points||0);
          game.best   = Math.max(game.best,   ig.best||0);
          game.days   = { ...(ig.days||{}), ...game.days };
          if(ig.lastWon && (!game.lastWon || ig.lastWon > game.lastWon)){ game.lastWon = ig.lastWon; game.streak = ig.streak||0; }
        }
        const iz = data.zip;
        if(iz && typeof iz==='object' && iz.days && typeof iz.days==='object'){
          Object.entries(iz.days).forEach(([d,r])=>{
            if(r && Number.isFinite(r.ms) && (!zip.days[d] || r.ms < zip.days[d].ms)){ zip.days[d] = { ms:r.ms, sent:!!r.sent }; added++; }
          });
          if(!zip.name && typeof iz.name==='string' && /^[\p{L}\p{N} _.-]{2,16}$/u.test(iz.name)) zip.name = iz.name;
          if(iz.lastWon && (!zip.lastWon || iz.lastWon > zip.lastWon)){ zip.lastWon = iz.lastWon; zip.streak = iz.streak||0; }
          zip.best = Math.max(zip.best, iz.best||0);
          Z.day = null;
        }
      }

      save(); RT.persist(); WK.persist(); saveAtt(); saveGame(); saveZip();
      renderTab(curTab);
      closeSettings();
      showToast(`Import complete — ${added} added, ${updated} updated`);
    } catch(err) {
      showToast('Import failed: invalid backup file', 'error');
    }
    e.target.value = '';
  };
  reader.readAsText(file);
});

// CLEAR ALL DATA
document.getElementById('clearDataBtn').addEventListener('click', ()=>{
  closeSettings();
  askConfirm({
    title:'Clear All Data?',
    text:'This permanently deletes ALL habits, routines, attendance records and game progress. Export a backup first.',
    yes:'Clear Everything',
    onYes:()=>{
      habits = []; RT.slots = []; WK.slots = [];
      att = { threshold:75, subjects:[] };
      game = { points:0, best:0, streak:0, lastWon:null, days:{} };
      zip = zipFresh(zip.deviceId); Z.day = null;
      save(); RT.persist(); WK.persist(); saveAtt(); saveGame(); saveZip();
      renderTab(curTab);
      showToast('All data cleared');
    }
  });
});


// ── SERVICE WORKER REGISTRATION ──────────────────────────────────────────────
if('serviceWorker' in navigator){
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('./sw.js', { scope: './' });
      setInterval(() => reg.update(), 60_000);   // new versions download quietly and apply on the next open
      console.log('[PWA] Service worker registered ✓');
    } catch(err) {
      console.warn('[PWA] SW registration failed:', err);
    }
  });
}

// Offline / online indicator
window.addEventListener('offline', () => { document.getElementById('offlineBar').style.display='block'; });
window.addEventListener('online',  () => { document.getElementById('offlineBar').style.display='none'; });

// ── BACK BUTTON CLOSES SHEETS / SETTINGS (instead of leaving the app) ───────────
// Every open layer owns one history entry. The phone's back button/gesture pops that entry,
// which closes the topmost layer. Closing a layer by hand (Cancel, tap outside) removes its entry.
(function(){
  const layers = [   // topmost first
    ['confirmOverlay',  () => document.getElementById('confirmNo').click()],
    ['slotOverlay',     () => closeSlot()],
    ['subjOverlay',     () => closeSubj()],
    ['modalOverlay',    () => closeModal()],
    ['settingsPanel',   () => closeSettings()]
  ].map(([id, close]) => ({ el: document.getElementById(id), close }));

  // A reload can leave a stale layer entry behind — clear it so the first Back isn't "dead".
  if(history.state && history.state.htLayer) history.replaceState(null, '');

  let depth = 0;            // history entries we have pushed
  const skip = [];          // timers for popstate events we caused ourselves (history.go)
  const openCount = () => layers.filter(l => l.el.classList.contains('open')).length;

  function reconcile(){
    const want = openCount();
    while(depth < want){ history.pushState({ htLayer: true }, ''); depth++; }
    if(depth > want){
      const n = depth - want; depth = want;
      skip.push(setTimeout(() => skip.shift(), 1500));   // safety: forget it if no popstate arrives
      history.go(-n);
    }
  }
  // MutationObserver callbacks run right after the tap, so the history entry is created
  // inside the user gesture (mobile Chrome ignores entries created outside one).
  const mo = new MutationObserver(reconcile);
  layers.forEach(l => mo.observe(l.el, { attributes:true, attributeFilter:['class'] }));

  window.addEventListener('popstate', () => {
    if(skip.length){ clearTimeout(skip.shift()); return; }   // our own cleanup, not the user's Back
    const top = layers.find(l => l.el.classList.contains('open'));
    if(top && depth > 0){ depth--; top.close(); }
  });
})();

// ── INIT ──────────────────────────────────────────────────────────────────────
renderEmojiPicker();
renderColorPicker();

// Land on the Weekend Planner the first time the app opens on a Saturday/Sunday;
// otherwise restore the last tab the person used.
(function(){
  let start = localStorage.getItem('ht3_tab') || 'habits';
  if(prefs.autoWeekend && isWeekend(today) && localStorage.getItem('ht3_wkAuto') !== todayStr){
    start = 'planner';
    localStorage.setItem('ht3_wkAuto', todayStr);
  }
  showTab(start);
})();
