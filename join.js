const tabs=document.querySelectorAll('.choice-tab'),forms=document.querySelectorAll('.form-panel');
function scrollToFormStart(form){const margin=parseFloat(getComputedStyle(form).scrollMarginTop)||90;form.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});setTimeout(()=>{if(form.isConnected&&form.classList.contains('active')&&Math.abs(form.getBoundingClientRect().top-margin)>24)window.scrollTo({top:Math.max(0,window.scrollY+form.getBoundingClientRect().top-margin),behavior:'instant'})},650)}
tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(x=>x.classList.toggle('active',x===tab));forms.forEach(form=>form.classList.toggle('active',form.id===tab.dataset.tab));scrollToFormStart(document.querySelector(`#${tab.dataset.tab}`))}));
document.querySelectorAll('.web3-form').forEach(form=>form.addEventListener('submit',async event=>{
  event.preventDefault();
  const status=form.querySelector('.form-status'),button=form.querySelector('button[type="submit"]');
  status.className='form-status';
  if(!form.reportValidity())return;
  const employeeDepartment=form.querySelector('select[name="entry.905618293"]');
  if(employeeDepartment){
    const language=document.documentElement.lang==='ar'?'ar':'en',buttonText=button.lastChild,originalText=buttonText.textContent;
    button.disabled=true;
    buttonText.textContent=language==='ar'?'جاري الإرسال...':'Sending...';
    try{
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLScRpBYv0OL5NqjceBV-uBYuU2h3sFPPyOd4rSQgW6c2KBz0aw/formResponse',{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form))});
      form.reset();
      status.classList.add('success');
      status.textContent=language==='ar'?'تم إرسال طلب التوظيف بنجاح، سيتواصل معكم فريق الموارد البشرية قريباً':'Job application submitted successfully. Our HR team will contact you soon.';
    }catch(error){
      status.classList.add('error');
      status.textContent=language==='ar'?'تعذر إرسال طلب التوظيف حالياً. يرجى المحاولة مرة أخرى.':'Unable to submit your application right now. Please try again.';
    }finally{
      buttonText.textContent=originalText;
      button.disabled=false;
    }
    return;
  }
  const supplierSelect=form.querySelector('select[name="entry.1344373371"]');
  if(supplierSelect){
    const language=document.documentElement.lang==='ar'?'ar':'en',buttonText=button.lastChild,originalText=buttonText.textContent;
    button.disabled=true;
    buttonText.textContent=language==='ar'?'جاري الإرسال...':'Sending...';
    try{
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfubd7vGDhk6wl0ZNoPs9-Io3y_J3YPqcaONPJc0w5UUT3lTg/formResponse',{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form))});
      form.reset();
      status.classList.add('success');
      status.textContent=language==='ar'?'تم تسجيل بيانات المورد بنجاح، سيتواصل معكم فريقنا قريباً':'Supplier details submitted successfully. Our team will contact you soon.';
    }catch(error){
      status.classList.add('error');
      status.textContent=language==='ar'?'تعذر إرسال بيانات المورد حالياً. يرجى المحاولة مرة أخرى.':'Unable to submit supplier details right now. Please try again.';
    }finally{
      buttonText.textContent=originalText;
      button.disabled=false;
    }
    return;
  }
  const warehouseInput=form.querySelector('[name="entry.905618293"]');
  if(warehouseInput){
    const language=document.documentElement.lang==='ar'?'ar':'en',buttonText=button.lastChild,originalText=buttonText.textContent;
    button.disabled=true;
    buttonText.textContent=language==='ar'?'جاري الإرسال...':'Sending...';
    try{
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdVIHcCKlGoQ3qpZZYNNjPKJ0DyT-B7SAVHf87892DLYclzIw/formResponse',{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form))});
      form.reset();
      status.classList.add('success');
      status.textContent=language==='ar'?'تم تسجيل بياناتكم بنجاح، سيتواصل معكم فريقنا قريباً':'Your details have been submitted successfully. Our team will contact you soon.';
    }catch(error){
      status.classList.add('error');
      status.textContent=language==='ar'?'تعذر إرسال البيانات حالياً. يرجى المحاولة مرة أخرى.':'Unable to submit your details right now. Please try again.';
    }finally{
      buttonText.textContent=originalText;
      button.disabled=false;
    }
    return;
  }
  const payload=new FormData(form);
  payload.append('access_key','YOUR_ACCESS_KEY_HERE');
  payload.append('subject',form.dataset.subject);
  payload.append('from_name','Curaval Castle Website');
  button.classList.add('loading');
  button.disabled=true;
  try{
    const response=await fetch('https://api.web3forms.com/submit',{method:'POST',body:payload}),result=await response.json();
    if(!result.success)throw new Error(result.message);
    form.reset();
    status.classList.add('success');
    status.textContent='تم إرسال طلبك بنجاح. شكرًا لانضمامك إلى كيورافال كاسل.';
  }catch(error){
    status.classList.add('error');
    status.textContent='تعذّر إرسال الطلب حاليًا. تأكد من تعيين مفتاح Web3Forms الصحيح ثم حاول مرة أخرى.';
  }finally{
    button.classList.remove('loading');
    button.disabled=false;
  }
}));
lucide.createIcons();
