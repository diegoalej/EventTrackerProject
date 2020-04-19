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

	let userButton = document.createElement('button');
	userButton.name = 'updateUserForm';
	userButton.id = 'userButton';
	userButton.className = 'btn btn-primary';
	userButton.textContent = 'Edit User';
	userButton.addEventListener('click', function(){
		showUserForm(user);
	});
	dataDiv.appendChild(userButton);

	let formDiv = document.createElement('div');
	formDiv.id = 'formDiv';
	dataDiv.appendChild(formDiv);
}

function showUserForm(user){
	let formDiv = document.getElementById('formDiv');
	formDiv.textContent = '';

	let form = document.createElement('form');
	form.name = 'userForm';
	//GROUP FOR FIRST NAME
	let firstNameGroup = document.createElement('div');
	firstNameGroup.className = 'form-group';

	let fNameLabel = document.createElement('label');
	fNameLabel.textContent = 'First Name';
	firstNameGroup.appendChild(fNameLabel);

	let fNameInput = document.createElement('input');
	fNameInput.placeholder = user.firstName;
	fNameInput.name = 'firstName';
	fNameInput.type = 'text';
	firstNameGroup.appendChild(fNameInput);

	form.appendChild(firstNameGroup);

	//GROUP FOR LAST NAME
	let lastNameGroup = document.createElement('div');
	lastNameGroup.className = 'form-group';

	let lNameLabel = document.createElement('label');
	lNameLabel.textContent = 'Last Name';
	lastNameGroup.appendChild(lNameLabel);

	let lNameInput = document.createElement('input');
	lNameInput.placeholder = user.lastName;
	lNameInput.name = 'lastName';
	lNameInput.type = 'text';
	lastNameGroup.appendChild(lNameInput);

	form.appendChild(lastNameGroup);

	//GROUP FOR USERNAME
	let userNameGroup = document.createElement('div');
	userNameGroup.className = 'form-group';

	let userNameLabel = document.createElement('label');
	userNameLabel.textContent = 'Username';
	userNameGroup.appendChild(userNameLabel);

	let userNameInput = document.createElement('input');
	userNameInput.placeholder = user.userName;
	userNameInput.name = 'userName';
	userNameInput.type = 'text';
	userNameGroup.appendChild(userNameInput);

	form.appendChild(userNameGroup);

	//GROUP FOR PASSWORD
	let passwordGroup = document.createElement('div');
	passwordGroup.className = 'form-group';

	let passwordLabel = document.createElement('label');
	passwordLabel.textContent = 'Password';
	passwordGroup.appendChild(passwordLabel);

	let passwordInput = document.createElement('input');
	passwordInput.placeholder = user.password;
	passwordInput.name = 'password';
	passwordInput.type = 'text';
	passwordGroup.appendChild(passwordInput);

	form.appendChild(passwordGroup);

	//BUTTON FOR SUBMIT
	let editUserButton = document.createElement('button');
	editUserButton.name = 'editUserButton';
	editUserButton.id = 'editUserButton';
	editUserButton.className = 'btn btn-primary';
	editUserButton.textContent = 'Submit Edits';
	editUserButton.addEventListener('click', function(user){
		//  will be a submit to update user
	});
	form.appendChild(editUserButton);

	if (formDiv.style.display === "none") {
		formDiv.style.display = "block";

	  } else {
		formDiv.style.display = "none";
	  }
	formDiv.appendChild(form);			
}

//Default method to display when users or items are not found
function displayNotFound() {
	let dataDiv = document.getElementById('eventDiv');
	dataDiv.textContent = 'Items not found.';
}