var submit = document.getElementById("submit")

submit.addEventListener("mouseenter", function () {
    submit.style.scale = "120%"
})
submit.addEventListener("mouseleave", function () {
    submit.style.scale = "100%"
})
submit.addEventListener("mousedown", function () {
    submit.style.scale = "100%"
})
submit.addEventListener("mouseup", function () {
    submit.style.scale = "120%"
    submitAnim()
    submitFunc()
})