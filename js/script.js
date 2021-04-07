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
    //Скрипты для первого экрана на главной end

    //Скрипты отзывов
    $('.review__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:true,
        nextArrow:$('.next'),
        prevArrow:$('.prev'),
    })
    //Скрипт фильтра на странице готовых товаров
    $('.ready__filter').on('click',function(){
        list=$(this).find('.ready__filter__select__list')
        overflow=$(this).find('.ready__filter__overflow')
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
    //фильтр по материалу
    $('.mat').on('click',function(){
        filterMat=$(this).text();
        filterCol=$('.colfill.select').text();
        if($(this).hasClass('select')){
            $(this).removeClass('select');
            filter(filterCol,'');
            changeHead('matHead','Материал');
        }else{
        $('.mat').each(function(){
            $(this).removeClass('select');
        });
        $(this).addClass('select');
        changeHead('matHead',filterMat);
        filter(filterCol,filterMat);
        }
    });
    //Сброс по материалу
    $('.sbrosmat').on('click',function(){
        changeHead('matHead','Материал');
        filterCol=$('.colfill.select').text();
        filter(filterCol,'');
        $('.mat').each(function(){
            $(this).removeClass('select');
        });
    });
    //фильтр по цвету
    $('.colfill').on('click',function(){
        filterCol=$(this).text();
        filterMar=$('.mat.select').text();
        if($(this).hasClass('select')){
            $(this).removeClass('select');
            filter("",filterMar);
            changeHead('colfillHead','Цвет');
        }else{
        $('.colfill').each(function(){
            $(this).removeClass('select');
        });
        $(this).addClass('select');
        changeHead('colfillHead',filterCol);
        filter(filterCol,filterMar);
        }
    });
    //Сброс по цвету
    $('.sbroscol').on('click',function(){
        changeHead('colfillHead','Цвет');
        filterMar=$('.mat.select').text();
        filter("",filterMar);
        $('.colfill').each(function(){
            $(this).removeClass('select');
        });
    });
    filter = (function(c,m){
        $('.animate').each(function(){
            if(m && c){
                if($(this).attr('data-color')==c && $(this).attr('data-material')==m){
                    $(this).removeClass('hide');
                }else{
                    $(this).addClass('hide');
                }
            }else if(m){
                if($(this).attr('data-material')==m){
                    $(this).removeClass('hide');
                }else{
                    $(this).addClass('hide');
                }
            }else if(c){
                if($(this).attr('data-color')==c){
                    $(this).removeClass('hide');
                }else{
                    $(this).addClass('hide');
                }
            }else{
                $(this).removeClass('hide');
            }
        })
        showMessage();
    });
    showMessage = (function(){
        elementList =Array.from(document.querySelectorAll('.animate')) ;
        if(elementList.every( currentValue => currentValue.classList.contains('hide'))){
            $('.hideText').addClass('active');
        }else{
            $('.hideText').removeClass('active');
        }
    });
    changeHead = (function(className,str){
            $('.'+className+'').html(str);
    })


    $( document ).ready(function() {
        $('.ready__filter__overflow').each(function(){
            heigth=$(this).height() - 1;
            $(this).css('bottom',0-heigth);
        });
    })