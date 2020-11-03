/**
 * Created by happyday on 2016/4/15.
 */
$(function(){


    $("#paper-name").click(function(){
        $(this).prev().remove();
        $(this).before("<textarea id='textplace'></textarea>").prev().focus();
        var $imageicon = $(this).detach();

        $("#textplace").blur(function(){
            var $textContent  = $(this).val();
            if($textContent.length<20){
                $(this).after("<div class='show-text-single'></div>");
                $(".show-text-single").parent().addClass("title-inner-single");
                $(".show-text-single").after($imageicon);
                $(".show-text-single").text($textContent);
                $(this).remove();
            }else{
                $(this).after("<div class='show-text-double'></div>");
                $("#text-place").removeClass(".title-inner-single");
                $(".show-text-double").parent().removeClass("title-inner-single");
                $(".show-text-double").after($imageicon);
                $(".show-text-double").text($textContent);
                $(this).remove();
            }
        })
    })

})