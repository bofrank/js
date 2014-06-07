function contentFilter(contentType){

  if(contentType=="drawing"){
    $(".game,.detritus").hide();
    $(".drawing").show();
  }else if(contentType=="game"){
    $(".drawing,.detritus").hide();
    $(".game").show();
  }else{
    $(".game,.drawing,.detritus").show();
  }
  
}