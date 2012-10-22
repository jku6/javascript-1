$(function (){

	var balance = 1000;
	
	var action = prompt('Hello human, \nWould you like to (d)eposit or (w)ithdrawl or (q)uit?');
	

	while (action != 'q')
	{

		var amount = prompt('How much?');

		if (action == 'd')
		{
			console.log('You have just deposited ' + '$' + amount);
			balance = balance + parseInt(amount);
			console.log('Your current balance is ' + '$' + balance);
		}

		if (action == 'w')
		{
			console.log('You have just withdrawn ' + '$' + amount);
			balance = parseInt(balance) - parseInt(amount);
			console.log('Your current balance is ' + '$' + balance);
		}

		action = prompt('Hello human, \nWhat would you like to do now, (d)eposit or (w)ithdrawl or (q)uit?');
	}

if (action == 'q')
{
	console.log('Your session has terminated \nYour remaining balance is ' + '$' + balance);
	}


});




/* set an initial despoist with $1000 
prompt for "do you want to do a (d)eposit or (w)ithdrawl or (q)uit?"
ask whats the amount.
so if d -> 50
then print it in console, you just deposited $50 && now your balance is x"
then loop back around until they type quit
if it withdrawl, you just withdrew $x && now your balance is
after you quit, let the user know they're done && remaining balance is x

probably going to need parseInt or parseFloat
*/


	// if(age < 18)
	// {
	// 	console.log('you are a minor');
	// }
	// else
	// {
	// 	console.log('you are an adult');
	// }

	// if((first == 'chyld') && (last != 'smith'))
	// 	console.log('you are the winner');