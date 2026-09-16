(function () {
  'use strict';

  // ヘッダー: スクロールで背景を濃くする
  var header = document.getElementById('siteHeader');
  var onScroll = function () {
    if (window.scrollY > 8) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ハンバーガーメニュー
  var menuButton = document.getElementById('menuButton');
  var overlay = document.getElementById('navOverlay');

  var openMenu = function () {
    overlay.classList.add('is-open');
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'メニューを閉じる');
    document.body.style.overflow = 'hidden';
  };

  var closeMenu = function () {
    overlay.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'メニューを開く');
    document.body.style.overflow = '';
  };

  menuButton.addEventListener('click', function () {
    if (overlay.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.querySelectorAll('[data-close], a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  // 友達に教える（共有シート）
  var shareData = {
    title: 'Clean Apps',
    text: 'Clean Apps｜4つのアプリで、仕事が変わる。シンプル・無料・使いやすい仕事アプリです。',
    url: window.location.href
  };

  var handleShareClick = function (button) {
    if (navigator.share) {
      navigator.share(shareData).catch(function () {
        // ユーザーがキャンセルした場合などは何もしない
      });
      return;
    }

    // 共有シートに対応していないブラウザ向けのフォールバック
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareData.url).then(function () {
        var original = button.innerHTML;
        button.innerHTML = 'リンクをコピーしました';
        setTimeout(function () {
          button.innerHTML = original;
        }, 2000);
      }).catch(function () {
        window.prompt('このリンクをコピーしてください', shareData.url);
      });
    } else {
      window.prompt('このリンクをコピーしてください', shareData.url);
    }
  };

  var shareButton = document.getElementById('shareButton');
  var shareButtonMenu = document.getElementById('shareButtonMenu');

  if (shareButton) {
    shareButton.addEventListener('click', function () {
      handleShareClick(shareButton);
    });
  }

  if (shareButtonMenu) {
    shareButtonMenu.addEventListener('click', function () {
      closeMenu();
      handleShareClick(shareButtonMenu);
    });
  }
})();
