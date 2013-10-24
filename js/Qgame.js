$(window).load(function() {
  	game.init();    
  	   
});

var game = {
	// Start initializing objects, preloading assets and display start screen
	init: function(){
		// Hide all game layers and display the start screen
    $('#startscreen').show(); //imagen de inidio con boton comenzar
    $('#q1').hide();  //oculto la pregunta
    $('#q2').hide();  //oculto la pregunta
    $('#check1').hide();
    $('#check2').hide();
    $('#next').hide();
    $('#back').hide();
    $('#topavance').hide();
    $('#topavance2').hide();
     $('#home').hide();
	},
	    p1:function()
             { 
                 $('#startscreen').hide();
                 $('#q1').show();
                 $('#q2').hide();
                 $('#check1').show();
                 $('#next').show();
                 $('#home').show();
                 $('#topavance').show();
                 $('#topavance2').hide();
                 $('#back').hide();
                 //pregunta si esta chequeado
                 $('#input-1').on('ifChecked', function(event){   
              console.log('chequeado');
            })
                  
             },
             
        p2:function()
             { 
                 $('#startscreen').hide();
                 $('#q1').hide();
                 $('#q2').show();
                 $('#check1').hide();
                 $('#check2').show();
                 $('#next').show();
                 $('#back').show();
                 $('#topavance').hide();
                 $('#topavance2').show();
                 $('#home').hide();
                 

             }    
                
             
	}



