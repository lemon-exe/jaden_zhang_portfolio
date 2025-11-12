

document.querySelectorAll('.carousel').forEach(carousel => {
  const slides = carousel.querySelector('.slides');
  const slideCount = carousel.querySelectorAll('.slide').length;
  let index = 0;

  const update = () => {
    slides.style.transform = `translateX(${-index * 100}%)`;
  };

  carousel.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % slideCount;
    update();
  });

  carousel.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + slideCount) % slideCount;
    update();
  });
});



window.addEventListener('scroll', function() {
  const topbar = document.getElementById('topbar');
	
  //alert('scroll detected');
  if (window.scrollY > 40) { 
	//alert('scroll detected');
    topbar.classList.add('scrolled');
  } else {
    topbar.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', () => {
  const img = document.querySelector('.bk_parallax');
  const scrollTop = window.scrollY;
  img.style.transform = `translateY(${scrollTop * .2}px)`; // lower factor = slower motion
});