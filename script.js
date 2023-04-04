var navbar = document.getElementById("navbar")
var navbarvalue = 150
window.onscroll = NavbarPositioner
function NavbarPositioner () {
  if (document.documentElement.scrollTop > navbarvalue) {
    navbar.style.top = "0px"
    navbar.style.position = "fixed"
    navbar.style.width = "100%"
  }
  else {
    navbar.style.top = navbarvalue + "px"
    navbar.style.position = "absolute";
    navbar.style.width = "calc(100% - 14.5px)"
  }
}
NavbarPositioner ()

var searchbar = document.getElementById("searchbar")
var mg = document.getElementById("mg")
searchbar.addEventListener("mouseenter", function () {
  searchbar.style.width = "210px"
  searchbar.style.left = "20px"
  mg.style.left = "10px"
})
searchbar.addEventListener("mouseleave", function () {
  searchbar.style.width = "160px"
  searchbar.style.left = "0px"
  mg.style.left = "-10px"
})
var searchbar2 = document.getElementById("searchbar2")
var mg2 = document.getElementById("mg2")
searchbar2.addEventListener("mouseenter", function () {
  searchbar2.style.width = "30vw"
  searchbar2.style.left = "-20px"
  mg2.style.left = "-27px"
})
searchbar2.addEventListener("mouseleave", function () {
  searchbar2.style.width = "25vw"
  searchbar2.style.left = "0px"
  mg2.style.left = "-10px"
})

var animation1 = document.getElementsByClassName("animation1")
var animationtxt1 = document.getElementsByClassName("animationtxt1")
for (let i = 0; i < animation1.length; i++) {
  let indicator = document.createElement("img")
  indicator.style.transitionDuration = "0.2s"
  indicator.style.height = "16.8px"
  indicator.style.width = "53.44px"
  indicator.style.display = "block"
  indicator.style.marginRight = "auto"
  indicator.style.marginLeft = "auto"
  indicator.style.marginTop = "5px"
  indicator.style.opacity = 0
  indicator.src = "img/indicatorAsset 1.png"
  animation1[i].appendChild(indicator)
  animationtxt1[i].addEventListener("mouseenter", function () {
    animation1[i].style.top = "6px"
    indicator.style.top = "0px"
    indicator.style.opacity = 1
  })
  animation1[i].addEventListener("mouseleave", function () {
    animation1[i].style.top = "16px"
    indicator.style.top = "10px"
    indicator.style.opacity = 0
  })
}

var login = document.getElementById("login")
var register = document.getElementById("register")
login.addEventListener("mouseenter", function () {
  login.style.textDecoration = "underline"
})
login.addEventListener("mouseleave", function () {
  login.style.textDecoration = "none"
})
register.addEventListener("mouseenter", function () {
  register.style.textDecoration = "underline"
})
register.addEventListener("mouseleave", function () {
  register.style.textDecoration = "none"
})

var articlearray = document.getElementsByClassName("article")
var articleimgarray = document.getElementsByClassName("articleimg")
var articletxtarray = document.getElementsByClassName("articletxt")
for (let i = 0; i < articlearray.length; i++) {
  articlearray[i].addEventListener("mouseenter", function () {
    articleimgarray[i].style.borderRadius = "0px"
    articleimgarray[i].style.scale = 1.1
    articletxtarray[i].style.top = "25px"
  })

  articlearray[i].addEventListener("mouseleave", function () {
    articleimgarray[i].style.borderRadius = "20px"
    articleimgarray[i].style.scale = 1
    articletxtarray[i].style.top = "5px"
  })
}

var infobox = document.getElementsByClassName("infobox")
var infoa = document.getElementsByClassName("infoa")
for (let i = 0; i < infoa.length; i++) {
  let arrow = document.createElement("div")
  infobox[i].appendChild(arrow)
  arrow.style.width = 0
  arrow.style.height = 0
  arrow.style.borderTop = "15px solid transparent"
  arrow.style.borderBottom = "15px solid transparent"
  arrow.style.borderLeft = "25px solid red"
  arrow.style.borderRadius = "4px"
  arrow.style.opacity = 0
  arrow.style.left = - 70 + "px"
  arrow.style.top = 21 + "px"
  arrow.style.transitionProperty = "opacity, left"
  arrow.style.transitionDuration = "0.2s"
  arrow.style.position = "absolute"
  infoa[i].addEventListener("mouseenter", function () {
    arrow.style.opacity = 1
    infoa[i].style.left = "20px"
    arrow.style.left = - 20 + "px"
  })
  infobox[i].addEventListener("mouseleave", function () {
    arrow.style.opacity = 0
    infoa[i].style.left = "0px"
    arrow.style.left = - 70 + "px"
  })
}

var mediaico = document.getElementsByClassName("media")
for (let i = 0; i < mediaico.length; i++) {
  let circle = document.createElement("div")
  let x
  let y
  circle.style.borderRadius = "50%"
  circle.style.transitionDuration = "0.2s"
  circle.style.position = "absolute"
  circle.style.width = "80px"
  circle.style.height = "80px"
  circle.style.border = "3.5px solid red"
  if (i == 0) {
    x = 14
    y = 14
  }
  else if (i == 1) {
    x = 12
    y = 13
  }
  else if (i == 2) {
    x = 13
    y = 14
  }
  else if (i == 3) {
    x = 7
    y = 6
  }
  circle.style.left = mediaico[i].clientLeft - x + "px"
  circle.style.top = mediaico[i].clientTop - y + "px"
  mediaico[i].appendChild(circle)
  circle.style.opacity = 0
  mediaico[i].addEventListener("mouseenter", function () {
    circle.style.opacity = 1
    mediaico[i].style.scale = "90%"
  })
  mediaico[i].addEventListener("mouseleave", function () {
    circle.style.opacity = 0
    mediaico[i].style.scale = "100%"
  })
}

var menuIcon = document.getElementById("menuIcon")
var menuCont = document.getElementById("menuCont")
var hardtyre = document.getElementById("hardtyre")
var softtyre = document.getElementById("softtyre")
var degs = 0
var acc = 0
var interval1
var interval2
menuIcon.addEventListener("mouseenter", function () {
  acc = 5
  softtyre.style.opacity = 1
  clearInterval(interval2)
  interval1 = setInterval(wheelSpin, 20)
  navbar.style.borderBottomRightRadius = 0
  menuCont.style.right = "0px"
})
menuCont.addEventListener("mouseleave", function () {
  softtyre.style.opacity = 0
  clearInterval(interval1)
  interval2 = setInterval(brake, 20)
  navbar.style.borderBottomRightRadius = "15px"
  menuCont.style.right = "-300px"
})
function wheelSpin() {
  if (acc < 40) {
    acc += 0.1
  }
  degs += acc
  softtyre.style.transform = "rotate(" + degs + "deg)"
  hardtyre.style.transform = "rotate(" + degs + "deg)"
}
function brake() {
  if (acc > 0) {
    acc -= 0.2
  }
  else {
    acc = 0
    clearInterval(interval2)
  }
  degs += acc
  softtyre.style.transform = "rotate(" + degs + "deg)"
  hardtyre.style.transform = "rotate(" + degs + "deg)"
}

var body = document.getElementsByTagName("body")[0]
var articles = document.getElementById("articles")
var menu = document.getElementById("menu")
var menuCats = document.getElementsByClassName("menuCats")
var menuCatsContCont = document.getElementById("menuCatsContCont")
var menuHeight = 80
function Organizer () {
  menuHeight = 85
  for (i = 0; i < menuCats.length; i++) {
    if (window.getComputedStyle(animationtxt1[i]).display == "none") {
      menuCats[i].style.display = "block"
      menuHeight += 45
      menu.style.height = menuHeight + "px"
      menuCont.style.height = menuHeight + 90 + "px"
      menuCatsContCont.style.height = menuHeight - 130 + "px"
    }
    else {
      menuCats[i].style.display = "none"
      menu.style.height = menuHeight + "px"
      menuCont.style.height = menuHeight + 90 + "px"
      menuCatsContCont.style.height = menuHeight - 130 + "px"
    }
  }

  body.style.height = articles.clientHeight + 900 + "px"
  console.log(articles.clientHeight)
}
Organizer ()
window.addEventListener("resize", Organizer)

var menuLogin = document.getElementById("menuLogin")
var menuRegister = document.getElementById("menuRegister")
menuLogin.addEventListener("mouseenter", function () {
  menuLogin.style.textDecoration = "underline"
})
menuLogin.addEventListener("mouseleave", function () {
  menuLogin.style.textDecoration = "none"
})
menuRegister.addEventListener("mouseenter", function () {
  menuRegister.style.textDecoration = "underline"
})
menuRegister.addEventListener("mouseleave", function () {
  menuRegister.style.textDecoration = "none"
})

var menuCatsCont = document.getElementsByClassName("menuCatsCont")
for (let i = 0; i < menuCats.length; i++) {
  let arrow = document.createElement("div")
  menuCatsCont[i].appendChild(arrow)
  arrow.style.width = 0
  arrow.style.height = 0
  arrow.style.borderTop = "10px solid transparent"
  arrow.style.borderBottom = "10px solid transparent"
  arrow.style.borderLeft = "18px solid red"
  arrow.style.borderRadius = "3px"
  arrow.style.opacity = 0
  arrow.style.left = - 60 + "px"
  arrow.style.top = 12 + "px"
  arrow.style.transitionProperty = "opacity, left"
  arrow.style.transitionDuration = "0.2s"
  arrow.style.position = "absolute"
  menuCats[i].addEventListener("mouseenter", function () {
    arrow.style.opacity = 1
    menuCats[i].style.left = "20px"
    arrow.style.left = - 10 + "px"
  })
  menuCatsCont[i].addEventListener("mouseleave", function () {
    arrow.style.opacity = 0
    menuCats[i].style.left = "0px"
    arrow.style.left = - 60 + "px"
  })
}