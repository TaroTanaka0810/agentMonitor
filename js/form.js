//form.js

$(function(){
    // const categoryList = ["independ","knowledge","progress","growth","workEnv"];
    // var selectTarget = $("select#select_target");
    // var selectCourse = $("select#select_course");
    // var selectCategory = $("select#select_category");
    // var selectRestriction = $("select#select_restriction");

    // $(selectCourse).attr("disabled","disabled");
 
    $(selectTarget).change(function(){
　　  var area = $(this).val();
        if(area == "student"){
            $(selectCourse).removeAttr("disabled");
            // $(selectCategory).find("option").eq(0).attr("selected","");
            $(selectCategory).attr("disabled","disabled").val("");
            $(selectCategory).removeAttr("disabled");

            $(selectRestriction).attr("disabled","disabled").val("");
            $(selectRestriction).removeAttr("disabled");

            $(".student_category").attr("style","");
            $(".mentor_category").attr("style","display:none;");



        }else if(area == 'mentor'){
            $(selectCourse).attr("disabled","disabled").val("");
            $(selectCategory).attr("disabled","disabled").val("");

            $(selectRestriction).attr("disabled","disabled").val("");
            $(selectRestriction).removeAttr("disabled");

            $(selectCategory).removeAttr("disabled");
            $(".student_category").attr("style","display:none;");
            $(".mentor_category").attr("style","");

            // $(selectCategory).find("option").eq(0).attr("selected","");


        } else {
            $(selectCourse).attr("disabled","disabled").val("");
            $(selectCategory).attr("disabled","disabled").val("");

            $(selectRestriction).attr("disabled","disabled").val("");
            $(selectRestriction).removeAttr("disabled");

            $(selectCategory).removeAttr("disabled");
            $(".student_category").attr("style","");
            $(".mentor_category").attr("style","");
        }
    });

    $(selectCategory).change(function(){
        var restrict = $(this).val();
        var target = $(selectTarget).val();
        if( target == 'student'){
            $(selectRestriction).attr("disabled","disabled").val("");
            $(selectRestriction).removeAttr("disabled");

            for(var i=0;i<categoryList.length;i++){
                $(".student_restriction_"+categoryList[i]).attr("style","display:none;");
                $(".mentor_restriction_"+categoryList[i]).attr("style","display:none;");

            }
            $(".student_restriction_"+restrict).attr("style","");
        } else if(target == 'mentor'){
            $(selectRestriction).attr("disabled","disabled").val("");
            $(selectRestriction).removeAttr("disabled");


            
            for(var i=0;i<categoryList.length;i++){
                $(".student_restriction_"+categoryList[i]).attr("style","display:none;");
                $(".mentor_restriction_"+categoryList[i]).attr("style","display:none;");
            }
            $(".mentor_restriction_"+restrict).attr("style","");

        } else {
            $(selectCourse).attr("disabled","disabled").val("");
            $(selectCategory).attr("disabled","disabled").val("");

            $(selectRestriction).attr("disabled","disabled").val("");
            $(selectRestriction).removeAttr("disabled");

            $(selectCategory).removeAttr("disabled");
            $(".student_category").attr("style","");
            $(".mentor_category").attr("style","");
        }
            

            
    });
});