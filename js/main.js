
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

    $( "#selectable" ).selectable();

    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});