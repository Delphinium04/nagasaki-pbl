/*
$(document).ready(function () {
    $('#menu-btn>a').on('click', function () {
        console.log('menu_btn clicked')
        $('.menu_bg').show();
        $('.menu_menu').show().animate({
            right: 0
        });
    });
    $('.menu_close').on('click', function () {
        $('.menu_bg').hide();
        $('.menu_menu').animate({
            right: '-' + 50 + '%'
        }, function () {
            $('.menu_menu').hide();
        });
    });
});

$(document).ready(function () {
    $('.menu_eat').click(function () {
        $('.menu_eat_menu').toggle();
    });
});
$(document).ready(function () {
    $('.menu_tourism').click(function () {
        $('.menu_tourism_menu').toggle();
    });
});
$(document).ready(function () {
    $('.menu_festival').click(function () {
        $('.menu_festival_menu').toggle();
    });
});
$(document).ready(function () {
    $('.menu_activity').click(function () {
        $('.menu_activity_menu').toggle();
    });
});
*/

$(document).ready(function () {
    $('#menu-open-btn').on('click', function () {
        $('#menu-container').addClass('active');
    })

    $('#menu-close-btn').on('click', function () {
        $('#menu-container').removeClass('active');
    })

    $(".menu-submenu").click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parent().find('.menu-submenu-content').removeClass('active');
        }
        else {
            $(this).addClass('active');
            $(this).parent().find('.menu-submenu-content').addClass('active');
        }
    });
});