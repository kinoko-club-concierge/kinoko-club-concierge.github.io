const API='https://cola-dispatch.marswave-543.workers.dev/app-b619b1/api';
const LOGO='https://raw.githubusercontent.com/kinoko-club-concierge/flowchart/gh-pages/logo.png';
const D={
ja:{lang:'ja',title:'精算入力',tour:'団番号',dates:'期間',start:'開始日',end:'終了日',guide:'ガイド',gname:'ガイド氏名',gmail:'ガイドのメール',phone:'電話番号',staff:'担当者',staffMail:'担当者メール',
tabHours:'勤務時間',tabExp:'立替',tabSubmit:'提出',from:'開始',to:'終了',brk:'休憩（分）',note:'メモ',save:'保存',clear:'クリア',work:'勤務時間',totalWork:'勤務時間 合計',totalExp:'立替 合計',
date:'日付',cat:'区分',desc:'内容',amount:'金額（円）',photo:'領収書の写真',addPhoto:'写真を追加',addExp:'＋ 立替を追加',cancel:'キャンセル',del:'削除',
c_transport:'交通費',c_parking:'駐車場・高速',c_meal:'食事',c_ticket:'入場料・体験',c_hotel:'宿泊',c_other:'その他',
bank:'振込先口座',bankPh:'銀行名・支店名・口座種別・口座番号・名義',inv:'適格請求書発行事業者番号（任意）',invPh:'T1234567890123',
submit:'提出する',submitted:'提出済みです。内容の修正が必要な場合は担当者へご連絡ください。',returned:'担当者から差戻しがありました',
saved:'保存しました',deleted:'削除しました',ck_days:'勤務日を1日以上入力',ck_time:'すべての勤務日に開始・終了時間',ck_rcpt:'すべての立替に領収書の写真',ck_name:'ガイド氏名',
confirmSubmit:'提出しますか？提出後は編集できません。',confirmDel:'削除しますか？',confirmClear:'この日の入力を消去しますか？',
needStaff:'担当者から届いたリンクからお開きください。',startNew:'精算を始める',startNote:'団番号と期間を入力すると、入力ページのリンクがメールにも届きます。',
sentMail:'このツアーは登録済みです。入力ページのリンクをメールでお送りしました。メールのリンクから続けてください。',noToken:'リンクが無効です。担当者のリンクからやり直してください。',
rangeErr:'終了日は開始日以降にしてください',loading:'読み込み中…',reload:'更新',workCalc:'勤務時間',takePhoto:'撮影する',pickFile:'写真・PDFを選択',selFiles:'選択中',ck_phone:'電話番号',ck_bank:'振込先口座',ck_mail:'ガイドのメール',ck_range:'開始日・終了日',reqMiss:'未入力の必須項目があります',
// staff page
sTitle:'ガイド精算リンク生成（社内用）',sName:'担当者氏名',sMail:'担当者メール',sGen:'リンクを生成',sSend:'以下のリンクをガイドへお送りください：',sCopy:'リンクをコピー',sCopied:'コピーしました',sNeed:'氏名とメールを入力してください',
// view/admin
vTitle:'精算内容の確認',dlXlsx:'Excelをダウンロード',dlZip:'原本をダウンロード（ZIP）',ret:'差戻し',retNote:'差戻しの理由（ガイドに通知されます）',retDo:'差戻しを送る',confirmRet:'差戻しますか？ガイドに再入力のメールが届きます。',
st_draft:'入力中',st_submitted:'提出済み',bankL:'振込先',invL:'適格請求書番号',
aLogin:'管理者ログイン',aWho:'管理者',aPw:'パスワード',aGo:'ログイン',aTours:'精算一覧',search:'団番号・ガイド名で検索',allStaff:'すべての担当',allSt:'すべての状態',from_:'開始日（から）',to_:'開始日（まで）',selAll:'全選択',
selected:'選択中',none:'該当なし',dlSel:'選択をExcelに',dlSelZip:'選択の原本ZIP',dlAll:'表示中をExcelに',rowDel:'このデータを削除',confirmRowDel:'この精算データを完全に削除しますか？元に戻せません。',logout:'ログアウト',busy:'処理中…',
x_sum:'概要',x_hours:'勤務時間',x_exp:'立替',x_rcpt:'領収書ファイル',x_min:'分',x_status:'状態',x_sub:'提出日時',x_hm:'勤務時間(h:mm)',x_total:'合計',
wd:['日','月','火','水','木','金','土'],
},
en:{lang:'en',title:'Expense entry',tour:'Tour code',dates:'Dates',start:'Start date',end:'End date',guide:'Guide',gname:'Guide name',gmail:'Guide email',phone:'Phone',staff:'Staff in charge',staffMail:'Staff email',
tabHours:'Hours',tabExp:'Expenses',tabSubmit:'Submit',from:'Start',to:'End',brk:'Break (min)',note:'Note',save:'Save',clear:'Clear',work:'Worked',totalWork:'Total hours',totalExp:'Total expenses',
date:'Date',cat:'Category',desc:'Description',amount:'Amount (JPY)',photo:'Receipt photo',addPhoto:'Add photo',addExp:'+ Add expense',cancel:'Cancel',del:'Delete',
c_transport:'Transport',c_parking:'Parking / Toll',c_meal:'Meals',c_ticket:'Admission / Activity',c_hotel:'Lodging',c_other:'Other',
bank:'Bank account',bankPh:'Bank, branch, account type, number, holder name',inv:'Qualified invoice issuer no. (optional)',invPh:'T1234567890123',
submit:'Submit',submitted:'Submitted. Please contact your staff in charge if you need to change anything.',returned:'Returned by staff',
saved:'Saved',deleted:'Deleted',ck_days:'At least one working day',ck_time:'Start and end time on every working day',ck_rcpt:'A receipt photo on every expense',ck_name:'Guide name',
confirmSubmit:'Submit now? You cannot edit after submitting.',confirmDel:'Delete this?',confirmClear:'Clear this day?',
needStaff:'Please open the link sent by your staff in charge.',startNew:'Start',startNote:'Enter the tour code and dates. We will also email you a link to continue.',
sentMail:'This tour is already registered. We emailed you the entry link; please continue from the email.',noToken:'This link is not valid. Please start again from your staff link.',
rangeErr:'End date must be on or after start date',loading:'Loading…',reload:'Refresh',workCalc:'Worked',takePhoto:'Take photo',pickFile:'Choose photo or PDF',selFiles:'selected',ck_phone:'Phone number',ck_bank:'Bank account',ck_mail:'Guide email',ck_range:'Start and end dates',reqMiss:'Some required fields are empty',
sTitle:'Guide settlement link (internal)',sName:'Staff name',sMail:'Staff email',sGen:'Generate link',sSend:'Send this link to the guide:',sCopy:'Copy link',sCopied:'Copied',sNeed:'Enter name and email',
vTitle:'Settlement details',dlXlsx:'Download Excel',dlZip:'Download originals (ZIP)',ret:'Return',retNote:'Reason for return (sent to the guide)',retDo:'Send return',confirmRet:'Return to the guide? They will get an email to edit again.',
st_draft:'In progress',st_submitted:'Submitted',bankL:'Bank account',invL:'Invoice no.',
aLogin:'Admin login',aWho:'Admin',aPw:'Password',aGo:'Log in',aTours:'Settlements',search:'Search tour code / guide',allStaff:'All staff',allSt:'All statuses',from_:'Start date from',to_:'Start date to',selAll:'Select all',
selected:'selected',none:'No results',dlSel:'Excel of selected',dlSelZip:'ZIP of selected',dlAll:'Excel of shown',rowDel:'Delete this record',confirmRowDel:'Permanently delete this settlement? This cannot be undone.',logout:'Log out',busy:'Working…',
x_sum:'Summary',x_hours:'Hours',x_exp:'Expenses',x_rcpt:'Receipt files',x_min:'min',x_status:'Status',x_sub:'Submitted at',x_hm:'Hours (h:mm)',x_total:'Total',
wd:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
}};
let L=(new URLSearchParams(location.search).get('l'))||localStorage.getItem('gs-lang')||((navigator.language||'').startsWith('ja')?'ja':(navigator.language||'').startsWith('en')?'en':'ja');
if(!D[L])L='ja';
const T=k=>D[L][k]??k;
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const yen=n=>'¥'+Number(n||0).toLocaleString('en-US');
const hm=m=>m==null?'':Math.floor(m/60)+':'+String(m%60).padStart(2,'0');
const hmT=m=>m==null?'':(L==='ja'?`${Math.floor(m/60)}時間${m%60}分`:`${Math.floor(m/60)}h ${m%60}m`);
const wdOf=d=>new Date(d+'T00:00:00Z').getUTCDay();
const dayLabel=d=>d.slice(5).replace('-','/')+'（'+T('wd')[wdOf(d)]+'）';
function eachDay(a,b){const o=[];for(let t=Date.parse(a+'T00:00:00Z');t<=Date.parse(b+'T00:00:00Z');t+=864e5)o.push(new Date(t).toISOString().slice(0,10));return o}
function mountBar(extra=''){
 document.documentElement.lang=L;
 const bar=document.createElement('div');bar.className='bar';
 bar.innerHTML=`<img src="${LOGO}" alt=""><span class="sp"></span>${extra}<span class="lang"><button data-l="ja">日本語</button><button data-l="en">English</button></span>`;
 document.body.prepend(bar);
 const mark=()=>bar.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===L));mark();
 bar.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{L=b.dataset.l;localStorage.setItem('gs-lang',L);const u=new URL(location.href);u.searchParams.delete('l');history.replaceState(null,'',u);mark();if(window.rerender)window.rerender()});
 const t=document.createElement('div');t.className='toast';t.id='toast';document.body.append(t);
 const lb=document.createElement('div');lb.className='lb';lb.id='lb';lb.onclick=()=>lb.style.display='none';document.body.append(lb);
}
function toast(m,err){const t=$('#toast');t.textContent=m;t.className='toast'+(err?' err':'');t.style.display='block';clearTimeout(toast.h);toast.h=setTimeout(()=>t.style.display='none',2600)}
function lightbox(src){const lb=$('#lb');lb.innerHTML=`<img src="${src}">`;lb.style.display='flex'}
async function api(path,{method='GET',body,token,form,raw}={}){
 const h={};if(token)h.Authorization='Bearer '+token;
 let b;if(form){b=form}else if(body!==undefined){h['Content-Type']='application/json';b=JSON.stringify(body)}
 let r;try{r=await fetch(API+path,{method,headers:h,body:b})}catch(e){throw new Error(L==='ja'?'通信エラーです。電波の良い場所でもう一度お試しください。':'Network error. Please try again.')}
 if(raw){if(!r.ok)throw new Error('HTTP '+r.status);return r}
 let j;try{j=await r.json()}catch{throw new Error('HTTP '+r.status)}
 if(!r.ok||j.ok===false){const e=new Error(j.error||('HTTP '+r.status));e.status=r.status;throw e}
 return j;
}
const blobUrls={};
async function fileUrl(id,token){if(blobUrls[id])return blobUrls[id];const r=await api('/g/file/'+id,{token,raw:true});const u=URL.createObjectURL(await r.blob());blobUrls[id]=u;return u}
async function hydrate(root,token){
 for(const el of root.querySelectorAll('[data-fid]:not([data-done])')){
  el.dataset.done=1;const id=el.dataset.fid;
  fileUrl(id,token).then(u=>{if(el.dataset.ct==='application/pdf'){el.onclick=()=>window.open(u)}else{el.innerHTML=`<img src="${u}">`;el.querySelector('img').onclick=ev=>{ev.stopPropagation();lightbox(u)}}if(el.dataset.x)el.insertAdjacentHTML('beforeend',`<button class="x" data-del="${id}">×</button>`)}).catch(()=>{});
 }
}
const thumb=(f,del)=>`<span class="th${f.ct==='application/pdf'?' pdf':''}" data-fid="${f.id}" data-ct="${f.ct}" ${del?'data-x="1"':''}>${f.ct==='application/pdf'?'PDF':''}</span>`;
function catName(c){const m={transport:'c_transport',parking:'c_parking',meal:'c_meal',ticket:'c_ticket',hotel:'c_hotel',other:'c_other'};return m[c]?T(m[c]):c}
async function compress(file){
 if(!/^image\/(jpeg|png|webp)$/.test(file.type)||file.size<400*1024)return file;
 try{const bm=await createImageBitmap(file);const s=Math.min(1,2200/Math.max(bm.width,bm.height));const c=document.createElement('canvas');c.width=Math.round(bm.width*s);c.height=Math.round(bm.height*s);c.getContext('2d').drawImage(bm,0,0,c.width,c.height);
  const b=await new Promise(r=>c.toBlob(r,'image/jpeg',.86));if(b&&b.size<file.size)return new File([b],file.name.replace(/\.\w+$/,'')+'.jpg',{type:'image/jpeg'})}catch{}
 return file;
}
// ---------- detail renderer ----------
function renderDetail(d){
 const s=d.sub;
 const kv=(k,v)=>`<b>${k}</b><span>${v||'—'}</span>`;
 return `<div class="cd"><h2>${esc(s.tour_code)} <span class="badge ${s.status==='submitted'?'s':''}">${T('st_'+s.status)}</span></h2><div class="kv">
 ${kv(T('dates'),esc(s.start_date)+' 〜 '+esc(s.end_date))}${kv(T('guide'),esc(s.guide_name))}${kv(T('gmail'),esc(s.guide_email))}${kv(T('phone'),esc(s.guide_phone))}
 ${kv(T('staff'),esc(s.staff_name)+'（'+esc(s.staff_email)+'）')}${kv(T('bankL'),esc(s.bank).replace(/\n/g,'<br>'))}${kv(T('invL'),esc(s.invoice_no))}${kv(T('x_sub'),s.submitted_at?esc(new Date(s.submitted_at).toLocaleString(L==='ja'?'ja-JP':'en-GB')):'')}</div></div>
 <div class="cd"><h3>${T('tabHours')}</h3>${d.days.length?`<div class="tw"><table class="t"><tr><th>${T('date')}</th><th>${T('from')}</th><th>${T('to')}</th><th>${T('workCalc')}</th><th>${T('note')}</th></tr>${d.days.map(x=>`<tr><td>${dayLabel(x.date)}</td><td>${x.startTime||''}</td><td>${x.endTime||''}</td><td>${hmT(x.minutes)}</td><td>${esc(x.note)}</td></tr>`).join('')}</table></div>`:`<div class="empty">—</div>`}
 <div class="tot"><span>${T('totalWork')}</span><span>${hmT(d.totalMinutes)}</span></div></div>
 <div class="cd"><h3>${T('tabExp')}</h3>${d.expenses.length?d.expenses.map(e=>`<div class="ex"><div class="l1"><span>${dayLabel(e.date)} ${esc(catName(e.category))}</span><span>${yen(e.amount)}</span></div><div class="l2">${esc(e.description)} ${esc(e.note)}</div>${e.files.map(f=>thumb(f)).join('')}</div>`).join(''):`<div class="empty">—</div>`}
 <div class="tot"><span>${T('totalExp')}</span><span>${yen(d.totalExpense)}</span></div></div>`;
}
// ---------- exports ----------
function loadScript(src){return new Promise((ok,ng)=>{if(document.querySelector(`script[src="${src}"]`))return ok();const s=document.createElement('script');s.src=src;s.onload=ok;s.onerror=()=>ng(new Error('load '+src));document.head.append(s)})}
const safe=s=>String(s||'').replace(/[\\/:*?"<>|\x00-\x1f]/g,'_').trim().slice(0,60)||'_';
const cell=v=>typeof v==='string'&&/^[=+\-@]/.test(v)?"'"+v:v;
async function exportXlsx(list,name){
 await loadScript('https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js');
 const S=[],H=[],E=[];
 S.push([T('tour'),T('start'),T('end'),T('gname'),T('gmail'),T('phone'),T('staff'),T('staffMail'),T('x_hm'),T('x_min'),T('totalExp'),T('bankL'),T('invL'),T('x_status'),T('x_sub')]);
 H.push([T('tour'),T('gname'),T('date'),T('from'),T('to'),T('x_hm'),T('x_min'),T('note')]);
 E.push([T('tour'),T('gname'),T('date'),T('cat'),T('desc'),T('amount'),T('note'),T('x_rcpt')]);
 for(const d of list){const s=d.sub;
  S.push([s.tour_code,s.start_date,s.end_date,s.guide_name,s.guide_email,s.guide_phone,s.staff_name,s.staff_email,hm(d.totalMinutes),d.totalMinutes,d.totalExpense,s.bank,s.invoice_no,T('st_'+s.status),s.submitted_at?new Date(s.submitted_at).toLocaleString(L==='ja'?'ja-JP':'en-GB'):''].map(cell));
  for(const x of d.days)H.push([s.tour_code,s.guide_name,x.date,x.startTime||'',x.endTime||'',hm(x.minutes),x.minutes,x.note].map(cell));
  for(const e of d.expenses)E.push([s.tour_code,s.guide_name,e.date,catName(e.category),e.description,e.amount,e.note,e.files.map(f=>f.name).join(' / ')].map(cell));
 }
 if(list.length>1){S.push([]);S.push([T('x_total'),'','','','','','','',hm(list.reduce((a,d)=>a+d.totalMinutes,0)),list.reduce((a,d)=>a+d.totalMinutes,0),list.reduce((a,d)=>a+d.totalExpense,0)])}
 const wb=XLSX.utils.book_new();
 for(const [n,rows,w] of [[T('x_sum'),S,[14,12,12,16,24,14,14,24,12,10,12,30,16,10,18]],[T('x_hours'),H,[14,16,12,8,8,12,10,30]],[T('x_exp'),E,[14,16,12,14,26,12,24,30]]]){const ws=XLSX.utils.aoa_to_sheet(rows);ws['!cols']=w.map(x=>({wch:x}));XLSX.utils.book_append_sheet(wb,ws,n)}
 XLSX.writeFile(wb,name+'.xlsx');
}
async function exportZip(list,name,tokenFor){
 await loadScript('https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js');
 const z=new JSZip();let n=0;
 for(const d of list){const s=d.sub;
  for(const e of d.expenses){let i=0;for(const f of e.files){i++;
   const ext=f.ct==='application/pdf'?'pdf':f.ct==='image/png'?'png':f.ct==='image/webp'?'webp':f.ct==='image/heic'?'heic':'jpg';
   const r=await api('/g/file/'+f.id,{token:tokenFor(d),raw:true});
   z.file(`${safe(s.tour_code)}/${safe(s.guide_name)}/${safe(e.date+'_'+catName(e.category)+'_'+e.amount+'円_'+String(i).padStart(2,'0'))}.${ext}`,await r.blob());n++;
  }}}
 if(!n)throw new Error(L==='ja'?'原本ファイルがありません':'No original files');
 const b=await z.generateAsync({type:'blob',compression:'STORE'});
 const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name+'.zip';a.click();
}
