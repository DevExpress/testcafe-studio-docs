$(function(){
    function selectVideo(el) {
        $('.video').removeClass('active');
        el.addClass('active');        
        $('#yt-iframe').attr('src', 'https://www.youtube.com/embed/' + el.attr('data-video-id'));
    }

    selectVideo($('.video').first());

    $('.video').on('click', function () {
        selectVideo($(this));
    });
});