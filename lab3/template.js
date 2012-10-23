$(function (){

	$('#b1').click(popup);	

});

function popup()
{
	// alert('button pressed!');
	var t = $('#t1').val();
	console.log('you typed in ' + t);

	var n = parseInt(t);
	var z = cube(n);

	if (z > 100)
		$('#i2').text(z).css('color', 'red');
	else
		$('#i2').text(z).css('color', 'blue');

	for(var i = 0; i < z; i++)
		console.log('counting : ' +i);

}

function cube(x)
{
	return x * x * x;

}