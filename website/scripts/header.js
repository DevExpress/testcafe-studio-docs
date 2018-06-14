---
---
{% if jekyll.environment == "production" %}
$(function(){
    $('#pricing-menu-item').on('click', function () {
        gtag('config', window.GA_PROPERTY_ID, {
            'page_path': '/pricing'
        });
    });
});
{% endif %}    