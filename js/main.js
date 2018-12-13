

$(document).ready(function(){
  $("#draggable1").draggable();

  $("#draggable").draggable();

  $("#droppable").droppable({
      drop: function(event, ui) {
        $( this )
          .addClass("ui-state-highlight")
          .find( "p" )
            .html("Dropped!");
      }
    });

    $( "#resizable" ).resizable();

    $( "#selectable" ).selectable();

    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});