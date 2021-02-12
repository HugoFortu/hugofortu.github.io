// This is where it all goes :)
if (window.matchMedia("(max-width: 1000px)").matches) {
  var contact = document.querySelector('.contact')
  contact.addEventListener('click', ()=> {
      document.getElementById('check').checked = false;
      window.scroll(0,1000000);
  })
}

if (window.matchMedia("(min-width: 1001px)").matches) {
  var contact = document.querySelector('.contact')
  contact.addEventListener('click', ()=> {
      window.scroll(0,1000000);
  })
}
// const source = document.querySelector('.source');

// source.addEventListener('copy', (event) => {
//     const selection = document.getSelection();
//     event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
//     event.preventDefault();
// });
