jQuery(document).ready(function(){
    "use strict";
    $('#slider-carousle').carouFredSel({
        responsive:true,
        width:'100%;',
        circular:true,

        scroll:
        {
            items:1,
            duration:500,
            pauseOnHover:true
        },
        auto:true,
        items:
        {
            visible:{
                        min:1,
                        max:1
                     },
            height:"variable"        
        },
        pagination:
                    {
                        container : ".sliderpager",
                        pageAnchorBuilder: false
                    }

    });
    ///////////////

    $('.portfolio-caousel').carouFredSel({
        responsive:true,
        width:'100%;',
        circular:true,
        prev: '#prev',
        next: '#next',

        scroll:
        {
            items:1,
            duration:500,
            pauseOnHover:true
        },
        auto:true,
        items:
        {
            visible:{
                        min:1,
                        max:4
                     },
            height:"variable"        
        },
       

    });
    ///////////////


    $(window).scroll(function(){

        var top = $(window).scrollTop();

        if(top > 480){

            $("header").addClass("secondary");
        }else{
            $("header").removeClass("secondary");
        }


    });

    //Start sicknav
    $('#menu').slicknav({
        label :'',

    });
    ///////////////////////
    $('header nav ul li a').focus(function(){   
        $('header nav ul li a').css('color','deepskyblue');
        $(this).css('color','#fff');
        
    });
    

});