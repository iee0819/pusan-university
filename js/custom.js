$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        grabCursor: true,
        speed: 800,
        parallax: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    })
})

$(function () {
    const mvs = new Swiper('.main_event_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        breakpoints: {
            541: {
                slidesPerView: 4,
            }
        },


        navigation: {
            nextEl: '.main_event .arrows .next',
            prevEl: '.main_event .arrows .prev',
        },

    })
})

$(function () {
    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 600) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

})

$(function () {
    $('.header .mbtn').on('click', function () {
        $('.header .hd_bottom .gnb').toggleClass('on')

    });

    $('.header .hd_bottom .gnb>ul>li>a').on('click', function (e) {
        if ($(this).next().is('ul') && $('.header .hd_bottom .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .hd_bottom .gnb>ul>li ul').slideUp();
            $(this).next().stop().slideToggle();
        }

    });

    $(window).on('resize', function () {
        let w = $(window).width();

        if (w > 768) {
            $('.header .hd_bottom .gnb').removeClass('on');
            $('.header .hd_bottom .gnb>ul>li ul').removeAttr('style')
        }
    })
})

