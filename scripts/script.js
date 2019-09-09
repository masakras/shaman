$(function(){
    $('input').on('input keyup', function(e) { //обработчик изменения input
        let valid = $('input').val();
        if (valid == "1") {
            $('.link_1').addClass("active");
        }
        if (valid == "2") {
            $('.link_2').addClass("active");
        }
        if (valid == "4") {
            $(".story_4").addClass("visible");
            $('.link_4').addClass("active");
        }
        if (valid == "5") {
            $(".story_5").addClass("visible");
            $(".map").addClass("visible");
            $('.link_5').addClass("active");
        }
        if (valid == "6") {
            $(".story_6").addClass("visible");
            $('.link_6').addClass("active");
        }
        if (valid == "7") {
            $('.link_7').addClass("active");
        }
        if (valid == "8") {
            $('.link_8').addClass("active");
        }
        if (valid == "9") {
            $('.link_9').addClass("active");
        }
        if (valid == "10") {
            $('.link_10').addClass("active");
        }
    });
});
