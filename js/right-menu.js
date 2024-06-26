$menu_open_btn = "#menu-open-btn";
$menu_close_btn = "#menu-close-btn";
$menu_container = "#menu-container";
$menu_bg = "#menu-bg";

$(document).ready(function () {
    /* 언더라인 색 작업 */
    main_color = $('#title').css('color');
    $(".font-h2").css({ 'text-decoration-color': main_color });

    $('#nav').load('nav.html');
    $('#menu').load('menu.html', function () {
        $($menu_open_btn).on('click', function () {
            $($menu_container).addClass('active');
            $($menu_container).removeClass('deactive');
            $($menu_bg).addClass('active');
            $($menu_bg).removeClass('deactive');
            console.log('menu opened');
        })

        $($menu_close_btn).on('click', function () {
            $($menu_container).addClass('deactive');
            $($menu_container).removeClass('active');
            $($menu_bg).addClass('deactive');
            $($menu_bg).removeClass('active');
            console.log('menu closed');
        })

        $(".menu-submenu").click(function () {
            console.log('menu clicked')
            // 이미 활성화되어있는 경우
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).parent().find('.menu-submenu-content').removeClass('active');
            }
            else {
                $(this).removeClass('deactive')
                $(this).addClass('active');
                $(this).parent().find('.menu-submenu-content').addClass('active');
            }
        });
    });
})
