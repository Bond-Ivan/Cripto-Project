document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});const e=document.querySelector(".header__btn-language"),a=document.querySelector(".dashboard__background"),d=document.querySelector(".dashboard__modal"),t=document.querySelector(".dashboard__modal-btn--cancel"),o=document.querySelector(".dashboard__modal-btn--ok"),c=document.querySelector(".dashboard__modal-btn--help"),r=document.querySelector(".dashboard__modal-help"),s=document.querySelector(".dashboard__modal-help__btn--cancel"),i=document.querySelector(".dashboard__modal-help__btn--send"),l=document.querySelector(".dashboard__modal-send"),n=document.querySelector(".dashboard__modal-send--close"),_=document.querySelector(".header__navigation-btn"),m=document.querySelector(".header__navigation-btn--mobile"),b=document.querySelector(".navigation__mobile-burger"),v=document.querySelector(".navigation__mobile-menu"),u=document.querySelector(".navigation__mobile-background"),h=document.querySelector(".navigation__mobile-close");e.addEventListener("click",()=>{a.classList.add("dashboard__background--active"),d.classList.add("dashboard__modal--active"),document.body.setAttribute("style","overflow: hidden;")}),t.addEventListener("click",()=>{a.classList.remove("dashboard__background--active"),d.classList.remove("dashboard__modal--active"),document.body.removeAttribute("style","overflow: hidden;")}),c.addEventListener("click",()=>{d.classList.remove("dashboard__modal--active"),r.classList.add("dashboard__modal-help--active")}),s.addEventListener("click",()=>{r.classList.remove("dashboard__modal-help--active"),a.classList.remove("dashboard__background--active"),document.body.removeAttribute("style","overflow: hidden;"),u.classList.remove("navigation__mobile-background--active")}),i.addEventListener("click",()=>{u.classList.remove("navigation__mobile-background--active"),r.classList.remove("dashboard__modal-help--active"),l.classList.add("dashboard__modal-send--active")}),n.addEventListener("click",()=>{l.classList.remove("dashboard__modal-send--active"),d.classList.add("dashboard__modal--active")}),o.addEventListener("click",()=>{a.classList.remove("dashboard__background--active"),d.classList.remove("dashboard__modal--active"),document.body.removeAttribute("style","overflow: hidden;")}),_.addEventListener("click",()=>{a.classList.add("dashboard__background--active"),r.classList.add("dashboard__modal-help--active"),document.body.setAttribute("style","overflow: hidden;")}),m.addEventListener("click",()=>{v.classList.remove("navigation__mobile-menu--active"),document.body.removeAttribute("style","overflow: hidden;"),a.classList.add("dashboard__background--active"),r.classList.add("dashboard__modal-help--active")}),b.addEventListener("click",()=>{u.classList.add("navigation__mobile-background--active"),v.classList.add("navigation__mobile-menu--active"),document.body.setAttribute("style","overflow: hidden;")}),h.addEventListener("click",()=>{u.classList.remove("navigation__mobile-background--active"),v.classList.remove("navigation__mobile-menu--active"),document.body.removeAttribute("style","overflow: hidden;")});
//# sourceMappingURL=index.7f20a718.js.map