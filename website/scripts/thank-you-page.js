---
---
{% if jekyll.environment == "production" %}
$(function(){
    gtag('config', window.GA_PROPERTY_ID, {
        'page_path': '/thanks-for-downloading-ctp'
    });
    $('#download-problem').on('click', function () {
        gtag('config', window.GA_PROPERTY_ID, {
            'page_path': '/thanks-report-download-problem'
        });
    });
    $('#support-center').on('click', function () {
        gtag('config', window.GA_PROPERTY_ID, {
            'page_path': '/thanks-to-sc'
        });
    });
});
{% endif %}    