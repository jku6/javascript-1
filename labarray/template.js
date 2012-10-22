$(function (){

	var animals = [];
	var colors = [];
	var people = [];

	var response = prompt('Hello Human \nWould you like to create an (a)nimal, (c)olor, (p)erson, or (q)uit?');

	while (response != 'q')
	{
		if (response == 'a')
		{
			
			var number = prompt('How many entries would you like?');
				
				for (var i = 0; i < number; i++)
				{
					entry = prompt('What animal?');
					animals.push(entry);
				}
		}
		
		if (response == 'c')
		{
			
			var number = prompt('How many entries would you like?');
				
				for (var i = 0; i < number; i++)
				{
					entry = prompt('What color?');
					colors.push(entry);
				}
		}

		if (response == 'p')
		{
			
			var number = prompt('How many entries would you like?');
				
				for (var i = 0; i < number; i++)
				{
					entry = prompt('What kind of person?');
					people.push(entry);
				}
		}

		response = prompt('Would you like to create more (a)nimals, (c)olors, (p)eople, or (q)uit?')

	}

	response = prompt('Would you like to delete a (a)nimal, (c)olor, (p)erson, or (q)uit?');

	while (response != 'q')
	{
		if (response == 'a')
		{
			
			console.log('Your Animals: ' + animals);
			var nuke = prompt('Which entry do you want to nuke: ' + animals);
			var match = animals.indexOf(nuke);
			removed = animals.splice(match, 1);
			alert('Your new animals: ' + animals);
			console.log('Your new animals: ' + animals);
		}

		if (response == 'c')
		{
			
			console.log('Your Colors: ' + colors);
			var nuke = prompt('Which entry do you want to nuke: ' + colors);
			var match = colors.indexOf(nuke);
			removed = colors.splice(match, 1);
			alert('Your new colors: ' + colors);
			console.log('Your new colors: ' + colors);


		}

		if (response == 'p')
		{
			
			console.log('Your People: ' + people);
			var nuke = prompt('Which entry do you want to nuke: ' + people);
			var match = people.indexOf(nuke);
			removed = people.splice(match, 1);
			alert('Your new people: ' + people);
			console.log('Your new people: ' + people);


		}

		response = prompt('Would you like to delete another (a)nimal, (c)olor, (p)erson, or (q)uit?');
	}

	if (response == 'q')
	{

		console.log('Your Animals: ' + animals);
		console.log('Your Colors: ' + colors);
		console.log('Your People: '  + people);
		console.log('Your session has been terminated');
	}


});

/*	while (response != 'q')
	{
		if (response == 'a')
		{
			
			console.log('Your Animals: ' + animals);
			var nuke = prompt('Which number entry do you want to nuke? (ie 1 for the first entry)');
			removed = animals.splice((nuke - 1), 1);
			console.log('Your new animals: ' + animals);


		}

		if (response == 'c')
		{
			
			console.log('Your Colors: ' + colors);
			var nuke = prompt('Which number entry do you want to nuke? (ie 1 for the first entry)');
			removed = colors.splice((nuke - 1), 1);
			console.log('Your new colors: ' + colors);


		}

		if (response == 'p')
		{
			
			console.log('Your People: ' + people);
			var nuke = prompt('Which number entry do you want to nuke? (ie 1 for the first entry)');
			removed = people.splice((nuke - 1), 1);
			console.log('Your new people: ' + people);


		}

		response = prompt('Would you like to delete another (a)nimal, (c)olor, (p)erson, or (q)uit?');
	}

	if (response == 'q')
	{
	
		console.log('Your Animals: ' + animals);
		console.log('Your Colors: ' + colors);
		console.log('Your People: '  + people);
		console.log('Your session has been terminated');
	}
*/
