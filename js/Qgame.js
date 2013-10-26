$(window).load(function() {
  	game.init();    

});
var bloqueoa = 0;
var bloqueod = 0;
            var callbacks_list = $('.demo-callbacks ul');
            $('.icheckbox input').on('ifChecked', function(event){
              callbacks_list.prepend('<li><span>#' + this.id + '</span> is ' + event.type.replace('if', '').toLowerCase() + '</li>');
              console.log('1');
            }).iCheck({
              checkboxClass: 'icheckbox_flat-blue',
             
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
    $('#next2').hide();
    $('#topavance').hide();
    $('#topavance2').hide();
    $('#home').hide();
    $('#stick1').hide(); 
     $('#stick2').hide(); 
     $('#stick3').hide(); 
    $('#nextstick1').hide();
	},
	stick1:function()
             { 
	             $('#startscreen').hide();
                 $('#stick1').show(); 
                 $('#nextstick1').show();
             },
	    p1:function()
             { 
                 $('#startscreen').hide();
                 $('#q1').show();
                 $('#q2').hide();
                 $('#check1').show();
                  $('#check2').hide();
                 $('#next').show();
                 $('#next2').hide();
                 $('#home').show();
                 $('#topavance').show();
                 $('#topavance2').hide();
        
                 //pregunta si esta chequeado
               $('#input-1').on('ifChecked', function(event){   
              console.log('chequeado');
              bloqueoa = 1;
              })
                  $('#input-1').on('ifChecked', function(event){   
              console.log('chequeado');
              bloqueod = 1;
              }) 
             },
             //
        p2:function()
             {   
                 $('#startscreen').hide();
                 $('#q1').hide();
                 $('#q2').show();
                 $('#check1').hide();
                 $('#check2').show();
                  $('#nextstick1').hide();
                 $('#next').hide();
     
                 $('#topavance').hide();
                 $('#topavance2').show();
                 $('#home').hide();
                  //pregunta si esta chequeado

                 $('#input-21').on('ifChecked', function(event){   
                 console.log('21 chequeado')  
                      if (bloqueod == 0)
                      
                      {
                        console.log('bloqueo')
	                     $('#stick2').show();  
	                     $('#check2').hide();
	                     $('#q2').hide();
	                     $('#next2').hide();
	                     $('#home').show();
                      }
         
                })  
                $('#input-22').on('ifChecked', function(event){   
                 console.log('22 chequeado')  
                      if (bloqueoa == 0)
                      
                      {
                        console.log('bloqueo')
	                     $('#stick3').show();  
	                     $('#check2').hide();
	                     $('#q2').hide();
	                     $('#next2').hide();
	                     $('#home').show();
                      }
         
                })  
                $('#input-23').on('ifChecked', function(event){   
                 console.log('23 chequeado')  
                      if (bloqueoa == 0)
                      
                      {
                        console.log('bloqueo')
	                     $('#stick3').show();  
	                     $('#check2').hide();
	                     $('#q2').hide();
	                     $('#next2').hide();
	                     $('#home').show();
                      }
         
                }) 

             },  //fin p2  
             //
             pp3:function(){
                 $('#startscreen').hide();
                 $('#q1').hide();
                 $('#q2').hide();
                 $('#check1').hide();
                 $('#check2').hide();
                 $('#next').hide();
                 $('#next2').hide();
 
                 $('#home').hide();
                 $('#topavance').hide();
                 $('#topavance2').hide();
	             $('#topavance33').show();
	             $('#nextinter3').show();
	        
             },
         p3:function()
             {  
                 $('#topavance33').hide();
                 $('#startscreen').hide();
                 $('#q1').hide();
                 $('#q2').hide();
                 $('#check1').hide();
                 $('#check2').hide();
                 $('#next').hide();
         
     
                 $('#home').hide();
                 $('#topavance').hide();
                 $('#topavance2').hide();
                 $('#next2').hide()
                 $('#topavance3').show();
                 $('#nextinter3').hide();
                  $('#nextstick1').hide();
                //$('#topavance33').show().delay(2000).fadeOut();
        
              var prandom = Math.floor((Math.random()*5)+1);
              
              console.log(prandom);   
              switch(prandom)
                   {
                       case 1: 
                        $('#q31').show();
                        $('#check31').show();
                        
                         $('#next36').show()
	                  
                        break;
                       case 2:  
                        $('#q32').show();
                        $('#check32').show();
                        break;
                       case 3:
                       $('#q33').show();
                        $('#check33').show();
                        break; 
                       case 4: 
                      $('#q34').show();
                       $('#check34').show();
                        break;
                        //solo si no eligio la 2d
                       case 5: 
                      $('#q35').show();
                       $('#check35').show();
                      //solo si no elgio b
                        break;
                         case 6: 
                      $('#q36').show();
                       $('#check36').show();
                      //solo si eligio 1c
                        break;
                  }

             }  //fin p3
                
             
	}



