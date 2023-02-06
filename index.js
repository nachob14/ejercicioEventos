const boton = document.querySelector("#btn")

boton.addEventListener("click", () => {
    alert('Click en el boton')
})

$(document).ready(() => {
    $("#btn").click(() => {
        console.log("Hola, estoy utilizando jQuery")
    })
})