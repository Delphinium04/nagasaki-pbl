/*슬라이드*/
$(document).ready(function () {
    $slide_images_parent = '#slide-image-ul'
    $slide_phrase = '#slide-phrase--2'
    vw = $(window).width();

    let num = 0;
    bg_colors = ['red', 'yellow', 'green', 'blue', 'purple',]
    colors = ['white', 'black', 'white', 'white', 'white']

    $($slide_images_parent + ' li').last().prependTo($slide_images_parent);
    $($slide_images_parent).css('left', -vw);
    $($slide_phrase).addClass('bg-' + bg_colors[num]);
    $($slide_phrase).addClass('color-' + colors[num]);

    setInterval(function () {
        vw = $(window).width();
        $($slide_images_parent).animate({ left: '-=' + vw }, 'slow', function () {
            $($slide_images_parent + ' li').first().appendTo($slide_images_parent);
            $($slide_images_parent).css('left', -vw);

            num++;
            if (num > 4) num = 0;
            $($slide_phrase).removeClass();
            $($slide_phrase).addClass('bg-' + bg_colors[num]);
            $($slide_phrase).addClass('color-' + colors[num]);
            console.log(`${num}, ${bg_colors[num]}, ${colors[num]}`);
        });
    }, 5000);
});