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
  img.style.transform = `translateY(${scrollTop * .3}px)`; // lower factor = slower motion
});