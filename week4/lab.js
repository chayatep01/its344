//exercise1
$("#color").click(() => {
    $(".button").switchClass("button", "button2");
    $(".button2").switchClass("button2", "button");
  });


//exercise3
$(document).ready(function(){
    $("form").submit(function(){
       const crust = $(".crust option:selected").val();
       const $toppings = document.getElementsByName("topping");
       var $toppings_string = "" ;
       $toppings.forEach(function(item) {
         if(item.checked === true){
           $toppings_string = $toppings_string + " " + item.value;
         }
       });
      
       console.log("Crust:"+ crust + " & Topping(s):"+  $toppings_string);
    });
});



//exercise2
var main = () => {


    $("#submit").click(() => {
      var fname = $("#firstname").val();
      var lname = $("#lastname").val();
      if (fname!="" && lname!="")
      $( "#list" ).append("<li>"+fname+" "+lname+"</li>")
    })
  
    $("#clear").click(function() {
      $( "#list" ).empty();
    })
  
  };
  
  $(document).ready(main);




  var main = function () {

    var tag = '';
    var url;
    var src = [];
    var currentSrcIndex;
    var r;
    var second = 1.5;

    $( "#search" ).click(function() {

        tag = $("#tag").val();
        url = "http://api.flickr.com/services/feeds/photos_public.gne?tags="+tag+"&format=json&jsoncallback=?";
        src = [];
        currentSrcIndex = 0;

        $.getJSON(url, function (flickrResponse) {
            flickrResponse.items.forEach(function (item) {
                src.push(item.media.m);
            })
        }).then(function() {
            clearInterval(r);
            r = setInterval(function() {
                if (currentSrcIndex<src.length-1) {
                    currentSrcIndex+=1;
                }
                else {
                    currentSrcIndex=0;
                }
                showImg();
            }, second*1000)
        })
        
    })

    function showImg() {
        var $img = $("<img>").attr("src", src[currentSrcIndex]).hide();
        $(".photo").empty();
        $(".photo").append($img);
        $img.fadeIn();
    }

};

$(document).ready(main);



