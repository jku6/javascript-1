$(function (){

	$('#color_button').click(add_color);
	$('#colors').on('hover', '.color', hovering);
	//if you hover over any element with class .color, run the function hovering... doesn't work
	//so need to target the static item #colors, and turn it "on"

});

function hovering()
{
	$(this).toggleClass('hover');
}

function add_color()
{
	var color = $('#color_text').val();
	// color = "blue" 
	var d = $('<div>');
	// <div></div>
	d.addClass('color');
	// <div class='color'></div>
	d.css('background-color', color);
	$('#colors').append(d);
}
