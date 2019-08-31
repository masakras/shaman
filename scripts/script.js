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
            $(".invisible").addClass("visible");
            $('.link_4').addClass("active");
        }
        if (valid == "5") {
            $(".invisible").addClass("visible");
            $('.link_5').addClass("active");
        }
        if (valid == "6") {
            $(".invisible").addClass("visible");
            $('.link_6').addClass("active");
        }
        if (valid == "7") {
            $('.link_7').addClass("active");
        }
    });
});
