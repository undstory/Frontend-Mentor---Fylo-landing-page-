const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.nav__list--mobile');
let menuLinkMobile = document.querySelectorAll('.nav__link--mobile');  

    let mobileMenu = false; 

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    (mobileMenu) ? menu.style.display = "none" : menu.style.display = "flex";
    mobileMenu = !mobileMenu;   
})

menuLinkMobile.forEach(function(el){
    el.addEventListener('click', function(){
        menu.style.display = "none";
        mobileMenu = !mobileMenu;
    })
})