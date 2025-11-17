

document.querySelectorAll('.carousel').forEach(carousel => {
  const slides = carousel.querySelector('.slides');
  const slideElems = carousel.querySelectorAll('.slide');
  const slideCount = slideElems.length;
  let index = 0;

  const resetInactiveVideos = () => {
    slideElems.forEach((slide, i) => {
      const video = slide.querySelector('video');
      if (!video) return; //slide aint video

      if (i !== index) { //resets inactive 
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  const update = () => {
    slides.style.transform = `translateX(${-index * 100}%)`;
    resetInactiveVideos();  // mute inactive slides' vids
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