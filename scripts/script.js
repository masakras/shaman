$(function(){
    $('input').on('input keyup', function(e) { //обработчик изменения input
        let valid = $('input').val();
        if (valid == "ВСЕ") {
            $('.link_1').addClass("active");
        }
        if (valid == "МЫ") {
            $('.link_2').addClass("active");
        }
        if (valid == "ЖЕЛАЕМ") {
            $(".story_4").addClass("visible");
            $('.link_4').addClass("active");
        }
        if (valid == "СЧАСТЬЯ") {
            $(".story_5").addClass("visible");
            $(".map").addClass("visible");
            $('.link_5').addClass("active");
        }
        if (valid == "МОЛОДОЙ") {
            $(".story_6").addClass("visible");
            $('.link_6').addClass("active");
        }
        if (valid == "СЕМЬЕ") {
            $('.link_7').addClass("active");
        }
        if (valid == "ЯНЫ") {
            $('.link_8').addClass("active");
        }
        if (valid == "И") {
            $('.link_9').addClass("active");
        }
        if (valid == "ДЕНИСА") {
            $('.link_10').addClass("active");
        }
    });
});
