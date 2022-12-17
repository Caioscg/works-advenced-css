const plus = document.querySelector("#plus")
const layout = document.querySelector(".layout")
const x = document.querySelector("#x")
const green =  document.querySelector("#green")
const blue =  document.querySelector("#blue")
const red =  document.querySelector("#red")
const yellow =  document.querySelector("#yellow")
const body = document.querySelector("body")

plus.addEventListener("click", toggleScreen)
x.addEventListener("click", toggleScreen)
green.addEventListener("click", greenColor)
blue.addEventListener("click", blueColor)
red.addEventListener("click", redColor)
yellow.addEventListener("click", yellowColor)

function toggleScreen() {
    layout.classList.toggle("hide")
    plus.classList.toggle("hide")
}

function greenColor() {
    body.classList.remove("red")
    body.classList.remove("blue")
    body.classList.remove("yellow")

    body.classList.add(`green`)
}
function blueColor() {
    body.classList.remove("red")
    body.classList.remove("green")
    body.classList.remove("yellow")

    body.classList.add(`blue`)
}
function redColor() {
    body.classList.remove("green")
    body.classList.remove("blue")
    body.classList.remove("yellow")

    body.classList.add(`red`)
}
function yellowColor() {
    body.classList.remove("red")
    body.classList.remove("blue")
    body.classList.remove("green")

    body.classList.add(`yellow`)
}
