var counter = 0;

$(function (){

	setTimeout(display_text, 3000);
	setInterval(display_more, 1000);

});

function display_text()
{
	$('#test').text('hello world');
}

function display_more()
{
	var d = $('<div>');
	d.text(counter);
	d.addClass('funky');
	$('#test').prepend(d);
	counter++; //same thing as doing counter = counter + 1;
	var red = Math.floor((counter * Math.random()) % 255);
	console.log(red)
	var blue = Math.floor((counter * Math.random()) % 255);
	var green = Math.floor((counter * Math.random()) %255);
	var color_string = 'rgb(' + red + ', ' + blue + ', ' + green + ')';
	d.css('background-color', color_string)
}