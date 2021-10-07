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