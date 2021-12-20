//nav
let showMenu = $('.menu__btn');
let showNav = $('.nav');
$(document).ready(function() {
    showMenu.on('click', function() {
    $(this).toggleClass('active');
    showNav.toggleClass('active');
    });
})

//header background
let heightHeaderTop = $('.header__top').outerHeight();
$(document).ready(function() {
    $(window).on('scroll', function() {
        let scrollY = window.pageYOffset;
        if (scrollY > heightHeaderTop - 1) {
            $('.header__menu').addClass('active');
        } else {
            $('.header__menu').removeClass('active');
        }
    })
})

//back to top
let scrollTop = function() {
    window.scrollTo( {
        top:0,
        behavior: 'smooth'
    })
}
let toTopSpan = $('footer .container .totop');
toTopSpan.on('click',function(e) {
    e.preventDefault();
    scrollTop();
})

//studio list
let $carousel = $('.studio__list');
$carousel.flickity({
    cellAlign: 'left',
    wrapAround: true,
    prevNextButtons: false,
    lazyLoad: true,
});
$('.display__opt__item.prev').on('click', function () {
    $carousel.flickity('previous');
})
$('.display__opt__item.next').on('click', function () {
    $carousel.flickity('next')
})

//studio number
let studioNumber = $('.booking__no ul li')
studioNumber.on('click',function() {
    $(this).toggleClass('active');
})

//loading
let loadingScreen = $('.loading')
$(window).on('load', function() {
    loadingScreen.addClass('complete')
})