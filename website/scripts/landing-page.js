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
            gaId: 'windows'
        },
        macos: {
            name: 'macOS',
            url: 'http://testcafe.devexpress.com/TryStudio/macos',
            gaId: 'macos'
        },
        linux64: {
            name: 'Linux x64',
            url: 'http://testcafe.devexpress.com/TryStudio/linux64',
            gaId: 'linux64'
        },
        linux32: {
            name: 'Linux x32',
            url: 'http://testcafe.devexpress.com/TryStudio/linux32',
            gaId: 'linux32'
        }
    };

    var altOsSpans = ['.alt-os-1', '.alt-os-2', '.alt-os-3'];

    function makeClickCallback(gaId) {
        return function () {
            {% if jekyll.environment == "production" %}                                    
                gtag('config', 'UA-83678642-3', {
                    'page_path': '/download-ctp'
                });
                gtag('config', 'UA-83678642-3', {
                    'page_path': '/download-ctp/' + gaId
                });
            {% endif %} 
        }
    }

    function appendLinks() {
        for(var platform in downloadLinks) {
            var link = downloadLinks[platform];
    
            if(link.primary) {
                $('.primary-os')
                    .append(link.name)
                    .closest('a')
                    .attr('href', link.url)
                    .on('click', makeClickCallback(link.gaId));
            }
            else {
                var htmlLink = $('<a>')
                    .attr('href', link.url)
                    .text(link.name)
                    .on('click', makeClickCallback(link.gaId));

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
        gtag('config', 'UA-83678642-3', {
            'page_path': '/get-ctp'
        });
    });
});
{% endif %}    