var media = window.matchMedia("(min-width: 1600px)")
var media2 = window.matchMedia("(max-width: 1599px)")

var topbrand = document.getElementById("topbrand")
var toplogo = document.getElementById("toplogo")
var topmotto = document.getElementById("topmotto")
var categoriesarray = document.getElementsByClassName("categories")
var indicatorarray = document.getElementsByClassName("indicator")
var articletxtarray = document.getElementsByClassName("articletxt")
var h1 = document.querySelector("h1")
var h2 = document.querySelectorAll("h2")
var mainarticletxt = document.getElementById("mainarticle")
var articlep = document.querySelectorAll("p")
var account = document.getElementById("account")
var originalimgwidth = articleimg1.clientWidth
var originalwidth = [
  articlearray[0].clientWidth, 
  articlearray[1].clientWidth, 
  articlearray[2].clientWidth, 
  articlearray[3].clientWidth
]
var originalheight = [
  articlearray[0].clientHeight, 
  articlearray[1].clientHeight, 
  articlearray[2].clientHeight, 
  articlearray[3].clientHeight
]
var originalwidth2 = [
  articleimgarray[0].clientWidth,
  articleimgarray[1].clientWidth,
  articleimgarray[2].clientWidth,
  articleimgarray[3].clientWidth
]
var originalheight2 = [
  articleimgarray[0].clientHeight,
  articleimgarray[1].clientHeight,
  articleimgarray[2].clientHeight,
  articleimgarray[3].clientHeight
]
var originalwidth3 = [
  articletxtarray[0].clientWidth,
  articletxtarray[1].clientWidth,
  articletxtarray[2].clientWidth,
  articletxtarray[3].clientWidth
]
var originalh2 = [
  h2[0],
  h2[1],
  h2[2]
]
var originalp = [
  articlep[0],
  articlep[1],
  articlep[2]
]

if (media.matches) {
    navbarvalue = 171.25
    topbrand.style.width = "750px"
    topbrand.style.height = "125px"
    topbrand.style.top = "10px"
    topbrand.style.left = "41.25px"
    toplogo.style.width = "168.75px"
    toplogo.style.height = "156.25px"
    topmotto.style.width = "562.5px"
    topmotto.style.fontSize = "28.75pt"
    topmotto.style.top = "-118.75px"
    topmotto.style.left = "200px"
    navbar.style.height = "106.25px"
    navbar.style.top = "171.25px"

    for (let x = 0; x < categoriesarray.length; x++) {
        let categories = categoriesarray[x]
        categories.style.fontSize = "27.5pt"
    }
    for (let x = 0; x < indicatorarray.length; x++) {
        let indicator = indicatorarray[x]
        indicator.style.height = "21px"
        indicator.style.width = "66.8px"
    }
    articles.style.top = "212.5px"
    for (let x = 0; x < articlearray.length; x++) {
        let article = articlearray[x]
        let articleimg = articleimgarray[x]
        let articletxt = articletxtarray[x]
        article.style.width = originalwidth[x] * 1.25 - 100 + "px"
        article.style.height = originalheight[x] * 1.25 - 100 + "px"
        articleimg.style.width = originalwidth2[x] * 1.25 + "px"
        articleimg.style.height = originalheight2[x] * 1.25 + "px"
        articletxt.style.width = originalwidth3[x] * 1.25 + "px"
    }
    for (let x = 0; x < h2.length; x++) {
        let h2 = originalh2[x]
        let articlep = originalp[x]
        h2.style.fontSize = "30pt"
        h2.style.top = "7px"
        h2.style.left = "6.25px"
        articlep.style.fontSize = "20pt"
        articlep.style.top = "14px"
        articlep.style.left = "6.25px"
    }
    h1.style.fontSize = "35pt"
    h1.style.top = "-8px"
    h1.style.left = "3.75px"
    mainarticletxt.style.fontSize = "22.5pt"
    mainarticletxt.style.top = "-14px"
    mainarticletxt.style.left = "3.75px"
}
if (window.innerWidth < 1450) {
    account.style.display = "none"
}
if (window.innerWidth < 1010) {
    search.style.display = "none"
}

window.onresize = function () {
    var search = document.getElementById("search")
    search.style.transitionProperty = "opacity"
    search.style.transitionDuration = "0.2s"
    account.style.transitionProperty = "opacity"
    account.style.transitionDuration = "0.2s"
    if (window.innerWidth < 1010) {
        search.style.opacity = 0
        setTimeout(function () {
            search.style.display = "none"
        }, 200)
    }
    else {
        search.style.display = "flex"
        setTimeout(function () {
            search.style.opacity = 1
        }, 200)
    }
    if (window.innerWidth < 1450) {
        account.style.opacity = 0
        setTimeout(function () {
            account.style.display = "none"
        }, 200)
    }
    else {
        account.style.display = "flex"
        setTimeout(function () {
            account.style.opacity = 1
        }, 200)
    }
    if (media.matches && articleimg1.clientWidth == originalimgwidth) {
        navbarvalue = 171.25
        topbrand.style.transitionDuration = "0.5s"
        toplogo.style.transitionDuration = "0.5s"
        topmotto.style.transitionDuration = "0.5s"
        navbar.style.transitionProperty = "height;top"
        navbar.style.transitionDuration = "0.5s"
        topbrand.style.width = "750px"
        topbrand.style.height = "125px"
        topbrand.style.top = "10px"
        topbrand.style.left = "41.25px"
        toplogo.style.width = "168.75px"
        toplogo.style.height = "156.25px"
        topmotto.style.width = "562.5px"
        topmotto.style.fontSize = "28.75pt"
        topmotto.style.top = "-118.75px"
        topmotto.style.left = "200px"
        navbar.style.height = "106.25px"
        if (document.documentElement.scrollTop < 171.25) {
            navbar.style.top = "171.25px"
        }
        for (let x = 0; x < categoriesarray.length; x++) {
            let categories = categoriesarray[x]
            categories.style.transitionProperty = "fontSize"
            categories.style.transitionDuration = "0.5s"
            categories.style.fontSize = "27.5pt"
        }
        for (let x = 0; x < indicatorarray.length; x++) {
            let indicator = indicatorarray[x]
            indicator.style.height = "21px"
            indicator.style.width = "66.8px"
        }
        articles.style.transitionDuration = "0.5s"
        articles.style.top = "212.5px"
        for (let x = 0; x < articlearray.length; x++) {
            let article = articlearray[x]
            let articleimg = articleimgarray[x]
            let articletxt = articletxtarray[x]
            article.style.transitionDuration = "0.5s"
            articleimg.style.transitionDuration = "0.5s"
            articletxt.style.transitionDuration = "0.5s"
            article.style.width = originalwidth[x] * 1.25 - 100 + "px"
            article.style.height = originalheight[x] * 1.25 - 100 + "px"
            articleimg.style.width = originalwidth2[x] * 1.25 + "px"
            articleimg.style.height = originalheight2[x] * 1.25 + "px"
            articletxt.style.width = originalwidth3[x] * 1.25 + "px"
        }
        for (let x = 0; x < h2.length; x++) {
            let h2 = originalh2[x]
            let articlep = originalp[x]
            h2.style.transitionDuration = "0.5s"
            articlep.style.transitionDuration = "0.5s"
            h2.style.fontSize = "30pt"
            h2.style.top = "7px"
            h2.style.left = "6.25px"
            articlep.style.fontSize = "20pt"
            articlep.style.top = "14px"
            articlep.style.left = "6.25px"
        }
        h1.style.transitionDuration = "0.5s"
        mainarticletxt.style.transitionDuration = "0.5s"
        h1.style.fontSize = "35pt"
        h1.style.top = "-8px"
        h1.style.left = "3.75px"
        mainarticletxt.style.fontSize = "22.5pt"
        mainarticletxt.style.top = "-14px"
        mainarticletxt.style.left = "3.75px"
    }
    if (media2.matches && articleimg1.clientWidth != originalimgwidth) {
        navbarvalue = 137
        topbrand.style.transitionDuration = "0.5s"
        toplogo.style.transitionDuration = "0.5s"
        topmotto.style.transitionDuration = "0.5s"
        navbar.style.transitionProperty = "height;top"
        navbar.style.transitionDuration = "0.5s"
        topbrand.style.width = "600px"
        topbrand.style.height = "100px"
        topbrand.style.top = "8px"
        topbrand.style.left = "33px"
        toplogo.style.width = "135px"
        toplogo.style.height = "125px"
        topmotto.style.width = "450px"
        topmotto.style.fontSize = "23pt"
        topmotto.style.top = "-95px"
        topmotto.style.left = "160px"
        navbar.style.height = "85px"
        if (document.documentElement.scrollTop < 137) {
            navbar.style.top = "137px"
        }
        for (let x = 0; x < categoriesarray.length; x++) {
            let categories = categoriesarray[x]
            categories.style.transitionProperty = "fontSize"
            categories.style.transitionDuration = "0.5s"
            categories.style.fontSize = "22pt"
        }
        for (let x = 0; x < indicatorarray.length; x++) {
            let indicator = indicatorarray[x]
            indicator.style.height = "16.8px"
            indicator.style.width = "53.44px"
        }
        articles.style.transitionDuration = "0.5s"
        articles.style.top = "170px"
        for (let x = 0; x < articlearray.length; x++) {
            let article = articlearray[x]
            let articleimg = articleimgarray[x]
            let articletxt = articletxtarray[x]
            article.style.transitionDuration = "0.5s"
            articleimg.style.transitionDuration = "0.5s"
            articletxt.style.transitionDuration = "0.5s"
            article.style.width = originalwidth[x] * 1 - 100 + "px"
            article.style.height = originalheight[x] * 1 - 100 + "px"
            articleimg.style.width = originalwidth2[x] * 1 + "px"
            articleimg.style.height = originalheight2[x] * 1 + "px"
            articletxt.style.width = originalwidth3[x] * 1 + "px"
        }
        for (let x = 0; x < h2.length; x++) {
            let h2 = originalh2[x]
            let articlep = originalp[x]
            h2.style.transitionDuration = "0.5s"
            articlep.style.transitionDuration = "0.5s"
            h2.style.fontSize = "24pt"
            h2.style.top = "0px"
            h2.style.left = "5px"
            articlep.style.fontSize = "16pt"
            articlep.style.top = "0px"
            articlep.style.left = "5px"
        }
        h1.style.transitionDuration = "0.5s"
        mainarticletxt.style.transitionDuration = "0.5s"
        h1.style.fontSize = "28pt"
        h1.style.top = "-6px"
        h1.style.left = "3px"
        mainarticletxt.style.fontSize = "18pt"
        mainarticletxt.style.top = "-11.5px"
        mainarticletxt.style.left = "3px"
    }
}