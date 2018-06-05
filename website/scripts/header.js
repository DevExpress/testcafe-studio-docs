---
---
{% if jekyll.environment == "production" %}
$(function(){
    $('#pricing-menu-item').on('click', function () {
        gtag('config', 'UA-83678642-3', {
            'page_path': '/pricing'
        });
    });
});
{% endif %}    