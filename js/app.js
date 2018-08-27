// Select color input
$("#colorPicker").val();
// Select size input
$("#inputHeight").val();
$("#inputWeight").val();
// When size is submitted by the user, call makeGrid()
$(":submit").on("click", function(e) {
  //Prevent values from resetting
  event.preventDefault();

  //Assign new values
  const height = $("#inputHeight").val();
  const width = $("#inputWeight").val();

  //Clear old canvas from screen
  $("#pixelCanvas").empty();

  //Call makeGrid function
  makeGrid(height,width);
});

//Define makeGrid function
function makeGrid(height,width) {
  //Add table rows equal to height input
  for (let i = 1; i <= height; i++) {
    $("#pixelCanvas").append($("<tr></tr>"));

    //Add table columns equal to width input
    for (let x = 1; x <= width; x++) {
      $("tr").last().append($("<td></td>"));
    }
  }
  //Change color of box per click
  $("#pixelCanvas").on("click", "td", function() {
    $(this).css("background-color", $("#colorPicker").val());
  })
}
