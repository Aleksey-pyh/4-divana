let changeHiethList = (function(){
    $('.ready__filter__overflow').each(function(){
        heigth=$(this).height();
        $(this).css('bottom',0-heigth);
    });
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
let filterSlide = (function(c,m){
        if(m && c){
        $('.filter_row').slick('slickUnfilter');
        $('.filter_row').slick('slickFilter','[data-color="'+c+'"][data-material="'+m+'"]');
        }else if(m){
        $('.filter_row').slick('slickUnfilter');
        $('.filter_row').slick('slickFilter','[data-material="'+m+'"]');
        }else if(c){
            $('.filter_row').slick('slickUnfilter');
            $('.filter_row').slick('slickFilter','[data-color="'+c+'"]');
        }else{
            $('.filter_row').slick('slickUnfilter');
        }
});
$( document ).ready(function() {
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
    let w = parseInt($('.forWidth').css('max-width'));
    if (w >= '541') {
        changeHiethList();
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
    } else {
        changeHiethList();
        $('.filter_row').slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            dots:true,
            responsive: [{
                breakpoint: 576,
                settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                          }
                        },
                    ]
        });
        $('.mat').on('click',function(){
            filterMat=$(this).text();
            filterCol=$('.colfill.select').text();
            if($(this).hasClass('select')){
                $(this).removeClass('select');
                filterSlide(filterCol,'');
                changeHead('matHead','Материал');
                filterColorList('all');
            }else{
            $('.mat').each(function(){
                $(this).removeClass('select');
            });
            $(this).addClass('select');
            filterColorList(filterMat);
            changeHead('matHead',filterMat);
            filterSlide(filterCol,filterMat);
            }
        });
        //Сброс по материалу
        $('.sbrosmat').on('click',function(){
            changeHead('matHead','Материал');
            filterCol=$('.colfill.select').text();
            filterSlide(filterCol,'');
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
                filterSlide("",filterMar);
                changeHead('colfillHead','Цвет');
                filterMatList('all');
            }else{
            $('.colfill').each(function(){
                $(this).removeClass('select');
            });
            $(this).addClass('select');
            changeHead('colfillHead',filterCol);
            filterSlide(filterCol,filterMar);
            filterMatList(filterCol);
            }
        });
        //Сброс по цвету
        $('.sbroscol').on('click',function(){
            changeHead('colfillHead','Цвет');
            filterMar=$('.mat.select').text();
            filterSlide("",filterMar);
            $('.colfill').each(function(){
                $(this).removeClass('select');
            });
            filterMatList('all');
        });
    }
});