$(document).ready(function () {
    $('.unmuted_btn').on('click', function () {
        $('.unmuted_btn').hide();
        $('.muted_btn').show();
        $('.introvideo').prop('muted', false);
    });
    $('.muted_btn').on('click', function () {
        $('.muted_btn').hide();
        $('.unmuted_btn').show();
        $('.introvideo').prop('muted', true);
    });
});