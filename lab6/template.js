$(function (){

	$('#textbox').focus();
	$('#clear').click(clearText);
	$('#normal').dblclick(normalText);
	$('#big').hover(bigType);
	$('#small').hover(smallType);
	$('#reverse').hover(reverse);
	$('$black').click(blackBg);
	$('$yellow').click(yellowBg);

});

function clearText()
{
	$('#textbox').val("");
	$('.output').css('background', 'white');
}

function normalText()
{
	var write = $('#textbox').val();
	$('.output').text(write);
	$('#textbox').val('');
}

function bigType()
{
	$('.output').toggleClass('green');
}

function smallType()
{
	$('.output').toggleClass('red')
}

// function reverseType ()
// {
// 	var write = $('.output').val();
// 	write.reverse;
// 	$('.output').text(write);

function reverse (s) 
{
	var s = $('.output').text();
  	var s2 = s.split('').reverse().join('');
  	$('.output').text(s2);
}

function blackBg()
{
	$('.output').toggleClass('black');
} 

function yellowBg()
{
	$('.output').toggleClass('yellow');
} 

