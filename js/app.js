$(document).ready(function() {
    $.get('components/topbar/topbar.html', function(data) {
        $('#topbar').html(data);
        $('<link rel="stylesheet" href="components/topbar/topbar.css">').appendTo('head');
    });
});
