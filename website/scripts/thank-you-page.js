---
---
{% if jekyll.environment == "production" %}
$(function(){
    $('#download-problem').on('click', function () {
        gtag('config', 'UA-83678642-3', {
            'page_path': '/thanks-report-download-problem'
        });
    });
    $('#support-center').on('click', function () {
        gtag('config', 'UA-83678642-3', {
            'page_path': '/thanks-to-sc'
        });
    });
});
{% endif %}    