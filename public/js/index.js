
function goTop() {
    var targetOffset = $("#page-top").offset().top;
    $('html,body').animate({scrollTop: targetOffset},1);
}

$(document).ready(goTop);
