$(document).ready(function(){
	$(".check").click(function(){
		if ($(this).is(':checked')){
			$(this).next().css("text-decoration", "line-through");
		 } else {
			$(this).next().css("text-decoration", "none");
		}
	});

	$("form").submit(function(e) {
		e.preventDefault();
		newItem = jQuery.trim($("input:text").val());
		if (newItem.length > 0) {
			$("input:text").val("");
			$(".cart").append("<div class='cartItem'><input class='check' type='checkbox'><span>"+ newItem + "</span><br></div>");
		}
	});

 	$(".remove").click(function(){
		$(".check").each(function(){
			if ($(this).is(':checked')){
				$(this).closest(".cartItem").remove();
			}
		});
	});
});
