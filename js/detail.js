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
let changeHead = (function(className,str){
    $('.'+className+'').html(str);
})
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
let filterDetailSlider = (function(material,color,coast){
    console.log(material);
    console.log(color);
    console.log(coast);
    if(material && color && coast){
        $('.product__list').slick('slickUnfilter');
        $('.product__list').slick('slickFilter','[data-color="'+color+'"][data-material="'+material+'"][data-coast="'+coast+'"]');
    }else if(material && color){
        $('.product__list').slick('slickUnfilter');
        $('.product__list').slick('slickFilter','[data-color="'+color+'"][data-material="'+material+'"]');
    }else if(material && coast){
        $('.product__list').slick('slickUnfilter');
        $('.product__list').slick('slickFilter','[data-material="'+material+'"][data-coast="'+coast+'"]');
    }else if(color && coast){
        $('.product__list').slick('slickUnfilter');
        $('.product__list').slick('slickFilter','[data-color="'+color+'"][data-coast="'+coast+'"]');
    }else if(color){
        $('.product__list').slick('slickUnfilter');
        $('.product__list').slick('slickFilter','[data-color="'+color+'"]');
    }else if(coast){
        $('.product__list').slick('slickUnfilter');
        $('.product__list').slick('slickFilter','[data-coast="'+coast+'"]');
    }else if(material){
        $('.product__list').slick('slickUnfilter');
        $('.product__list').slick('slickFilter','[data-material="'+material+'"]');
    }else{
            $('.product__list').slick('slickUnfilter');
    }
});
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
    
    $( document ).ready(function() {
        let w = parseInt($('.forWidth').css('max-width'));
        if (w >= '721') {
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
            filterList();
        } else {
            filterList();
            // $('.product__list').slick({
            //     slidesToShow: 6,
            //     slidesToScroll: 6,
            //     dots:true,
            //     responsive: [{
            //         breakpoint: 576,
            //         settings: {
            //                     slidesToShow: 5,
            //                     slidesToScroll: 5,
            //                   }
            //                 },
            //             ]
            // });
             //Фильтр материалов
             $('.matFill').on('click',function(){
                filterMat=$(this).text().trim();
                filterCol=$('.colorFill.select').text().trim();
                filterCoast=$('.coastFill.select').text().trim();
                if($(this).hasClass('select')){
                    $(this).removeClass('select');
                    filterDetailSlider('',filterCol,filterCoast);
                    changeHead('matHead','Материал');
                }else{
                $('.matFill').each(function(){
                    $(this).removeClass('select');
                });
                $(this).addClass('select');
                changeHead('matHead',filterMat);
                filterDetailSlider(filterMat,filterCol,filterCoast);
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
                    filterDetailSlider(filterMat,'',filterCoast);
                    changeHead('colHead','Цвет');
                }else{
                $('.colorFill').each(function(){
                    $(this).removeClass('select');
                });
                $(this).addClass('select');
                changeHead('colHead',filterCol);
                filterDetailSlider(filterMat,filterCol,filterCoast);
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
                    filterDetailSlider(filterMat,filterCol,'');
                    changeHead('coastHead','Цена');
                }else{
                $('.coastFill').each(function(){
                    $(this).removeClass('select');
                });
                $(this).addClass('select');
                changeHead('coastHead',filterCoast);
                filterDetailSlider(filterMat,filterCol,filterCoast);
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
                filterDetailSlider('',filterCol,filterCoast);
                changeHead('matHead','Материал');
                filterList();
            });
            $('.sbrosColor').on('click',function(){
                filterMat=$('.matFill.select').text().trim();
                filterCoast=$('.coastFill.select').text().trim();
                $('.colorFill').each(function(){
                    $(this).removeClass('select');
                });
                filterDetailSlider(filterMat,'',filterCoast);
                changeHead('colHead','Цвет');
                filterList();
            });
            $('.sbrosCoast').on('click',function(){
                filterCol=$('.colorFill.select').text().trim();
                filterMat=$('.matFill.select').text().trim();
                $('.coastFill').each(function(){
                    $(this).removeClass('select');
                });
                filterDetailSlider(filterMat,filterCol,'');
                changeHead('coastHead','Цена');
                filterList();
            });
        }

    })
