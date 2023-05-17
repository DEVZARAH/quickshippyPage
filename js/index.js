const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
// const searchInput = document.getElementById('dataSearch')
// const filter = input.value.toUpperCase();
// searchInput.addEventListener("input" ,(e)=>{
// const value = e.target.value
// console.log(value)
// })


btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})


