/**
 * 勿动
 */
$(function () {

    //获取文章标题
    function getUrl() {
        var queryString = unescape(location.search);
        var theRequest = new Object();
        if (queryString.indexOf("?") != -1) {
            var str = queryString.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
    var paperGuid = getUrl().PaperGuid;
    var sectionGuid = "";
    
    //获取页面节点
    var titleNode = $("#paperTitle");


    titleNode.html(getUrl().title); //设置当前页面标题



    //定义页面初始字段
    var title = titleNode.html();
    var sections = new Array();
    var titleWrap = $(".question-title");

    $(".small-icon").css("display", "none");//章节标题编辑 删除隐藏

    //章节名称部分
    (function () {
        var sectionTitleBlock = $(".small-icon");
        sectionTitleBlock.css("display", "none");//章节标题编辑/删除 初始状态隐藏

        //鼠标移动到章节标题栏上，编辑/删除显隐
        $(".question-block .question-title").hover(function () {
            $(this).children(".small-icon").show();
        }, function () {
            $(this).children(".small-icon").hide();
        })

        //编辑标题
        $(".small-icon .edit").click(function () {

            //获取标题在试卷中的次序
            var index = titleWrap.index($(this).parent().parent()); //获取所点击的标题的次序号
            

            var pointer = $(this);
            var pop = $("#modifyTitle");
            var input = $("#modifyTitle input");
            pop.children().css("display", "block");
            input.focus();

            var save = $("#modifyTitle .save");
            var cancel = $("#modifyTitle .cancel");
            var popClose = $(".open-header a.close");

            //保存标题
            save.click(function () {
                //修改排序数字
                titleWrap.eq(index).children(".sectionOrder").html(index + 1);

                //修改正文标题
                if ($.trim(input.val()) !== "") {
                    pointer.parent().siblings(".sectionTitle").html(input.val());
                    $(this).parent().parent().parent().css("display", "none");
                }

                //修改目录标题
                var temp = pointer.parent().parent().text();
                $(".paper-all").eq(index).children(".paper-title").children().html(temp);

                $.post("http://localhost:8490/institutioncenter/api/apipaper/createsection", {
                    sectionName:temp,
                    examPaperGUID: paperGuid
                }, function (data) {
                    sectionGuid = data.SectionGuid;

                    console.log(data, sectionGuid);
                })

            })
            //取消修改标题
            cancel.click(function () {
                $(this).parent().parent().parent().css("display", "none");
            })
            popClose.click(function () {
                $(this).parent().parent().css("display", "none");
            })

        })
    })()

    //试题分数设定
    var plus = $("#plus-value");
    var score = $("#question-value-number input");
    var minus = $("#minus-value");

    //加1
    plus.click(function () {
        score.val((parseInt(score.val()) + 1)+"分");
    })

    //减1
    minus.click(function () {
        if (parseInt(score.val()) > 0) {
            score.val((parseInt(score.val()) - 1) + "分");
        }
    })


    //单选 多选 填空 简答
    var questionType = $(".tixing ul li a");
    var options = $(".option");

    //试题信息
    var questionInfo = {
        examPaperGUID: paperGuid,
        sectionGUID: sectionGuid,
        tigan: "",
        knowledgePoint: "",
        typeValue: 1,            //1为单选，2为多选，3为填空，4为判断，5为简答
        score: 0,
        questionType: {
            option: [],          //选项
            optionAnswer: [],     //选项正确答案
            shortAnswer: ""       //简答正确答案
        },
        itemsTotal: 4            //单选或者多选的选项数目
    }

    //选择单选 多选等..

    var index = 0;//题型默认选择为单选0；
    questionType.click(function () {
        index = questionType.index(this);

        //题目类型切换
        questionType.removeClass("selected");
        questionType.eq(index).addClass("selected");
        options.hide();
        options.eq(index).show();
    })

    //获取不同题型信息
    function getQuestionInfo(index) {
        
        var items = options.eq(index).children("ul").children(".item");//选项集合
        questionInfo.itemsTotal = items.length; //选项数目

        questionInfo.typeValue = index + 1;//题型类别

        questionInfo.questionType.option = []; //清空选项值
        questionInfo.questionType.optionAnswer = []; //清空正确答案

        //当题目为单选1或者多选2或者判断4时，将答案存入数组
        var tv = parseInt(questionInfo.typeValue);
        if (tv == 1 || tv == 2 || tv == 4) {
            var radios = items.find("input[type='radio']");
            for (var i = 0; i < questionInfo.itemsTotal; i++) {
                questionInfo.questionType.option[i] = items.eq(i).children("input").val();//获取选项

                if (Boolean($(radios).eq(i).attr("checked"))) {
                    questionInfo.questionType.optionAnswer.push(i); //将正确答案的序号存入数组
                }
            }
        }
        if (tv == 3) {
            questionInfo.questionType.shortAnswer = options.eq(index).find("input").val();
        }
        if (tv == 5) {
            questionInfo.questionType.shortAnswer = options.eq(index).find("textarea").val();
        }
    }



    
    //提交
    $(".submit-button .confirm").click(function () {
        getQuestionInfo(index);
        //console.log("选项：" + questionInfo.questionType.option.toString() + "\n选项总数：" + questionInfo.itemsTotal + "\n选择题正确答案：" + questionInfo.questionType.optionAnswer.toString() + "\n简答题正确答案：" + questionInfo.questionType.shortAnswer);
        questionInfo.tigan = $("#tigan").val();
        questionInfo.knowledgePoint = $("#zhishidian").val();
        questionInfo.score = score.val();
        try {
            $.post("http://localhost:8490/institutioncenter/api/apipaper/createquestion", JSON.stringify(questionInfo), function (data) {
                console.log(data);
                if (data.ErrorCode == "E0006")
                {
                    createQuestion();
                }
            })
        }
        catch (e){}
    })


    //创建试题
    function createQuestion() {

    }
        

    



})


