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
let submittedSearch = null;

function getSearch() {
	const userInput = document.getElementById("search");
	submittedSearch = userInput.value;
	console.log("You submitted " + submittedSearch);
	console.log("getSearch ran");
	return submittedSearch; //Will be a call to another function to get the gifs
}

submit.addEventListener("click", getSearch);
