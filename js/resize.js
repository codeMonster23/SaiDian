/**
 * Created by happyday on 2016/4/25.
 */
if($(".jn .container-exam .sidebar").resizable() == undefined){
    $(".jn .container-exam .sidebar").resizable({
        handles:'e',
        minWidth:'300',
        maxWidth:'1000'
    })
}