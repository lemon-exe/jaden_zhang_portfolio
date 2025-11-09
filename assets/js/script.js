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