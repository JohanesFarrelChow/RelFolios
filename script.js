function scrollToTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
    window.addEventListener('scroll',
    function() {
      var scrollToTopButton = document.querySelector('.scroll-to-top');
      if (window.scrollY > 300) {
        
        scrollToTopButton.classList.add('show');
      } else {
        
        scrollToTopButton.classList.remove('show');
      }
    });
    
    function toggleMenu () {
      var menu = document.getElementById('menu');
      menu.classList.toggle('active');
    }