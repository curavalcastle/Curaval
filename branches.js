(() => {
  const activeBranches = [
    {
      id: 1,
      name: { ar: 'فرع البركة', en: 'El Baraka Branch' },
      governorate: { ar: 'الجيزة', en: 'Giza' },
      address: {
        ar: '2 شارع الشيشيني، متفرع من طريق المريوطية، منطقة فيصل، الجيزة',
        en: '2 El Shishini St., off Maryoutiya Rd., Faisal, Giza'
      },
      maps: 'https://maps.app.goo.gl/sdEFymdoueE3Tbi6A',
      phone: '01127016403'
    },
    {
      id: 2,
      name: { ar: 'فرع الهدى', en: 'El Hoda Branch' },
      governorate: { ar: 'الغربية', en: 'Gharbia' },
      address: {
        ar: 'شارع النادي (رقم 13 - امتداد شارع النادي، طنطا)',
        en: 'El Nadi St. (No. 13 - El Nadi St. Extension, Tanta)'
      },
      maps: 'https://maps.app.goo.gl/6DPhfwSG4xnfmXBr9',
      phone: '01200284350'
    },
    {
      id: 3,
      name: { ar: 'فرع عمر بن الخطاب', en: 'Omar Ibn El-Khattab Branch' },
      governorate: { ar: 'الشرقية', en: 'Sharqia' },
      address: {
        ar: 'شارع رقم 12، شيبة النكارية، الزقازيق، محافظة الشرقية (وله مقر آخر في حي الزهور، شارع 1)',
        en: 'Street 12, Sheiba El Nakariya, Zagazig, Sharqia (Second location: Hay El Zohour, Street 1)'
      },
      maps: 'https://maps.app.goo.gl/mwm6r7Zeuz6TVsLn7',
      phone: '0552333630'
    }
  ];

  const branches = [
    ...activeBranches.map(branch => ({ ...branch, status: 'active' })),
    ...Array.from({ length: 47 }, (_, index) => ({
      id: index + 4,
      name: { ar: `الفرع ${index + 4}`, en: `Branch ${index + 4}` },
      status: 'comingSoon'
    }))
  ];
  window.CURAVAL_BRANCHES = branches;

  const fullLogo = 'Logos/logo-transparent.png';
  const iconLogo = 'Logos/logo-icon.png';
  const text = value => value?.[localStorage.getItem('curaval-lang') === 'en' ? 'en' : 'ar'] || '';

  function branchCard(branch, standalone) {
    const language = localStorage.getItem('curaval-lang') === 'en' ? 'en' : 'ar';
    const comingSoon = branch.status === 'comingSoon';
    const label = comingSoon
      ? (language === 'en' ? 'Coming Soon' : 'قريباً / Coming Soon')
      : (language === 'en' ? 'Available Now' : 'متاح حالياً');
    const name = text(branch.name);
    const governorate = text(branch.governorate);
    const image = comingSoon ? fullLogo : iconLogo;
    const content = `<img src="${image}" alt="${comingSoon ? 'Curaval Castle' : 'Curaval Castle emblem'}">
      <h3>${name}</h3>
      ${comingSoon ? `<small class="soon">${label}</small>` : `<small>${governorate}</small><span class="branch-status">${label}</span>`}`;

    return standalone
      ? `<a class="branch-card ${comingSoon ? '' : 'available'}" href="branch.html?branch=${branch.id}">${content}</a>`
      : `<button class="branch-card ${comingSoon ? '' : 'available'}" type="button" data-branch="${branch.id}" aria-label="${name}">${content}</button>`;
  }

  const pinIcon = `<svg class="branch-info-icon" viewBox="0 0 64 64" aria-hidden="true">
    <defs>
      <linearGradient id="pinBody" x1="13%" y1="8%" x2="84%" y2="94%"><stop stop-color="#b8fff6"/><stop offset=".34" stop-color="#50ccbc"/><stop offset=".72" stop-color="#249ba3"/><stop offset="1" stop-color="#146b79"/></linearGradient>
      <radialGradient id="pinGloss" cx="30%" cy="20%" r="74%"><stop stop-color="#fff" stop-opacity=".9"/><stop offset=".42" stop-color="#bafff4" stop-opacity=".36"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
      <filter id="pinShadow" x="-35%" y="-25%" width="170%" height="175%"><feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#12323b" flood-opacity=".35"/></filter>
    </defs>
    <ellipse cx="32" cy="57" rx="14" ry="3.5" fill="#163943" opacity=".22"/>
    <path d="M32 57 17 36a21 21 0 1 1 30 0L32 57Z" transform="translate(2 2)" fill="#176a76" opacity=".72"/>
    <path d="M32 55 17 35a21 21 0 1 1 30 0L32 55Z" fill="url(#pinBody)" stroke="#d7fff8" stroke-width="1.6" filter="url(#pinShadow)"/>
    <path d="M32 55 17 35a21 21 0 1 1 30 0L32 55Z" fill="url(#pinGloss)"/>
    <circle cx="32" cy="25" r="8.5" fill="#eafffb" opacity=".95"/>
    <circle cx="32" cy="25" r="5.3" fill="#288f98"/>
    <path d="M21 13c4-5 10-7 16-6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".72"/>
  </svg>`;
  const phoneIcon = `<svg class="branch-info-icon" viewBox="0 0 64 64" aria-hidden="true">
    <defs>
      <linearGradient id="phoneBody" x1="12%" y1="4%" x2="88%" y2="100%"><stop stop-color="#d5fff9"/><stop offset=".28" stop-color="#6de1d2"/><stop offset=".65" stop-color="#2aa5aa"/><stop offset="1" stop-color="#176879"/></linearGradient>
      <linearGradient id="phoneEdge" x1="0%" y1="0%" x2="100%" y2="100%"><stop stop-color="#fff"/><stop offset=".48" stop-color="#8ef5e8"/><stop offset="1" stop-color="#187381"/></linearGradient>
      <radialGradient id="phoneGloss" cx="28%" cy="15%" r="90%"><stop stop-color="#fff" stop-opacity=".85"/><stop offset=".4" stop-color="#fff" stop-opacity=".18"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
      <filter id="phoneShadow" x="-30%" y="-30%" width="170%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#12323b" flood-opacity=".35"/></filter>
    </defs>
    <path d="M16 9c-4 1-7 5-7 10 1 15 21 35 36 36 5 0 9-3 10-7l1-6-14-8-6 7c-5-2-12-9-14-14l7-6-8-14-5 2Z" transform="translate(2 2)" fill="#176a76" opacity=".7"/>
    <path d="M14 8c-4 1-7 5-7 10 1 15 21 35 36 36 5 0 9-3 10-7l1-6-14-8-6 7c-5-2-12-9-14-14l7-6-8-14-5 2Z" fill="url(#phoneBody)" stroke="url(#phoneEdge)" stroke-width="2" filter="url(#phoneShadow)"/>
    <path d="M14 8c-4 1-7 5-7 10 1 15 21 35 36 36 5 0 9-3 10-7l1-6-14-8-6 7c-5-2-12-9-14-14l7-6-8-14-5 2Z" fill="url(#phoneGloss)"/>
    <path d="M14 13c-2 2-2 5-1 8m10-9 4 7m13 14 7 4m-9 7c3 2 6 3 9 2" fill="none" stroke="#f4fffd" stroke-width="2" stroke-linecap="round" opacity=".78"/>
  </svg>`;

  function detailCard(branch) {
    const language = localStorage.getItem('curaval-lang') === 'en' ? 'en' : 'ar';
    const isActive = branch.status === 'active';
    const title = text(branch.name);
    if (!isActive) {
      return `<div class="branch-detail branch-coming-soon">
        <div class="branch-emblem"><img src="${fullLogo}" alt="Curaval Castle"></div>
        <h2 class="branch-name" id="branch-title">${title}</h2>
        <p class="branch-governorate">${language === 'en' ? 'Coming Soon' : 'قريباً / Coming Soon'}</p>
        <p class="branch-future">${language === 'en' ? 'Look forward to the next Curaval Castle branch.' : 'ترقب الفرع القادم من كيورافال كاسيل.'}</p>
      </div>`;
    }

    return `<div class="branch-detail">
      <div class="branch-emblem"><img src="${iconLogo}" alt="Curaval Castle emblem"></div>
      <h2 class="branch-name" id="branch-title">${title}</h2>
      <p class="branch-governorate">${text(branch.governorate)}</p>
      <div class="branch-info-list">
        <a class="branch-info-item" href="${branch.maps}" target="_blank" rel="noopener noreferrer">
          ${pinIcon}<span class="branch-info-copy"><strong>${language === 'en' ? 'Open in Google Maps' : 'العنوان على الخريطة'}</strong><span>${text(branch.address)}</span></span>
        </a>
        <a class="branch-info-item" href="tel:${branch.phone}" dir="ltr">
          ${phoneIcon}<span class="branch-info-copy"><strong>${language === 'en' ? 'Call the branch' : 'اتصل بالفرع'}</strong><span>${branch.phone}</span></span>
        </a>
      </div>
    </div>`;
  }

  function setCardTilt(card) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        window.matchMedia('(pointer: coarse)').matches) return;
    card.addEventListener('pointermove', event => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      card.style.setProperty('--tilt-x', `${(0.5 - y) * 5}deg`);
      card.style.setProperty('--tilt-y', `${(x - 0.5) * 6}deg`);
      card.style.setProperty('--pointer-x', `${x * 100}%`);
      card.style.setProperty('--pointer-y', `${y * 100}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.removeProperty('--tilt-x');
      card.style.removeProperty('--tilt-y');
    });
  }

  function renderPortalPage() {
    const page = document.body.dataset.page;
    if (page === 'branches') {
      const grid = document.querySelector('.branches-grid');
      if (grid) grid.innerHTML = branches.map(branch => branchCard(branch, true)).join('');
      return;
    }
    if (page !== 'branch') return;

    const branchId = Number(new URLSearchParams(location.search).get('branch')) || 1;
    const branch = branches.find(item => item.id === branchId) || branches[0];
    const profile = document.querySelector('.profile-card');
    const hero = document.querySelector('.hero-mini');
    if (hero) hero.hidden = true;
    if (profile) {
      profile.classList.add('branch-detail-card');
      profile.innerHTML = detailCard(branch);
      profile.querySelectorAll('.branch-info-item').forEach(setCardTilt);
    }
  }

  function initializeHomePage() {
    const grid = document.querySelector('#branches-grid');
    const modal = document.querySelector('#branch-modal');
    if (!grid || !modal) return;
    const profile = document.querySelector('#branch-profile');
    const closeButton = modal.querySelector('.modal-close');
    let activeBranchId = null;
    let previousFocus = null;

    const openBranch = id => {
      const branch = branches.find(item => item.id === id);
      if (!branch) return;
      activeBranchId = id;
      previousFocus = document.activeElement;
      closeButton.setAttribute('aria-label', localStorage.getItem('curaval-lang') === 'en' ? 'Close' : 'إغلاق');
      profile.innerHTML = detailCard(branch);
      profile.querySelectorAll('.branch-info-item').forEach(setCardTilt);
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('branch-modal-open');
      closeButton.focus();
    };
    const closeModal = () => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('branch-modal-open');
      activeBranchId = null;
      if (previousFocus?.isConnected) previousFocus.focus();
    };
    const renderGrid = () => {
      grid.innerHTML = branches.map(branch => branchCard(branch, false)).join('');
    };

    renderGrid();
    grid.addEventListener('click', event => {
      const card = event.target.closest('[data-branch]');
      if (card) openBranch(Number(card.dataset.branch));
    });
    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', event => {
      if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
    document.querySelector('.language-switch')?.addEventListener('click', () => {
      window.setTimeout(() => {
        renderGrid();
        if (activeBranchId !== null) {
          const branch = branches.find(item => item.id === activeBranchId);
          if (branch) {
            profile.innerHTML = detailCard(branch);
            profile.querySelectorAll('.branch-info-item').forEach(setCardTilt);
            closeButton.focus();
          }
        }
      }, 0);
    });
  }

  if (document.querySelector('#branch-modal')) initializeHomePage();
  renderPortalPage();
})();
