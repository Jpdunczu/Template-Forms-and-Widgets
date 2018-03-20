/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    var slider = $("#image_list");  // ul elemeny
    var leftProperty, newLeftProperty;
    
    $("right_button").click(function() {
        leftProperty = parseInt(slider.css("left"));
        
        if( leftProperty - 300 <= -900 ) {
            newLeftProperty = 0;
        } else {
            newLeftProperty = leftProperty - 300;
        }
        
        slider.animate( {left: newLeftProperty}, 1000 );
    }); //end click
    
    $("#left_button").click(function() {
        leftProperty = parseInt(slider.css("left"));
        
        if( leftProperty < 0 ) {
            newLeftProperty = leftProperty + 300;
        } else {
            newLeftProperty = 0;
        }
        
        slider.animate( {left: newLeftProperty}, 1000 );
        
    }); // end click
}); // end ready

