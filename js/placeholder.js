/**
 * Created by happyday on 2016/4/1.
 */
$(document).ready(function() {

    $(".input_item_focus").each(function() {
        var thisVal = $(this).val();
        //判断文本框的值是否为空，有值的情况就隐藏提示语，没有值就显示
        if (thisVal != "") {
            $(this).siblings("label").hide();
        } else {
            $(this).siblings("label").show();
        }
        //聚焦型输入框验证
        $(this).focus(function() {
            $(this).siblings("label").hide();
        }).blur(function() {
            var val = $(this).val();
            if (val != "") {
                $(this).siblings("label").hide();
            } else {
                $(this).siblings("label").show();
            }
        });
    })
    $(".input_item").each(function() {
        var thisVal = $(this).val();
        //判断文本框的值是否为空，有值的情况就隐藏提示语，没有值就显示
        if (thisVal != "") {
            $(this).siblings("label").hide();
        } else {
            $(this).siblings("label").show();
        }
        $(this).keyup(function() {
            var val = $(this).val();
            $(this).siblings("label").hide();
        }).blur(function() {
            var val = $(this).val();
            if (val != "") {
                $(this).siblings("label").hide();
            } else {
                $(this).siblings("label").show();
            }
        })
    })
})