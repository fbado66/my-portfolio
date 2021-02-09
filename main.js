
    let sandwichMenu = document.querySelector('.menu-btn')
    let responsiveMenu = document.querySelector('.menu')
    let menuIcon = document.querySelector('#side-menu-icon')

sandwichMenu.addEventListener('click', () => {
    responsiveMenu.classList.toggle('active')
    menuIcon.classList.toggle('fa-times')
})

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").className = "scroll-on-Y";
  } else {
    document.getElementById("navbar").className = "";
  }
}





