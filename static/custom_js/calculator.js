 
 $('.addinput').on('input', function () {
    // Get the values from text fields
    var textValue1 = $('#add1').val();
    var textValue2 = $('#add2').val();
    
    // Perform any desired processing here
    var result = textValue1 + '' + textValue2;
    
    // Update the output field
    $('#resultadd').val(result);
});

$('.subinput').on('input', function () {
    // Get the values from text fields
    var value1 = parseInt($('#sub1').val()) || 0;
    var value2 = parseInt($('#sub2').val()) || 0;
    // Perform any desired processing here
    var result = parseInt(value1) +  parseInt(value2);
    
    // Update the output field
    $('#subresult').val(result);
});

$(document).on('click', '.guess-value', function() {
  var guessnumber = parseInt($('#guessnumber').val()) || 0;
  if(guessnumber==0){
    alert('add a number')
    return
  }
  if (guessnumber >= 1 && guessnumber <= 10) {
      // Number is within the range 1-10
      alert(Math.floor(Math.random() * 11) + 10)
      return
  }else{
    alert('numbers must be betwween 1-10')
  }
});
