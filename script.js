/**
 * Aries Social Dance Circle - Main Script
 * モバイル用ハンバーガーメニューの開閉制御
 */

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (hamburgerBtn && navMenu) {
        // ハンバーガーボタンクリック時のトグル処理
        hamburgerBtn.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            hamburgerBtn.classList.toggle('open');
            hamburgerBtn.setAttribute('aria-expanded', isOpen);
        });

        // ナビゲーションリンクをクリックした際にメニューを自動で閉じる
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburgerBtn.classList.remove('open');
                    hamburgerBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // メニュー領域外をクリックした際に閉じる
        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburgerBtn.classList.remove('open');
                    hamburgerBtn.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }
});
