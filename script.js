/* Progressive enhancement. No trackers, dependencies or scroll interception. */
(() => {
  'use strict';
  const root = document.documentElement;
  const finalSection = document.querySelector('.finale');
  const finalStage = document.querySelector('.finale-stage');
  const finalViewport = document.querySelector('.finale-sticky');
  const toggle = document.getElementById('motion-toggle');
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = preference.matches;
  let frame = 0;
  let stageTop = 0;
  let stageDistance = 1;
  let maxScroll = 1;
  const clamp = (n, a = 0, b = 1) => Math.min(b, Math.max(a, n));
  const smooth = (a, b, n) => { const t = clamp((n - a) / (b - a)); return t * t * (3 - 2 * t); };

  function measure() {
    maxScroll = Math.max(1, root.scrollHeight - window.innerHeight);
    stageTop = finalStage.getBoundingClientRect().top + window.scrollY;
    // Match the sticky scene's stable height. Mobile browser bars can change
    // innerHeight during a scroll even though the 100svh scene stays the same.
    stageDistance = Math.max(1, finalStage.offsetHeight - (finalViewport ? finalViewport.offsetHeight : window.innerHeight));
    schedule();
  }

  function paint() {
    frame = 0;
    const y = window.scrollY;
    root.style.setProperty('--reading', clamp(y / maxScroll).toFixed(4));
    if (reduced) return;
    const p = clamp((y - stageTop) / stageDistance);
    // Read the empty stage first. The light then leaves the wallet and dies.
    finalSection.style.setProperty('--end-light', (1 - smooth(.24, .79, p)).toFixed(4));
    finalSection.style.setProperty('--wallet-light', (1 - smooth(.55, .88, p)).toFixed(4));
    finalSection.style.setProperty('--light-focus', smooth(.12, .66, p).toFixed(4));
    finalSection.style.setProperty('--end-intro', (1 - smooth(.04, .33, p)).toFixed(4));
    finalSection.style.setProperty('--end-words', smooth(.72, .96, p).toFixed(4));
    finalSection.style.setProperty('--end-hint', (1 - smooth(.3, .65, p)).toFixed(4));
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(paint); }
  function setMotion(value) {
    reduced = value;
    root.classList.toggle('motion-off', reduced);
    toggle.setAttribute('aria-pressed', String(reduced));
    toggle.textContent = reduced ? 'Activar movimiento' : 'Reducir movimiento';
    if (reduced) {
      finalSection.style.setProperty('--end-light', '1');
      finalSection.style.setProperty('--wallet-light', '1');
      finalSection.style.setProperty('--light-focus', '0');
      finalSection.style.setProperty('--end-intro', '1');
      finalSection.style.setProperty('--end-words', '1');
    }
    measure();
  }

  if (!finalSection || !finalStage || !toggle) return;
  root.classList.add('js');
  toggle.hidden = false;
  setMotion(reduced);
  toggle.addEventListener('click', () => setMotion(!reduced));
  const onPreference = event => setMotion(event.matches);
  if (preference.addEventListener) preference.addEventListener('change', onPreference);
  else if (preference.addListener) preference.addListener(onPreference);
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', measure, { passive: true });
  window.addEventListener('pageshow', measure);
  window.addEventListener('load', measure, { once: true });
  document.querySelectorAll('img').forEach(img => img.addEventListener('load', measure, { once: true }));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(document.body);

  // References open the archive before navigating so each source is reachable.
  const archive = document.getElementById('archivo');
  function revealTarget(hash) {
    if (!hash || hash.length < 2) return null;
    let id;
    try { id = decodeURIComponent(hash.slice(1)); } catch { return null; }
    const target = document.getElementById(id);
    if (target && (target === archive || archive.contains(target))) archive.open = true;
    return target;
  }
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const hash = link.getAttribute('href');
      const target = revealTarget(hash);
      if (!target) return;
      event.preventDefault();
      // Use native history and focus, preserving keyboard and back-button use.
      if (location.hash !== hash) history.pushState(null, '', hash);
      target.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'start' });
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      measure();
    });
  });
  const onHash = () => { const target = revealTarget(location.hash); if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: 'instant' })); measure(); };
  window.addEventListener('hashchange', onHash);
  if (location.hash) onHash();
})();
