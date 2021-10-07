$(function () {
    $("#downButton").click(function () {
        console.log(123);
        $("#more").fadeOut();
        $(".exmp-point-hidden").slideDown();
        $("#clear").slideDown()
        //$('#toggleSection').slideToggle();
    });
});
$(function () {
    $("#upButton").click(function () {
        console.log(124);
        $("#clear").fadeOut();
        $(".exmp-point-hidden").slideUp();
        $("#more").fadeIn();
        //$('#toggleSection').slideToggle();
    });
});