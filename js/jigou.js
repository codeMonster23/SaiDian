/**
 * Created by happyday on 2016/5/6.
 */
$(document).ready(function(){
    $("#piliang-invite").click(function(){
        $("#piliang1").show();
    })
    $(".popup .close").click(function(){
        $(this).parent().hide();
    })
    $("#upload-excel").click(function(){
        $("#piliang1").hide();
        $("#piliang2").show();
    })
    $("#upload-again").click(function(){
        $("#piliang2").hide();
        $("#piliang1").show();
    })
    $("#group-invite").click(function(){
        $("#piliang2").hide();
        $("#piliang3").show();
    })
    $("#complete").click(function(){
        $("#piliang3").hide();
    })
    $("#single-invite,.single-invite").click(function(){
        $("#single1").show();


    })
    $("#single-cancel").click(function(){
        $("#single1").hide();
    })

    $("#single-confirm").click(function(){
        $("#single1").hide();
        $("#single2").show();
    })
    $("#single2").click(function(){
        $(this).hide();

    })
    $(".add-group").click(function(){
        $("#add-group-window").show();
    })
    $(".alert-yanzheng").click(function(){
        $("#alert-yanzheng-window").show();
    })
    $(".close-alert").click(function(){
        $(this).parent().parent().parent().hide();
    })

    $("#new-zu").click(function(){
        $(".new-zu-input").show();
        $(this).hide();

    })
    $(".jh-btn-qd").click(function(){

        $fenZuName = $("#fenzu").val();
        $("#new-zu").parent().before("<li><a href='#'><span>全部邀请用户</span><font>（0）</font></a></li>").prev().find("a").find("span").last().text($fenZuName)
        $("#fenzu").val("");
        $(".new-zu-input").hide();
        $("#new-zu").show();

    })
    $(".jh-btn-qx").click(function(){
        $(".new-zu-input").hide();
        $("#new-zu").show();
    })

    $(".add-new-group-input").hide()
    $(".add-new-group-button").click(function(){
        $(".add-new-group-input").show();
        $(this).hide();
    })

    $(".add-new-group-submit").click(function(){
        $fenZuName = $("#new-group-input-area").val();
        $(".group-checkbox").append("<div class='group-tab-name'><input type='checkbox' ><label></label></div>").find(".group-tab-name").last().find("label").text($fenZuName)

        $("#new-group-input-area").val("");
        $(".add-new-group-input").hide();
        $(".add-new-group-button").show();
        return false

    })
    $(".add-new-group-cancel").click(function(){
        $(".add-new-group-input").hide();
        $(".add-new-group-button").show();
        return false
    })

})
