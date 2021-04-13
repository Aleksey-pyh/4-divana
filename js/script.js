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
    $(document).click( function(e){
        if ( $(e.target).closest('.ready__filter').length ) {
            // клик внутри элемента 
            return;
        }
        // клик снаружи элемента 
        $('.ready__filter').each(function(){
            list=$(this).find('.ready__filter__select__list');
            overflow=$(this).find('.ready__filter__overflow');
            par=$(this).find('.ready__filter__head');
            $(list).removeClass('active');
            $(overflow).removeClass('active');
            $(par).removeClass('active');
        });
    });
    //фильтр по материалу
    $('.mat').on('click',function(){
        filterMat=$(this).text();
        filterCol=$('.colfill.select').text();
        if($(this).hasClass('select')){
            $(this).removeClass('select');
            filter(filterCol,'');
            changeHead('matHead','Материал');
            filterColorList('all');
        }else{
        $('.mat').each(function(){
            $(this).removeClass('select');
        });
        $(this).addClass('select');
        filterColorList(filterMat);
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
        filterColorList('all');
    });
    //фильтр по цвету
    $('.colfill').on('click',function(){
        filterCol=$(this).text();
        filterMar=$('.mat.select').text();
        if($(this).hasClass('select')){
            $(this).removeClass('select');
            filter("",filterMar);
            changeHead('colfillHead','Цвет');
            filterMatList('all');
        }else{
        $('.colfill').each(function(){
            $(this).removeClass('select');
        });
        $(this).addClass('select');
        changeHead('colfillHead',filterCol);
        filter(filterCol,filterMar);
        filterMatList(filterCol);
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
        filterMatList('all');
    });
    let filter = (function(c,m){
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
    let showMessage = (function(){
        elementList =Array.from(document.querySelectorAll('.animate')) ;
        if(elementList.every( currentValue => currentValue.classList.contains('hide'))){
            $('.hideText').addClass('active');
        }else{
            $('.hideText').removeClass('active');
        }
    });
    let changeHead = (function(className,str){
            $('.'+className+'').html(str);
    })
    let filterColorList = (function(material){
        $('.colfill').each(function(){
            $(this).addClass('hide');
        })
        if(material=='all'){
            $('.colfill').each(function(){
                $(this).removeClass('hide');
            })
        }
        $('.animate').each(function(){
            if($(this).attr('data-material')==material){
                color=$(this).attr('data-color');
                $('.colfill').each(function(){
                    if($(this).text()==color){
                        $(this).removeClass('hide');
                    }
                })
            }
        });
        changeHiethList();
    });
    let filterMatList = (function(color){
        $('.mat').each(function(){
            $(this).addClass('hide');
        })
        if(color=='all'){
            $('.mat').each(function(){
                $(this).removeClass('hide');
            })
        }
        $('.animate').each(function(){
            if($(this).attr('data-color')==color){
                mat=$(this).attr('data-material');
                $('.mat').each(function(){
                    if($(this).text()==mat){
                        $(this).removeClass('hide');
                    }
                })
            }
        });
        changeHiethList();
    });
    let changeHiethList = (function(){
        $('.ready__filter__overflow').each(function(){
            heigth=$(this).height();
            $(this).css('bottom',0-heigth);
        });
    });
    $( document ).ready(function() {
        changeHiethList();
    });
    //Скрипты детальной страницы
    $('.razvernyt__head').on('click',function(){
        $('.razvernyt__body').toggleClass('active');
    });
    $('.filter__slider').slick({
        arrow:false,
        dots:false,
        draggable:false,
    })
    $('.navForFiltersSlider').on('click',function(){
        $('.filter__slider').slick('slickGoTo',$(this).attr('data-slide'));
        $('.navForFiltersSlider').each(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    });
    // $('.product__list').slick({
    //     rows:3,
    //     slidesToShow: 6,
    // })
    //Фильтр детальной для десктопа
    //Фильтр материалов
    $('.matFill').on('click',function(){
        filterMat=$(this).text().trim();
        filterCol=$('.colorFill.select').text().trim();
        filterCoast=$('.coastFill.select').text().trim();
        if($(this).hasClass('select')){
            $(this).removeClass('select');
            filterDetail('',filterCol,filterCoast);
            changeHead('matHead','Материал');
        }else{
        $('.matFill').each(function(){
            $(this).removeClass('select');
        });
        $(this).addClass('select');
        changeHead('matHead',filterMat);
        filterDetail(filterMat,filterCol,filterCoast);
        }
        filterList();
    })
    //фильтр цвета
    $('.colorFill').on('click',function(){
        filterMat=$('.matFill.select').text().trim();
        filterCol=$(this).text().trim();
        filterCoast=$('.coastFill.select').text().trim();
        if($(this).hasClass('select')){
            $(this).removeClass('select');
            filterDetail(filterMat,'',filterCoast);
            changeHead('colHead','Цвет');
        }else{
        $('.colorFill').each(function(){
            $(this).removeClass('select');
        });
        $(this).addClass('select');
        changeHead('colHead',filterCol);
        filterDetail(filterMat,filterCol,filterCoast);
        }
        filterList();
    })
    //фильтр цены
    $('.coastFill').on('click',function(){
        filterMat=$('.matFill.select').text().trim();
        filterCol=$('.colorFill.select').text().trim();
        filterCoast=$(this).text().trim();
        if($(this).hasClass('select')){
            $(this).removeClass('select');
            filterDetail(filterMat,filterCol,'');
            changeHead('coastHead','Цена');
        }else{
        $('.coastFill').each(function(){
            $(this).removeClass('select');
        });
        $(this).addClass('select');
        changeHead('coastHead',filterCoast);
        filterDetail(filterMat,filterCol,filterCoast);
        }
        filterList();
    });
    //Сбросы
    $('.sbrosMat').on('click',function(){
        filterCol=$('.colorFill.select').text().trim();
        filterCoast=$('.coastFill.select').text().trim();
        $('.matFill').each(function(){
            $(this).removeClass('select');
        });
        filterDetail('',filterCol,filterCoast);
        changeHead('matHead','Материал');
        filterList();
    });
    $('.sbrosColor').on('click',function(){
        filterMat=$('.matFill.select').text().trim();
        filterCoast=$('.coastFill.select').text().trim();
        $('.colorFill').each(function(){
            $(this).removeClass('select');
        });
        filterDetail(filterMat,'',filterCoast);
        changeHead('colHead','Цвет');
        filterList();
    });
    $('.sbrosCoast').on('click',function(){
        filterCol=$('.colorFill.select').text().trim();
        filterMat=$('.matFill.select').text().trim();
        $('.coastFill').each(function(){
            $(this).removeClass('select');
        });
        filterDetail(filterMat,filterCol,'');
        changeHead('coastHead','Цена');
        filterList();
    });
    let filterDetail = (function(material,color,coast){
        $('.product__item').each(function(){
            if(material && color && coast){
                if($(this).attr('data-color')==color && $(this).attr('data-material')==material && $(this).attr('data-coast')==coast){
                    $(this).removeClass('hide');
                }else{
                    $(this).addClass('hide');
                }
            }else if(material && color){
                if($(this).attr('data-color')==color && $(this).attr('data-material')==material){
                    $(this).removeClass('hide');
                }else{
                    $(this).addClass('hide');
                }
            }else if(material && coast){
                if($(this).attr('data-coast')==coast && $(this).attr('data-material')==material){
                    $(this).removeClass('hide');
                }else{
                    $(this).addClass('hide');
                }
            }else if(color && coast){
                if($(this).attr('data-coast')==coast && $(this).attr('data-color')==color){
                    $(this).removeClass('hide');
                }else{
                    $(this).addClass('hide');
                }
            }else if(color){
                if($(this).attr('data-color')==color){
                    $(this).removeClass('hide');
                }else{
                    $(this).addClass('hide');
                }
            }else if(coast){
                if($(this).attr('data-coast')==coast){
                    $(this).removeClass('hide');
                }else{
                    $(this).addClass('hide');
                }
            }else if(material){
                if($(this).attr('data-material')==material){
                    $(this).removeClass('hide');
                }else{
                    $(this).addClass('hide');
                }
            }else{
                    $(this).removeClass('hide');
            }
        });
    });
    let filterList = (function(){
        $('.colorFill').each(function(){
            $(this).addClass('hide');
        });
        $('.coastFill').each(function(){
            $(this).addClass('hide');
        });
        $('.matFill').each(function(){
            $(this).addClass('hide');
        });
        $('.product__item:not(.hide)').each(function(){
            dataMaterial=$(this).attr('data-material');
            dataColor=$(this).attr('data-color');
            dataCoast=$(this).attr('data-coast');
            $('.colorFill').each(function(){
                if($(this).text().trim()==dataColor){
                    $(this).removeClass('hide');
                }
            })
            $('.coastFill').each(function(){
                if($(this).text().trim()==dataCoast){
                    $(this).removeClass('hide');
                }
            })
            $('.matFill').each(function(){
                if($(this).text().trim()==dataMaterial){
                    $(this).removeClass('hide');
                }
            })
        });
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
        filterList();
        height = $('.product__list').height();
        $('.product__container').css('min-height',height);
        $('.akcii__slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots:true,
            nextArrow:$('.next'),
            prevArrow:$('.prev'),
        })
        $(".maskPhone").each(function(){
            $(this).mask("+7 (999) 999-99-99");
        })
        $('#offer__modal').modal('show');
    });