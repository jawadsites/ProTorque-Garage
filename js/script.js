
let menu =document.querySelector('#menu-btn');
let navbar =document.querySelector('.navbar');

// Hide preloader and show content after page load
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content1");

  setTimeout(() => {
      preloader.style.display = "none";
      content.style.display = "block";
  }, 1500); // Adjust the delay as needed
});


menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

document.querySelector('#login-btn').onclick =() =>{
    document.querySelector('.login-form-container').classList.toggle('active');   
}
document.querySelector('#close-login-form').onclick =() =>{
    document.querySelector('.login-form-container').classList.remove('active');   
}
window.onscroll =() =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
window.onload =() =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

};
document.querySelector('.home').onmousemove = (e) =>{
    document.querySelectorAll('.home-parallax').forEach(elm =>{
      
     let speed = elm.getAttribute('data-speed');
     let x =(window.innerWidth - e.pageX * speed) / 90;
     let y =(window.innerHeight- e.pageY * speed) / 90;
     
     elm.style.transform= `translateX(${y}px) translateY(${x}px)`;
    });
}

document.querySelector('.home').onmouseleave = () =>{
    document.querySelectorAll('.home-parallax').forEach(elm =>{

     elm.style.transform= `translateX(0px) translateY(0px)`;
    });
}

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
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

  var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
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

window.addEventListener('scroll',() =>{
  const endMessage =document.getElementById('endMessage');
  const scrollPosition=window.innerHeight+window.scrollY;
  const pageHeight=document.documentElement.scrollHeight;

  if(scrollPosition >= pageHeight-20){
    endMessage.classList.add('visible');
  }else{
    endMessage.classList.remove('visible');

  }
});
  <!-- Hotjar Tracking Code for https://jawadsites.github.io/ProTorque-Garage/ -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5280417,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
