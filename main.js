
//     let sandwichMenu = document.querySelector('.menu-btn')
//     let responsiveMenu = document.querySelector('.menu')
//     let menuIcon = document.querySelector('#side-menu-icon')

// sandwichMenu.addEventListener('click', () => {
//     responsiveMenu.classList.toggle('active')
//     menuIcon.classList.toggle('fa-times')
// })

// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
//     document.getElementById("navbar").className = "scroll-on-Y"
//     document.getElementById('logo').className ='logo-black'
//   } else {
//     document.getElementById("navbar").className = "";
//     document.getElementById('logo').className = ""

//   }
// }
// const menuIcon = document.querySelector('#icon')


const navTogggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav_link')

navTogggle.addEventListener('click', () => {
    document.body.classList.toggle('nav_open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav_open')
    })
})




