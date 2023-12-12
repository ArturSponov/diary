let createhomew = document.querySelector(".createhomew")
    let podul1 = document.querySelector(".podul1")
        let pop = document.querySelector(".pop")
        let podul2 = document.querySelector(".podul2")
    let podul3 = document.querySelector(".podul3")
    let podul4 = document.querySelector(".podul4")
    let podul5= document.querySelector(".podul5")
    let useritem2 = document.querySelector(".useritem2")
let panel2 = document.querySelector(".panel2")
    let h21 = document.querySelector(".h21")
    let h12 = document.querySelector(".h12")
    let clear = document.querySelector(".clear")
    let mainpanel2 = document.querySelector(".mainpanel2")
    let hello = document.querySelector(".hello")
    let submit = document.querySelector(".submit")
    let absolut1 = document.querySelector(".absolut1")
    let absolut2 = document.querySelector(".absolut2")
    let absolut3 = document.querySelector(".absolut3")
    let absolut4 = document.querySelector(".absolut4")
    let absolut5 = document.querySelector(".absolut5")
    let panel = document.querySelector('.panel')
    let pan = document.querySelector('.pan')
    let en = document.querySelector(".en")
    let ru = document.querySelector(".ru")
    let alluser = document.querySelector(".alluser")
    let useritem = document.querySelector(".useritem")
    let mainpanel = document.querySelector(".mainpanel")
    en.addEventListener("click", function (){
        h21.innerHTML = "Home >"
        pop.innerHTML = "Homework"
        h12.innerHTML = "Homework"
        absolut1.innerHTML = "Add"
        absolut2.innerHTML = "Newspaper"
        absolut3.innerHTML = "Galery"
        absolut4.innerHTML = "Homework"
        absolut5.innerHTML = "Add"
        createhomew.innerHTML = "Add"
        console.log("dasdasdasdasdasdasdasdasdasd")
        
    })
//  for(let i = 0;i < pan.length; i++) {
//     pan[i].addEventListener('click', function(e) {
//         e.preventDefault()
//         console.log(e.target)
//     })
// }
    ru.addEventListener("click", function(){
            h21.innerHTML = "Главная >"
        pop.innerHTML = "Домашка"
        absolut5.innerHTML = "Добавить"
        createhomew.innerHTML = "Добавить"

        h12.innerHTML = "Галерея"

        absolut1.innerHTML = "Добавить"
        absolut2.innerHTML = "Новости"
        absolut3.innerHTML = "Галерея"
        absolut4.innerHTML = "Домашняя"
        console.log("dasdasdasdasdasdasdasdasdasd")
    })
    
    podul1.addEventListener("click", function() {
        window.location.href = "/"
    })
    podul2.addEventListener("click", function() {
        window.location.href = "/newspaper"
    })
    podul3.addEventListener("click", function() {
        window.location.href = "/galery"
    })
    podul4.addEventListener("click", function() {
        window.location.href = ".add/homework"
    });
    podul5.addEventListener("click", function() {
        window.location.href = "/add/registration"
    });
    createhomew.addEventListener("click", function() {
        window.location.href = "/add/addhomework"
    });
panel.addEventListener("click", function(){
    mainpanel2.classList.toggle('mainpanel')

    panel.classList.toggle('panel2')
        // panel2.addEventListener("click", function(){
        //     mainpanel.classList.remove('mainpanel')
        //     mainpanel.classList.add('mainpanel2')
        //     panel2.classList.remove('panel2')
        //     panel2.classList.add('panel')

        // })
})