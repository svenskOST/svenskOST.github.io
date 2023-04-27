var namee = document.getElementById("name")
var email = document.getElementById("email")
var topics = document.getElementById("topics")
var message = document.getElementById("message")
var submit = document.getElementById("submit")
var checkmark = document.getElementById("checkmark")
var submittedText = document.getElementById("submittedText")

function Capitalize () {
    var firstChar = namee.value[0]
    if (firstChar != firstChar.toUpperCase()) {
        namee.value[0] = firstChar.toUpperCase()
        console.log(namee.value[0])
    }
}

function SubmitFunc () {
    Capitalize ()
    console.log("Name: " + namee.value)
    console.log("From: " + email.value)
    console.log("Topic: " + topics.value)
    console.log(message.value)
}

function SubmitAnim () {
    namee.style.opacity = 0
    email.style.opacity = 0
    topics.style.opacity = 0
    message.style.opacity = 0
    submit.style.opacity = 0
    setTimeout(function () {
        submit.style.display = "none"
    }, 500)
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
    if (namee.value.length == 0) {
        error1 = true
        Error1()
    }
    if (email.value.length == 0) {
        error2 = true
        Error2()
    }
    if (topics.value == "none") {
        error3 = true
        Error3()
    }
    if (message.value.length == 0) {
        error4 = true
        Error4()
    }
    if (error1 == true || error2 == true || error3 == true || error4 == true) {
        submit.value = "Error"
    }
})
submit.addEventListener("mouseup", function () {
    submit.style.scale = "120%"
    if (error1 == false && error2 == false && error3 == false && error4 == false) {
        SubmitAnim()
        SubmitFunc()
    }
    else {
        setTimeout(function () {
            submit.value = "Submit"
        }, 1000)
    }
})

var errorText1 = document.getElementById("errorText1")
var errorText2 = document.getElementById("errorText2")
var errorText3 = document.getElementById("errorText3")
var errorText4 = document.getElementById("errorText4")
var error1 = false
var error2 = false
var error3 = false
var error4 = false

function Error1 () {
    namee.style.color = "#FF0000"
    namee.style.border = "2px solid red"
    namee.style.outline = "none"
    errorText1.style.display = "block"
}
function Error2 () {
    email.style.color = "#FF0000"
    email.style.border = "2px solid red"
    email.style.outline = "none"
    errorText2.style.display = "block"
}
function Error3 () {
    topics.style.border = "2px solid red"
    topics.style.outline = "none"
    errorText3.style.display = "block"
}
function Error4 () {
    message.style.border = "2px solid red"
    message.style.outline = "none"
    errorText4.style.display = "block"
}

function containsNums(string) {
    return /\d/.test(string)
}

namee.addEventListener("change", function () {
    if (containsNums(namee.value)) {
        error1 = true
    }
    else {
        error1 = false
        namee.style.color = "black"
        namee.style.border = "none"
        namee.style.outline = "revert"
        errorText1.style.display = "none"
    }

    if (error1 == true) {
        Error1()
    }
})

email.addEventListener("change", function () {
    if (!email.value.includes('@')) {
        error2 = true
    }
    else if (!email.value.includes('.')) {
        error2 = true
    }
    else {
        error2 = false
        email.style.color = "black"
        email.style.border = "none"
        email.style.outline = "revert"
        errorText2.style.display = "none"
    }

    if (error2 == true) {
        Error2()
    }
})

topics.addEventListener("change", function () {
    if (error3) {
        error3 = false
        topics.style.border = "none"
        topics.style.outline = "revert"
        errorText3.style.display = "none"
    }
})

message.addEventListener("change", function () {
    if (error4) {
        error4 = false
        message.style.border = "none"
        message.style.outline = "revert"
        errorText4.style.display = "none"
    }
})
