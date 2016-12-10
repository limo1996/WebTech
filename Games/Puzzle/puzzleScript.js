$.noConflict();
var correct = 0;
var SC = 0;
$( init );

function init() {
   correct = 0;
    SC = 0;
$('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );

 
         bestScore = localStorage.getItem('bestScorePuzz');
         if(!bestScore){
             bestScore=0;
         }
         $("#bSkore").val(bestScore);
 


   $( "#ke" ).draggable({ 
        cursor: 'move',
        snap: "#Kosice",
        snapTolerance: 20,
        stop: function(event, ui) { 
        if(((Math.abs(parseInt($('#ke').css("left")) + 846 - parseInt($('#Kosice').css("left"))) < 2)) &&
				(Math.abs(parseInt($('#ke').css("top")) + 33 - parseInt($('#Kosice').css("top"))) < 3) ) 
                {
                 $( "#ke" ).draggable('disable');
                 $("#ke").zIndex(1);
                  correct ++;
                  SC =SC + correct + Math.floor((Math.random() * 10) + 1);
                  $("#skore").val(SC);
                  if ( correct == 8 )
                   end();
                }
                
    }        
         });

         $( "#pv" ).draggable({ 
        cursor: 'move',
        snap: "#Presov",
        snapTolerance: 20,
        stop: function(event, ui) { 
        if(((Math.abs(parseInt($('#pv').css("left")) +846 - parseInt($('#Presov').css("left"))) < 2)) &&
				(Math.abs(parseInt($('#pv').css("top"))+ 33 - parseInt($('#Presov').css("top"))) < 3) ) {
            $( "#pv" ).draggable('disable');
             $("#pv").zIndex(1);
             correct=correct+1;
             SC = SC +correct + Math.floor((Math.random() * 10) + 1);
                  $("#skore").val(SC);
             if ( correct == 8 )
                   end();
        }
        
    }        
         });
         $( "#bb" ).draggable({ 
        cursor: 'move',
        snap: "#Bystrica",
        snapTolerance: 20,
        stop: function(event, ui) { 
        if(((Math.abs(parseInt($('#bb').css("left")) +846 - parseInt($('#Bystrica').css("left"))) < 2)) &&
				(Math.abs(parseInt($('#bb').css("top"))+ 33 - parseInt($('#Bystrica').css("top"))) < 3) ) {
            $( "#bb" ).draggable('disable');
             $("#bb").zIndex(1);
             correct=correct+1;
             SC = SC + correct + Math.floor((Math.random() * 10) + 1);
                  $("#skore").val(SC);
             if ( correct == 8 )
                   end();
        }
    }        
         });
          $( "#nr" ).draggable({
              cursor: 'move',
        snap: "#Nitra",
        snapTolerance: 20,
        stop: function(event, ui) { 
        if(((Math.abs(parseInt($('#nr').css("left")) +846- parseInt($('#Nitra').css("left"))) < 2)) &&
				(Math.abs(parseInt($('#nr').css("top")) + 33- parseInt($('#Nitra').css("top"))) < 3) ) {
            $( "#nr" ).draggable('disable');
             $("#nr").zIndex(1);
             correct=correct+1;
           SC = SC + correct + Math.floor((Math.random() * 10) + 1);
                  $("#skore").val(SC);
             if ( correct == 8 )
                   end();
        }
    }        
         });
         $( "#za" ).draggable({
              cursor: 'move',
        snap: "#Zilina",
        snapTolerance: 20,
        stop: function(event, ui) { 
        if(((Math.abs(parseInt($('#za').css("left")) +846- parseInt($('#Zilina').css("left"))) < 2)) &&
				(Math.abs(parseInt($('#za').css("top"))+ 33 - parseInt($('#Zilina').css("top"))) < 3) ) {
            $( "#za" ).draggable('disable');
             $("#tr").zIndex(1);
             correct=correct+1;
           SC = SC +correct + Math.floor((Math.random() * 10) + 1);
                  $("#skore").val(SC);
             if ( correct == 8 )
                   end();
        }
    }        
         });
         $( "#tr" ).draggable({
              cursor: 'move',
        snap: "#Trencin",
        snapTolerance: 20,
        stop: function(event, ui) { 
        if(((Math.abs(parseInt($('#tr').css("left")) +846- parseInt($('#Trencin').css("left"))) < 2)) &&
				(Math.abs(parseInt($('#tr').css("top"))+ 33 - parseInt($('#Trencin').css("top"))) < 3) ) {
            $( "#tr" ).draggable('disable');
             $("#tr").zIndex(1);
             correct=correct+1;
           SC = SC +correct + Math.floor((Math.random() * 10) + 1);
                  $("#skore").val(SC);
             if ( correct == 8 )
                   end();
        }
    }        
         });
         $( "#tt" ).draggable({
              cursor: 'move',
        snap: "#Trnava",
        snapTolerance: 20,
        stop: function(event, ui) { 
        if(((Math.abs(parseInt($('#tt').css("left")) +846- parseInt($('#Trnava').css("left"))) < 2)) &&
				(Math.abs(parseInt($('#tt').css("top"))+ 33 - parseInt($('#Trnava').css("top"))) < 3) ) {
            $( "#tt" ).draggable('disable');
             $("#tt").zIndex(1);
             correct=correct+1;
            SC = SC + correct + Math.floor((Math.random() * 10) + 1);
                  $("#skore").val(SC);
             if ( correct == 8 )
                   end();
        }
    }        
         });
         $( "#ba" ).draggable({
              cursor: 'move',
        snap: "#Bratislava",
        snapTolerance: 20,
        stop: function(event, ui) { 
        if(((Math.abs(parseInt($('#ba').css("left"))+846 - parseInt($('#Bratislava').css("left"))) < 2)) &&
				(Math.abs(parseInt($('#ba').css("top"))+ 33 - parseInt($('#Bratislava').css("top"))) < 3) ) {
            $( "#ba" ).draggable('disable');
            $("#ba").zIndex(1);
            correct++;
                  SC = SC + correct + Math.floor((Math.random() * 10) + 1);
                  $("#skore").val(SC);
                  if ( correct == 8 )
                   end();
        }
    }        
         });

      }  
         function end() {
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '380px',
      top: '200px',
      width: '400px',
      height: '300px',
      opacity: 1
    } );
    $("#skore").val(SC);
    if (bestScore < SC)
     localStorage.setItem('bestScorePuzz', SC);
  }
        
  