$(function(){
   
        $('.b2').click(withdraw);
        $('.b1').click(deposit);
});

var balance = 1000; 
// this is a global value

function withdraw()
{
    var w_string = $('input').val();
    var w_int = parseInt(w_string);
    balance = balance - w_int
    $('#balance > h2').text('$' + balance);
   
    if(balance < 0)
    {
        $('#balance').css('background-color','red');
        $('#balance > h2').css('color','white');
    }
    else
    {
        $('#balance').css('background-color','white');
        $('#balance > h2').css('color','black');
     }
}
function deposit()
{
    var d_string = $('input').val();
    var d_int = parseInt(d_string);
    balance = balance + d_int
    $('#balance > h2').text('$' + balance);
   
    if(balance < 0)
    {
    	$('#balance').css('background-color','red');
       $('#balance > h2').css('color','white');
    }
    else
    {    
    	$('#balance').css('background-color','white');
        $('#balance > h2').css('color','black');
    }
}

// could also create a updateBalance function, then function updateBalance()
// have a text action, also if balance < 0 blah blah else blah blah css