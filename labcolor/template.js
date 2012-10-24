var selected = null;
var enable = true;

$(function (){

	$('#add').click(add_colors);

	$('#results').on('mouseenter', '.a', bgChange);
	$('#results').on('mouseleave', '.a', bgReturn);

	$('#results').on('click', '.a', select);
	$('#results').on('click', '.sc', deselect);

	$('#results').on('dblclick', '.a', deletea);

	$('#left').click(left);
	$('#right').click(right);

});

function add_colors()
{
		var entry = $('#input').val();
		var array = entry.split(', ');
		var count = array.length;
		for (var i = 0; i < count; i++)
		{
			var element = $('<div>');
			element.addClass('a');
			element.css('background-color', array[i]);
			console.log(element);
			$('#results').append(element);
		}
}

function bgChange()
{
	var current = $(this).css('background-color');
	console.log(current);
	$('#input').css('background-color', current);
}

function bgReturn()
{
	if (enable == true)
	{
		$('#input').css('background-color', 'white');
	}
}

function select()
{
	if (selected != null)
	{
		enable = false;
		selected.removeClass('sc');
		selected = $(this);
		$(this).addClass('sc');
		var current = $(this).css('background-color');
		$('#input').css('background-color', current);
	}
	else
	{
		enable = false;
		selected = $(this);
		$(this).addClass('sc');
		var current = $(this).css('background-color');
		$('#input').css('background-color', current);
	}
	
}

function deselect()
{
	selected = null;
	$(this).removeClass('sc');
	enable = true;
}

function deletea()
{
	$(this).remove();
}

function left()
{
	var l = selected.prev();
	l.before(selected);
}

function right()
{
	var l = selected.next();
	l.after(selected);
}

