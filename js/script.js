let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}


document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
};

let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

registerBtn.onclick = () =>{
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
  document.querySelector('.account-form .login-form').classList.remove('active');
  document.querySelector('.account-form .register-form').classList.add('active');
};

loginBtn.onclick = () =>{
  registerBtn.classList.remove('active');
  loginBtn.classList.add('active');
  document.querySelector('.account-form .login-form').classList.add('active');
  document.querySelector('.account-form .register-form').classList.remove('active');
};





let accountform = document.querySelector('.account-form')

document.querySelector('#account-btn').onclick = () =>{
    accountform.classList.add('active');
}


document.querySelector('#close-form').onclick = () =>{
    accountform.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true,/* swiper-pagination click boganda ham rasim boshqa rasimga otishi uchun*/
    },
    grabCursor:true,/* cursor pointer ga oxhsab ishlidi  */
    loop:true, /* infinitive turiga oxshidi beskonechno aylanadi */
  });
  
var swiper = new Swiper(".home-courses-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20, /* tipa otstupla beradi paddindla marginla */
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".teachers-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20, /* tipa otstupla beradi paddindla marginla */
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20, /* tipa otstupla beradi paddindla marginla */
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".logo-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20, /* tipa otstupla beradi paddindla marginla */
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      
      1200: {
        slidesPerView: 5,
      },
    },
  });
  
  let accordion = document.querySelectorAll('.faq .accordion-container .accordion');
  accordion.forEach(acco =>{
      acco.onclick = () =>{
        accordion.forEach(dion => dion.classList.remove('active'));
        acco.classList.toggle('active');
      };
  });
  
  
  document.querySelector('.load-more .btn').onclick = () =>{
      document.querySelectorAll('.courses .box-container .hide').forEach(show =>{
          show.style.display= 'block';
      });
      document.querySelector('.load-more .btn').style.display = 'none';
  };