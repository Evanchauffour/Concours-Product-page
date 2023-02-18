const titres = document.querySelectorAll('.titre');
const infos = document.querySelectorAll('.info');
const plus = document.querySelectorAll('.plus');
const moins = document.querySelectorAll('.moins');
index = 0;

const burger = document.querySelector('.burger');
const burgerSpans = document.querySelectorAll('.burger span');
const navburger = document.querySelector('nav');

burger.addEventListener('click', () =>{
    console.log('test')
    navburger.classList.toggle('active');
    burgerSpans.forEach(span =>{
        span.classList.toggle('active');
        span.classList.add('white')
    })
    PanierProfil.classList.toggle('active')
    nav.forEach(a =>{
        a.style.color = "white"
    })

    if(navburger.classList.contains('active')){
        body.style.overflow = "hidden";
    }else{
        body.style.overflowY = "scroll";
        body.style.overflowX = "hidden";
    }
})


titres.forEach(titre =>{

    titre.addEventListener('click', (e) =>{
        index = e.target.getAttribute('data-infos');
        console.log(index)
        for(j = 0; j < infos.length; j++){
            if(infos[j].getAttribute('data-infos') == index){
                infos[j].classList.toggle('active')
                plus[j].classList.toggle('active')
                moins[j].classList.toggle('active')
            }else{
                infos[j].classList.remove('active')
                plus[j].classList.remove('active')
                moins[j].classList.remove('active')

            }
        }
    })
})

const colors = document.querySelectorAll('.color');
const gourdes = document.querySelectorAll('.produit');
const soulignementRose = document.querySelectorAll('.mots-titre-rose')
const h1 = document.querySelectorAll('h1 span')
index = 0;


colors.forEach(color =>{

    color.addEventListener('click', (e) =>{
        index = e.target.getAttribute('data-produit');
        console.log(index)
        for(j = 0; j < gourdes.length; j++){
            if(gourdes[j].getAttribute('data-produit') == index){
                gourdes[j].style.visibility = 'visible'
                if(gourdes[j].getAttribute('data-produit') == 1){
                    h1.forEach(span =>{
                        span.classList.add('mots-titre-noir')
                        span.style.opacity = 1
                    })
                }else{
                    h1.forEach(span =>{
                        span.classList.remove('mots-titre-noir')
                    })
                }
                if(gourdes[j].getAttribute('data-produit') == 2){
                    h1.forEach(span =>{
                        span.classList.add('mots-titre-blanc')
                    })
                }else{
                    h1.forEach(span =>{
                        span.classList.remove('mots-titre-blanc')
                    })
                }
                if(gourdes[j].getAttribute('data-produit') == 3){
                    h1.forEach(span =>{
                        span.classList.add('mots-titre-rose')
                    })
                }else{
                    h1.forEach(span =>{
                        span.classList.remove('mots-titre-rose')
                    })
                }
            }else{
                gourdes[j].style.visibility = 'hidden'

            }
        }
    })
})

const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const body = document.querySelector('body')
const main = document.querySelector('main')
const nav = document.querySelectorAll('nav a')
const add = document.querySelector('.add_panier-like a')
const sectionDeux = document.querySelector('.second-section')
const PanierProfil = document.querySelector('.panier-profile')

moon.addEventListener('click', () =>{
    body.style.backgroundColor = "#161616 "
    main.style.color = "white "
    nav.forEach(a =>{
        a.classList.add('dark')
    })
    PanierProfil.style.color = "white"
    add.style.backgroundColor = "white"
    add.style.color = "black"
    sun.style.stroke = "white"
    moon.style.stroke = "white"
    sectionDeux.style.background = "linear-gradient(180deg, rgba(148,168,173,1) 0%, #161616 100%)"
    burgerSpans.forEach(span =>{
        span.classList.add('white');
        span.classList.remove('dark');
    })
    PanierProfil.style.color = "white"
})

sun.addEventListener('click', () =>{
    body.style.backgroundColor = "#f9fcfb"
    main.style.color = "black "
    nav.forEach(a =>{
        a.classList.remove('dark')
    })
    add.style.backgroundColor = "black"
    add.style.color = "white"
    sun.style.stroke = "black"
    moon.style.stroke = "black"
    sectionDeux.style.background = "linear-gradient(180deg, rgba(148,168,173,1) 0%, #f9fcfb 100%)"
    burgerSpans.forEach(span =>{
        span.classList.remove('white');
        span.classList.add('dark');
    })
    PanierProfil.style.color = "black"
})


window.addEventListener('load' , () =>{
    body.style.opacity = 1;
})
