// Hiển thị sub-nav ở header
$(document).ready(function(){
    $('.nav-item.dropdown').hover(function(){
        $(this).find('.sub-menu').stop(true, true).slideDown(300); /* Hiển thị sub-menu tương ứng với thẻ li */
    }, function(){
        $(this).find('.sub-menu').stop(true, true).slideUp(300); /* Ẩn sub-menu khi hover ra khỏi thẻ li */
    });
});
