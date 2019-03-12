const menu = document.querySelector(".main-header__menu")
const burger = document.querySelector(".main-header__burger")
console.log(burger)
console.log(menu)

burger.addEventListener('click', () => {
    menu.classList.toggle('main-header__menu--closed')
})

