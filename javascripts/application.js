// This is where it all goes :)
if (window.matchMedia("(max-width: 1000px)").matches) {
  var contact = document.querySelector('.contact')
  contact.addEventListener('click', ()=> {
      document.getElementById('check').checked = false;
      window.scroll(0,1000000);
  })
}
