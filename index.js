const $navBtn = document.getElementById('nav-btn')
const $nav = document.getElementById('nav')
const media = window.matchMedia('max-width: 1220')

$navBtn.addEventListener('click', toggleNav)

function toggleNav() {
  $nav.classList.toggle('active')
  $navBtn.classList.toggle('close')
  $navBtn.classList.toggle('fa-bars')
  $navBtn.classList.toggle('fa-times')
}
