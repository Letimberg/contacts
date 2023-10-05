const btn = document.querySelector(".btn")
const pink = document.querySelector(".pink")

btn.onclick = function () {
    this.classList.toggle("active")
    pink.classList.toggle("active")
}
