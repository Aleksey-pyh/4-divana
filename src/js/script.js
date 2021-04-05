// $('a[href="#"]').click(e=>{e.preventDefault();});
// $('.burgerButt').click(()=>{
//     $('.hiddenMenu').toggleClass('activeMenu');
//     $('.burgerButt').toggleClass('activeBurger');
//     $('.hiddenNav').toggleClass('activeHidNav');
// });
// $('.mainSlider').slick({
//     arrows:false,
//     dots:true
// });
$('.haveChildren').on('click',function(){
    height = $(this).find('.sub').height();
    padTop = parseInt($('.fadeForMenu').css('padding-top'));
    padBot = parseInt($('.fadeForMenu').css('padding-bottom'));
    height = height  + padTop + padBot;
    $('.fadeForMenu').css('height',height);
    if($(this).find('.sub').hasClass('active')){
        $('.sub').each(function(){
            $(this).removeClass('active');
        });
        $('.haveChildren').each(function(){
            $(this).removeClass('active');
        });
        $('.fadeForMenu').removeClass('active');
    }else{
        $('.sub').each(function(){
            $(this).removeClass('active');
        });
        $('.haveChildren').each(function(){
            $(this).removeClass('active');
        });
        $(this).find('.sub').addClass('active');
        $('.fadeForMenu').addClass('active');
        $(this).addClass('active');
    }
});
    
  $('.firstScreen__slider__rigth').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl:true,
    asNavFor: '.firstScreen__slider__left',
    speed:700,
  });
  $('.firstScreen__slider__left').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.firstScreen__slider__rigth',
    autoplay: true,
    autoplaySpeed: 2000,
    speed:700,
  });
  $('.prev').on('click',function(){
    $('.firstScreen__slider__rigth').slick('slickPrev');
    $('.firstScreen__slider__left').slick('slickPrev');
    current=$('.firstScreen__slider__rigth').slick('slickCurrentSlide')+1;
    $('.sliderNav').html('0'+current);
  });
  $('.next').on('click',function(){
    $('.firstScreen__slider__rigth').slick('slickNext');
    $('.firstScreen__slider__left').slick('slickNext');
    current=$('.firstScreen__slider__rigth').slick('slickCurrentSlide')+1;
    $('.sliderNav').html('0'+current);
  });
  $('.firstScreen__slider__rigth').on('afterChange', function(event, slick, currentSlide, nextSlide){
    current=$('.firstScreen__slider__rigth').slick('slickCurrentSlide')+1;
    $('.sliderNav').html('0'+current);
    switch($('.firstScreen__slider__rigth').slick('slickCurrentSlide')) {
        case 0:  
            $('.ikea').css('color','#6D8953');
            
            break;
        
        case 1: 
            $('.ikea').css('color','#583166');
            break;
        
        case 2:
            $('.ikea').css('color','#10445F');
            break;
        }
  });
  $( ".goCatalog" ).hover(function(){ 
    switch($('.firstScreen__slider__rigth').slick('slickCurrentSlide')) {
        case 0:  
        $('.goCatalog').css('background-color','#6D8953');
            
            break;
        
        case 1: 
            $('.goCatalog').css('background-color','#583166');
            break;
        
        case 2:
            $('.goCatalog').css('background-color','#10445F');
            break;
        }
    
    }, function(){ 
        $('.goCatalog').css('background-color','transparent');
    });