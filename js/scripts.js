var bottlesOfBeer = function(a) {
    var text = "";
    if (a === 1 ) {
      return '1 bottle of beer on the wall, 1 bottle of beer...take it down, pass it around, no more bottles of beer on the wall!';
    }

    else if ((a >= 2) && (a <= 99)) {
      for (var index = a; index > 0; index -= 1) {
        text = text + index + " bottles of beer on the wall! " + index + " bottles of beer! Take one down, pass it around, ";

      }
    }
    else {
      return 'Please enter a number 1-99';
    };
    return text;

  }

   $(document).ready(function() {
     $("form#rate").submit(function(event) {
       var a = $("input#text").val();

       var result = bottlesOfBeer(a);

       $("#truthy").text(result);

       $("#result").show();
       event.preventDefault();
     });
   });
