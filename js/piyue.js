$(".main-content div.close").click(function(){
    var $xiangqing = $("<span>...</span><a href='#' class='xiangqing'>详情&gt;&gt;</a>")
    var pContent = $(this).parent().find(".content").text();
    var pContentShort = pContent.substr(0,70)
    $(this).parent().find(".content").text(pContentShort).append($xiangqing)

    $(this).hide();
    $xiangqing.click(function(){
        $(".main-content p.question span.content").text(pContent);
        $(".main-content div.close").show();
    })
})
$(".main-content .answer-block .submit-value").click(function(){
    $("#black-background").show().find("span.value").text($(this).prev().val());
    return false

})
$("#black-background").click(function(){
    $(this).hide();
})

$("#change-value-button").click(function(){
    $clickPlace = $(this)
    $("#pingfenxiugai").show();
    $("#pingfenxiugai a.save").click(function(){
        var a = $("#value-number").val();
        $clickPlace.prev().text(a);
        $("#pingfenxiugai").hide();
        return false
    })
    return false
})
$("#pingfenxiugai a.close,#pingfenxiugai a.cancel").click(function(){
    $("#pingfenxiugai").hide();
    return false
})

