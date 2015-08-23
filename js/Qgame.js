$(window).load(function() {
  	game.init();      
});
//como los check arrancan sin tilde los bloqueos estan activados a medida que los marquen se van a desbloquear
var bloqueo1a = true;
var bloqueo1b = true;
var bloqueo1c = true;
var bloqueo1d = true;
var bloqueo1e = true;
var bloqueo1f = true;
var bloqueo2a = true;
var bloqueo2b = true;
var bloqueo2c = true;
var bloqueo2d = true;
var bloqueo2e = true;
var bloqueo2f = true;
var bloqueo2g = true;
var bloqueo2h = true;
//
var puntos = 0;
var restapts= 0;
//
var ptsa = 0;
var ptsb = 0;
var ptsc = 0;
var ptsd = 0;
var ptse = 0;
var ptsf = 0;
var ptsg = 0;
var ptsh = 0;
//
var pts81 = 0;
var pts82 = 0;
var pts83 = 0;
var pts84 = 0;
var pts85 = 0;
var pts86 = 0;
var pts87 = 0;
var pts88 = 0;
var pts89 = 0;
var pts90 = 0;
var pts91 = 0;
var pts92 = 0;
var pts93 = 0;
var pts94 = 0;
var pts95 = 0;
var puntosfinal = 0;
//
var nombrej;
var personaje = 0;
//
var sumcheck = 0;
var cantmax= 0;
var indiceinput = 0; //este indice lo manejo para indicar en que numero arranca el input-x x= 1, 21, 311, etc

            var callbacks_list = $('.demo-callbacks ul');
            $('.icheckbox input').on('ifChecked', function(event){
              callbacks_list.prepend('<li><span>#' + this.id + '</span> is ' + event.type.replace('if', '').toLowerCase() + '</li>');
   
            })
            
             $('.skin-line input').each(function(){
                var self = $(this),
                  label = self.next(),
                  label_text = label.text();

                label.remove();
                self.iCheck({
                  checkboxClass: 'icheckbox_line-blue',
                  insert: '<div class="icheck_line-icon"></div>' + label_text
                  
                });
              });
              //funcion para bloquear y que solo puede elegir x opciones
              function bloquearop() 
              {
                for (var checks = indiceinput; checks < cantmax; checks += 1) 
                {          
                   var  armoinput = '#input-' + '' + checks; 
                   
                 if ( $(armoinput ).is( ":checked" ) )
                 {
	                // console.log('no hago nada')
                 }
                 else
                 {
                  //  console.log('lo desabilito')
                   // console.log(armoinput)
	                $(armoinput).iCheck('disable');
                 }
     
                } //fin for 
               }//fin funcion
               function mostrarpersonaje()
               {
	               switch(personaje) //se muestra el personaje completo que se eligio
                 {
                   case '1':
                     $('#entero1').show();
                   break;
                   
                   case '2':
                     $('#entero2').show();
                   break;
                   
                   case '3':
                     $('#entero3').show();
                   break;
                   
                   case '4':
                     $('#entero4').show();
                   break;
                   
                   case '5':
                     $('#entero5').show();
                   break;
                   
                   case '6':
                     $('#entero6').show();
                   break;
                   
                   case '7':
                     $('#entero7').show();
                   break;
                   
                   case '8':
                     $('#entero8').show();
                   break;
                   }

               }


var game = {

	// Start initializing objects, preloading assets and display start screen
	init: function(){
		// Hide all game layers and display the start screen
    $('#startscreen').show(); //imagen de inicio con boton comenzar
    $('.puntos').hide();
    $('.questions').hide();  //oculto la pregunta
    $('.icheckbox').hide();
    $('.topavance').hide();
    $('.bnext').hide();
    $('.stick').hide();
    $('.avatar').hide();
    $('#home').hide();
    $('#setnombre').hide();
    $('#nombrescreen').hide();
    $('.drop').hide();
    $('input').iCheck('uncheck'); //deja todos los inputs sin checkear
    $('input').iCheck('enable');  //deja todos los inputs desbloqueados para usar	
	},
	stick1:function()
             { 
	             $('#startscreen').hide();
                 $('#stick1').show(); 
                 $('#nextplayer').show(); //va a seleccionar avatar
             },
    	selectplayer:function()
             { 
                  textnom.value = ''; //borra el nombre que se escribio la ultima vez que se jugo
	             $('#startscreen').hide();
                 $('.stick').hide(); 
                 $('.bnext').hide();   
                  $('#stickplayer').show(); 
                  //
                  $('.avatar').show(); //mustra todos los avatares (clase)
                  $('#setnombre').show();
             },
        playerok:function(el)
             { 
                 $('.stick').hide(); 
                 $('.bnext').hide(); 
                 $('.avatar').hide(); //oculta todos los avatares (clase)
                  $('#setnombre').hide();
                 //tiene que mostrar de cuerpo entero el avata seleccionado debajo del nombre
                 $('#stickvacio').show();
                 $('#nombrescreen').show();
	             $('#nombrej').html(localStorage.autosave);
	             //
	              personaje= el.name;
	             mostrarpersonaje();                 //
                 $('#nextstick1').show();  //va a la pregunta1
             },
    
	    p1:function()
             { 
                 $('#startscreen').hide();
                 $('#q1').show();
                 $('#check1').show();         
                 $('#next').show();
                 $('#home').show();
                 $('#topavance').show();
                 $('#setnombre').hide();
                 $('#nombrescreen').hide();
                  $('.avatar').hide();
                  $('#stickvacio').hide();
                 //
                 cantmax = 7; //lo usa la funcion que analiza cuantas preg tiene que bloquear
                 sumcheck = 0; //inicializo el contador
                 indiceinput = 1; //poruqe arranca en input-1
                 //pregunta si esta chequeado
              $('#input-1').on('ifChecked', function(event){   
              bloqueo1a = false;
              sumcheck++;
                if (sumcheck > 4)
                 {
                    bloquearop();  //evalua las opciones que tiene que bloquear
                 }
              })
              $('#input-1').on('ifUnchecked', function(event)
               {
                 sumcheck= (sumcheck-1);                            
                })
              $('#input-2').on('ifChecked', function(event)
              {   
              bloqueo1b = false;
                sumcheck++;
                 if (sumcheck > 4)
                 {
                    bloquearop();  //evalua las opciones que tiene que bloquear
                 }
              })
              $('#input-2').on('ifUnchecked', function(event)
               {
                 sumcheck= (sumcheck-1);                            
                })
              $('#input-3').on('ifChecked', function(event)
              {   
              bloqueo1c = false;
                sumcheck++;
                if (sumcheck > 4)
                 {
                    bloquearop();  //evalua las opciones que tiene que bloquear
                 }
               }) 
               $('#input-3').on('ifUnchecked', function(event)
               {
                 sumcheck= (sumcheck-1);                            
                })
              $('#input-4').on('ifChecked', function(event){   
              bloqueo1d = false;
                sumcheck++;
                if (sumcheck > 4)
                 {
                    bloquearop();  //evalua las opciones que tiene que bloquear
                 }
              })
              $('#input-4').on('ifUnchecked', function(event)
               {
                 sumcheck= (sumcheck-1);                            
                })
              $('#input-5').on('ifChecked', function(event){   
              bloqueo1e = false;
                sumcheck++;
                 if (sumcheck > 4)
                 {
                    bloquearop();  //evalua las opciones que tiene que bloquear
                 }
              })
              $('#input-5').on('ifUnchecked', function(event)
               {
                 sumcheck= (sumcheck-1);                            
                })
              $('#input-6').on('ifChecked', function(event){   
              bloqueo1f = false;
                sumcheck++;
                if (sumcheck > 4)
                 {
                    bloquearop();  //evalua las opciones que tiene que bloquear
                 }
              })
              $('#input-6').on('ifUnchecked', function(event)
               {
                 sumcheck= (sumcheck-1);                            
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
                 $('#home').show();
                  $('#next2').show();
                  //pregunta si esta chequeado
                  cantmax = 29; //lo usa la funcion que analiza hasta que input tiene que recorrer para chequear que este true/false
                  sumcheck = 0; //inicializo el contador
                  indiceinput = 21; //poruqe arranca en input-1

                 $('#input-21').on('ifChecked', function(event)
                  {   
                      //guardo el valor
                       bloqueo2a = false;
                      //pregunto por los condicionantes 
                      if (bloqueo1d == true)
                      
                      {
                        console.log('bloqueo1')
	                     $('#stick2').show();  
	                     $('#check2').hide();
	                     $('#q2').hide();
	                     $('#next2').hide();
	                     $('#home').show();
	                     $('#nombrescreen').show();
	                     $('#nombrej').html(localStorage.autosave);
	                     $('#helphome').show();
	                
                      }
                      //
                       sumcheck++;
                       if (sumcheck > 4)
                        {
                          bloquearop();  //evalua las opciones que tiene que bloquear
                        }
                })
                $('#input-21').on('ifUnchecked', function(event)
               {
                 sumcheck= (sumcheck-1);                            
                })  
                $('#input-22').on('ifChecked', function(event){   
                      bloqueo2b = false; 
                      if (bloqueo1a == true)
                      
                      {
                       // console.log('bloqueo2')
	                     $('#stick3').show();  
	                     $('#check2').hide();
	                     $('#q2').hide();
	                     $('#next2').hide();
	                     $('#home').show();
	                     $('#nombrescreen').show();
	                     $('#nombrej').html(localStorage.autosave);
	                     $('#helphome').show();
                      }
                      //
                      sumcheck++;
                       if (sumcheck > 4)
                        {
                          bloquearop();  //evalua las opciones que tiene que bloquear
                        }        
                })  
                $('#input-22').on('ifUnchecked', function(event)
               {
                 sumcheck= (sumcheck-1);                            
                })
                $('#input-23').on('ifChecked', function(event){   
                  bloqueo2c = false;  
                      if (bloqueo1a == true)
                      
                      {
                        console.log('bloqueo3')
	                     $('#stick3').show();  
	                     $('#check2').hide();
	                     $('#q2').hide();
	                     $('#next2').hide();
	                     $('#home').show();
	                     $('#nombrescreen').show();
	                     $('#nombrej').html(localStorage.autosave);
	                     $('#helphome').show();
                      }
                      sumcheck++;
                       if (sumcheck > 4)
                        {
                          bloquearop();  //evalua las opciones que tiene que bloquear
                        }
         
                })
                $('#input-23').on('ifUnchecked', function(event)
               {
                 sumcheck= (sumcheck-1);                            
                })
              $('#input-24').on('ifChecked', function(event){   
              bloqueo2d = false;
              sumcheck++;
                       if (sumcheck > 4)
                        {
                          bloquearop();  //evalua las opciones que tiene que bloquear
                        }
              })
              $('#input-24').on('ifUnchecked', function(event)
               {
                 sumcheck= (sumcheck-1);                            
                })
              $('#input-25').on('ifChecked', function(event){   
              bloqueo2e = false;
              sumcheck++;
                       if (sumcheck > 4)
                        {
                          bloquearop();  //evalua las opciones que tiene que bloquear
                        }
              })
              $('#input-25').on('ifUnchecked', function(event)
               {
                 sumcheck= (sumcheck-1);                            
                })
              $('#input-26').on('ifChecked', function(event){   
              bloqueo2f = false;
              sumcheck++;
                       if (sumcheck > 4)
                        {
                          bloquearop();  //evalua las opciones que tiene que bloquear
                        }
              })
              $('#input-26').on('ifUnchecked', function(event)
               {
                 sumcheck= (sumcheck-1);                            
                })
              $('#input-27').on('ifChecked', function(event){   
              bloqueo2g = false;
              sumcheck++;
                       if (sumcheck > 4)
                        {
                          bloquearop();  //evalua las opciones que tiene que bloquear
                        }
              })
              $('#input-27').on('ifUnchecked', function(event)
               {
                 sumcheck= (sumcheck-1);                            
                })
              $('#input-28').on('ifChecked', function(event){   
              bloqueo2h = false;
              sumcheck++;
                       if (sumcheck > 4)
                        {
                          bloquearop();  //evalua las opciones que tiene que bloquear
                        }
              })
              $('#input-28').on('ifUnchecked', function(event)
               {
                 sumcheck= (sumcheck-1);                            
                })      

             },  //fin p2  
             //
             pp3:function(){
                 $('#startscreen').hide();
                 //oculto las clases preguntas checks siguiete y avance
                 $('.questions').hide();
                 $('.icheckbox').hide();
                 $('.bnext').hide();
                 $('.topavance').hide();
                 //muestro lo que quiero
                 $('#home').show();
                 $('#topavance33').show();
	             $('#nextinter3').show();
	             $('#nombrescreen').show();
	             $('#nombrej').html(localStorage.autosave);
	             //ahora muestro el personaje elegido pero sorprendido!
	             switch(personaje) //se muestra el personaje completo que se eligio
                 {
                   case '1':
                     $('#exclama1').show();
                   break;
                   
                   case '2':
                     $('#exclama2').show();
                   break;
                   
                   case '3':
                     $('#exclama3').show();
                   break;
                   
                   case '4':
                     $('#exclama4').show();
                   break;
                   
                   case '5':
                     $('#exclama5').show();
                   break;
                   
                   case '6':
                     $('#exclama6').show();
                   break;
                   
                   case '7':
                     $('#exclama7').show();
                   break;
                   
                   case '8':
                     $('#exclama8').show();
                   break;
                   }
             },
         p3:function()
             {  
             
                 $('#topavance33').hide();
                 $('#startscreen').hide();
                 $('.questions').hide();
                 $('.icheckbox').hide();
                 $('.bnext').hide();
                 $('.topavance').hide();
                 $('.stick').hide();
                 $('.entero').hide();
                 $('#nombrescreen').hide();
                 $('#home').hide();
               
                 $('#topavance3').show();
                //$('#topavance33').show().delay(2000).fadeOut();
                pregrandom();
                
                function pregrandom(){
               // var prandom = Math.floor((Math.random()*5)+1);
               var prandom = 2; //este es para pruebas
              switch(prandom)
                   {
                       case 1: 
                       //esta enfermo el dia de la entrevista
                        $('#q31').show();
                        $('#check31').show();     
                        $('#home').show();
                        //
                        cantmax = 313; //para analizar hasta que input tiene que recorrer para chequear que este true/false
                        sumcheck = 0; //inicializo el contador
                        indiceinput = 311; //porque arranca en input-311  
                        //                 
                        $('#input-311').on('ifChecked', function(event)
                        {   
                     
                          if (bloqueo1c == true)
                      
                          {
                             //no tenia la 1c tildada, vuelve a la p1 no pidio telefono
	                         $('#stick4').show();   
	                         $('#check31').hide();
	                         $('#q31').hide();
	                         $('#next2').hide();
	                         $('#helphome').show();
	                         $('#home').show();
	                         $('#nombrescreen').show();
	                         $('#nombrej').html(localStorage.autosave);
	                          
	                         mostrarpersonaje();
	                         //console.log('bloqueo4');
                          }
                         if (bloqueo1c == false)
                          {
                            //tenia la 1c chequeada, aparece el boton siguiente
	                        $('#next36').show()
	                         sumcheck++;
                          }
                         
                          
                       if (sumcheck > 0) //maximo 1 sola respuesta
                        {
                          bloquearop();  //evalua las opciones que tiene que bloquear
                        }
         
                        })
                        $('#input-311').on('ifUnchecked', function(event)
                         {
                          sumcheck= (sumcheck-1);                            
                         })
                         $('#input-312').on('ifChecked', function(event)
                           {   
                            //Eligio no llamar vuelve al comienzo 
                             $('#stick312').show();   
	                         $('#check31').hide();
	                         $('#q31').hide();
	                         $('#next2').hide();
	                         $('#home').show();
	                         $('#helphome').show();
	                         $('#nombrescreen').show();
	                         $('#nombrej').html(localStorage.autosave);
	                         mostrarpersonaje();
	                         //console.log('bloqueo5');
	                         sumcheck++;
                             if (sumcheck > 0) //maximo 1 sola respuesta
                             {
                              bloquearop();  //evalua las opciones que tiene que bloquear
                             }
                           })
                        $('#input-312').on('ifUnchecked', function(event)
                         {
                          sumcheck= (sumcheck-1);                            
                         })  	                  
                        break;
                       case 2:  
                       $('#home').show();
                        $('#q32').show();
                        $('#check32').show();
                        //
                        cantmax = 325; //lanaliza hasta que input tiene que recorrer para chequear que este true/false
                        sumcheck = 0; //inicializo el contador
                        indiceinput = 321; //porque arranca en input-321
                        //
                        $('#input-321').on('ifChecked', function(event)
                        {   
                         //
                         if (bloqueo1c == true || bloqueo2f == true) 
                         //si no pidio el telefono o no tiene credito
                          {
                            if (bloqueo1c == true) 
                            {
                             //no pidio telefono
	                          $('#stick4').show();
	                          mostrarpersonaje();
	                          $('#helphome').show();
	                         //console.log('bloqueo6');   
                            }
	                        else (bloqueo2f == true) 
	                        {
	                          //no cargo credito
	                          $('#stick321').show();
	                           $('#helphome').show();
	                          mostrarpersonaje();
	                        // console.log('bloqueo7');   
                            }
	                        $('#check32').hide();
	                        $('#q32').hide();
	                        $('#next2').hide();
	                        $('#home').show();
	                        $('#nombrescreen').show();
	                        $('#nombrej').html(localStorage.autosave);
                          }
                          //
                           if (bloqueo1c == false && bloqueo2f == false) 
                            {
                              sumcheck++;
	                          $('#next36').show()
                            }
                            
                            if (sumcheck > 0) //maximo 1 sola respuesta
                            {
                              bloquearop();  //evalua las opciones que tiene que bloquear
                            }
                       }) //fin del ceck 321
                       $('#input-321').on('ifUnchecked', function(event)
                         {
                          sumcheck= (sumcheck-1);                            
                         })
                       $('#input-322').on('ifChecked', function(event)
                           {   
                            //Eligio no llamar y llegar tarde, permite seguir pero resta puntos
                            $('#next36').show()
                            //quita de puntos
                              restapts= 10;
                              sumcheck++;
                            if (sumcheck > 0) //maximo 1 sola respuesta
                            {
                              bloquearop();  //evalua las opciones que tiene que bloquear
                            }
                           })
                           $('#input-322').on('ifUnchecked', function(event)
                         {
                          sumcheck= (sumcheck-1); 
                          restapts= restapts-10;                           
                         })
                           $('#input-323').on('ifChecked', function(event)
                           {   
                            //buscar otros medios de transporte 
                            
                            //
                            if (bloqueo2b == true) 
                            {
                             //no busco otros medios de transporte
	                          $('#stick323').show(); 
	                          $('#check32').hide();   
	                          $('#q32').hide();
	                          $('#nombrescreen').show();
	                          $('#nombrej').html(localStorage.autosave);
	                          $('#helphome').show();
	                          mostrarpersonaje();
	                         //console.log('bloqueo8');
                            }
                            else
                            {
	                         $('#next36').show() 
	                         sumcheck++;  
                            }
                            
                            if (sumcheck > 0) //maximo 1 sola respuesta
                            {
                              bloquearop();  //evalua las opciones que tiene que bloquear
                            }
                        
                           })
                           $('#input-323').on('ifUnchecked', function(event)
                         {
                          sumcheck= (sumcheck-1);                            
                         })
                           $('#input-324').on('ifChecked', function(event)
                           {   
                            //Eligio volver a la casa GAME OVER
                             $('#stick324').show();   //game over
	                         $('#check32').hide();
	                         $('#q32').hide();
	                         $('#home').show();
	                         $('#nombrescreen').show();
	                         $('#nombrej').html(localStorage.autosave);
	                         $('#helphome').show();
	                         sumcheck++;
                            if (sumcheck > 0) //maximo 1 sola respuesta
                            {
                              bloquearop();  //evalua las opciones que tiene que bloquear
                            }
                           })
                           $('#input-324').on('ifUnchecked', function(event)
                         {
                          sumcheck= (sumcheck-1);                            
                         })
                       break;
                       case 3:
                       //llega y no encuentra el lugar
                       $('#home').show();
                        $('#q33').show();
                        $('#check33').show();
                        
                        //
                        cantmax = 335; //lanaliza hasta que input tiene que recorrer para chequear que este true/false
                        sumcheck = 0; //inicializo el contador
                        indiceinput = 331; //porque arranca en input-331
                        //
                        $('#input-331').on('ifChecked', function(event)
                           {   
                            //console.log('bloqueo1d');
                            //Pregunta en la calle 
                            if (bloqueo1d == true) 
                            {
                             //no pidio el nombre empresa	                          
	                          $('#check33').hide();   
	                          $('#q33').hide();
	                          $('#nombrescreen').show();
	                          $('#nombrej').html(localStorage.autosave);
	                          mostrarpersonaje();
	                          $('#stick331').show(); 
	                          $('#helphome').show();
	                        // console.log('bloqueo9');
                            }
                            else
                            {
	                         $('#next36').show()  
	                          sumcheck++;
                            }
                           
                            if (sumcheck > 0) //maximo 1 sola respuesta
                            {
                              bloquearop();  //evalua las opciones que tiene que bloquear
                            }
                           })
                           $('#input-331').on('ifUnchecked', function(event)
                         {
                          sumcheck= (sumcheck-1);                            
                         })
                           //
                           $('#input-332').on('ifChecked', function(event)
                           {   
                            
                            //llama a la empresa                          
                            if (bloqueo1c == true || bloqueo2f == true) 
                            //si no pidio el telefono o no tiene credito
                            {
                           // console.log('bloqueo')
                            if (bloqueo1c == true) 
                            {
                             //no pidio telefono
	                          $('#check33').hide();   
	                          $('#q33').hide();
	                          mostrarpersonaje();
	                          $('#stick4').show(); 
	                          $('#helphome').show();
	                         //console.log('bloqueo10');  
                            }
	                        else (bloqueo2f == true) 
	                        {
	                          //no cargo credito
	                          $('#check33').hide();   
	                          $('#q33').hide();
	                          mostrarpersonaje();
	                          $('#stick321').show();
	                          $('#helphome').show();
	                        // console.log('bloqueo11');  
                            }
                            }//fin if bloqueos activados
                            else //no hay bloqueos muestro el boton para continuar
                            {
	                           $('#next36').show() 
	                           sumcheck++;
                            }
                            
                            if (sumcheck > 0) //maximo 1 sola respuesta
                            {
                              bloquearop();  //evalua las opciones que tiene que bloquear
                            }
                           //
                           })
                           $('#input-332').on('ifUnchecked', function(event)
                         {
                          sumcheck= (sumcheck-1);                            
                         })
                           //
                           $('#input-333').on('ifChecked', function(event)
                           {   
                            
                            //llama a reciduca o contacto                        
                            if (bloqueo1e == true || bloqueo2f == true) 
                            //si no pidio el telefono o no tiene credito
                            {
                           // console.log('bloqueo')
                               if (bloqueo1e == true) 
                               {
                                //no pidio telefono de la agencia
	                             $('#check33').hide();   
	                             $('#q33').hide();
	                             mostrarpersonaje();
	                              $('#stick4').show();
	                              $('#helphome').show();
	                        // console.log('bloqueo12');
                               }
	                           else (bloqueo2f == true) 
	                           {
	                             //no cargo credito
	                             $('#check33').hide();   
	                             $('#q33').hide();
	                             mostrarpersonaje();
	                              $('#stick321').show();
	                              $('#helphome').show();
	                         //console.log('bloqueo13');  
                               }
                            }
                            else //sino hay bloqueos muestra el boton siguiente
                            {
	                          $('#next36').show()
	                          sumcheck++;
                            }
                            
                            if (sumcheck > 0) //maximo 1 sola respuesta
                            {
                              bloquearop();  //evalua las opciones que tiene que bloquear
                            }
                           })
                           $('#input-333').on('ifUnchecked', function(event)
                         {
                          sumcheck= (sumcheck-1);                            
                         })
                           //
                           $('#input-334').on('ifChecked', function(event)
                           {   
                            //vuelve a la casa y llama para reprogramar
                            //agregar reduccion de puntos
                              restapts= 10;
                            if (bloqueo1c == true) 
                            {
                             //no pidio telefono
                             $('#check33').hide();   
	                          $('#q33').hide();
	                          mostrarpersonaje();
	                           $('#stick4').show();
	                           $('#helphome').show();
	                        // console.log('bloqueo14');   
                            }
                            else   //sino hay bloqueos muestra el boton siguiente
                            {
	                         $('#next36').show() 
	                         sumcheck++;  
                            }
                            
                            if (sumcheck > 0) //maximo 1 sola respuesta
                            {
                              bloquearop();  //evalua las opciones que tiene que bloquear
                            }
                           })
                           $('#input-334').on('ifUnchecked', function(event)
                         {
                          sumcheck= (sumcheck-1); 
                          restapts= (restapts-10);                           
                         })
                        break; 
                       case 4: 
                       //no lo dejan pasar no llevo dni 
                       //solo se muestra si no chequeo la 2d
                            if (bloqueo2d == true) 
                            {
                             //no lleva dni entones muestro opciones
	                          $('#q34').show();
                              $('#check34').show(); 
                              $('#home').show();
                              //
                              cantmax = 343; //lanaliza hasta que input tiene que recorrer para chequear que este true/false
                              sumcheck = 0; //inicializo el contador
                              indiceinput = 341; //porque arranca en input-341
                              //llama a la empresa
                              $('#input-341').on('ifChecked', function(event)
                              {   
                                
                                //llama a la empresa                          
                                if (bloqueo1c == true || bloqueo2f == true) 
                                //si no pidio el telefono o no tiene credito
                                {
                                  if (bloqueo1c == true) 
                                   {
                                     //no pidio telefono
                                      $('#q34').hide();
                                      $('#check34').hide();
	                                 $('#stick4').show();   
	                                 $('#helphome').show();
	                                 mostrarpersonaje();
	                         //console.log('bloqueo15');
                                   }
	                               else (bloqueo2f == true) 
	                               {
	                                //no cargo credito
	                                $('#q34').hide();
                                    $('#check34').hide();
	                                $('#stick321').show();  
	                                $('#helphome').show();
	                                mostrarpersonaje();
	                         //console.log('bloqueo16'); 
                                   }
                                 }
                                 else
                                 {
	                               $('#next36').show()
	                               sumcheck++;
                                 }
                                 
                                 if (sumcheck > 0) //maximo 1 sola respuesta
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                  }
                              })
                              $('#input-341').on('ifUnchecked', function(event)
                              {
                               sumcheck= (sumcheck-1);                            
                               })
                              //
                              $('#input-342').on('ifChecked', function(event)
                               {   
                                
                                //vuelve a la casa y llama para reprogramar
                                //agregar reduccion de puntos
                                if (bloqueo1c == true) 
                                {
                                 //no pidio telefono
                                 $('#q34').hide();
                                 $('#check34').hide();
	                             $('#stick4').show();   
	                             $('#helphome').show();
	                             mostrarpersonaje();
	                         //console.log('bloqueo17');
                                }
                                else
                                {
	                              $('#next36').show()
	                              sumcheck++;
                                }
                                
                                 if (sumcheck > 0) //maximo 1 sola respuesta
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                  }
                               })
                               $('#input-342').on('ifUnchecked', function(event)
                              {
                               sumcheck= (sumcheck-1);                            
                               })
                            }
                            else
                            {
	                         pregrandom(); //deberia volver aentrar al random para que le toque otra
                            }
                      
                        break;
                        //solo si no eligio la 2d
                       case 5: 
                      //no lo dejan pasar no recuerda el nombre del entrevistador
                       //solo se muestra si no chequeo la 1c
                            if (bloqueo1c == true) 
                            {
                             //no tiene el nombre de la persona que lo entrevistara, opciones:
	                          $('#q35').show();
                              $('#check35').show(); 
                              $('#home').show();
                              //
                              cantmax = 353; //lanaliza hasta que input tiene que recorrer para chequear que este true/false
                              sumcheck = 0; //inicializo el contador
                              indiceinput = 351; //porque arranca en input-351
                              //llama a la empresa
                              $('#input-351').on('ifChecked', function(event)
                              {   
                                
                                //llama a la empresa                          
                                if (bloqueo1d == true || bloqueo2f == true) 
                                //si no pidio el telefono o no tiene credito
                                {
                                  if (bloqueo1d == true) 
                                   {
                                     //no pidio el nombre a quien debe llamar
                                     $('#q35').hide();
                                     $('#check35').hide(); 
	                                 $('#stick4').show();   
	                                 $('#helphome').show();
	                                 mostrarpersonaje();
	                         //console.log('bloqueo18');
                                   }
	                               else (bloqueo2f == true) 
	                               {
	                                //no cargo credito
	                                 $('#q35').hide();
                                     $('#check35').hide(); 
	                                 $('#stick321').show(); 
	                                 $('#helphome').show();
	                                mostrarpersonaje();
	                         //console.log('bloqueo19');  
                                   }
                                 }
                                 else
                                 {
	                               $('#next36').show()
	                               sumcheck++;
                                 }
                                 
                                 if (sumcheck > 0) //maximo 1 sola respuesta
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                  }
                              })
                              $('#input-351').on('ifUnchecked', function(event)
                              {
                               sumcheck= (sumcheck-1);                            
                               })
                              //
                              $('#input-352').on('ifChecked', function(event)
                               {   
                                
                                if (bloqueo1d == true) 
                                {
                                 //no pidio el nombre a quien debe llamar
                                 $('#q35').hide();
                                 $('#check35').hide(); 
	                             $('#stick4').show();  
	                             $('#helphome').show();
	                             mostrarpersonaje();
	                        // console.log('bloqueo20'); 
                                }
                                if (bloqueo1d == false) 
                                {
	                                $('#next36').show()
                                //vuelve a la casa y llama para reprogramar
                                //agregar reduccion de puntos
                                 restapts= 10;
                                }
                                sumcheck++;
                                 if (sumcheck > 0) //maximo 1 sola respuesta
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                  }
                               })
                               $('#input-352').on('ifUnchecked', function(event)
                              {
                               sumcheck= (sumcheck-1); 
                               restapts= (restapuntos-10);                           
                               })
                            }
                            else
                            {
	                          pregrandom(); //deberia volver aentrar al random para que le toque otra
                            }                     
                        break;
                         case 6: 
                         //la persona con la que tiene la entrevista no esta
                         if (bloqueo1b == true) 
                                {
                                 //solo si no pidio los datos del entrevistador
	                           $('#q36').show();
                               $('#check36').show(); 
                               $('#home').show();
                               //
                               cantmax = 364; //lanaliza hasta que input tiene que recorrer para chequear que este true/false
                               sumcheck = 0; //inicializo el contador
                               indiceinput = 361; //porque arranca en input-364
                               //
                                $('#input-361').on('ifChecked', function(event)
                               {   
                                $('#next36').show()  
                                sumcheck++;
                                 if (sumcheck > 0) //maximo 1 sola respuesta
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                  }                           
                               })
                               $('#input-361').on('ifUnchecked', function(event)
                               {
                               sumcheck= (sumcheck-1);                            
                               })
                                $('#input-362').on('ifChecked', function(event)
                               {   
                                $('#next36').show()
                                sumcheck++;
                                 if (sumcheck > 0) //maximo 1 sola respuesta
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                  }                             
                               })
                               $('#input-362').on('ifUnchecked', function(event)
                              {
                               sumcheck= (sumcheck-1);                            
                               })
                                $('#input-363').on('ifChecked', function(event)
                               {   
                                $('#next36').show() 
                                sumcheck++;
                                 if (sumcheck > 0) //maximo 1 sola respuesta
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                  }                            
                               })
                               $('#input-363').on('ifUnchecked', function(event)
                              {
                               sumcheck= (sumcheck-1);                            
                               })
                                }
                         else
                             {
	                           pregrandom(); //deberia volver aentrar al random para que le toque otra    
                             }
                        break;
                  }//fin switch
   
             } //fin prandom
                            
             },  //fin p3
           
             
             //
             p40:function(){
                 $('#stick40').show();
                 $('#next36').hide();
                 $('#topavance33').hide();
                 $('.icheckbox').hide();
                 $('.questions').hide();
                 $('.topavance').hide();
	             $('#nombrescreen').show();
	             $('#nombrej').html(localStorage.autosave);
	             $('#next40').show();
	             $('#home').show();
	             //console.log(personaje);
	             switch(personaje) //se muestra el personaje feliz completo que se eligio
                 {
                   case '1':
                     $('#feliz1').show();
                   break;
                   
                   case '2':
                     $('#feliz2').show();
                   break;
                   
                   case '3':
                     $('#feliz3').show();
                   break;
                   
                   case '4':
                     $('#feliz4').show();
                   break;
                   
                   case '5':
                     $('#feliz5').show();
                   break;
                   
                   case '6':
                     $('#feliz6').show();
                   break;
                   
                   case '7':
                     $('#feliz7').show();
                   break;
                   
                   case '8':
                     $('#feliz8').show();
                   break;
                   }

             },
             //
             p41:function(){
             	 ptsa = 0;
                 ptsb = 0;
                 ptsc = 0;
                 ptsd = 0;
                 ptse = 0;
                 ptsf = 0;
                 ptsg = 0;
                 ptsh = 0;
                 //
                 $('#stick40').hide();
                 $('#next40').hide();
                 $('.entero').hide();
                 $('.icheckbox').hide();
                 $('.questions').hide();
                 $('.topavance').hide();
	             $('#nombrescreen').hide();
	             //
                      $('input').iCheck('uncheck'); //deja todos los inputs sin checkear
                      $('input').iCheck('enable');  //deja todos los inputs desbloqueados para usar
	             //	         
	             //  
	             $('#q40').show();
                 $('#check40').show();
                 $('#topavance4').show(); 
                 $('#next42').show();
                 $('#home').show();
                 //
                  cantmax = 49; //lanaliza hasta que input tiene que recorrer para chequear que este true/false
                  sumcheck = 0; //inicializo el contador
                  indiceinput = 41; //porque arranca en input-41
                  i=0;
                 //
                    $('#input-41').on('ifChecked', function(event)
                    {   
                       
                       if (ptsa == 0)
                       {  
                         ptsa= 5;  
                         sumcheck++;
                            console.log(sumcheck)
                                 if (sumcheck > 2) //maximo 3 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                  } 
                       }
                                                
                    })
                    $('#input-41').on('ifUnchecked', function(event)
                              {
                               sumcheck= (sumcheck-1); 
                               ptsa == 0                           
                               })
                    $('#input-42').on('ifChecked', function(event)
                    {   
                       if (ptsb == 0)
                       {  
                         ptsb= 10; 
                         sumcheck++;
                            console.log(sumcheck)
                                 if (sumcheck > 2) //maximo 3 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                  } 
                       }    
                                                
                    })
                    $('#input-42').on('ifUnchecked', function(event)
                              {
                               sumcheck= (sumcheck-1); 
                               ptsb == 0                           
                               })
                    $('#input-43').on('ifChecked', function(event)
                    {   
                       if (ptsc == 0)
                       {  
                         ptsc= 5;  
                         sumcheck++;
                            console.log(sumcheck)
                                 if (sumcheck > 2) //maximo 3 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                  }
                       } 
                                                   
                    })
                    $('#input-43').on('ifUnchecked', function(event)
                              {
                               sumcheck= (sumcheck-1);   
                               ptsc == 0                         
                               })
                    $('#input-44').on('ifChecked', function(event)
                    {   
                       if (ptsd == 0)
                       {  
                         ptsd= 5;  
                         sumcheck++;
                            console.log(sumcheck)
                                 if (sumcheck > 2) //maximo 3 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                  } 
                       }
                                                   
                    })
                    $('#input-44').on('ifUnchecked', function(event)
                              {
                               sumcheck= (sumcheck-1); 
                               ptsd == 0                           
                               })
                    $('#input-45').on('ifChecked', function(event)
                    {   
                       if (ptse == 0)
                       {  
                         ptse= 10;
                         sumcheck++;
                            console.log(sumcheck)
                                 if (sumcheck > 2) //maximo 3 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                  }   
                       }  
                                                  
                    })
                    $('#input-45').on('ifUnchecked', function(event)
                              {
                               sumcheck= (sumcheck-1);  
                               ptse == 0                          
                               })
                    $('#input-46').on('ifChecked', function(event)
                    {  
                       if (ptsf == 0)
                       {   
                         ptsf= 10; 
                         sumcheck++;
                            console.log(sumcheck)
                                 if (sumcheck > 2) //maximo 3 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                  } 
                       }    
                                                 
                    })
                    $('#input-46').on('ifUnchecked', function(event)
                              {
                               sumcheck= (sumcheck-1);    
                               ptsf == 0                        
                               })
                    $('#input-47').on('ifChecked', function(event)
                    {   
                       if (ptsg == 0)
                       {  
                         ptsg= 5; 
                         sumcheck++;
                            console.log(sumcheck)
                                 if (sumcheck > 2) //maximo 3 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                  } 
                       }     
                                                
                    })
                    $('#input-47').on('ifUnchecked', function(event)
                              {
                               sumcheck= (sumcheck-1);
                               ptsg == 0                            
                               })
                    $('#input-48').on('ifChecked', function(event)
                    {   
                       if (ptsh == 0)
                       {  
                         ptsh= 5;
                        sumcheck++;
                            console.log(sumcheck)
                                 if (sumcheck > 2) //maximo 3 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                  }   
                       }    
                                                
                    })
                    $('#input-48').on('ifUnchecked', function(event)
                              {
                               sumcheck= (sumcheck-1);  
                               ptsh == 0                          
                               })
             }, //fin p41
             // $('#score').html('Puntaje: '+puntos);  
             p42:function(){
                 $('.icheckbox').hide();
                 $('.questions').hide();
                 $('.topavance').hide();
                 $('.bnext').hide();
                 $('.stick').hide(); //oculto todos para por si pierde y vuelve a jugar que no se superpongan los sticks
                 
                    puntos= (ptsa+ptsb+ptsc+ptsd+ptse+ptsf+ptsg+ptsh) -  (restapts);  
                    //console.log('puntos');
                    //console.log(puntos);
                    if (puntos < 15)
                    {
                       //saco menos de 15 puntos tiene que volver a intentar
	                     $('#stick43').show(); //volve a intentarlo
	                     $('#next40').show(); //vuelve a p40
	                    // console.log('menos de 15');
                    }
                    else
                    {
                       //saco 15pts o mas, continua a la siguiente fase
	                     $('#stick42').show(); //felicitaciones
	                     $('#next41').show(); //lleva a la p51
	                     $('#levelscore').html('Puntaje: '+puntos+'/30');
                         $('#levelstats').show('slow');  
                    }
       
             }, //fin p42
             //
             p51:function(){
                 $('.icheckbox').hide();
                 $('.questions').hide();
                 $('.topavance').hide();
                 $('.bnext').hide();
                 $('.puntos').hide();
                 //
                 $('#topavance5').show(); 
                 $('#stick50').show(); 
                  $('#next52').show();
                  $('#home').show();
                 },
              p60:function(){
                 $('.icheckbox').hide();
                 $('.questions').hide();
                 $('.topavance').hide();
                 $('.bnext').hide();
                 $('.stick').hide();
                 //
                 $('#topavance6').show();  
                 $('#q60').show();
                 $('#drag').show();
                 $('#home').show();
 
                
                 },
                   p70:function(){
                 $('.questions').hide();
                 $('.topavance').hide();
                 $('.bnext').hide();
                 $('#drag').hide();
                 //
                 $('#topavance7').show();  
                 $('#q70').show();    
                 //
                 $('#sobrea').show();
                 $('#sobreb').show();
                 $('#sobrec').show();
                 $('#sobred').show();
                 $('#sobree').show();
                 $('#home').show();
                 
                 //
                 
                
                 },
                 p70a:function()
                  {
                    $('#sobrea').hide();
                    $('#sobreaa').show();
                    $('#q70a').show();
                  },
                  p70b:function()
                  {
                    $('#sobreb').hide();
                    $('#sobreab').show();
                    $('#q70b').show();
                  },
                 p70c:function()
                  {
                    $('#sobrec').hide();
                    $('#sobreac').show();
                    $('#q70c').show();
                  },
                 p70d:function()
                  {
                    $('#sobred').hide();
                    $('#sobread').show();
                    $('#q70d').show();
                   },
                 p70e:function()
                  {
                    $('#sobree').hide();
                    $('#sobreae').show();
                    $('#q70e').show();
                    $('#next70').show();
                  },
                      p80:function()
                  {
                        pts81 = 0;
                        pts82 = 0;
                        pts83 = 0;
                        pts84 = 0;
                        pts85 = 0;
                        pts86 = 0;
                        pts87 = 0;
                        pts88 = 0;
                        pts89 = 0;
                        pts90 = 0;
                        pts91 = 0;
                        pts92 = 0;
                        pts93 = 0;
                        pts94 = 0;
                        pts95 = 0;
                        
                    $('.question').hide();
                    $('.topavance').hide();
                    $('.bnext').hide();
                    $('.sobre').hide();
                     $('#home').hide();
                    //
                    $('#topavance8').show();
                    $('#q80').show();   
                    $('#check80').show();
                    //
                    $('#check80b').show();
                    $('#home8').show();
                    //
                      $('input').iCheck('indeterminate');
                      $('input').iCheck('uncheck'); //deja todos los inputs sin checkear
                      $('input').iCheck('enable');  //deja todos los inputs desbloqueados para usar
                    //
                    cantmax = 96; //lanaliza hasta que input tiene que recorrer para chequear que este true/false
                    sumcheck = 0; //inicializo el contador
                    indiceinput = 81; //porque arranca en input-81
                    //
                    
                    $('#input-81').on('ifChecked', function(event)
                    {   
                       if (pts81 == 0) //solo hace cosas si es el 1er click
                       {  
                         pts81= 20;  
                         sumcheck= (sumcheck+1);
                        // console.log(sumcheck);
                                 if (sumcheck > 6) //maximo 7 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                   $('#next80').show();
                                  }                        

                       }  
                     })
                     $('#input-81').on('ifUnchecked', function(event)
                      {
                          if (pts81 == 20) //solo hace cosas si es el 1er click
                            {  
                              pts81 == 0
                              sumcheck= (sumcheck--);
                            }
                      })
                     $('#input-82').on('ifChecked', function(event)
                    {   
                       if (pts82 == 0)
                       {  
                         pts82= 5; 
                         sumcheck= (sumcheck +1);
                         //console.log(sumcheck);
                                 if (sumcheck > 6) //maximo 7 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                   $('#next80').show();
                                  }                       
                       }   
                     })
                     $('#input-82').on('ifUnchecked', function(event)
                      {
                          if (pts82 == 5) //solo hace cosas si es el 1er click
                            {  
                              pts82 == 0
                              sumcheck= (sumcheck--);
                            }
                      })
                     $('#input-83').on('ifChecked', function(event)
                    {   
                       if (pts83 == 0)
                       {  
                         pts83= 20; 
                         sumcheck= (sumcheck +1);
                          //console.log(sumcheck);
                                 if (sumcheck > 6) //maximo 7 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                   $('#next80').show();
                                  }  
                       }                                                 
                    })
                    $('#input-83').on('ifUnchecked', function(event)
                      {
                          if (pts83 == 20) //solo hace cosas si es el 1er click
                            {  
                              pts83 == 0
                              sumcheck= (sumcheck--);
                            }
                      })
                     $('#input-84').on('ifChecked', function(event)
                    {   
                       if (pts84 == 0)
                       {  
                         pts84= 10; 
                         sumcheck= (sumcheck +1);
                          //console.log(sumcheck);
                                 if (sumcheck > 6) //maximo 7 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                   $('#next80').show();
                                  } 
                       }                                                  
                    })
                    $('#input-84').on('ifUnchecked', function(event)
                      {
                          if (pts84 == 10) //solo hace cosas si es el 1er click
                            {  
                              pts84 == 0
                              sumcheck= (sumcheck--);
                            }
                      })
                     $('#input-85').on('ifChecked', function(event)
                    {   
                       if (pts85 == 0)
                       {  
                         pts85= 5;  
                          sumcheck= (sumcheck +1);
                          //console.log(sumcheck);
                                 if (sumcheck > 6) //maximo 7 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                   $('#next80').show();
                                  }
                       }                                                 
                    })
                    $('#input-85').on('ifUnchecked', function(event)
                      {
                          if (pts85 == 5) //solo hace cosas si es el 1er click
                            {  
                              pts85 == 0
                              sumcheck= (sumcheck--);
                            }
                      })
                     $('#input-86').on('ifChecked', function(event)
                    {   
                       if (pts86 == 0)
                       {  
                         pts86= 20;  
                         sumcheck= (sumcheck +1);
                          //console.log(sumcheck);
                                 if (sumcheck > 6) //maximo 7 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                   $('#next80').show();
                                  }
                       }                                                  
                    })
                    $('#input-86').on('ifUnchecked', function(event)
                      {
                          if (pts86 == 20) //solo hace cosas si es el 1er click
                            {  
                              pts86 == 0
                              sumcheck= (sumcheck--);
                            }
                      })
                     $('#input-87').on('ifChecked', function(event)
                    {   
                       if (pts87 == 0)
                       {  
                         pts87= 5;  
                         sumcheck= (sumcheck +1);
                          //console.log(sumcheck);
                                 if (sumcheck > 6) //maximo 7 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                   $('#next80').show();
                                  }
                       }                                                  
                    })
                    $('#input-87').on('ifUnchecked', function(event)
                      {
                          if (pts87 == 5) //solo hace cosas si es el 1er click
                            {  
                              pts87 == 0
                              sumcheck= (sumcheck--);
                            }
                      })
                     $('#input-88').on('ifChecked', function(event)
                    {   
                       if (pts88 == 0)
                       {  
                         pts88= 10; 
                         sumcheck= (sumcheck +1);
                          //console.log(sumcheck);
                                 if (sumcheck > 6) //maximo 7 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                   $('#next80').show();
                                  }  
                       }                                                
                    })
                    $('#input-88').on('ifUnchecked', function(event)
                      {
                          if (pts88 == 10) //solo hace cosas si es el 1er click
                            {  
                              pts88 == 0
                              sumcheck= (sumcheck--);
                            }
                      })
                     $('#input-89').on('ifChecked', function(event)
                    {   
                       if (pts89 == 0)
                       {  
                         pts89= 20;
                         sumcheck= (sumcheck +1);
                          //console.log(sumcheck);
                                 if (sumcheck > 6) //maximo 7 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                   $('#next80').show();
                                  }   
                       }                                                
                    })
                    $('#input-89').on('ifUnchecked', function(event)
                      {
                          if (pts89 == 20) //solo hace cosas si es el 1er click
                            {  
                              pts89 == 0
                              sumcheck= (sumcheck--);
                            }
                      })
                     $('#input-90').on('ifChecked', function(event)
                    {   
                       if (pts90 == 0)
                       {  
                         pts90= 5; 
                         sumcheck= (sumcheck +1);
                          //console.log(sumcheck);
                                 if (sumcheck > 6) //maximo 7 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                   $('#next80').show();
                                  } 
                       }                                                 
                    })
                    $('#input-90').on('ifUnchecked', function(event)
                      {
                          if (pts90 == 5) //solo hace cosas si es el 1er click
                            {  
                              pts90 == 0
                              sumcheck= (sumcheck--);
                            }
                      })
                     $('#input-91').on('ifChecked', function(event)
                    {   
                       if (pts91 == 0)
                       {  
                         pts91= 5; 
                         sumcheck= (sumcheck +1);
                          //console.log(sumcheck);
                                 if (sumcheck > 6) //maximo 7 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                   $('#next80').show();
                                  }  
                       }                                                 
                    })
                    $('#input-91').on('ifUnchecked', function(event)
                      {
                          if (pts91 == 5) //solo hace cosas si es el 1er click
                            {  
                              pts91 == 0
                              sumcheck= (sumcheck--);
                            }
                      })
                     $('#input-92').on('ifChecked', function(event)
                    {   
                       if (pts92 == 0)
                       {  
                         pts92= 5;  
                         sumcheck= (sumcheck +1);
                          //console.log(sumcheck);
                                 if (sumcheck > 6) //maximo 7 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                   $('#next80').show();
                                  }
                       }                                                  
                    })
                    $('#input-92').on('ifUnchecked', function(event)
                      {
                          if (pts92 == 5) //solo hace cosas si es el 1er click
                            {  
                              pts92 == 0
                              sumcheck= (sumcheck--);
                            }
                      })
                     $('#input-93').on('ifChecked', function(event)
                    {   
                       if (pts93 == 0)
                       {  
                         pts93= 5; 
                         sumcheck= (sumcheck +1);
                          //console.log(sumcheck);
                                 if (sumcheck > 6) //maximo 7 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                   $('#next80').show();
                                  }  
                       }                                                 
                    })
                    $('#input-93').on('ifUnchecked', function(event)
                      {
                          if (pts93 == 5) //solo hace cosas si es el 1er click
                            {  
                              pts93 == 0
                              sumcheck= (sumcheck--);
                            }
                      })
                     $('#input-94').on('ifChecked', function(event)
                    {   
                       if (pts94 == 0)
                       {  
                         pts94= 20; 
                         sumcheck= (sumcheck +1);
                         //console.log(sumcheck);
                                 if (sumcheck > 6) //maximo 7 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                   $('#next80').show();
                                  }  
                       }                                                 
                    })
                    $('#input-94').on('ifUnchecked', function(event)
                      {
                          if (pts94 == 20) //solo hace cosas si es el 1er click
                            {  
                              pts94 == 0
                              sumcheck= (sumcheck--);
                            }
                      })
                     $('#input-95').on('ifChecked', function(event)
                    {   
                       if (pts95 == 0)
                       {  
                         pts95= 10; 
                         sumcheck= (sumcheck +1);
                                 if (sumcheck > 6) //maximo 7 respuestas
                                 {
                                   bloquearop();  //evalua las opciones que tiene que bloquear
                                   $('#next80').show();
                                  } 
                       }                                                  
                    })
                    $('#input-95').on('ifUnchecked', function(event)
                      {
                          if (pts95 == 10) //solo hace cosas si es el 1er click
                            {  
                              pts95 = 0
                              sumcheck= (sumcheck--);
                            }
                      })

                  },
                  pfinal:function(){
                 $('.icheckbox').hide();
                 $('.questions').hide();
                 $('.topavance').hide();
                 $('.bnext').hide();
                 $('#check80').hide();
                 $('#check80b').hide();
                 $('#home8').hide();
                 $('.stick').hide(); //oculto todos para por si pierde y vuelve a jugar que no se superpongan los sticks
                    puntosfinal=0;
                    puntosfinal= (pts81+pts82+pts83+pts84+pts85+pts86+pts87+pts88+pts89+pts90+pts91+pts92+pts93+pts94+pts95); 
                    //console.log('puntosfinal');
                    //console.log(puntosfinal);
                    if (puntosfinal < 100)
                    {
                       //saco menos de 100 puntos tiene que volver a intentar
	                     $('#stick81').show(); //volve a intentarlo
	                      $('#next70').show(); //vuelve a p80
	                     //console.log('menos de 100');
                    }
                    else
                    {
                       //saco 100pts o mas, termino joya
	                     $('#stick82').show(); //felicitaciones
	                     $('#home').show();
	                      $('#finalscore').html('Puntaje: '+puntosfinal+'/120');
                         $('#finalstats').show('slow');
                          $('#nombrescreen').show();
	                     $('#nombrej').html(localStorage.autosave);

                    }
       
             }, //fin p42

           
	}



