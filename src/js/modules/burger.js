const burgerMenu = () => {
  const burgerBtn = document.querySelector('.burger-btn')
  const burgerLines = document.querySelectorAll('.line')
  const menu = document.querySelector('.top-menu')

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-btn_active')
    menu.classList.toggle('top-menu_active')

    // Анимация кнопки
    burgerLines.forEach(elem => {
      elem.classList.toggle('active')
    })
  })
}

export default burgerMenu
