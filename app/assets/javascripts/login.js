/**
 * User: madg
 * Date: 12/10/12
 * Time: 2:05 PM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function() {
  $("form#sign_in")
  .bind("ajax:success", function(e, data, status, xhr) {
    if(data.success) {
      $(".userBlock").html(data.content);
      var elm = document.getElementsByClassName("overlay")[0];
      elm.parentNode.removeChild(elm);
      $("#authBlock").hide();
      if ($('#actions').length > 0) {
        document.getElementById("actions").addEventListener("click", function(){
        console.log();
        var actionsBl = document.getElementById("actionBlock"),
        display = actionsBl.style.display;
        if(display=="none"||display=="") actionsBl.style.display = "block"
        else actionsBl.style.display = "none";
        });
      }
    }
  })
  .bind("ajax:error", function(e, data, status, xhr) {
    $("#authBlock").addClass("error");
  });
});