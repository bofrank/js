/**********************************
super simple filter for navigating masonry style portfolios
can be seen at www.bofrank.com
**********************************/

function contentFilter(contentType){

  switch(contentType){
    case "drawing":
      $(".game,.detritus").hide();
      $(".drawing").show();
      break;
    case "game":
      $(".drawing,.detritus").hide();
      $(".game").show();
      break;
    default:
      $(".game,.drawing,.detritus").show();
  }
  
}