
$('input[type="number"]').keydown(function(e){
   var ingnore_key_codes = [32,109,188,189,190];
   if ($.inArray(e.keyCode, ingnore_key_codes) >= 0){
      e.preventDefault();
   }
});