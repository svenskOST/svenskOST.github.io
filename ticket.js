function SubmitFunc () {
    
}

var namee = document.getElementById("name")
var email = document.getElementById("email")
var topics = document.getElementById("topics")
var message = document.getElementById("message")
var submit = document.getElementById("submit")
var checkmark = document.getElementById("checkmark")
var submittedText = document.getElementById("submittedText")
function SubmitAnim () {
    namee.style.opacity = 0
    email.style.opacity = 0
    topics.style.opacity = 0
    message.style.opacity = 0
    submit.style.opacity = 0
    checkmark.style.display = "block"
    anim()
    setTimeout(function () {
        submittedText.style.opacity = 1
    }, 1500)
}

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
    SubmitAnim()
    SubmitFunc()
})