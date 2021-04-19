// $('a[href="#"]').click(e=>{e.preventDefault();});
$('.burgerButt').click(()=>{
    $('.burgerButt').toggleClass('activeBurger');
    $('.mobile__menu').toggleClass('active');
});
$('.mobile__hasChild__head').click(()=>{
    $('.mobile__hasChild__head').toggleClass('active');
    $('.mobile__hasChild__body').toggleClass('active');
});
// $('.mainSlider').slick({
//     arrows:false,
//     dots:true
// });


//скрипт для шапки start
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
//скрипт для шапки end


//Скрипты для первого экрана на главной start
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
  $('.firstScreen__slider__rigth').on('afterChange', function(){
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
    //Скрипты для первого экрана на главной end

    //Скрипты отзывов
    $('.review__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:true,
        nextArrow:$('.next'),
        prevArrow:$('.prev'),
        responsive: [{
            breakpoint: 992,
            settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                      }
                    },
                    {
            breakpoint: 767,
            settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        }
                    },
                ]
    })
    //Скрипт фильтра на странице готовых товаров
    $('.ready__filter').on('click',function(){
        list=$(this).find('.ready__filter__select__list');
        overflow=$(this).find('.ready__filter__overflow');
        par=$(this).find('.ready__filter__head');
        if($(par).hasClass('active')){
        $(list).removeClass('active');
        setTimeout(function(){
            $(overflow).removeClass('active');
            $(par).removeClass('active');
          }, 600);
        }else{
            $(par).addClass('active');
            $(overflow).addClass('active');
            $(list).addClass('active');
        }
    });    
    $('.oform__zakaz').on('click',function(){
        $('#oform__zakaz').modal('show');
    });
    $(".callback").on('click',function(){
        $('#callback__modal').modal('show');
    });
    $(".addToCart").on('click',function(){
        $('#additional__modal').modal('show');
    });
    $( document ).ready(function() {
        // height = $('.product__list').height();
        // $('.product__container').css('min-height',height);
        $('.akcii__slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots:true,
            nextArrow:$('.next'),
            prevArrow:$('.prev'),
            responsive: [{
                breakpoint: 992,
                settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                          }
                        },
                        {
                breakpoint: 767,
                settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            }
                        },
                        {
                breakpoint: 576,
                settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            }
                        },
                    ]
        })
        $(".maskPhone").each(function(){
            $(this).mask("+7 (999) 999-99-99");
        })
        $('#offer__modal').modal('show');
    });