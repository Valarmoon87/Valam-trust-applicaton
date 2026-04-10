  function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.toggle('active', a.dataset.page === page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('navLinks').classList.remove('open');
  }

  function toggleMenu() { document.getElementById('navLinks').classList.toggle('open'); }

  window.addEventListener('scroll', () => {
    document.getElementById('mainNav').classList.toggle('solid', window.scrollY > 60);
  });

  // Counter animation
  function animateCounters() {
    document.querySelectorAll('[data-target]').forEach(el => {
      const target = parseInt(el.dataset.target);
      const start = performance.now();
      const duration = 2000;
      const update = now => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(ease * target).toLocaleString('en-IN') + (target >= 100 ? '+' : '');
        if (p < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    });
  }
  setTimeout(animateCounters, 600);

  function setFreq(btn) { btn.closest('.freq-row').querySelectorAll('.freq-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
  function setAmt(btn) { btn.closest('.amt-grid').querySelectorAll('.amt-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
  function setPay(btn) { btn.closest('.pay-row').querySelectorAll('.pay-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
  function setTab(btn) { btn.closest('.cat-tabs').querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3800);
  }
