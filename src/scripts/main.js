const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')
const header = document.querySelector('.container.header')


burger.addEventListener('click', () => {
  menu.classList.toggle('open')
  burger.classList.toggle('open')
  body.classList.toggle('open')
})

document.addEventListener('scroll', (e) => {
  if (window.scrollY > 30) 
    header.classList.add('scrolled')
  else  header.classList.remove('scrolled')
})