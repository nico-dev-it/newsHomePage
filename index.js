const menuButton = document.querySelector('#hamburger')
const menuContainer = document.querySelector('#mobileMenu')
const closeMenu = document.querySelector('#close')

menuButton.addEventListener('click', () => {
    menuContainer.style.display = 'flex'
    menuButton.classList.toggle("active");
    body.classList.toggle("blur");
})

closeMenu.addEventListener('click', () => {
    menuContainer.style.display = 'none'
})
