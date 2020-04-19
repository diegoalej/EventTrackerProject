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
	userPlants.forEach(element => {
		let ul = document.createElement('ul');
		let li = document.createElement('li');
		li.textContent = element.name;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = element.lastWatering;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = element.nextWatering;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = element.location;
		ul.appendChild(li);

		let userPlantButton = document.createElement('button');
		userPlantButton.name = 'updateUserPlantForm';
		userPlantButton.id = 'userPlantButton';
		userPlantButton.className = 'btn btn-primary';
		userPlantButton.textContent = 'Edit UserPlant';
		ul.appendChild(userPlantButton);
		userPlantButton.addEventListener('click', function(){
			let userPlantFormDiv = document.createElement('div');
			userPlantFormDiv.id = 'userPlantFormDiv'+element.id;
			userPlantFormDiv.style.display = 'none';
			ul.appendChild(userPlantFormDiv);
			showUserPlantForm(element);
		});
		dataDiv.appendChild(ul);
	});	
}

function showUserPlantForm(userPlant){
	let formDiv = document.getElementById('userPlantFormDiv'+userPlant.id);
	formDiv.textContent = '';

	let form = document.createElement('form');
	form.name = 'userPlantForm';

	//GROUP FOR  NAME
	let nameGroup = document.createElement('div');
	nameGroup.className = 'form-group';

	let nameLabel = document.createElement('label');
	nameLabel.textContent = 'Plant Name';
	nameGroup.appendChild(nameLabel);

	let nameInput = document.createElement('input');
	nameInput.placeholder = userPlant.name;
	nameInput.name = 'name';
	nameInput.type = 'text';
	nameGroup.appendChild(nameInput);

	form.appendChild(nameGroup);

	//GROUP FOR LAST WATERING
	let locationGroup = document.createElement('div');
	locationGroup.className = 'form-group';

	let locationLabel = document.createElement('label');
	locationLabel.textContent = 'Location';
	locationGroup.appendChild(locationLabel);

	let locationInput = document.createElement('input');
	locationInput.placeholder = userPlant.location;
	locationInput.name = 'location';
	locationInput.type = 'text';
	locationGroup.appendChild(locationInput);

	form.appendChild(locationGroup);

	//GROUP FOR  WATERING
	let wateringGroup = document.createElement('div');
	wateringGroup.className = 'form-group';

	let wateringLabel = document.createElement('label');
	wateringLabel.textContent = 'To change watering times view userPlant details';
	wateringGroup.appendChild(wateringLabel);

	form.appendChild(wateringGroup);

	//HIDDEN ID VALUE TO BUILD JSON OBJECT
	let hiddenValue = document.createElement('input');
	hiddenValue.type = 'hidden';
	hiddenValue.name = 'id';
	hiddenValue.value = userPlant.id;
	form.appendChild(hiddenValue);

	//BUTTON FOR SUBMIT
	let editUserPlantButton = document.createElement('button');
	editUserPlantButton.name = 'editUserPlantButton';
	editUserPlantButton.id = 'editUserPlantButton';
	editUserPlantButton.className = 'btn btn-primary';
	editUserPlantButton.textContent = 'Submit Changes';
	editUserPlantButton.addEventListener('click', function(user){
		event.preventDefault();
		// updateUserPlant(document.userPlantForm)
	});
	form.appendChild(editUserPlantButton);
	//CONDITIONAL TO TOGGLE DISPLAY
	if (formDiv.style.display === "none") {
		formDiv.style.display = "block";

	  } else {
		formDiv.style.display = "none";
	  }
	formDiv.appendChild(form);			
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
	formDiv.style.display = 'none';
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

	//HIDDEN ID VALUE TO BUILD JSON OBJECT
	let hiddenValue = document.createElement('input');
	hiddenValue.type = 'hidden';
	hiddenValue.name = 'id';
	hiddenValue.value = user.id;
	form.appendChild(hiddenValue);

	//BUTTON FOR SUBMIT
	let editUserButton = document.createElement('button');
	editUserButton.name = 'editUserButton';
	editUserButton.id = 'editUserButton';
	editUserButton.className = 'btn btn-primary';
	editUserButton.textContent = 'Submit Edits';
	editUserButton.addEventListener('click', function(user){
		event.preventDefault();
		updateUser(document.userForm)
	});
	form.appendChild(editUserButton);
	//CONDITIONAL TO TOGGLE DISPLAY
	if (formDiv.style.display === "none") {
		formDiv.style.display = "block";

	  } else {
		formDiv.style.display = "none";
	  }
	formDiv.appendChild(form);			
}

//Function to create user and display results
function updateUser(formObj) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/users', true);
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 ) {
	    if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
	      var data = JSON.parse(xhr.responseText);
	      console.log(data);
	    //   displayUser(data);
	    }
	    else {
	      console.log("POST request failed.");
	      console.error(xhr.status + ': ' + xhr.responseText);
	    }
	  }
	};
	var userObject = {
	  id: formObj.id.value,
	  firstName: formObj.firstName.value,
	  lastName: formObj.lastName.value,
	  userName: formObj.userName.value,
	  password: formObj.password.value,
	  active: true
	};

	var userObjectJson = JSON.stringify(userObject); // Convert JS object to JSON string
	xhr.send(userObjectJson);
}

//Default method to display when users or items are not found
function displayNotFound() {
	let dataDiv = document.getElementById('eventDiv');
	dataDiv.textContent = 'Items not found.';
}