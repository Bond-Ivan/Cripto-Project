"use strict";
document.querySelectorAll('a[href^="#"]').forEach((a)=>{
    a.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const btnSettings = document.querySelector('.header__btn-language');
const dashboardModalBackground = document.querySelector('.dashboard__background');
const dashboardModal = document.querySelector('.dashboard__modal');
const btnCancel = document.querySelector('.dashboard__modal-btn--cancel');
const btnOk = document.querySelector('.dashboard__modal-btn--ok');
const btnHelp = document.querySelector('.dashboard__modal-btn--help');
const dashboardModalHelp = document.querySelector('.dashboard__modal-help');
const btnCancelModalWindowHelp = document.querySelector('.dashboard__modal-help__btn--cancel');
const btnSendModalWindowHelp = document.querySelector('.dashboard__modal-help__btn--send');
const dashboardModalSend = document.querySelector('.dashboard__modal-send');
const dashboardCloseModalWindowSend = document.querySelector('.dashboard__modal-send--close');
const headerNavBtn = document.querySelector('.header__navigation-btn');
const headerNavBtnMobile = document.querySelector('.header__navigation-btn--mobile');
const mobileBurger = document.querySelector('.navigation__mobile-burger');
const mobileMenu = document.querySelector('.navigation__mobile-menu');
const mobileMenuBackground = document.querySelector('.navigation__mobile-background');
const mobileMenuBtnClose = document.querySelector('.navigation__mobile-close');
const navLinks = document.querySelectorAll('.navigation__mobile-link');
btnSettings.addEventListener('click', ()=>{
    dashboardModalBackground.classList.add('dashboard__background--active');
    dashboardModal.classList.add('dashboard__modal--active');
    document.body.setAttribute('style', 'overflow: hidden;');
});
btnCancel.addEventListener('click', ()=>{
    dashboardModalBackground.classList.remove('dashboard__background--active');
    dashboardModal.classList.remove('dashboard__modal--active');
    document.body.removeAttribute('style', 'overflow: hidden;');
});
btnHelp.addEventListener('click', ()=>{
    dashboardModal.classList.remove('dashboard__modal--active');
    dashboardModalHelp.classList.add('dashboard__modal-help--active');
});
btnCancelModalWindowHelp.addEventListener('click', ()=>{
    dashboardModalHelp.classList.remove('dashboard__modal-help--active');
    dashboardModalBackground.classList.remove('dashboard__background--active');
    document.body.removeAttribute('style', 'overflow: hidden;');
    mobileMenuBackground.classList.remove('navigation__mobile-background--active');
});
btnSendModalWindowHelp.addEventListener('click', ()=>{
    mobileMenuBackground.classList.remove('navigation__mobile-background--active');
    dashboardModalHelp.classList.remove('dashboard__modal-help--active');
    dashboardModalSend.classList.add('dashboard__modal-send--active');
});
dashboardCloseModalWindowSend.addEventListener('click', ()=>{
    dashboardModalSend.classList.remove('dashboard__modal-send--active');
    dashboardModal.classList.add('dashboard__modal--active');
});
btnOk.addEventListener('click', ()=>{
    dashboardModalBackground.classList.remove('dashboard__background--active');
    dashboardModal.classList.remove('dashboard__modal--active');
    document.body.removeAttribute('style', 'overflow: hidden;');
});
headerNavBtn.addEventListener('click', ()=>{
    dashboardModalBackground.classList.add('dashboard__background--active');
    dashboardModalHelp.classList.add('dashboard__modal-help--active');
    document.body.setAttribute('style', 'overflow: hidden;');
});
headerNavBtnMobile.addEventListener('click', ()=>{
    mobileMenu.classList.remove('navigation__mobile-menu--active');
    document.body.removeAttribute('style', 'overflow: hidden;');
    dashboardModalBackground.classList.add('dashboard__background--active');
    dashboardModalHelp.classList.add('dashboard__modal-help--active');
});
mobileBurger.addEventListener('click', ()=>{
    mobileMenuBackground.classList.add('navigation__mobile-background--active');
    mobileMenu.classList.add('navigation__mobile-menu--active');
    document.body.setAttribute('style', 'overflow: hidden;');
});
mobileMenuBtnClose.addEventListener('click', ()=>{
    mobileMenuBackground.classList.remove('navigation__mobile-background--active');
    mobileMenu.classList.remove('navigation__mobile-menu--active');
    document.body.removeAttribute('style', 'overflow: hidden;');
});
window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none';
});
navLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        mobileMenuBackground.classList.remove('navigation__mobile-background--active');
        mobileMenu.classList.remove('navigation__mobile-menu--active');
        document.body.removeAttribute('style', 'overflow: hidden;');
    });
});

//# sourceMappingURL=index.de5c0784.js.map
