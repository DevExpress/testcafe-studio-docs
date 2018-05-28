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
    var downloadLinks = {
        win: {
            name: 'Windows',
            url: 'https://testcafe.devexpress.com/Download_for_Windows.aspx'
        },
        macos: {
            name: 'macOS',
            url: 'https://testcafe.devexpress.com/Download_for_macOS.aspx'
        },
        linux64: {
            name: 'Linux x64',
            url: 'https://testcafe.devexpress.com/Download_for_Linux64.aspx'
        },
        linux32: {
            name: 'Linux x32',
            url: 'https://testcafe.devexpress.com/Download_for_Linux32.aspx'
        }
    };

    var altOsSpans = ['.alt-os-1', '.alt-os-2', '.alt-os-3'];

    function appendLinks() {
        for(var platform in downloadLinks) {
            var link = downloadLinks[platform];
    
            if(link.primary) 
                $('.primary-os').append(link.name).closest('a').attr('href', link.url);
            else {
                var htmlLink = $('<a>').attr('href', link.url).text(link.name)
                
                $(altOsSpans.shift()).append(htmlLink);
            }
        }
    }

    if(window.UAParser) {
        var parsedUA = new UAParser(navigator.userAgent);
        var osName   = parsedUA.getOS().name;
        var cpu      = parsedUA.getCPU().architecture;

        if(osName && osName.indexOf('Windows') !== -1) 
            downloadLinks.win.primary = true;
        else if(osName === 'Mac OS')
            downloadLinks.macos.primary = true;
        else if(cpu && cpu.indexOf('64') !== -1)
            downloadLinks.linux64.primary = true;
        else
            downloadLinks.linux32.primary = true;
    }
    else
        downloadLinks.linux32.primary = true;

    appendLinks();
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
{% endif %}    