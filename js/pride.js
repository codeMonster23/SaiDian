/**
 * Created by happyday on 2016/4/14.
 */
$(function(){
//试卷协办单位表格点击删除后删除


    $("table.xieban td.delete .delete-button").click(function(){
        $(this).parent().parent().remove();
    })

    //一行表格的html内容
    $("table.xieban td.add .add-button").click(function(){
        var $tr = $(this).parent().parent().prev().clone(true);
        $(this).parent().parent().filter("tr").before($tr);
    })
    //点击编辑按钮 编辑内容
    $("table.xieban td.edit a.edit-button").click(function(){
        var $companyName = $(this).prev().text();
        $(this).prev().remove();
        $(this).before("<input class='company-name' />").prev().val($companyName).focus().blur(function(){
            $companyNewName = $(this).val();
            $(this).before("<div class='company-name'></div>").prev().text($companyNewName);
            $(this).remove();
        });


    })


    $("#wujiangpin").click(function(){
        $(".no-pride-line label").addClass("title-select");
        $(".guize").removeClass("guize-select");
        $(".jiangpin").removeClass("jiangpin-select");
        $(".has-pride-line label").removeClass("title-select");
        $(".bisai-info").removeClass("bisai-info-select");
    })
    $("#youjiangpin").click(function(){
        $(".no-pride-line label").removeClass("title-select");
        $(".has-pride-line label").addClass("title-select");
        $(".guize").addClass("guize-select");
        $(".jiangpin").addClass("jiangpin-select");
        $(".bisai-info").addClass("bisai-info-select");
    })
    $("div.sidebar ul .shouqi").click(function(){
        $(this).next().filter(".paper-all").animate(
            {"height":"toggle"},"slow"
        )
    })
    $("div.sidebar ul div.paper-title").click(function(){
        $(this).next().animate(
            {"height":"toggle"},"slow"
        )
    })
    $(".arrow-effect").click(function(){
        $(this).addClass("radio-line-select");
        $(this).siblings().removeClass("radio-line-select")
    })

    $(".show-hander-body").hide();
    $(".show-hander").click(function(){
        $(this).siblings().filter(".show-hander-body").hide();
        $(this).next().filter(".show-hander-body").show();
    })

    $("#plus-value").click(function(){
        a = $("#question-value-number input").val();
        var question = parseInt(a);
        var plusValue = question + 1 ;
        var plusValueString = plusValue+"分";
        $("#question-value-number input").val(plusValueString);

    })
    $("#minus-value").click(function(){
        a = $("#question-value-number input").val();
        var question = parseInt(a);
		if(question>=1){
		  var minusValue = question - 1 ;
		  var minusValueString = minusValue+"分";
		  $("#question-value-number input").val(minusValueString);	
	    }
    })
    $(".small-icon").hide();
    $(".question-title").hover(function(){
        $(this).find(".small-icon").show();
    },function(){
        $(".small-icon").hide();
    })

    $(".small-right-icon").hide();
    $(".small-right-icon").parent().hover(function(){
        $(this).find(".small-right-icon").show();
    },function(){
        $(".small-right-icon").hide();
    })
//右侧菜单收起

    $(".sidebar-right .right-arrow-close").click(function(){
        $(".sidebar-right").animate({
            width:0
        },"slow");

        $(this).after("<div class='right-arrow right-arrow-return'></div>")
        var $close = $(this).detach();
        $(".sidebar-right .right-arrow-return").click(function(){
            $(".sidebar-right").animate({
                width:270
            },"slow");
            $(this).after($close);
            var $return = $(this).detach();
        })
    })




    $(".small-right-icon .delete").click(function(){
        var $clickPlace = $(this)
        $(".jn .tanchuang .open-question-delete").css("display","block");
        $(".open-question-delete .open-header .close").click(function(){
            $(".jn .open-question-delete").css("display","none")
        })
        $(".open-question-delete .open-button .open-container .cancel").click(function(){
            $(".jn .open-question-delete").css("display","none")
        })
        $(".open-question-delete .open-button .open-container .save").click(function(){
            $clickPlace.parent().parent().remove();
            $(".jn .tanchuang .open-question-delete").css("display","none");
        })
    })






//点击题目栏目右上角修改按钮，修弹框，输入内容修改题目
    $(".jn .question-title .small-icon .edit").click(function(){
        var questionTitle = $(this).parent().parent().find(".core-title").text();
        $clickPlace = $(this)
        $(".jn .open-add-content .open-content .input-block input").val(questionTitle);
        $(".jn .open-add-content").css("display","block")
        $(".open-add-content .open-header .close").click(function(){
            $(".jn .open-add-content").css("display","none")
        })
        $(".open-add-content .open-button .open-container .cancel").click(function(){
            $(".jn .open-add-content").css("display","none")
        })
        $(".open-add-content .open-button .open-container .save").click(function(){
            var newQuestionTitle = $(".jn .open-add-content .open-content .input-block input").val();
            $clickPlace.parent().parent().find(".core-title").text(newQuestionTitle);
            $(".jn .open-add-content").css("display","none")
        })
    })
//点击题目栏目右上角删除按钮，弹出框，确认删除内容
    $(".jn .question-title .small-icon .delete").click(function(){
        $clickPlace2=$(this)
        $(".jn .tanchuang .open-delete-setting").css("display","block")
        $(".jn .tanchuang .open-delete-setting .open-header .close").click(function(){
            $(".jn .tanchuang .open-delete-setting").css("display","none")
        })
        $(".jn .tanchuang .open-delete-setting .open-button .open-container .cancel").click(function(){
            $(".jn .tanchuang .open-delete-setting").css("display","none")
        })
        $(".jn .tanchuang .open-delete-setting .open-button .open-container .save").click(function(){
            if($("#delete-all").is(':checked')) {
                $clickPlace2.parent().parent().next().filter(".group-question").css("display","none");
                $clickPlace2.parent().parent().css("display","none");
                $(".jn .tanchuang .open-delete-setting").css("display","none");
                alert("删除栏目所有内容")
            }
            if($("#delete-col").is(':checked')) {
                $clickPlace2.parent().parent().css("display","none");
                $(".jn .tanchuang .open-delete-setting").css("display","none");
                alert("只删除栏目")
            }

        })
    })
//点击每个题目右侧的删除按钮，弹出框，确认删除本题



    $(".img-block .search").click(function(){
        var $bigImg = $("<div class='img-big'><a href='#' class='false'></a></div>")
        $("<img>").attr("src",$(this).prev().attr("src")).prependTo($bigImg)
        $bigImg.css('opacity',0).animate({'opacity':'1'},'slow').appendTo($(this).parent().parent().parent().parent())
        $bigImg.find("a").click(function(){
            $(this).parent().remove();
            return false
        })
        return false


    })
    $("a.module-tab .close-tab").click(function(){
        $("#shijuanxingtai").show();
        $("#shijuanxingtai .close,#shijuanxingtai .cancel").click(function() {
            $("#shijuanxingtai").hide()
        })
        $("#shijuanxingtai .save").click(function() {
            $("#shijuanxingtai").hide()
        })
    })

})