$(function () {
    $("#downButton").click(function () {
        console.log(1);
        $("#more").fadeOut();
        $(".exmp-point-hidden").slideDown();
        $("#clear").slideDown()
        //$('#toggleSection').slideToggle();
    });
});
$(function () {
    $("#upButton").click(function () {
        console.log(2);
        $("#clear").fadeOut();
        $(".exmp-point-hidden").slideUp();
        $("#more").fadeIn();
        //$('#toggleSection').slideToggle();
    });
});
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})
$(function() {
    var $menu_popup = $('.menu-popup');

    $(".menu-triger, .menu-close").click(function(){
        $menu_popup.slideToggle(300, function(){
            if ($menu_popup.is(':hidden')) {
                $('body').removeClass('body_pointer');
            } else {
                $('body').addClass('body_pointer');
            }
        });
        return false;
    });

    $(document).on('click', function(e){
        if (!$(e.target).closest('.menu').length){
            $('body').removeClass('body_pointer');
            $menu_popup.slideUp(300);
        }
    });
});