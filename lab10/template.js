$(function (){

	$('#add').click(search_flickr);

});

function search_flickr()
{
	var search = $('#search').val();

	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e8a243384911c7e72949799ae6280ae0&tags=' + search + '&format=json&jsoncallback=?', flickrResults);
	var a = $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e8a243384911c7e72949799ae6280ae0&tags=' + search + '&format=json&jsoncallback=?', flickrResults);

	console.log(a)
	//the function at the end is run after the search is done and info fetched from flickr
	
}

// function flickrResults(data) //data just arbitrary info

function flickrResults(data)
{
	$.each(data.photos.photo, getPhotos)
}

function getPhotos(index, item) //first time this called, index = 0 (the position on the array), item is the actual photo itself
{ //so we access each photo one at a time, not the whole thing at once
	var src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
	var div = $('<div>');
	div.addClass('photo');
	var img = $('<img>');
	img.attr('src', src);
	div.append(img);
	$('#photos').prepend(div);

	//so we created a div, put an img inside the div with the src, then put that div inside its parent div #photos 
}