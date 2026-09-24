/**
 * 站点通用交互：移动端菜单、标签筛选、回到顶部
 */
(function () {
  'use strict';

  /* ---------- 移动端导航 ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    // 点击导航项后收起菜单
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- 文章标签筛选 ---------- */
  var filterBar = document.getElementById('filter-bar');
  var postList = document.getElementById('post-list');
  var emptyState = document.getElementById('empty-state');

  if (filterBar && postList) {
    var cards = Array.prototype.slice.call(postList.querySelectorAll('.post-card'));

    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;

      var filter = btn.dataset.filter;
      var visible = 0;

      filterBar.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.toggle('active', b === btn);
      });

      cards.forEach(function (card) {
        var tags = (card.dataset.tags || '').split(/\s+/);
        var match = filter === 'all' || tags.indexOf(filter) !== -1;
        card.hidden = !match;
        if (match) visible++;
      });

      if (emptyState) emptyState.hidden = visible !== 0;
    });
  }

  /* ---------- 回到顶部 ---------- */
  var toTop = document.querySelector('.to-top');

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        toTop.classList.toggle('show', window.scrollY > 400);
        ticking = false;
      });
    }, { passive: true });
  }
})();
