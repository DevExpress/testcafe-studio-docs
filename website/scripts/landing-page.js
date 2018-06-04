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
            url: 'http://testcafe.devexpress.com/TryStudio/windows',
            gaId: 'Win'
        },
        macos: {
            name: 'macOS',
            url: 'http://testcafe.devexpress.com/TryStudio/macos',
            gaId: 'Mac'
        },
        linux64: {
            name: 'Linux x64',
            url: 'http://testcafe.devexpress.com/TryStudio/linux64',
            gaId: 'Linux64'
        },
        linux32: {
            name: 'Linux x32',
            url: 'http://testcafe.devexpress.com/TryStudio/linux32',
            gaId: 'Linux32'
        }
    };

    var altOsSpans = ['.alt-os-1', '.alt-os-2', '.alt-os-3'];

    function appendLinks() {
        for(var platform in downloadLinks) {
            var link = downloadLinks[platform];
    
            if(link.primary) {
                $('.primary-os')
                    .append(link.name)
                    .closest('a')
                    .attr('href', link.url);

                {% if jekyll.environment == "production" %}                                    
                    $('.primary-os')
                        .closest('a')                
                        .on('click', function () {
                            gtag('event', 'downloadClicked');
                            gtag('event', 'download' + link.gaId + 'Clicked');
                    });
                {% endif %} 
            }
            else {
                var htmlLink = $('<a>').attr('href', link.url).text(link.name);

                {% if jekyll.environment == "production" %}
                    htmlLink.on('click', function () {
                        gtag('event', 'downloadClicked');
                        gtag('event', 'download' + link.gaId + 'Clicked');
                    });
                {% endif %} 

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
    $('.get-ctp').on('click', function () {
        gtag('event', 'getCtpClicked');
    });
});
{% endif %}    