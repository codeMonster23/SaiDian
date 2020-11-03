/**
 * Created by happyday on 2016/4/8.
 */
$(document).ready(function(){
    $(".input-line .input-block input").each(function(){
        $(this).click(function(){
            if($(this).is(":checked")){
                $(this).parent().parent().addClass("selected-input");
                $(this).parent().next().addClass("selected-item");
                $(".input-line .input-block input").not(":checked").parent().parent().removeClass("selected-input");
                $(".input-line .input-block input").not(":checked").parent().next().removeClass("selected-item");
            }
        })
    })


    $("#set-pwd").click(function(){
        $(".input-block-password").show();
        $("#tabs,#tab-group,.jiaoyan-block").hide();
    })
    $("#open-public").click(function(){
        $(".input-block-password,#tabs,#tab-group,.jiaoyan-block").hide();
    })


    $("#select-user").click(function(){
        $("#tabs,#tab-group").show();
        $(".input-block-password,.jiaoyan-block").hide();
    })
    $("#tabs").idTabs();
    $(".confirm-close").click(function(){
        $(this).parent().hide()
        $("a[href='#tab1'],a[href='#tab2']").removeClass("selected")
    });
    $("a[href='#tab1']").click(function(){
        $("#tab1 .select-block").show();
    })
    $("a[href='#tab2']").click(function(){
        $("#tab2 .select-block").show();
    })



    $("input[name='paper-setting']").click(function(){
        if($(this).parent().parent().next().is(".tab-time")){
            $(this).parent().parent().next().show();
        }else{
            $(this).parent().parent().nextAll().filter(".tab-time").hide();
        }
    })
    $("input[name='publish-time']").click(function(){
        if($(this).parent().parent().next().is(".tab-time")){
            $(this).parent().parent().next().show();
        }else{
            $(this).parent().parent().nextAll().filter(".tab-time").hide();
        }
    })

    $("#jiaoyan").click(function(){
        $(".jiaoyan-block").show();
        $(".input-block-password,#tabs,#tab-group").hide();
    })

    $("div.sidebar ul li.shouqi").click(function(){
        $(this).next().animate(
            {"height":"toggle"},"slow"
        )
    })
    $(".friend-block").click(function(){
        $(this).toggleClass("select")
    })
    $("table.company-user tbody tr:odd").css("background-color","#f8f8f8");

    $(".main-content .tab").click(function(){
        $(this).toggleClass("cancel")
    })
    $(".select-tag").click(function(){
        $(this).remove();
        return false;
    })

    $("#ziding-tab").click(function(){
        $(".zidingyi-tab").css("display","block")
    })
    $(".zidingyi-tab a.save").click(function(){

        var tabName = $(".zidingyi-tab .input-block input").val();
        $("#ziding-tab").before("<div class='tab cancel'></div>").prev().text($(".zidingyi-tab .input-block input").val());
        $(".zidingyi-tab").hide();
        return false
    })
    $(".zidingyi-tab a.close,.zidingyi-tab a.cancel").click(function(){
        $(".zidingyi-tab").hide();
        return false
    })

    $(".new-col-label").click(function(){
        var a = $(this).find("label").text();
        $("#new-col-label").text(a);

    })

})



