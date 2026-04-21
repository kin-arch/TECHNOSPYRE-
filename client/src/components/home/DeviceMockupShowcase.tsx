import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/* ═══════════════════════════════════════════════════════════
   CANVAS SCREEN RENDERERS
═══════════════════════════════════════════════════════════ */

function drawLaptopScreen(canvas: HTMLCanvasElement) {
  const W = 1440, H = 900;
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // BG
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#06000f'); bg.addColorStop(1, '#0d0725');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

  // Grid lines
  ctx.strokeStyle = 'rgba(99,102,241,0.06)'; ctx.lineWidth = 1;
  for (let x = 0; x <= W; x += 60) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
  for (let y = 0; y <= H; y += 60) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

  // Sidebar (left)
  ctx.fillStyle = 'rgba(255,255,255,0.03)'; ctx.fillRect(0, 0, 220, H);
  // Sidebar border
  ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(220,0); ctx.lineTo(220,H); ctx.stroke();

  // Logo in sidebar
  const logoGrad = ctx.createLinearGradient(20, 0, 200, 0);
  logoGrad.addColorStop(0, '#38bdf8'); logoGrad.addColorStop(1, '#818cf8');
  ctx.fillStyle = logoGrad;
  ctx.font = 'bold 18px system-ui, sans-serif';
  ctx.textAlign = 'left'; ctx.fillText('⬡ TechnoSpyre', 20, 48);

  // Sidebar nav items
  const nav = [
    { icon: '⊞', label: 'Dashboard', active: true },
    { icon: '◈', label: 'Analytics', active: false },
    { icon: '⊛', label: 'HMS', active: false },
    { icon: '◉', label: 'ERP Suite', active: false },
    { icon: '⊙', label: 'Cloud', active: false },
    { icon: '◎', label: 'Security', active: false },
    { icon: '⊚', label: 'Reports', active: false },
  ];
  nav.forEach((item, i) => {
    const y = 80 + i * 52;
    if (item.active) {
      const ag = ctx.createLinearGradient(10, 0, 210, 0);
      ag.addColorStop(0, 'rgba(56,189,248,0.2)'); ag.addColorStop(1, 'rgba(129,140,248,0.05)');
      ctx.fillStyle = ag;
      ctx.beginPath();
      ctx.roundRect(10, y, 200, 38, 8);
      ctx.fill();
      ctx.fillStyle = 'rgba(56,189,248,0.8)';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(10, y+4); ctx.lineTo(10, y+34); ctx.stroke();
    }
    ctx.fillStyle = item.active ? '#38bdf8' : 'rgba(255,255,255,0.38)';
    ctx.font = item.active ? 'bold 14px system-ui, sans-serif' : '14px system-ui, sans-serif';
    ctx.fillText(`${item.icon}  ${item.label}`, 24, y + 24);
  });

  // Top bar
  ctx.fillStyle = 'rgba(255,255,255,0.025)'; ctx.fillRect(220, 0, W - 220, 64);
  ctx.strokeStyle = 'rgba(255,255,255,0.05)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(220, 64); ctx.lineTo(W, 64); ctx.stroke();

  ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.font = 'bold 19px system-ui, sans-serif';
  ctx.textAlign = 'left'; ctx.fillText('Enterprise Dashboard', 240, 40);
  ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.font = '13px system-ui, sans-serif';
  ctx.fillText('Last updated: 2 min ago  •  Live', 240, 58);

  // KPI cards row
  const kpis = [
    { label: 'Total Revenue', val: '$5.8M', delta: '+12.4%', color: '#34d399', icon: '💰' },
    { label: 'Active Users', val: '18,240', delta: '+8.1%', color: '#38bdf8', icon: '👥' },
    { label: 'System Uptime', val: '99.9%', delta: 'Stable', color: '#818cf8', icon: '🟢' },
    { label: 'Open Tickets', val: '47', delta: '-5 today', color: '#f59e0b', icon: '🎫' },
  ];
  kpis.forEach((k, i) => {
    const x = 240 + i * 300, y = 84;
    ctx.fillStyle = 'rgba(255,255,255,0.04)';
    ctx.strokeStyle = `${k.color}30`; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.roundRect(x, y, 278, 108, 10); ctx.fill(); ctx.stroke();
    ctx.font = '18px system-ui'; ctx.fillStyle = '#fff'; ctx.textAlign = 'left';
    ctx.fillText(k.icon, x + 14, y + 34);
    ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.font = 'bold 26px system-ui, sans-serif';
    ctx.fillText(k.val, x + 14, y + 70);
    ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.font = '12px system-ui, sans-serif';
    ctx.fillText(k.label, x + 14, y + 90);
    ctx.fillStyle = k.color; ctx.font = 'bold 12px system-ui, sans-serif'; ctx.textAlign = 'right';
    ctx.fillText(k.delta, x + 264, y + 90); ctx.textAlign = 'left';
  });

  // Main chart area
  ctx.fillStyle = 'rgba(255,255,255,0.025)';
  ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.roundRect(240, 210, 720, 310, 12); ctx.fill(); ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.font = 'bold 14px system-ui, sans-serif';
  ctx.fillText('Revenue Analytics', 260, 238);
  ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '11px system-ui, sans-serif';
  ctx.textAlign = 'right'; ctx.fillText('This Year vs Last Year', 952, 238); ctx.textAlign = 'left';

  // Chart x-axis labels
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  months.forEach((m, i) => {
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '10px system-ui, sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(m, 280 + i * 58, 502);
  });
  ctx.textAlign = 'left';

  // Chart lines
  const line1 = [[280,460],[338,400],[396,430],[454,360],[512,390],[570,320],[628,350],[686,290],[744,310],[802,260],[860,280],[918,240]];
  const line2 = [[280,490],[338,450],[396,470],[454,420],[512,440],[570,390],[628,410],[686,370],[744,390],[802,340],[860,360],[918,320]];

  [line2, line1].forEach((pts, pi) => {
    const color = pi === 0 ? '#818cf8' : '#38bdf8';
    const fillColor = pi === 0 ? 'rgba(129,140,248,' : 'rgba(56,189,248,';

    // Fill
    const g = ctx.createLinearGradient(0, 240, 0, 510);
    g.addColorStop(0, `${fillColor}0.25)`); g.addColorStop(1, `${fillColor}0)`);
    ctx.fillStyle = g;
    ctx.beginPath();
    (pts as number[][]).forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
    ctx.lineTo(918, 510); ctx.lineTo(280, 510); ctx.closePath(); ctx.fill();

    // Line
    ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.lineJoin = 'round';
    ctx.beginPath();
    (pts as number[][]).forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
    ctx.stroke();

    // Dots
    (pts as number[][]).forEach(([x, y]) => {
      ctx.fillStyle = color;
      ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#06000f';
      ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI * 2); ctx.fill();
    });
  });

  // Right panel - recent activity
  ctx.fillStyle = 'rgba(255,255,255,0.025)';
  ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.roundRect(976, 84, 444, 436, 12); ctx.fill(); ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.7)'; ctx.font = 'bold 14px system-ui, sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('Recent Activity', 996, 114);

  const activities = [
    { label: 'HMS Patient Sync', time: '2m ago', status: 'Success', sc: '#34d399' },
    { label: 'ERP Payroll Batch', time: '15m ago', status: 'Running', sc: '#f59e0b' },
    { label: 'Cloud Backup #48', time: '1h ago', status: 'Success', sc: '#34d399' },
    { label: 'AI Report Gen', time: '2h ago', status: 'Queued', sc: '#818cf8' },
    { label: 'Security Scan', time: '3h ago', status: 'Success', sc: '#34d399' },
    { label: 'DB Optimization', time: '5h ago', status: 'Success', sc: '#34d399' },
  ];
  activities.forEach((a, i) => {
    const y = 132 + i * 62;
    if (i > 0) {
      ctx.strokeStyle = 'rgba(255,255,255,0.05)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(996, y - 8); ctx.lineTo(1408, y - 8); ctx.stroke();
    }
    // Status dot
    ctx.fillStyle = a.sc; ctx.beginPath(); ctx.arc(1004, y + 14, 5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.8)'; ctx.font = '13px system-ui, sans-serif';
    ctx.fillText(a.label, 1018, y + 18);
    ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '11px system-ui, sans-serif';
    ctx.fillText(a.time, 1018, y + 34);
    ctx.fillStyle = a.sc; ctx.font = 'bold 11px system-ui, sans-serif'; ctx.textAlign = 'right';
    ctx.fillText(a.status, 1408, y + 18); ctx.textAlign = 'left';
  });

  // Bottom row - mini stats
  const miniStats = [
    { label: 'HMS Beds Occupied', val: '84%', color: '#38bdf8' },
    { label: 'ERP Modules Active', val: '12/14', color: '#818cf8' },
    { label: 'Cloud Storage Used', val: '2.1TB', color: '#34d399' },
  ];
  miniStats.forEach((ms, i) => {
    const x = 240 + i * 240, y = 538;
    ctx.fillStyle = 'rgba(255,255,255,0.03)';
    ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.roundRect(x, y, 222, 70, 8); ctx.fill(); ctx.stroke();
    ctx.fillStyle = ms.color; ctx.font = 'bold 22px system-ui, sans-serif'; ctx.textAlign = 'left';
    ctx.fillText(ms.val, x + 14, y + 38);
    ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.font = '11px system-ui, sans-serif';
    ctx.fillText(ms.label, x + 14, y + 56);
  });
}

function drawMobileScreen(canvas: HTMLCanvasElement) {
  const W = 390, H = 844;
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#0b1340'); bg.addColorStop(1, '#07091f');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

  // Status bar
  ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.font = 'bold 14px system-ui, sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('9:41', 22, 34);
  ctx.textAlign = 'right';
  ctx.fillText('', 368, 34); ctx.textAlign = 'left';
  // Battery icon
  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  ctx.fillRect(350, 24, 24, 12); ctx.fillStyle = 'rgba(0,0,0,0.6)'; ctx.fillRect(374, 27, 3, 6);
  ctx.fillStyle = '#34d399'; ctx.fillRect(352, 26, 18, 8);

  // Header
  const hGrad = ctx.createLinearGradient(0, 50, W, 50);
  hGrad.addColorStop(0, '#38bdf8'); hGrad.addColorStop(1, '#818cf8');
  ctx.fillStyle = hGrad;
  ctx.font = 'bold 24px system-ui, sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('HMS Dashboard', 22, 75);
  ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.font = '13px system-ui, sans-serif';
  ctx.fillText('TechnoSpyre Mobile', 22, 96);

  // 3-col KPI strip
  const kpis = [{ v: '482', l: 'Patients', c: '#38bdf8' }, { v: '94%', l: 'Beds', c: '#818cf8' }, { v: '28', l: 'Alerts', c: '#f59e0b' }];
  kpis.forEach((k, i) => {
    const x = 14 + i * 122, y = 112;
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    ctx.strokeStyle = `${k.c}44`; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.roundRect(x, y, 110, 70, 10); ctx.fill(); ctx.stroke();
    ctx.fillStyle = k.c; ctx.font = 'bold 22px system-ui, sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(k.v, x + 55, y + 34);
    ctx.fillStyle = 'rgba(255,255,255,0.45)'; ctx.font = '11px system-ui, sans-serif';
    ctx.fillText(k.l, x + 55, y + 54);
  });
  ctx.textAlign = 'left';

  // Chart
  ctx.fillStyle = 'rgba(255,255,255,0.04)';
  ctx.strokeStyle = 'rgba(129,140,248,0.2)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.roundRect(14, 198, 362, 150, 12); ctx.fill(); ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.font = 'bold 12px system-ui, sans-serif';
  ctx.fillText('Weekly Patient Admissions', 26, 218);

  const sparkPts: [number, number][] = [[14,330],[64,295],[114,315],[164,272],[214,290],[264,252],[314,265],[376,260]];
  ctx.strokeStyle = '#818cf8'; ctx.lineWidth = 2.5; ctx.lineJoin = 'round';
  ctx.beginPath(); sparkPts.forEach(([x,y],i)=>i===0?ctx.moveTo(x,y):ctx.lineTo(x,y)); ctx.stroke();
  const sg = ctx.createLinearGradient(0,252,0,346);
  sg.addColorStop(0,'rgba(129,140,248,0.4)'); sg.addColorStop(1,'rgba(129,140,248,0)');
  ctx.fillStyle=sg; ctx.beginPath();
  sparkPts.forEach(([x,y],i)=>i===0?ctx.moveTo(x,y):ctx.lineTo(x,y));
  ctx.lineTo(376,346); ctx.lineTo(14,346); ctx.closePath(); ctx.fill();

  // Dept bars
  ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.font = 'bold 12px system-ui, sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('Department Occupancy', 14, 372);
  const depts = [['Cardiology',82,'#38bdf8'],['Orthopedics',67,'#818cf8'],['Neurology',91,'#34d399'],['Pediatrics',53,'#f59e0b']];
  depts.forEach(([d,p,c],i) => {
    const y = 384 + (i as number) * 52;
    ctx.fillStyle = 'rgba(255,255,255,0.8)'; ctx.font = '13px system-ui, sans-serif';
    ctx.fillText(d as string, 14, y + 14);
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.beginPath(); ctx.roundRect(14, y+20, 318, 9, 5); ctx.fill();
    ctx.fillStyle = c as string;
    ctx.beginPath(); ctx.roundRect(14, y+20, 318*(p as number)/100, 9, 5); ctx.fill();
    ctx.fillStyle = c as string; ctx.font = 'bold 12px system-ui, sans-serif'; ctx.textAlign = 'right';
    ctx.fillText(`${p}%`, 374, y+30); ctx.textAlign = 'left';
  });

  // Recent alerts
  ctx.fillStyle = 'rgba(255,255,255,0.04)';
  ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.roundRect(14, 600, 362, 180, 12); ctx.fill(); ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.font = 'bold 12px system-ui, sans-serif';
  ctx.fillText('Recent Alerts', 26, 622);
  const alerts = [['Lab results ready','#34d399'],['Bed 4B occupied','#38bdf8'],['Emergency: OR-2','#ef4444']];
  alerts.forEach(([t,c],i) => {
    const y = 636 + (i as number) * 46;
    ctx.fillStyle = c as string; ctx.beginPath(); ctx.arc(26, y+12, 5, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.8)'; ctx.font = '13px system-ui, sans-serif';
    ctx.fillText(t as string, 38, y+16);
  });

  // Bottom nav
  ctx.fillStyle = 'rgba(255,255,255,0.05)'; ctx.fillRect(0, 796, W, 48);
  const tabs = ['⊞ Home','◈ Stats','⊙ Beds','⊚ Profile'];
  tabs.forEach((t,i)=>{
    ctx.fillStyle = i===0?'#38bdf8':'rgba(255,255,255,0.4)';
    ctx.font = i===0?'bold 11px system-ui, sans-serif':'11px system-ui, sans-serif';
    ctx.textAlign='center'; ctx.fillText(t, 48+i*97, 824);
  });
  ctx.textAlign='left';
}

function drawTabletScreen(canvas: HTMLCanvasElement) {
  const W = 1024, H = 1366;
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#07111f'); bg.addColorStop(1, '#0c1e38');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = 'rgba(56,189,248,0.04)'; ctx.lineWidth = 1;
  for (let x = 0; x <= W; x += 50) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
  for (let y = 0; y <= H; y += 50) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

  // Top bar
  ctx.fillStyle = 'rgba(255,255,255,0.03)'; ctx.fillRect(0,0,W,72);
  ctx.strokeStyle='rgba(255,255,255,0.06)'; ctx.lineWidth=1;
  ctx.beginPath(); ctx.moveTo(0,72); ctx.lineTo(W,72); ctx.stroke();
  const lg = ctx.createLinearGradient(20,0,240,0);
  lg.addColorStop(0,'#38bdf8'); lg.addColorStop(1,'#818cf8');
  ctx.fillStyle=lg; ctx.font='bold 22px system-ui, sans-serif'; ctx.textAlign='left';
  ctx.fillText('⬡ TechnoSpyre ERP', 24, 46);
  ctx.fillStyle='rgba(255,255,255,0.35)'; ctx.font='12px system-ui, sans-serif'; ctx.textAlign='right';
  ctx.fillText('Enterprise Resource Planning  •  Live Dashboard', 1000, 46); ctx.textAlign='left';

  // KPIs — 4 across
  const tkpis=[
    {l:'Total Revenue',v:'$5.8M',d:'+12%',c:'#38bdf8',i:'💰'},
    {l:'Active Clients',v:'1,240',d:'+5%',c:'#818cf8',i:'👥'},
    {l:'Projects',v:'86',d:'On Track',c:'#34d399',i:'📁'},
    {l:'Satisfaction',v:'4.9★',d:'Excellent',c:'#f59e0b',i:'⭐'},
  ];
  tkpis.forEach((k,i)=>{
    const x=16+i*252,y=88;
    ctx.fillStyle='rgba(255,255,255,0.04)'; ctx.strokeStyle=`${k.c}30`; ctx.lineWidth=1;
    ctx.beginPath(); ctx.roundRect(x,y,240,110,10); ctx.fill(); ctx.stroke();
    ctx.font='20px system-ui'; ctx.fillText(k.i,x+14,y+38);
    ctx.fillStyle=k.c; ctx.font='bold 28px system-ui, sans-serif'; ctx.fillText(k.v,x+14,y+78);
    ctx.fillStyle='rgba(255,255,255,0.4)'; ctx.font='12px system-ui, sans-serif'; ctx.fillText(k.l,x+14,y+98);
    ctx.fillStyle=k.c; ctx.font='bold 11px system-ui, sans-serif'; ctx.textAlign='right'; ctx.fillText(k.d,x+228,y+98); ctx.textAlign='left';
  });

  // Large area chart
  ctx.fillStyle='rgba(255,255,255,0.025)'; ctx.strokeStyle='rgba(255,255,255,0.06)'; ctx.lineWidth=1;
  ctx.beginPath(); ctx.roundRect(16,216,616,280,12); ctx.fill(); ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,0.7)'; ctx.font='bold 15px system-ui, sans-serif'; ctx.fillText('Sales Performance Q1–Q4',32,244);

  const apts1:number[][]= [[16,460],[90,390],[170,420],[250,350],[330,380],[410,310],[490,340],[570,280],[632,300]];
  const apts2:number[][]= [[16,490],[90,440],[170,465],[250,410],[330,435],[410,375],[490,400],[570,350],[632,370]];
  [apts2,apts1].forEach((pts,pi)=>{
    const c=pi===0?'rgba(129,140,248,':'rgba(56,189,248,';
    const col=pi===0?'#818cf8':'#38bdf8';
    const gg=ctx.createLinearGradient(0,280,0,496);
    gg.addColorStop(0,`${c}0.3)`); gg.addColorStop(1,`${c}0)`);
    ctx.fillStyle=gg; ctx.beginPath();
    pts.forEach(([x,y],i)=>i===0?ctx.moveTo(x,y):ctx.lineTo(x,y));
    ctx.lineTo(632,496); ctx.lineTo(16,496); ctx.closePath(); ctx.fill();
    ctx.strokeStyle=col; ctx.lineWidth=2.5; ctx.lineJoin='round';
    ctx.beginPath(); pts.forEach(([x,y],i)=>i===0?ctx.moveTo(x,y):ctx.lineTo(x,y)); ctx.stroke();
  });

  // Right side: pie + activity
  ctx.fillStyle='rgba(255,255,255,0.025)'; ctx.strokeStyle='rgba(255,255,255,0.06)';
  ctx.beginPath(); ctx.roundRect(648,216,360,280,12); ctx.fill(); ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,0.7)'; ctx.font='bold 15px system-ui, sans-serif'; ctx.fillText('Module Distribution',664,244);
  const pSlices=[['Finance',0.35,'#38bdf8'],['HR',0.25,'#818cf8'],['CRM',0.2,'#34d399'],['Ops',0.2,'#f59e0b']];
  let sa=-Math.PI/2;
  pSlices.forEach(([,frac,c])=>{
    const sw=Math.PI*2*(frac as number);
    ctx.fillStyle=c as string; ctx.beginPath(); ctx.moveTo(828,356); ctx.arc(828,356,90,sa,sa+sw); ctx.closePath(); ctx.fill();
    sa+=sw;
  });
  ctx.fillStyle='#07111f'; ctx.beginPath(); ctx.arc(828,356,46,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='rgba(255,255,255,0.9)'; ctx.font='bold 14px system-ui, sans-serif'; ctx.textAlign='center'; ctx.fillText('ERP',828,352); ctx.fillText('Modules',828,368); ctx.textAlign='left';
  pSlices.forEach(([label,,c],i)=>{
    ctx.fillStyle=c as string; ctx.fillRect(660,462+i*16,10,10);
    ctx.fillStyle='rgba(255,255,255,0.5)'; ctx.font='11px system-ui, sans-serif'; ctx.fillText(label as string,676,472+i*16);
  });

  // Module progress bars (left of cols)
  ctx.fillStyle='rgba(255,255,255,0.025)'; ctx.strokeStyle='rgba(255,255,255,0.06)';
  ctx.beginPath(); ctx.roundRect(16,514,480,390,12); ctx.fill(); ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,0.7)'; ctx.font='bold 15px system-ui, sans-serif'; ctx.fillText('ERP Module Status',32,542);
  const mods=[['Finance','98%','#38bdf8'],['HR & Payroll','92%','#818cf8'],['Inventory','85%','#34d399'],['Procurement','77%','#f59e0b'],['CRM','89%','#38bdf8'],['Logistics','71%','#818cf8']];
  mods.forEach(([m,p,c],i)=>{
    const y=556+i*56;
    ctx.fillStyle='rgba(255,255,255,0.8)'; ctx.font='13px system-ui, sans-serif'; ctx.fillText(m as string,32,y+14);
    ctx.fillStyle='rgba(255,255,255,0.07)'; ctx.beginPath(); ctx.roundRect(32,y+22,400,10,5); ctx.fill();
    ctx.fillStyle=c as string; ctx.beginPath(); ctx.roundRect(32,y+22,400*parseInt(p as string)/100,10,5); ctx.fill();
    ctx.fillStyle=c as string; ctx.font='bold 12px system-ui, sans-serif'; ctx.textAlign='right'; ctx.fillText(p as string,484,y+32); ctx.textAlign='left';
  });

  // Transactions table (right)
  ctx.fillStyle='rgba(255,255,255,0.025)'; ctx.strokeStyle='rgba(255,255,255,0.06)';
  ctx.beginPath(); ctx.roundRect(512,514,496,390,12); ctx.fill(); ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,0.7)'; ctx.font='bold 15px system-ui, sans-serif'; ctx.fillText('Recent Transactions',528,542);

  const txns=[['Vendor PO #4821','$12,400','✓','#34d399'],['Payroll Batch 48','$88,200','✓','#34d399'],['Inventory Restock','$4,680','⏳','#f59e0b'],['Client Invoice #91','$31,000','✓','#34d399'],['Tax Filing Q1','$9,200','⏳','#f59e0b'],['Asset Depreciation','$1,800','✓','#34d399']];
  txns.forEach(([t,v,s,c],i)=>{
    const y=556+i*54;
    if(i>0){ctx.strokeStyle='rgba(255,255,255,0.05)'; ctx.beginPath(); ctx.moveTo(528,y-6); ctx.lineTo(998,y-6); ctx.stroke();}
    ctx.fillStyle=c as string; ctx.beginPath(); ctx.arc(536,y+12,5,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font='13px system-ui, sans-serif'; ctx.fillText(t as string,548,y+16);
    ctx.fillStyle='rgba(255,255,255,0.45)'; ctx.font='11px system-ui, sans-serif'; ctx.fillText('Today',548,y+32);
    ctx.fillStyle=c as string; ctx.font='bold 13px system-ui, sans-serif'; ctx.textAlign='right'; ctx.fillText(v as string,992,y+16);
    ctx.font='12px system-ui, sans-serif'; ctx.fillText(s as string,992,y+32); ctx.textAlign='left';
  });

  // Footer
  ctx.fillStyle='rgba(255,255,255,0.03)'; ctx.fillRect(0,920,W,440);
  ctx.strokeStyle='rgba(255,255,255,0.05)'; ctx.beginPath(); ctx.moveTo(0,920); ctx.lineTo(W,920); ctx.stroke();
  ctx.fillStyle='rgba(56,189,248,0.5)'; ctx.font='bold 14px system-ui, sans-serif'; ctx.textAlign='center';
  ctx.fillText('TechnoSpyre ERP v3.2  ·  Enterprise Edition  ·  AI-Powered Analytics  ·  Live Data', W/2, 960);
  ctx.textAlign='left';
}

/* ═══════════════════════════════════════════════════════════
   CANVAS SCREEN COMPONENT
═══════════════════════════════════════════════════════════ */
const CanvasScreen: React.FC<{ draw: (c: HTMLCanvasElement) => void; className?: string; style?: React.CSSProperties }> = ({ draw, className, style }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => { if (ref.current) draw(ref.current); }, []);
  return <canvas ref={ref} className={className} style={{ display: 'block', width: '100%', height: '100%', ...style }} />;
};

/* ═══════════════════════════════════════════════════════════
   DEVICE MOCKUPS
═══════════════════════════════════════════════════════════ */

// ── LAPTOP ──────────────────────────────────────────────────
const LaptopMockup: React.FC = () => (
  <div className="flex flex-col items-center w-full select-none">
    {/* Screen assembly */}
    <div
      style={{
        width: '100%',
        maxWidth: '680px',
        background: '#1a1a2a',
        borderRadius: '12px 12px 0 0',
        border: '3px solid #2d2d42',
        borderBottom: '2px solid #3a3a52',
        padding: '10px 10px 6px',
        boxShadow: '0 -4px 20px rgba(56,189,248,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
        position: 'relative',
      }}
    >
      {/* Webcam dot */}
      <div style={{ position: 'absolute', top: '5px', left: '50%', transform: 'translateX(-50%)', width: '6px', height: '6px', borderRadius: '50%', background: '#2a2a3a', border: '1px solid #3a3a52' }} />
      {/* Screen */}
      <div style={{ borderRadius: '6px', overflow: 'hidden', aspectRatio: '16/10', border: '1px solid #111' }}>
        <CanvasScreen draw={drawLaptopScreen} style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Screen glare */}
      <div style={{
        position: 'absolute', top: '10px', left: '10px', right: '10px', bottom: '6px',
        borderRadius: '6px', pointerEvents: 'none',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 45%)',
      }} />
    </div>

    {/* Hinge */}
    <div style={{
      width: '100%', maxWidth: '680px', height: '4px',
      background: 'linear-gradient(to bottom, #3a3a52, #252535)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.6)',
    }} />

    {/* Base / Keyboard */}
    <div style={{
      width: '100%', maxWidth: '680px',
      background: 'linear-gradient(to bottom, #22223a, #1a1a2e)',
      borderRadius: '0 0 10px 10px',
      border: '3px solid #2d2d42',
      borderTop: 'none',
      padding: '10px 14px 8px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.5), inset 0 -1px 0 rgba(255,255,255,0.03)',
    }}>
      {/* Keyboard rows */}
      {[14, 12, 12, 11].map((keys, row) => (
        <div key={row} style={{ display: 'flex', gap: '3px', marginBottom: '3px', justifyContent: 'center' }}>
          {Array.from({ length: keys }).map((_, k) => (
            <div key={k} style={{
              flex: 1, height: '10px', maxWidth: row === 0 && k === 0 ? '28px' : row === 3 ? (k === 0 ? '40px' : k === keys-1 ? '40px' : '12px') : '12px',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '2px',
              border: '1px solid rgba(255,255,255,0.04)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.4)',
            }} />
          ))}
        </div>
      ))}
      {/* Trackpad */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
        <div style={{
          width: '28%', height: '20px',
          background: 'rgba(255,255,255,0.04)',
          borderRadius: '3px',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)',
        }} />
      </div>
    </div>

    {/* Shadow */}
    <div style={{
      width: '75%', height: '6px', marginTop: '2px',
      background: 'rgba(0,0,0,0.4)', filter: 'blur(10px)', borderRadius: '50%',
    }} />
  </div>
);

// ── MOBILE ───────────────────────────────────────────────────
const MobileMockup: React.FC = () => (
  <div className="flex justify-center items-center w-full" style={{ padding: '0 24%' }}>
    <div
      style={{
        width: '100%',
        background: 'linear-gradient(145deg, #1c1c2e, #111120)',
        borderRadius: '38px',
        border: '3px solid #2a2a3e',
        padding: '10px',
        boxShadow: '0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 40px rgba(129,140,248,0.15)',
        position: 'relative',
      }}
    >
      {/* Dynamic island */}
      <div style={{
        position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)',
        width: '32%', height: '22px', background: '#000', borderRadius: '12px', zIndex: 10,
      }} />

      {/* Side buttons */}
      <div style={{ position: 'absolute', right: '-5px', top: '22%', width: '3px', height: '16px', background: '#2a2a3e', borderRadius: '2px' }} />
      <div style={{ position: 'absolute', left: '-5px', top: '20%', width: '3px', height: '10px', background: '#2a2a3e', borderRadius: '2px' }} />
      <div style={{ position: 'absolute', left: '-5px', top: '28%', width: '3px', height: '18px', background: '#2a2a3e', borderRadius: '2px' }} />
      <div style={{ position: 'absolute', left: '-5px', top: '37%', width: '3px', height: '18px', background: '#2a2a3e', borderRadius: '2px' }} />

      {/* Screen */}
      <div style={{
        borderRadius: '29px', overflow: 'hidden', aspectRatio: '390/844',
        border: '1px solid #111', position: 'relative',
      }}>
        <CanvasScreen draw={drawMobileScreen} style={{ width: '100%', height: '100%' }} />
        {/* Glare */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '29px', pointerEvents: 'none',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 40%)',
        }} />
      </div>

      {/* Home indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>
        <div style={{ width: '32%', height: '4px', background: 'rgba(255,255,255,0.25)', borderRadius: '4px' }} />
      </div>
    </div>
    {/* Shadow */}
    <div style={{
      position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)',
      width: '30%', height: '8px', background: 'rgba(0,0,0,0.35)', filter: 'blur(12px)',
    }} />
  </div>
);

// ── TABLET ────────────────────────────────────────────────────
const TabletMockup: React.FC = () => (
  <div className="flex justify-center items-center w-full" style={{ padding: '0 10%' }}>
    <div
      style={{
        width: '100%',
        background: 'linear-gradient(145deg, #1c1c2e, #111120)',
        borderRadius: '24px',
        border: '4px solid #2a2a3e',
        padding: '10px',
        boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.07), 0 0 40px rgba(52,211,153,0.12)',
        position: 'relative',
      }}
    >
      {/* Camera */}
      <div style={{
        position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)',
        width: '8px', height: '8px', background: '#0a0a15', borderRadius: '50%',
        border: '1px solid #2a2a3e', zIndex: 10,
      }} />

      {/* Side button */}
      <div style={{ position: 'absolute', right: '-5px', top: '18%', width: '3px', height: '22px', background: '#2a2a3e', borderRadius: '2px' }} />
      <div style={{ position: 'absolute', left: '-5px', top: '20%', width: '3px', height: '14px', background: '#2a2a3e', borderRadius: '2px' }} />
      <div style={{ position: 'absolute', left: '-5px', top: '27%', width: '3px', height: '22px', background: '#2a2a3e', borderRadius: '2px' }} />

      {/* Screen */}
      <div style={{
        borderRadius: '16px', overflow: 'hidden', aspectRatio: '1024/1366',
        border: '1px solid #111', position: 'relative',
      }}>
        <CanvasScreen draw={drawTabletScreen} style={{ width: '100%', height: '100%' }} />
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '16px', pointerEvents: 'none',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 40%)',
        }} />
      </div>

      {/* Home bar */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '7px' }}>
        <div style={{ width: '22%', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }} />
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════
   MAIN SLIDER COMPONENT
═══════════════════════════════════════════════════════════ */

const DEVICES = [
  { id: 'laptop', label: 'Laptop', subtitle: 'Enterprise Dashboard', component: LaptopMockup },
  { id: 'mobile', label: 'Mobile', subtitle: 'HMS Mobile App', component: MobileMockup },
  { id: 'tablet', label: 'Tablet', subtitle: 'ERP Analytics', component: TabletMockup },
];

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60, scale: 0.96, filter: 'blur(4px)' }),
  center: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60, scale: 0.96, filter: 'blur(4px)', transition: { duration: 0.35 } }),
};

export const DeviceMockupShowcase: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const goTo = useCallback((idx: number) => {
    setDir(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    const n = (current + 1) % DEVICES.length;
    setDir(1); setCurrent(n);
  }, [current]);

  // Auto-advance every 5s
  useEffect(() => {
    const id = setTimeout(next, 5000);
    return () => clearTimeout(id);
  }, [current, next]);

  const Device = DEVICES[current].component;

  return (
    <div className="w-full flex flex-col items-center gap-5" style={{ userSelect: 'none' }}>

      {/* Tabs / labels */}
      <div className="flex items-center gap-2 p-1 rounded-sm" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
        {DEVICES.map((d, i) => (
          <button
            key={d.id}
            onClick={() => goTo(i)}
            className="relative px-4 py-1.5 rounded-sm text-sm font-semibold transition-all duration-300 outline-none"
            style={{
              color: i === current ? '#fff' : 'rgba(255,255,255,0.45)',
              background: i === current ? 'var(--gradient-primary, linear-gradient(135deg,#0d1b8f,#0066ff,#00cfff))' : 'transparent',
              boxShadow: i === current ? '0 4px 16px rgba(56,189,248,0.25)' : 'none',
            }}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Device display area */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${
            current === 0 ? 'rgba(56,189,248,0.12)' :
            current === 1 ? 'rgba(129,140,248,0.12)' : 'rgba(52,211,153,0.1)'
          }, transparent 70%)`,
          transition: 'background 0.6s ease',
        }} />

        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
            style={{ padding: current === 0 ? '0 4px 0 4px' : '0' }}
          >
            <Device />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtitle */}
      <motion.p
        key={`sub-${current}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="text-xs font-medium tracking-wide"
        style={{ color: 'rgba(255,255,255,0.4)' }}
      >
        {DEVICES[current].subtitle}
      </motion.p>

      {/* Dot indicators */}
      <div className="flex items-center gap-2">
        {DEVICES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-sm transition-all duration-300 outline-none"
            style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              background: i === current ? 'var(--gradient-primary, linear-gradient(90deg,#38bdf8,#818cf8))' : 'rgba(255,255,255,0.2)',
            }}
          />
        ))}
      </div>

    </div>
  );
};
