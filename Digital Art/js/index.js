//Cuando hago CLICK en el Header-svg,
    // Header-nav le añado la clase `esVisible`

const Headersvg=document.querySelector(`.Header-svg`)
const Headernav=document.querySelector(`.Header-nav`)

console.log(Headersvg)
console.log(Headernav)

Headersvg.addEventListener(`click`,()=>{
    Headernav.classList.toggle(`esVisible`)
})