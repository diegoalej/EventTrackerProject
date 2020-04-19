window.addEventListener('load', evt => {
	console.log('Window loaded');
	init();

});

function init(){
	getUser();
	
}

//Function gets all UserPlants for a User
function getUserPlantsForUser(userId){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/userplants/users/' + userId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			switch (xhr.status) {
			// * On success, if a response was received parse the user data
			// and pass the user object to displayUser().
			case 200:
				let dataJSON = xhr.responseText;
				// console.log(dataJSON);
				let data = JSON.parse(dataJSON);
				displayUserPlants(data);
				break;
			case 404:
				displayNotFound();
				break;
			}
		}
	}
	xhr.send();
}

//Function displays the user's information in homepage
function displayUserPlants(userPlants) {
	let dataDiv = document.getElementById('eventDiv');
	// dataDiv.textContent = '';
	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);
	userPlants.forEach(element => {
		let li = document.createElement('li');
		li.textContent = element.name;
		ul.appendChild(li);
	});
	dataDiv.appendChild(ul);
}

//Function gets user and their plants... TODO to pass in id
function getUser(){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/users/1');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			switch (xhr.status) {
			// * On success, if a response was received parse the user data
			// and pass the user object to displayUser().
			case 200:
				let dataJSON = xhr.responseText;
				// console.log(dataJSON);
				let data = JSON.parse(dataJSON);
				displayUser(data);
				getUserPlantsForUser(1);
				break;
			case 404:
				displayNotFound();
				break;
			}
		}
	}
	xhr.send();
}

//Function displays the user's information in homepage
function displayUser(user) {
	let dataDiv = document.getElementById('eventDiv');
	dataDiv.textContent = '';
	console.log(user);
	
	let h1 = document.createElement('h1');
	h1.textContent = 'Welcome ' + user.userName;
	dataDiv.appendChild(h1);
}

//Default method to display when users or items are not found
function displayNotFound() {
	let dataDiv = document.getElementById('eventDiv');
	dataDiv.textContent = 'Items not found.';
}