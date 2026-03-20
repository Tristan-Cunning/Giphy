// My api link:
// https://api.giphy.com/v1/gifs/search?api_key=lBoPuSCBjgx96yedgFK7vN8hCnkAYI52&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips
// Search will go after q

// As user
// 1.Input search
// 2.Click the search button
// 3. See the gifs that come from my search

// Technical
// Have the page listening for a click on submit
// Grab the user input
// Reach out to giphy with the input
// Receive the data
// Parse the data
// Display the gifs
let submittedSearch = "";

function getSearch() {
	const userInput = document.getElementById("search");
	submittedSearch = userInput.value;
	console.log("You submitted " + submittedSearch);
	console.log("getSearch ran");
	searchGiphy(submittedSearch); //Will be a call to another function to get the gifs
}

async function searchGiphy(submittedSearch) {
	const URL = `https://api.giphy.com/v1/gifs/search?api_key=lBoPuSCBjgx96yedgFK7vN8hCnkAYI52&q=${submittedSearch}&limit=8&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
	const data = await fetch(URL);
	const response = await data.json();
	console.log("Response is : ");
	console.log(response);
	renderGifs(response);
}

function renderGifs(response) {
	response.data.forEach((gif) => {
		const url = gif.images.original.url;
		const GifContainer = document.getElementById("loaded-gifs");
		GifContainer.innerHTML += `
			<img src="${url}" 
			class = "renderedGif col-3" 
			alt="Gif">
			`;
	});
}
/*for (let index = 0; index < response.length; index++) {
		const gifUrl = response[index].data.images.original.url;
		const GifContainer = document.getElementById("loaded-gifs");
		GifContainer.innerHTML += `
			<img src="${gifUrl}" 
			class = "renderedGif" 
			alt="Gif # ${index + 1}">
		`;
	}*/

submit.addEventListener("click", getSearch);
// data.images.original.url
