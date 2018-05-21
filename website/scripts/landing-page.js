---
---
document.addEventListener('DOMContentLoaded', function (e) {
    function has(parentEl, el)  {
        var descendants = parentEl.getElementsByTagName('*');
        
        for(i = 0; i < descendants.length; i++) 
            if(descendants[i] === el) return true;
    
        return false;
    }

    function closePlayer(e) {
        var clickOutsidePlayer = player !== e.target && !has(player, e.target);

        if(clickOutsidePlayer && veil.className.indexOf('veil-on') !== -1) {
            var iframe    = document.querySelector('#yt-iframe')
            var iframeSrc = iframe.src;

            iframe.src = iframeSrc;
            veil.className = 'veil-off';
        }
    }

    var tourButton = document.querySelector('.take-a-tour');
    var veil       = document.querySelector('.veil-off');
    var player     = document.querySelector('.player');
    
    tourButton.addEventListener('click', function(e) {
        veil.className = 'veil-on';
    });
    
    window.addEventListener('mousedown', closePlayer);        
    window.addEventListener('touchstart', closePlayer);
});

$(function(){
    $('#get-ctp-form').submit(function(e){
        e.preventDefault();

        var href = $(this).attr('action');

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: href,
            data: $(this).serialize()
        });

        $('.get-ctp-section').css('display', 'none');
        $('.get-ctp-confirmation').css('display', 'block');
    });
});

{% if jekyll.environment == "production" %}
$(function(){
    var GET_CTP_CLICKED_FLAG = 'get-ctp-clicked';

    $('.get-ctp').on('click', function () {
        if(!window.localStorage.getItem(GET_CTP_CLICKED_FLAG)) {
            gtag('event', 'getCtpClicked');
            window.localStorage.setItem(GET_CTP_CLICKED_FLAG, true);
        }
    });
});

$(function(){
    var GO_TO_DOWNLOADS_FLAG = 'go-to-downloads-clicked';

    $('.go-to-download').on('click', function () {
        if(!window.localStorage.getItem(GO_TO_DOWNLOADS_FLAG)) {
            gtag('event', 'goToDownloadsClicked');
            window.localStorage.setItem(GO_TO_DOWNLOADS_FLAG, true);
        }
    });
});
{% endif %}    