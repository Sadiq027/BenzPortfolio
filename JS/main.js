// Show Menu Hidden Y
// const navMenu = document.getElementById('navbar'),
//     toggleMenu = document.getElementById('nav-toggle'),
//     closeMenu = document.getElementById('nav-close')

    //  SHOW
// toggleMenu.addEventListener('click' , ()=>{
//     navMenu.classList.toggle('show')
// })

// Hidden
// closeMenu.addEventListener('click' , ()=>{
//     navMenu.classList.remove('show')
// })

// REMOVE MENU
// const navLink = document.querySelectorAll('.nav-link')

// function linkAction(){
//     navLink.classList.add(' active')
// }

// navLink.for(n = n.addEventListener('click' , linkAction()))

//  Active button 

// const navBtn = document.querySelectorAll('.nav')


// // Scroll Section Active LINKS
// const sections = document.querySelectorAll('section[id]')

// window.addEventListener('scroll' , scrollActive)

// function scrollActive(){
//     const scrolly = window.pageXOffset

//     sections.forEach(current =>{
//         const sectionWidth = current.offsetWidth
//         const sectionTop = current.offsetTop - 50
//         sectionId = current.getAttribute('id')

//         if(scrolly > sectionTop && scrolly <= sectionTop + sectionWidth){
//             document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active')
//         }else{
//             document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active')
//         }
//     })
// }


// window.addEventListener('resize' , ResizeWindow());

// function ResizeWindow(){
//     let dataSpyList = [].slice.call(document.querySelectorAll('[data-spy="scroll"]'));

const navBarA = document.querySelector(".navbar_items").querySelectorAll("a");
// console.log(navBarA);

navBarA.forEach(e =>{
    e.addEventListener("click",function(){

        navBarA.forEach(nav => nav.classList.remove("active"))

        this.classList.add("active")
    })
})

let bodyg = document.getElementsByTagName('body');

bodyg = ()=>{
    preventDefault();
}


// onscroll

let nav = document.querySelector('.navbar');

// console.log(nav)

nav.onscroll = function scroll() {
    nav.style.color = "green";
}


// navBarA.addEventListener()


// Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuengiLCJhIjoiY2t6NWRxYTZnMDExOTJ2cnozcmRkZGllMSJ9.kTEKb8rffr5iuki3R6h1rw';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [72.78388892280984, 19.706244763563706], // starting position [lng, lat]
    zoom: 11, // starting zoom
});
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuengiLCJhIjoiY2t6NWRxYTZnMDExOTJ2cnozcmRkZGllMSJ9.kTEKb8rffr5iuki3R6h1rw';
const map1 = new mapboxgl.Map({
    container: 'map1', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [72.78388892280984, 19.706244763563706], // starting position [lng, lat]
    zoom: 11, // starting zoom
});
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuengiLCJhIjoiY2t6NWRxYTZnMDExOTJ2cnozcmRkZGllMSJ9.kTEKb8rffr5iuki3R6h1rw';
const map2 = new mapboxgl.Map({
    container: 'map2', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [72.78388892280984, 19.706244763563706], // starting position [lng, lat]
    zoom: 11, // starting zoom
});


// statusbar.john location :- 19.706244763563706, 72.78388892280984

new mapboxgl.Marker({
    // position:{lat:72.78388892280984 , lang:19.706244763563706},
}).setLngLat([19.706244763563706 , 72.78388892280984]).addTo(map);
