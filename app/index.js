
jQuery(document).ready(function ($) 
	{
        
        $.getJSON('../users.json', function(data){
            
                $('.user_name').text(data.phone + data.name);
            
        })
        

		
    });
    
    