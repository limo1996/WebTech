 $(document).ready(function() {
   dif=10;
   start=new Date();
   score=0;
   stopT=1;
   level=1;
   cont = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
   bestScore = localStorage.getItem('bestScoreTang');
   triang1T=$('#triangle1').css('top');
   triang1L=$('#triangle1').css('left');
   triang2T=$('#triangle2').css('top');
   triang2L=$('#triangle2').css('left');
   triang3T=$('#triangle3').css('top');
   triang3L=$('#triangle3').css('left');
   triang4T=$('#triangle4').css('top');
   triang4L=$('#triangle4').css('left');
   triang5T=$('#triangle5').css('top');
   triang5L=$('#triangle5').css('left');
   squarT=$('#square').css('top');
   squarL=$('#square').css('left');
   paraT=$('#parallelogram').css('top');
   paraL=$('#parallelogram').css('left');
   
  if(!bestScore){
    bestScore=0;
  }
  $("#bSkore").val(bestScore);
  $("#level").val(level);
   
  $('.block').draggable({
    cursor:'move',
    opacity: 0.5,
    snap: '#canvas',
    snapTolerance: 10,
    stop: function (event, ui) 
    {
      controll();
    }
  });
          
    $('#blockTray').one('mousedown', function () {
      $('#instruction').fadeOut('slow');
    });
    $('#blockTray').one('mousedown', function () {
      start=new Date();
      stopT=0;
    });
    
  var angle = 90;    

  $('.block').click(function() {
    if(this==square){
      var ang1=angle+45;
      $(this).css ({
        '-webkit-transform': 'rotate(' + ang1 + 'deg)',
        '-moz-transform': 'rotate(' + ang1 + 'deg)',
        '-o-transform': 'rotate(' + ang1 + 'deg)',
        '-ms-transform': 'rotate(' + ang1 + 'deg)'
      });
      angle+=90;
    }
    else if(this==parallelogram){
      var ang1=(-1)*(angle+45);
      $(this).css ({
        '-webkit-transform': 'skew(' + ang1 + 'deg)',
        '-moz-transform': 'skew(' + ang1 + 'deg)',
        '-o-transform': 'skew(' + ang1 + 'deg)',
        '-ms-transform': 'skew(' + ang1 + 'deg)'
      });
      angle+=90;
    }
    else{
      $(this).css ({
        '-webkit-transform': 'rotate(' + angle + 'deg)',
        '-moz-transform': 'rotate(' + angle + 'deg)',
        '-o-transform': 'rotate(' + angle + 'deg)',
        '-ms-transform': 'rotate(' + angle + 'deg)'
      });
      angle+=90;
    }
  });
});

function controll(){
  var count=0;
  var triang1=$('#triangle1').offset();
  var triang2=$('#triangle2').offset();
  var triang3=$('#triangle3').offset();
  var triang4=$('#triangle4').offset();
  var triang5=$('#triangle5').offset();
  var squar=$('#square').offset();
  var para=$('#parallelogram').offset();
  var can=$('#canvas').offset();

//first
  if(cont[0]==0){
    if((Math.abs(triang1.left-can.left-66)<dif && Math.abs(triang1.top-can.top-70)<dif)&&(Math.abs(triang2.left-can.left)<dif && Math.abs(triang2.top-can.top)<dif)&&(Math.abs(triang3.left-can.left)<dif && Math.abs(triang3.top-can.top-150)<dif)&&(Math.abs(triang4.left-can.left-150)<dif && Math.abs(triang4.top-can.top)<dif)&&(Math.abs(triang5.left-can.left-220)<dif && Math.abs(triang5.top-can.top-140)<dif)&&(Math.abs(squar.left-can.left-140)<dif && Math.abs(squar.top-can.top-70)<dif)&&(Math.abs(para.left-can.left)<dif && Math.abs(para.top-can.top)<dif)){
        count=7;
        cont[0]=1;
    }
}

  if(cont[1]==0){    
    if((Math.abs(triang1.left-can.left-220)<dif && Math.abs(triang1.top-can.top-140)<dif)&&(Math.abs(triang2.left-can.left)<dif && Math.abs(triang2.top-can.top)<dif)&&(Math.abs(triang3.left-can.left)<dif && Math.abs(triang3.top-can.top-150)<dif)&&(Math.abs(triang4.left-can.left-150)<dif && Math.abs(triang4.top-can.top)<dif)&&(Math.abs(triang5.left-can.left-66)<dif && Math.abs(triang5.top-can.top-70)<dif)&&(Math.abs(squar.left-can.left-140)<dif && Math.abs(squar.top-can.top-70)<dif)&&(Math.abs(para.left-can.left)<dif && Math.abs(para.top-can.top)<dif)){
        count=7;
        cont[1]=1;
    }
}
  if(cont[2]==0){   
    if((Math.abs(triang1.left-can.left-70)<dif && Math.abs(triang1.top-can.top-152)<dif)&&(Math.abs(triang2.left-can.left)<dif && Math.abs(triang2.top-can.top)<dif)&&(Math.abs(triang3.left-can.left)<dif && Math.abs(triang3.top-can.top)<dif)&&(Math.abs(triang4.left-can.left-150)<dif && Math.abs(triang4.top-can.top-150)<dif)&&(Math.abs(triang5.left-can.left-220)<dif && Math.abs(triang5.top-can.top)<dif)&&(Math.abs(squar.left-can.left-142)<dif && Math.abs(squar.top-can.top-75)<dif)&&(Math.abs(para.left-can.left)<dif && Math.abs(para.top-can.top-230)<dif)){
        count=7;
        cont[2]=1;
    }
  }
   
  if(cont[3]==0){
    if((Math.abs(triang1.left-can.left-220)<dif && Math.abs(triang1.top-can.top)<dif)&&(Math.abs(triang2.left-can.left)<dif && Math.abs(triang2.top-can.top)<dif)&&(Math.abs(triang3.left-can.left)<dif && Math.abs(triang3.top-can.top)<dif)&&(Math.abs(triang4.left-can.left-150)<dif && Math.abs(triang4.top-can.top-150)<dif)&&(Math.abs(triang5.left-can.left-70)<dif && Math.abs(triang5.top-can.top-152)<dif)&&(Math.abs(squar.left-can.left-142)<dif && Math.abs(squar.top-can.top-75)<dif)&&(Math.abs(para.left-can.left)<dif && Math.abs(para.top-can.top-230)<dif)){
        count=7;
        cont[3]=1;
    }
  }
    //second 
  if(cont[4]==0){    
    if((Math.abs(triang1.left-can.left-73)<dif && Math.abs(triang1.top-can.top-150)<dif)&&(Math.abs(triang2.left-can.left-150)<dif && Math.abs(triang2.top-can.top)<dif)&&(Math.abs(triang3.left-can.left)<dif && Math.abs(triang3.top-can.top)<dif)&&(Math.abs(triang4.left-can.left)<dif && Math.abs(triang4.top-can.top-150)<dif)&&(Math.abs(triang5.left-can.left)<dif && Math.abs(triang5.top-can.top)<dif)&&(Math.abs(squar.left-can.left)<dif && Math.abs(squar.top-can.top-77)<dif)&&(Math.abs(para.left-can.left-81)<dif && Math.abs(para.top-can.top-230)<dif)){
        count=7;
        cont[4]=1;
    }
  }
      
  if(cont[5]==0){
    if((Math.abs(triang1.left-can.left)<dif && Math.abs(triang1.top-can.top)<dif)&&(Math.abs(triang2.left-can.left-150)<dif && Math.abs(triang2.top-can.top)<dif)&&(Math.abs(triang3.left-can.left)<dif && Math.abs(triang3.top-can.top)<dif)&&(Math.abs(triang4.left-can.left)<dif && Math.abs(triang4.top-can.top-150)<dif)&&(Math.abs(triang5.left-can.left-73)<dif && Math.abs(triang5.top-can.top-150)<dif)&&(Math.abs(squar.left-can.left)<dif && Math.abs(squar.top-can.top-77)<dif)&&(Math.abs(para.left-can.left-81)<dif && Math.abs(para.top-can.top-230)<dif)){
        count=7;
        cont[5]=1;
    }
  }
      
  if(cont[6]==0){
    if((Math.abs(triang1.left-can.left)<dif && Math.abs(triang1.top-can.top-142)<dif)&&(Math.abs(triang2.left-can.left-150)<dif && Math.abs(triang2.top-can.top)<dif)&&(Math.abs(triang3.left-can.left)<dif && Math.abs(triang3.top-can.top-150)<dif)&&(Math.abs(triang4.left-can.left)<dif && Math.abs(triang4.top-can.top)<dif)&&(Math.abs(triang5.left-can.left-73)<dif && Math.abs(triang5.top-can.top-70)<dif)&&(Math.abs(squar.left-can.left)<dif && Math.abs(squar.top-can.top-78)<dif)&&(Math.abs(para.left-can.left-80)<dif && Math.abs(para.top-can.top)<dif)){
        count=7;
        cont[6]=1;
    }
  }
      
  if(cont[7]==0){
    if((Math.abs(triang1.left-can.left-73)<dif && Math.abs(triang1.top-can.top-70)<dif)&&(Math.abs(triang2.left-can.left-150)<dif && Math.abs(triang2.top-can.top)<dif)&&(Math.abs(triang3.left-can.left)<dif && Math.abs(triang3.top-can.top-150)<dif)&&(Math.abs(triang4.left-can.left)<dif && Math.abs(triang4.top-can.top)<dif)&&(Math.abs(triang5.left-can.left)<dif && Math.abs(triang5.top-can.top-142)<dif)&&(Math.abs(squar.left-can.left)<dif && Math.abs(squar.top-can.top-78)<dif)&&(Math.abs(para.left-can.left-80)<dif && Math.abs(para.top-can.top)<dif)){
        count=7;
        cont[7]=1;
    }
  }
  //third
  if(cont[8]==0){
    if((Math.abs(triang1.left-can.left-66)<dif && Math.abs(triang1.top-can.top-70)<dif)&&(Math.abs(triang2.left-can.left)<dif && Math.abs(triang2.top-can.top-150)<dif)&&(Math.abs(triang3.left-can.left)<dif && Math.abs(triang3.top-can.top)<dif)&&(Math.abs(triang4.left-can.left-150)<dif && Math.abs(triang4.top-can.top)<dif)&&(Math.abs(triang5.left-can.left-220)<dif && Math.abs(triang5.top-can.top-140)<dif)&&(Math.abs(squar.left-can.left-140)<dif && Math.abs(squar.top-can.top-70)<dif)&&(Math.abs(para.left-can.left)<dif && Math.abs(para.top-can.top)<dif)){
        count=7;
        cont[8]=1;
    }
  }
  
  if(cont[9]==0){
    if((Math.abs(triang1.left-can.left-220)<dif && Math.abs(triang1.top-can.top-140)<dif)&&(Math.abs(triang2.left-can.left)<dif && Math.abs(triang2.top-can.top-150)<dif)&&(Math.abs(triang3.left-can.left)<dif && Math.abs(triang3.top-can.top)<dif)&&(Math.abs(triang4.left-can.left-150)<dif && Math.abs(triang4.top-can.top)<dif)&&(Math.abs(triang5.left-can.left-66)<dif && Math.abs(triang5.top-can.top-70)<dif)&&(Math.abs(squar.left-can.left-140)<dif && Math.abs(squar.top-can.top-70)<dif)&&(Math.abs(para.left-can.left)<dif && Math.abs(para.top-can.top)<dif)){
        count=7;
        cont[9]=1;
    }
  }

  if(cont[10]==0){
    if((Math.abs(triang1.left-can.left-70)<dif && Math.abs(triang1.top-can.top-152)<dif)&&(Math.abs(triang2.left-can.left)<dif && Math.abs(triang2.top-can.top)<dif)&&(Math.abs(triang3.left-can.left)<dif && Math.abs(triang3.top-can.top)<dif)&&(Math.abs(triang4.left-can.left-150)<dif && Math.abs(triang4.top-can.top-150)<dif)&&(Math.abs(triang5.left-can.left-220)<dif && Math.abs(triang5.top-can.top)<dif)&&(Math.abs(squar.left-can.left-142)<dif && Math.abs(squar.top-can.top-75)<dif)&&(Math.abs(para.left-can.left)<dif && Math.abs(para.top-can.top-230)<dif)){
        count=7;
        cont[10]=1;
    }
  }
      
  if(cont[11]==0){
    if((Math.abs(triang1.left-can.left-220)<dif && Math.abs(triang1.top-can.top)<dif)&&(Math.abs(triang2.left-can.left)<dif && Math.abs(triang2.top-can.top)<dif)&&(Math.abs(triang3.left-can.left)<dif && Math.abs(triang3.top-can.top)<dif)&&(Math.abs(triang4.left-can.left-150)<dif && Math.abs(triang4.top-can.top-150)<dif)&&(Math.abs(triang5.left-can.left-70)<dif && Math.abs(triang5.top-can.top-152)<dif)&&(Math.abs(squar.left-can.left-142)<dif && Math.abs(squar.top-can.top-75)<dif)&&(Math.abs(para.left-can.left)<dif && Math.abs(para.top-can.top-230)<dif)){
        count=7;
        cont[11]=1;
    }
  }
      
    //fourth
  if(cont[12]==0){
    if((Math.abs(triang1.left-can.left-73)<dif && Math.abs(triang1.top-can.top-150)<dif)&&(Math.abs(triang2.left-can.left)<dif && Math.abs(triang2.top-can.top)<dif)&&(Math.abs(triang3.left-can.left-150)<dif && Math.abs(triang3.top-can.top)<dif)&&(Math.abs(triang4.left-can.left)<dif && Math.abs(triang4.top-can.top-150)<dif)&&(Math.abs(triang5.left-can.left)<dif && Math.abs(triang5.top-can.top)<dif)&&(Math.abs(squar.left-can.left)<dif && Math.abs(squar.top-can.top-77)<dif)&&(Math.abs(para.left-can.left-81)<dif && Math.abs(para.top-can.top-230)<dif)){
        count=7;
        cont[12]=1;
    }
  }

  if(cont[13]==0){
    if((Math.abs(triang1.left-can.left)<dif && Math.abs(triang1.top-can.top)<dif)&&(Math.abs(triang2.left-can.left)<dif && Math.abs(triang2.top-can.top)<dif)&&(Math.abs(triang3.left-can.left-150)<dif && Math.abs(triang3.top-can.top)<dif)&&(Math.abs(triang4.left-can.left)<dif && Math.abs(triang4.top-can.top-150)<dif)&&(Math.abs(triang5.left-can.left-73)<dif && Math.abs(triang5.top-can.top-150)<dif)&&(Math.abs(squar.left-can.left)<dif && Math.abs(squar.top-can.top-77)<dif)&&(Math.abs(para.left-can.left-81)<dif && Math.abs(para.top-can.top-230)<dif)){
        count=7;
        cont[13]=1;
    }
  }
      
  if(cont[14]==0){    
    if((Math.abs(triang1.left-can.left)<dif && Math.abs(triang1.top-can.top-142)<dif)&&(Math.abs(triang2.left-can.left)<dif && Math.abs(triang2.top-can.top-150)<dif)&&(Math.abs(triang3.left-can.left-150)<dif && Math.abs(triang3.top-can.top)<dif)&&(Math.abs(triang4.left-can.left)<dif && Math.abs(triang4.top-can.top)<dif)&&(Math.abs(triang5.left-can.left-73)<dif && Math.abs(triang5.top-can.top-70)<dif)&&(Math.abs(squar.left-can.left)<dif && Math.abs(squar.top-can.top-78)<dif)&&(Math.abs(para.left-can.left-80)<dif && Math.abs(para.top-can.top)<dif)){
        count=7;
        cont[14]=1;
    }
  }
  
  if(cont[15]==0){
    if((Math.abs(triang1.left-can.left-73)<dif && Math.abs(triang1.top-can.top-70)<dif)&&(Math.abs(triang2.left-can.left)<dif && Math.abs(triang2.top-can.top-150)<dif)&&(Math.abs(triang3.left-can.left-150)<dif && Math.abs(triang3.top-can.top)<dif)&&(Math.abs(triang4.left-can.left)<dif && Math.abs(triang4.top-can.top)<dif)&&(Math.abs(triang5.left-can.left)<dif && Math.abs(triang5.top-can.top-142)<dif)&&(Math.abs(squar.left-can.left)<dif && Math.abs(squar.top-can.top-78)<dif)&&(Math.abs(para.left-can.left-80)<dif && Math.abs(para.top-can.top)<dif)){
        count=7;
        cont[15]=1;
    }
  }
    
  if(count==7)
  {
    trvalo=(new Date()-start)/1000
    stopT=1;
    if(trvalo<25)
      score+=100;
    else if(trvalo<50)
      score+=75;
    else if(trvalo<90)
      score+=50;
    else if(trvalo<150)
      score+=25;
    else
      score+=0;    
    
    makePopup();
  }
}

function makePopup(){
  
$( "#dialog-confirm" ).dialog({
      resizable: false,
      //closeOnEscape: false,
      height: "auto",
      width: 400,
      modal: true,
      open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog).hide();$("#trval").val("Vyskladaly ste štvorec za: " + trvalo + "s"); },
      buttons: {
        "Pokračovať": function() {
          $( this ).dialog( "close" );
          $("#triangle1").css({'top': triang1T, 'left': triang1L});
          $("#triangle2").css({'top': triang2T, 'left': triang2L});
          $("#triangle3").css({'top': triang3T, 'left': triang3L});
          $("#triangle4").css({'top': triang4T, 'left': triang4L});
          $("#triangle5").css({'top': triang5T, 'left': triang5L});
          $("#square").css({'top': squarT, 'left': squarL});   
          $("#parallelogram").css({'top': paraT, 'left': paraL});
          $("#skore").val(score);
          if (bestScore<score){
            localStorage.setItem('bestScoreTang', score);
            $("#bSkore").val(score); 
          }            
          start=new Date();
          stopT=0;
          level++;
          if(level>16){
            window.alert("Vyhrali ste!Poskladaly 16 rôznych štvorcov!");
            location.reload();
          }
          $("#level").val(level);
        },
        "Ukončiť": function() {
          $( this ).dialog( "close" );
          if (bestScore<score)
            localStorage.setItem('bestScoreTang', score);
          location.reload();
        }
      }
    });

}

setInterval(function() {
    if(stopT==0){
      $('#Timer').text(parseInt((new Date - start) / 1000));
    }
}, 500);