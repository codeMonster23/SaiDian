/**
 * Created by happyday on 2016/4/14.
 */

$(document).ready(function(){
    $('#set-time').datetimepicker({
        dayOfWeekStart : 1,
        lang:'ch',

    });

    $('#time-button,#time-publish-button').click(function(){
        $('#set-time').datetimepicker('show');
    });

    $('#begin-time,#close-time').datetimepicker({
        dayOfWeekStart : 1,
        lang:'ch',

    });

    //  $(".paper-all").scrollHighlight({buffer:0});
})

