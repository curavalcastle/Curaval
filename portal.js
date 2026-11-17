(()=>{
const L=localStorage.getItem('curaval-lang')||'ar',D=localStorage.getItem('curaval-theme')==='dark',P=document.body.dataset.page,R=document.querySelector('#portal-root'),N=Number(new URLSearchParams(location.search).get('branch'))||1,LOGO='logo-transparent.png';
const X={ar:{home:'الرئيسية',branches:'فروعنا',join:'انضم إلينا',available:'متاح حالياً',soon:'قريباً / Coming Soon',baraka:'فرع البركة',future:'ترقب الفرع القادم من كيورافال كاسل',branchHero:'فروعنا أقرب إليك',branchText:'شبكة كيورافال كاسل تتوسع لتكون خدمات الدواء والإمداد أقرب إلى كل منشأة.',address:'2 شارع الشيشيني، متفرع من طريق المريوطية، منطقة فيصل، الجيزة',joinTitle:'انضم إلى منظومة كيورافال كاسل',joinText:'اختر صفتك وأرسل بياناتك ليصل طلبك إلى الفريق المختص.',w:'كـــــمخزن دواء أو شركة توزيع',s:'كـــــمورد',e:'كـــــموظف',send:'إرسال الطلب',ok:'تم إرسال طلبك بنجاح. شكرًا لانضمامك إلى كيورافال كاسل.',fail:'تعذّر إرسال الطلب حاليًا. تأكد من تعيين مفتاح Web3Forms الصحيح ثم حاول مرة أخرى.'},en:{home:'Home',branches:'Our Branches',join:'Join Us',available:'Available now',soon:'Coming Soon',baraka:'El Baraka Branch',future:'Look forward to the next Curaval Castle branch',branchHero:'Our branches are closer to you',branchText:'Curaval Castle’s network is expanding to bring pharmaceutical supply closer to every facility.',address:'2 El Shesheiny St., off Maryouteya Rd., Faisal, Giza',joinTitle:'Join the Curaval Castle Network',joinText:'Choose your role and send your details to our specialized team.',w:'As a pharmacy warehouse or distribution company',s:'As a supplier',e:'As an employee',send:'Send request',ok:'Your request was sent successfully. Thank you for joining Curaval Castle.',fail:'Unable to send right now. Set the correct Web3Forms key and try again.'}}[L];
document.documentElement.lang=L;document.documentElement.dir=L==='ar'?'rtl':'ltr';if(D)document.body.classList.add('dark');const top=`<header class="portal-topbar"><a class="return-home" href="index.html"><img src="${LOGO}" alt="Curaval Castle"><span>${X.home}</span></a><div class="portal-tools"><button class="portal-lang">${L==='ar'?'EN':'ع'}</button><button class="portal-theme"><i data-lucide="moon"></i></button></div></header>`,foot=`<footer><img class="footer-logo" src="${LOGO}" alt="Curaval Castle"><span>Curaval Castle © 2026</span></footer>`;
const field=(label,name,type='text',wide=false)=>`<label class="field ${wide?'wide':''}">${label}${type==='textarea'?`<textarea name="${name}"></textarea>`:`<input ${type==='file'?'':'required'} name="${name}" type="${type}">`}</label>`;
function buildBranches(){if(P==='branches'){let cards=Array.from({length:50},(_,i)=>i?`<a class="branch-card" href="branch.html?branch=${i+1}"><div class="soon-logo"><img src="${LOGO}"></div><h2>${L==='ar'?`الفرع ${i+1}`:`Branch ${i+1}`}</h2><span class="soon">${X.soon}</span></a>`:`<a class="branch-card available" href="branch.html?branch=1"><img src="Logos/elbaraka%20logo.jpg"><h2>${X.baraka}</h2><small>${X.available}</small></a>`).join('');R.innerHTML=top+`<section class="hero-mini"><div><p class="eyebrow">${X.branches}</p><h1>${X.branchHero}</h1><p>${X.branchText}</p></div></section><section class="page-section"><div class="branches-grid">${cards}</div></section>`+foot;return}let one=N===1;R.innerHTML=top+`<section class="hero-mini"><div><p class="eyebrow">${X.branches}</p><h1>${one?X.baraka:(L==='ar'?`الفرع ${N}`:`Branch ${N}`)}</h1></div></section><section class="page-section"><article class="profile-card">${one?`<img src="Logos/elbaraka%20logo.jpg"><h2>${X.baraka}</h2><div class="detail-list"><div><i data-lucide="map-pin"></i><span>${X.address}</span></div><div><i data-lucide="phone"></i><a href="tel:01127016403" dir="ltr">01127016403</a></div></div>`:`<img src="${LOGO}"><h2>${L==='ar'?`الفرع ${N}`:`Branch ${N}`}</h2><p class="soon">${X.soon}</p><p>${X.future}</p>`}</article></section>`+foot}
function buildJoin(){let forms=[['w',X.w,'طلب انضمام جديد: مخزن دواء / شركة توزيع',[['اسم المخزن أو الشركة','facility'],['اسم المسؤول','manager'],['رقم التليفون / واتساب','phone','tel'],['المحافظة والمنطقة','area'],['السجل التجاري / رقم الترخيص','license'],['تفاصيل إضافية','notes','textarea',true]]],['s',X.s,'طلب شراكة وتوريد: مورد جديد',[['اسم الشركة أو المصنع','company'],['اسم مسؤول التوريد','contact'],['رقم الهاتف','phone','tel'],['البريد الإلكتروني','email','email'],['نوع المنتجات / الأدوية المتاح توريدها','products','textarea',true],['ملف أو عرض أسعار','attachment','file',true]]],['e',X.e,'طلب توظيف جديد: انضمام لفريق العمل',[['الاسم بالكامل','name'],['رقم الهاتف','phone','tel'],['المؤهل والوظيفة المطلوبة','role'],['المحافظة','governorate'],['رابط السيرة الذاتية (CV)','cv_link','url',true],['إرفاق السيرة الذاتية','attachment','file',true]]]];R.innerHTML=top+`<section class="join-shell"><header class="join-heading"><p class="eyebrow">${X.join}</p><h1>${X.joinTitle}</h1><p>${X.joinText}</p></header><div class="choice-tabs">${forms.map((f,i)=>`<button class="choice-tab ${i?'':'active'}" data-tab="${f[0]}"><i data-lucide="${['warehouse','package-check','briefcase-business'][i]}"></i>${f[1]}</button>`).join('')}</div>${forms.map((f,i)=>`<form class="form-panel web3-form ${i?'':'active'}" id="${f[0]}" data-subject="${f[2]}"><h2>${f[1]}</h2><div class="form-grid">${f[3].map(a=>field(...a)).join('')}</div><button class="button submit" type="submit"><i data-lucide="send"></i>${X.send}</button><p class="form-status"></p></form>`).join('')}</section>`+foot;document.querySelectorAll('.choice-tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.choice-tab,.form-panel').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelector('#'+b.dataset.tab).classList.add('active')});document.querySelectorAll('.web3-form').forEach(f=>f.onsubmit=async e=>{e.preventDefault();if(!f.reportValidity())return;let s=f.querySelector('.form-status'),data=new FormData(f);data.append('access_key','YOUR_ACCESS_KEY_HERE');data.append('subject',f.dataset.subject);try{let r=await fetch('https://api.web3forms.com/submit',{method:'POST',body:data}),j=await r.json();if(!j.success)throw 0;f.reset();s.className='form-status success';s.textContent=X.ok}catch{s.className='form-status error';s.textContent=X.fail}})}
P==='join'?buildJoin():buildBranches();if(L==='en'&&P==='join'){const labels={facility:'Warehouse or Company Name',manager:'Responsible Person',phone:'Phone / WhatsApp',area:'Governorate and Area',license:'Commercial Register / License',notes:'Additional Details',company:'Company or Factory Name',contact:'Supply Contact Person',email:'Email Address',products:'Available Products / Medicines',attachment:'Attachment / Price List',name:'Full Name',role:'Qualification and Requested Role',governorate:'Governorate',cv_link:'CV Link'};document.querySelectorAll('.field').forEach(label=>{const input=label.querySelector('input,textarea'),text=labels[input?.name];if(text)label.childNodes[0].textContent=text})}document.querySelector('.portal-lang').onclick=()=>{localStorage.setItem('curaval-lang',L==='ar'?'en':'ar');location.reload()};document.querySelector('.portal-theme').onclick=()=>{localStorage.setItem('curaval-theme',document.body.classList.contains('dark')?'light':'dark');location.reload()};lucide.createIcons();
if(P==='join'){
const form=document.querySelector('#w');
const fields=L==='ar'
?[['اسم المخزن / الشركة','entry.905618293','text'],['اسم المسؤول','entry.1414648703','text'],['المحافظة','entry.1344373371','text'],['العنوان بالتفصيل','entry.1878879269','text'],['موبايل 1','entry.412261379','tel'],['موبايل 2','entry.1368971450','tel']]
:[['Warehouse / Company Name','entry.905618293','text'],['Contact Person / Manager Name','entry.1414648703','text'],['Governorate','entry.1344373371','text'],['Detailed Address','entry.1878879269','text'],['Mobile 1','entry.412261379','tel'],['Mobile 2','entry.1368971450','tel']];
form.querySelector('.form-grid').innerHTML=fields.map(([label,name,type],index)=>`<label class="field ${index===5?'wide':''}">${label}<input required name="${name}" type="${type}" placeholder="${label}"></label>`).join('');
form.onsubmit=async event=>{
event.preventDefault();
if(!form.reportValidity())return;
const status=form.querySelector('.form-status'),button=form.querySelector('button[type="submit"]'),buttonText=button.lastChild,originalText=buttonText.textContent;
button.disabled=true;
buttonText.textContent=L==='ar'?'جاري الإرسال...':'Sending...';
try{
await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdVIHcCKlGoQ3qpZZYNNjPKJ0DyT-B7SAVHf87892DLYclzIw/formResponse',{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form))});
form.reset();
status.className='form-status success';
status.textContent=L==='ar'?'تم تسجيل بياناتكم بنجاح، سيتواصل معكم فريقنا قريباً':'Your details have been submitted successfully. Our team will contact you soon.';
}catch(error){
status.className='form-status error';
status.textContent=L==='ar'?'تعذر إرسال البيانات حالياً. يرجى المحاولة مرة أخرى.':'Unable to submit your details right now. Please try again.';
}finally{
buttonText.textContent=originalText;
button.disabled=false;
}
};
}
if(P==='join'){
const form=document.querySelector('#s');
const fields=L==='ar'
?[['الشركة المنتجة','entry.905618293','text'],['اسم المسؤول','entry.1414648703','text'],['نوع المورد','entry.1344373371','select'],['العنوان بالتفصيل','entry.1878879269','text'],['موبايل 1','entry.412261379','tel'],['موبايل 2','entry.1368971450','tel']]
:[['Manufacturing Company','entry.905618293','text'],['Contact Person / Manager Name','entry.1414648703','text'],['Supplier Type','entry.1344373371','select'],['Detailed Address','entry.1878879269','text'],['Mobile 1','entry.412261379','tel'],['Mobile 2','entry.1368971450','tel']];
const options=L==='ar'
?[['مكتب علمي (TOL)','مكتب علمي (TOL)'],['شركة انتاج','شركة انتاج'],['شركة استيراد','شركة استيراد'],['شركة توزيع','شركة توزيع']]
:[['مكتب علمي (TOL)','Scientific Office (TOL)'],['شركة انتاج','Manufacturing Company'],['شركة استيراد','Import Company'],['شركة توزيع','Distribution Company']];
const placeholder=L==='ar'?'اختر نوع المورد':'Select Supplier Type';
form.querySelector('.form-grid').innerHTML=fields.map(([label,name,type],index)=>`<label class="field ${index>3?'wide':''}">${label}${type==='select'?`<select required name="${name}"><option value="" disabled selected>${placeholder}</option>${options.map(([value,text])=>`<option value="${value}">${text}</option>`).join('')}</select>`:`<input required name="${name}" type="${type}" placeholder="${label}">`}</label>`).join('');
form.onsubmit=async event=>{
event.preventDefault();
if(!form.reportValidity())return;
const status=form.querySelector('.form-status'),button=form.querySelector('button[type="submit"]'),buttonText=button.lastChild,originalText=buttonText.textContent;
button.disabled=true;
buttonText.textContent=L==='ar'?'جاري الإرسال...':'Sending...';
try{
await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfubd7vGDhk6wl0ZNoPs9-Io3y_J3YPqcaONPJc0w5UUT3lTg/formResponse',{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form))});
form.reset();
status.className='form-status success';
status.textContent=L==='ar'?'تم تسجيل بيانات المورد بنجاح، سيتواصل معكم فريقنا قريباً':'Supplier details submitted successfully. Our team will contact you soon.';
}catch(error){
status.className='form-status error';
status.textContent=L==='ar'?'تعذر إرسال بيانات المورد حالياً. يرجى المحاولة مرة أخرى.':'Unable to submit supplier details right now. Please try again.';
}finally{
buttonText.textContent=originalText;
button.disabled=false;
}
};
}
if(P==='join'){
const form=document.querySelector('#e');
const departments=[
['Sales - مبيعات','مبيعات','Sales'],
['Marketing - تسويق','تسويق','Marketing'],
['خدمة العملاء - Customer Services','خدمة العملاء','Customer Services'],
['HR - موارد بشرية','موارد بشرية','HR'],
['Operations - التشغيل','التشغيل','Operations'],
['Finance - المالية','المالية','Finance'],
['Logistics & Distribution - الحركة و التوزيع','الحركة والتوزيع','Logistics & Distribution'],
['الجودة - Quality','الجودة','Quality'],
['سائق - Driver','سائق','Driver'],
['المشتريات - Purchasing','المشتريات','Purchasing'],
['البوفيه و خدمات النظافة - Wearhouse Services','البوفيه وخدمات النظافة','Warehouse & Hospitality Services'],
['مخزن الأدوية - Medical Store','مخزن الأدوية','Medical Store'],
['مخزن المستحضرات - Cosmetics Store','مخزن المستحضرات','Cosmetics Store']
];
const qualifications=[['الشهادة الثانوية','الشهادة الثانوية','High School'],['مؤهل متوسط','مؤهل متوسط','Intermediate Diploma'],['مؤهل عالي','مؤهل عالي',"Bachelor's Degree"],['ماجستير','ماجستير',"Master's Degree"],['دكتوراه','دكتوراه','PhD / Doctorate']];
const military=[['انثى','أنثى','Female (N/A)'],['إعفاء مؤقت','إعفاء مؤقت','Temporary Exemption'],['إعفاء نهائي','إعفاء نهائي','Permanent Exemption'],['تأجيل','تأجيل','Postponed'],['تم تأدية الخدمة العسكرية','تم تأدية الخدمة العسكرية','Completed']];
const licenses=[['ليس لدي رخصة قيادة','ليس لدي رخصة قيادة','No Driving License'],['رخصة مهنية أولى','رخصة مهنية أولى','1st Degree Professional License'],['رخصة مهنية ثانية','رخصة مهنية ثانية','2nd Degree Professional License'],['رخصة مهنية ثالثة','رخصة مهنية ثالثة','3rd Degree Professional License'],['رخصة خاصة','رخصة خاصة','Private License'],['رخصة دراجة نارية','رخصة دراجة نارية','Motorcycle License']];
const marital=[['متزوج','متزوج','Married'],['غير متزوج','غير متزوج','Single']];
const referrals=[['فيسبوك','فيسبوك','Facebook'],['لينكد إن','لينكد إن','LinkedIn'],['ترشيح من صديق','ترشيح من صديق','Friend Referral'],['مجموعة توظيف','مجموعة توظيف','Hiring / Job Group']];
const previousDepartments=[departments[7],departments[0],departments[1],departments[2],departments[5],departments[8],departments[6],departments[9],departments[10],departments[3],departments[11],departments[12],departments[4]];
const fields=[
{label:['الإدارة التابع لها طلب التوظيف','Department'],name:'entry.905618293',options:departments,required:true,placeholder:['اختر الإدارة','Select Department'],disabledPlaceholder:true},
{label:['هل لديك ملف سيرة ذاتية؟','Do you have a CV?'],name:'entry.1414648703',options:[['Yes - نعم لدي سيرة ذاتية','نعم، لدي سيرة ذاتية','Yes, I have a CV'],['No - لا ليس لدي سيرة ذاتية','لا، ليس لدي سيرة ذاتية',"No, I don't have a CV"]],required:true,placeholder:['اختر الإجابة','Select an option'],disabledPlaceholder:true},
{label:['الاسم بالكامل','Full Name'],name:'entry.1344373371',type:'text',required:true},
{label:['رقم الهاتف المحمول','Mobile Number'],name:'entry.1878879269',type:'tel',required:true},
{label:['أعلى مؤهل علمي تم تحصيله','Highest Educational Qualification'],name:'entry.412261379',options:qualifications,placeholder:['اختر المؤهل العلمي','Select Qualification']},
{label:['عدد سنوات الخبرة في نفس المجال','Years of Experience in Same Field'],name:'entry.1368971450',type:'text'},
{label:['الموقف من التجنيد','Military Service Status'],name:'entry.721589804',options:military,placeholder:['اختر الموقف من التجنيد','Select Military Status']},
{label:['نوع رخصة القيادة','Driving License Type'],name:'entry.229085879',options:licenses,placeholder:['اختر نوع الرخصة','Select License Type']},
{label:['الحالة الاجتماعية','Marital Status'],name:'entry.115536394',options:marital,placeholder:['اختر الحالة الاجتماعية','Select Marital Status']},
{label:['آخر راتب شهري','Last Monthly Salary'],name:'entry.1845159946',type:'number',placeholder:['بالأرقام - بالجنيه المصري','In numbers - EGP']},
{label:['الراتب الشهري المطلوب','Expected Monthly Salary'],name:'entry.400697787',type:'number',placeholder:['بالأرقام - بالجنيه المصري','In numbers - EGP']},
{label:['هل سبق لك العمل معنا؟ (اختر الإدارة السابقة إن وجدت)','Have you worked with us before? (Select previous department if any)'],name:'entry.1863290958',options:previousDepartments,placeholder:['لم يسبق لي العمل بالشركة','Never worked at the company']},
{label:['كيف علمت بهذه الفرصة؟','How did you hear about this opportunity?'],name:'entry.846312300',options:referrals,placeholder:['اختر طريقة المعرفة','Select an option']}
];
form.querySelector('.form-grid').innerHTML=fields.map(field=>{
const label=field.label[L==='ar'?0:1];
if(field.options){
const placeholder=field.placeholder[L==='ar'?0:1],options=field.options.map(([value,arabic,english])=>`<option value="${value}">${L==='ar'?arabic:english}</option>`).join('');
return `<label class="field">${label}<select ${field.required?'required':''} name="${field.name}"><option value=""${field.disabledPlaceholder?' disabled':''} selected>${placeholder}</option>${options}</select></label>`;
}
const placeholder=field.placeholder?` placeholder="${field.placeholder[L==='ar'?0:1]}"`:'';
return `<label class="field">${label}<input ${field.required?'required':''} name="${field.name}" type="${field.type}"${placeholder}></label>`;
}).join('');
form.onsubmit=async event=>{
event.preventDefault();
if(!form.reportValidity())return;
const status=form.querySelector('.form-status'),button=form.querySelector('button[type="submit"]'),buttonText=button.lastChild,originalText=buttonText.textContent;
button.disabled=true;
buttonText.textContent=L==='ar'?'جاري الإرسال...':'Sending...';
try{
await fetch('https://docs.google.com/forms/d/e/1FAIpQLScRpBYv0OL5NqjceBV-uBYuU2h3sFPPyOd4rSQgW6c2KBz0aw/formResponse',{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form))});
form.reset();
status.className='form-status success';
status.textContent=L==='ar'?'تم إرسال طلب التوظيف بنجاح، سيتواصل معكم فريق الموارد البشرية قريباً':'Job application submitted successfully. Our HR team will contact you soon.';
}catch(error){
status.className='form-status error';
status.textContent=L==='ar'?'تعذر إرسال طلب التوظيف حالياً. يرجى المحاولة مرة أخرى.':'Unable to submit your application right now. Please try again.';
}finally{
buttonText.textContent=originalText;
button.disabled=false;
}
};
}
})();
