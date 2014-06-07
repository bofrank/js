function getMakes(){
    function Make() {
        this.Name = null;
    }
    var makes = new Array();
    for(var i=0;i<categoriesJSON.length;i++){
        var sMake = categoriesJSON[i].ParentSiteCategoryStr;
        var make = new Make();
        var makePieces = sMake.split(':');
        make.Name=$.trim(makePieces[2]);
        if(make.Name!=""){
            makes.push(make.Name);
        }
    }
    //filter unique
    makes = $.grep(makes, function(v, k){
        return $.inArray(v ,makes) === k;
    });
    makes.sort();
    return makes;
}

manufacturerList = getMakes();

//populate model list
var modelList = [];

function modelListPopulate(){
    
    modelList = [];
    var modelsJSON = getModels($("#manufacturerField").val().replace(/ /g,"-"));
    var modelCount=0;

    for(var i=0;i<modelsJSON.length;i++){
        modelList.push({value:modelsJSON[i].URL,label:modelsJSON[i].URL});
        modelCount++;
    }
    
    $("#itemModel").autocomplete({
        source: function( request, response ) {
            var term = $.ui.autocomplete.escapeRegex(request.term), 
            startsWithMatcher = new RegExp("^" + term, "i"),
            startsWith = $.grep(modelList, function(value) {
                return startsWithMatcher.test(value.label || value.value || value);
            }),
            //currently not returning contains
            containsMatcher = new RegExp(term, "i"),
            contains = $.grep(modelList, function (value) {
                return $.inArray(value, startsWith) < 0 && containsMatcher.test(value.label || value.value || value);
            });
            response((startsWith.concat(contains)).slice(0,20));
        }
    });

}

$("#manufacturerField").autocomplete({
    source: function(request, response){
        var re = $.ui.autocomplete.escapeRegex(request.term);
        var matcher = new RegExp( "^" + re, "i" );
        var a = $.grep(manufacturerList, function(item,index){
            return matcher.test(item);
        });
        response( a );
    }
});

$("#manufacturerField").autocomplete({
  change:function(event,ui){modelListPopulate()},
  select:function(event,ui){
    $("#itemModel").prop('disabled', false);
    $("#itemModel").val('Type your model here');
  }
});

$("#manufacturerField").autocomplete({ autoFocus: true });

$("#itemModel").autocomplete({
  select:function(event,ui){
    $("#itemModel").css("color","#ffffff");
    window.location.href = "/"+ui.item.value;
  }
});

$("#itemModel").autocomplete({ autoFocus: true });

function OnBlurAction(obj,objName){
    var val=obj.value;
    if(val==''){
        if(objName=='make'){
            obj.value='Type your make here';
            $("#itemModel").prop('disabled', true);
        }else{
            
        }
    }else{
        if(objName=='make'){
            $("#manufacturerField").val(obj.value.toUpperCase());
            $("#itemModel").prop('disabled', false);
            $("#itemModel").focus();
        }
    }
}

function OnFocusAction(obj){
    if(obj.value =='Type your make here' || obj.value =='Type your model here'){
        obj.value='';
    }   
}
