let respostas = [false, false, false, false, false, false, false, false,false];
let ehSuspeito = false;

$(function() {
  $('#toggle-one').change(function() {
    $('#console-event').html('Toggle: ' + $(this).prop('checked'));
    if($(this).prop('checked')){
      respostas[0]=true;
    }else{
      respostas[0]=false; 
    }
  })
});

$(function() {
  $('#toggle-two').change(function() {
    $('#console-event').html('Toggle: ' + $(this).prop('checked'));
    if($(this).prop('checked')){
      respostas[1]=true;
    }else{
      respostas[1]=false; 
    }
  })
});

$(function() {
  $('#toggle-three').change(function() {
    $('#console-event').html('Toggle: ' + $(this).prop('checked'));
    if($(this).prop('checked')){
      respostas[2]=true;
    }else{
      respostas[2]=false; 
    }
  })
});

$(function() {
  $('#toggle-four').change(function() {
    $('#console-event').html('Toggle: ' + $(this).prop('checked'));
    if($(this).prop('checked')){
      respostas[3]=true;
    }else{
      respostas[3]=false; 
    }
  })
});

$(function() {
  $('#toggle-five').change(function() {
    $('#console-event').html('Toggle: ' + $(this).prop('checked'));
    if($(this).prop('checked')){
      respostas[4]=true;
    }else{
      respostas[4]=false; 
    }
  })
});

$(function() {
  $('#toggle-six').change(function() {
    $('#console-event').html('Toggle: ' + $(this).prop('checked'));
    if($(this).prop('checked')){
      respostas[5]=true;
    }else{
      respostas[5]=false; 
    }
  })
});

$(function() {
  $('#toggle-seven').change(function() {
    $('#console-event').html('Toggle: ' + $(this).prop('checked'));
    if($(this).prop('checked')){
      respostas[6]=true;
    }else{
      respostas[6]=false; 
    }
  })
});

$(function() {
  $('#toggle-eight').change(function() {
    $('#console-event').html('Toggle: ' + $(this).prop('checked'));
    if($(this).prop('checked')){
      respostas[7]=true;
    }else{
      respostas[7]=false; 
    }
  })
});

$(function() {
  $('#toggle-nine').change(function() {
    $('#console-event').html('Toggle: ' + $(this).prop('checked'));
    if($(this).prop('checked')){
      respostas[8]=true;
    }else{
      respostas[8]=false; 
    }
  })
});

function doClick(){

  if((respostas[0] || respostas[1] 
    || respostas[2] || respostas[3] 
    || respostas[4] || respostas[5] 
    || respostas[6]) && respostas[8]){
      ehSuspeito=true;
  }

  if(respostas[5] && respostas[7]) {
      ehSuspeito=true;
  }

  if(ehSuspeito){
    window.location.href="./suspeito.html";
  }else{
    window.location.href="./alerta.html";
  }
}
