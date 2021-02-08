


// kod button map

const btn=document.querySelector(".btn")
btn.addEventListener("click", function(){
    $('body, html').animate({
        scrollTop: $(".maps").offset().top
    
    },1000)
})
// powrót do góry

const backToTop= document.querySelector(".backTop")
backToTop.addEventListener("click", function(){
    $('body, html').animate({
        scrollTop: $(".s1").offset().top
    },1000)
    }
)

// kod do menu hamburger

const icon =document.querySelector(".icon")
const icon2 =document.querySelector("#icon2")
const nav=document.querySelector(".mobileNavigation")
const activeNav=document.querySelector(".active")
const menu=document.querySelector(".menu")

icon.addEventListener("click", function(){
  nav.classList.toggle("active")
  
})

icon2.addEventListener("click", function(){
    nav.classList.toggle("active")
    
  })
  menu.addEventListener("click", function(){
      nav.classList.toggle("active")
  })


$('.menu a').on('click',function () {
    console.log($(this).attr("class"))
    const goToSection = "#" + $(this).attr("class")
    $('body, html').animate({
        scrollTop: $( goToSection).offset().top
       
    },2000)

}) 


$(window).scroll (function () {
    const scroll = $(window).scrollTop();

    if($(window).scrollTop() > 400){
        $(".icon2").addClass("iconActive")
    }
    else {$(".icon2").removeClass("iconActive")
}
});

// koniec kod do menu hamburger
// menu normalne 


$('.headMenu a').on('click',function () {
    console.log($(this).attr("class"))
    const goToSection = "#" + $(this).attr("class");
    $('body, html').animate({
        scrollTop: $( goToSection).offset().top-100
       
    },1500)

}) 

$('.scrollNav a').on('click',function () {
    console.log($(this).attr("class"))
    const goToSection = "#" + $(this).attr("class")
    $('body, html').animate({
        scrollTop: $( goToSection).offset().top-100
       
    },1500)

}) 

$(window).scroll (function () {
    const scroll = $(window).scrollTop();
    const sectionHeight = $(".s2").offset().top - 120;

    if($(window).scrollTop() > sectionHeight){
        $(".scrollNav").addClass("navActive")
    }
    else {$(".scrollNav").removeClass("navActive")
}
});



























// $(document).on("scroll", function (){
//     console.log($(document).scrollTop())
// })

// const Scroll=document.querySelector("scroll")
// const btn=Document.querySelector(".btn")
// document.addEventListener("scroll", function(){
// })

// btn.addEventListener("click", function(){
//     document.
// })



// function ShowScroll(){
//     const wielkoscSkrola = window.scrollY;
//     console.log(wielkoscSkrola)
    
// }











// FAQ początek
const items = document.querySelectorAll(".accordion a");
 
function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));
// FAQ koniec
