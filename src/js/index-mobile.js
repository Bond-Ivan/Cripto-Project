"use strict"

const mobileBurger = document.querySelector('.navigation__mobile-burger');
const mobileMenu = document.querySelector('.navigation__mobile-menu');
const mobileMenuBackground = document.querySelector('.navigation__mobile-background');
const mobileMenuBtnClose = document.querySelector('.navigation__mobile-close');

mobileBurger.addEventListener('click', () => {
    mobileMenuBackground.classList.add('navigation__mobile-background--active')
    mobileMenu.classList.add('navigation__mobile-menu--active');
    document.body.setAttribute('style', 'overflow: hidden; padding-right: 15px;');
});

mobileMenuBtnClose.addEventListener('click', () => {
    mobileMenuBackground.classList.remove('navigation__mobile-background--active')
    mobileMenu.classList.remove('navigation__mobile-menu--active');
    document.body.removeAttribute('style', 'overflow: hidden; padding-right: 15px;');
});



