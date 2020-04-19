window.addEventListener('load', evt => {
	console.log('Window loaded');
	getUserPlants();
	init();

});

function init(){
	
}



function getUser(){
	// TODO:
	// * Use XMLHttpRequest to perform a GET request to "api/films/"
	// with the filmId appended.
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/users/1');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			switch (xhr.status) {
			// * On success, if a response was received parse the film data
			// and pass the film object to displayFilm().
			case 200:
				let dataJSON = xhr.responseText;
				// console.log(dataJSON);
				let data = JSON.parse(dataJSON);
				displayUserPlants(data);
				break;
			// * On failure, or if no response text was received, put "Film
			// not found"
			// in the filmData div.
			case 404:
				displayNotFound();
				break;
			}
		}
	}
	xhr.send();

}

function displayUser(user) {
	let dataDiv = document.getElementById('eventDiv');
	dataDiv.textContent = '';
	// TODO:
	// * Create and append elements to the data div to display:
	// * Film title (h1) and description (blockquote).
	console.log(user);
	
	let h1 = document.createElement('h1');
	h1.textContent = 'Welcome ' + user.userName;
	dataDiv.appendChild(h1);
	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);
	// var userPlants = user.
	// let li = document.createElement('li');
	// li.textContent = 'Rated ' + film.rating;
	// ul.appendChild(li);
	// li = document.createElement('li');
	// li.textContent = 'Released: ' + film.releaseYear;
	// ul.appendChild(li);
	// li = document.createElement('li');
	// li.textContent = film.length + ' minutes';
	// ul.appendChild(li);
}