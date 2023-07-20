

 $(document).ready(function(){
   $('.submitButton').click(function(){
      $('.submitButton').css('background-color','turquoise');
      $('.submitButton').prop('value','sent!');
      $('.form-title').html('Message Sent!');

      setTimeout(changeColor,1500);
   });

   var bool = false;

   $('.menu-icon').click(function(){
      if(bool==false){
      $('.drop-down-nav').css('right','0');
      $('.fa-bars').css('color','#00CCCC');
      bool=true;
      }

      else{
         $('.drop-down-nav').css('right','-100%');
         $('.fa-bars').css('color','white');
         bool=false;
      }
    });

   function changeColor(){
      $('.submitButton').css('background-color','#0093AF');
      $('.submitButton').prop('value','send');
      $('.form-title').html('Message Me');
   }

 });