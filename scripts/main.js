const menuBtn = document.querySelector("#btn-mobile")
const menuDiv = document.querySelector(".menu-open")

menuBtn.addEventListener('click', () => {
  menuDiv.classList.toggle('on')
})