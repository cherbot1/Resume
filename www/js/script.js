$(function () {
    $("#toggleButton").click(function () {
        console.log(123);
        $("#more").remove();
        $(".exmp-point-hidden").slideToggle();
        //$('#toggleSection').slideToggle();
    });
});
