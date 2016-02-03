$('document').ready(function(){



    var cities = ["NYC", "SF", "LA", "ATX", "SYD"]

      cities.forEach(function(element,index){

        console.log(element);

        $("#city-type").append("<option>" + element + "</option>");
        // <option> will just read as text. so will need quotation marks

        console.log(cities);

      });



    $("#city-type").change(function() {

        var userinput = $('#city-type').val();

        switch (userinput) {
          case "NYC":
            $("body").css('background-image', 'url(images/nyc.jpg)');
            break;

          case "SF":
            $("body").css('background-image', 'url(images/sf.jpg)');
            break;

          case "LA":
            $("body").css('background-image', 'url(images/la.jpg)');
            break;

          case "ATX":
            $("body").css('background-image', 'url(images/austin.jpg)');
            break;

          case "SYD":
            $("body").css('background-image', 'url(images/sydney.jpg)');
            break;

          default:
            $("body").css('background-image', 'url(images/citipix_skyline.jpg)');
        }

    });







});
