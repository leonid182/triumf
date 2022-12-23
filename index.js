const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
  
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
      
     
      300: {
        slidesPerView: 1,
      
      },
      400: {
        slidesPerView: 1,
      
      },
      600: {
        slidesPerView: 1,
      
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1060: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        spaceBetween: 50
      }
      
    },
    
  });

  