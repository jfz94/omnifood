$(document).ready(function(){
    /*
        $('h1').click(function(){
            $(this).css('background-color','red');
        }); 
    */
    
    /* direction up or down */
    $('.js--section-features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');  
        }else{
            $('nav').removeClass('sticky');
        }
    },{
        offset:'60px;'
    });
});