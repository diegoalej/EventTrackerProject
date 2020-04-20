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
		li.textContent = 'Plant name: ' + element.name;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Last watering: ' + element.lastWatering;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Next Watering: ' + element.nextWatering;
		ul.appendChild(li);

		li = document.createElement('li');
		li.textContent = 'Location: ' + element.location;
		ul.appendChild(li);

		dataDiv.appendChild(ul);

		//BUTTON TO SHOW USER FORM
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
		

		//BUTTON FOR SHOW WATERINGS FOR USERPLANT
		let showWateringsButton = document.createElement('button');
		showWateringsButton.name = 'showWateringsButton';
		showWateringsButton.id = 'showWateringsButton';
		showWateringsButton.className = 'btn btn-primary';
		showWateringsButton.textContent = 'View Waterings';
		ul.appendChild(showWateringsButton);
		showWateringsButton.addEventListener('click', function(){
			let showWateringsDiv = document.createElement('div');
			showWateringsDiv.id = 'showWateringsDiv'+element.id;
			showWateringsDiv.style.display = 'none';
			ul.appendChild(showWateringsDiv);
			showWaterings(element)
		});

		//BUTTON FOR NEW WATERINGS FORM 
		let NewWateringsFormButton = document.createElement('button');
		NewWateringsFormButton.name = 'NewWateringsFormButton';
		NewWateringsFormButton.id = 'NewWateringsFormButton';
		NewWateringsFormButton.className = 'btn btn-primary';
		NewWateringsFormButton.textContent = 'New Watering';
		ul.appendChild(NewWateringsFormButton);
		NewWateringsFormButton.addEventListener('click', function(){
			let newWateringsFormDiv = document.createElement('div');
			newWateringsFormDiv.id = 'newWateringsFormDiv'+element.id;
			newWateringsFormDiv.style.display = 'none';
			ul.appendChild(newWateringsFormDiv);
			showNewWateringForm(element);
		});


	//END OF FOREACH   	
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
	nameInput.className = 'form-control';
	nameInput.name = 'name';
	nameInput.type = 'text';
	nameGroup.appendChild(nameInput);

	form.appendChild(nameGroup);

	//GROUP FOR LOCATION
	let locationGroup = document.createElement('div');
	locationGroup.className = 'form-group';

	let locationLabel = document.createElement('label');
	locationLabel.textContent = 'Location';
	locationGroup.appendChild(locationLabel);

	let locationInput = document.createElement('input');
	locationInput.placeholder = userPlant.location;
	locationInput.className = 'form-control';
	locationInput.name = 'location';
	locationInput.type = 'text';
	locationGroup.appendChild(locationInput);

	form.appendChild(locationGroup);

	//GROUP FOR NEXT WATERING
	let nextWateringGroup = document.createElement('div');
	nextWateringGroup.className = 'form-group';

	let nextWateringLabel = document.createElement('label');
	nextWateringLabel.textContent = 'Next Watering';
	nextWateringGroup.appendChild(nextWateringLabel);

	let nextWateringInput = document.createElement('input');
	nextWateringInput.placeholder = userPlant.nextWatering;
	nextWateringInput.className = 'form-control';
	nextWateringInput.name = 'nextWatering';
	nextWateringInput.type = 'text';
	nextWateringGroup.appendChild(nextWateringInput);

	form.appendChild(nextWateringGroup);

	//GROUP FOR  WATERING
	let wateringGroup = document.createElement('div');
	wateringGroup.className = 'form-group';

	let wateringLabel = document.createElement('label');
	wateringLabel.textContent = 'To change last watering date view past waterings';
	wateringGroup.appendChild(wateringLabel);

	form.appendChild(wateringGroup);

	//HIDDEN ID VALUE TO BUILD JSON OBJECT
	let hiddenValue = document.createElement('input');
	hiddenValue.type = 'hidden';
	hiddenValue.name = 'id';
	hiddenValue.value = userPlant.id;
	form.appendChild(hiddenValue);

	let hiddenValue2 = document.createElement('input');
	hiddenValue2.type = 'hidden';
	hiddenValue2.name = 'lastWatering';
	hiddenValue2.value = userPlant.lastWatering;
	form.appendChild(hiddenValue2);


	//BUTTON FOR SUBMIT
	let editUserPlantButton = document.createElement('button');
	editUserPlantButton.name = 'editUserPlantButton';
	editUserPlantButton.id = 'editUserPlantButton';
	editUserPlantButton.className = 'btn btn-primary';
	editUserPlantButton.textContent = 'Submit Changes';
	editUserPlantButton.addEventListener('click', function(user){
		event.preventDefault();
		updateUserPlant(document.userPlantForm, userPlant)
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

// Function to show waterings
function showWaterings(userPlant){
	console.log(userPlant);
	let div = document.getElementById('showWateringsDiv'+userPlant.id);
	div.textContent = '';

	if (userPlant.waterings.length > 0) {
		userPlant.waterings.forEach(element => {
			let wateringList = document.createElement('ul');
			let li = document.createElement('li');
			li.textContent = 'Watering date: ' + element.wateringDate;
			wateringList.appendChild(li)

			let wli = document.createElement('li');
			wli.textContent = 'Watering comment: ' + element.wateringComment;
			wateringList.appendChild(wli)

			//BUTTON FOR SHOW WATERINGS FOR USERPLANT
			let showWateringFormButton = document.createElement('button');
			showWateringFormButton.name = 'showWateringFormButton';
			showWateringFormButton.id = 'showWateringFormButton';
			showWateringFormButton.className = 'btn btn-primary';
			showWateringFormButton.textContent = 'Edit Watering';
			wateringList.appendChild(showWateringFormButton);
			showWateringFormButton.addEventListener('click', function(){
				let showWateringFormDiv = document.createElement('div');
				showWateringFormDiv.id = 'showWateringFormDiv'+element.id;
				showWateringFormDiv.style.display = 'none';
				wateringList.appendChild(showWateringFormDiv);
				showWateringForm(element);
			});

			div.appendChild(wateringList);
		});
	} else {
		let defaultdiv = document.createElement('div');
		defaultdiv.textContent = 'No Waterings found';
		div.appendChild(defaultdiv);
	}
		//CONDITIONAL TO TOGGLE DISPLAY
		if (div.style.display === "none") {
			div.style.display = "block";
	
		  } else {
			div.style.display = "none";
		  }
}

//Function to show new watering form 
function showNewWateringForm(userPlant){
	let newWateringDiv = document.getElementById('newWateringsFormDiv' +userPlant.id);
	newWateringDiv.textContent = '';

	let form = document.createElement('form');
	form.name = 'newWateringForm';

	//GROUP FOR  WATERING DATE
	let wateringDateGroup = document.createElement('div');
	wateringDateGroup.className = 'form-group';

	let wateringDateLabel = document.createElement('label');
	wateringDateLabel.textContent = 'Watering Date';
	wateringDateGroup.appendChild(wateringDateLabel);

	let wateringDateInput = document.createElement('input');
	wateringDateInput.name = 'wateringDate';
	wateringDateInput.type = 'text';
	wateringDateInput.className = 'form-control';
	wateringDateInput.required = true;
	wateringDateGroup.appendChild(wateringDateInput);

	form.appendChild(wateringDateGroup);

	//GROUP FOR WATERING COMMENT	
	let wateringCommentGroup = document.createElement('div');
	wateringCommentGroup.className = 'form-group';

	let wateringCommentLabel = document.createElement('label');
	wateringCommentLabel.textContent = 'Watering Comment';
	wateringCommentGroup.appendChild(wateringCommentLabel);

	let wateringCommentInput = document.createElement('input');
	wateringCommentInput.name = 'wateringComment';
	wateringCommentInput.type = 'text';
	wateringCommentInput.className = 'form-control';
	wateringCommentGroup.appendChild(wateringCommentInput);

	form.appendChild(wateringCommentGroup);

	//HIDDEN ID VALUE TO BUILD JSON OBJECT
	let hiddenValue = document.createElement('input');
	hiddenValue.type = 'hidden';
	hiddenValue.name = 'id';
	hiddenValue.value = 0;
	form.appendChild(hiddenValue);

	let hiddenValue2 = document.createElement('input');
	hiddenValue2.type = 'hidden';
	hiddenValue2.name = 'userPlantId';
	hiddenValue2.value = userPlant.id;
	form.appendChild(hiddenValue2);

	//BUTTON FOR SUBMIT
	let newWateringFormButton = document.createElement('button');
	newWateringFormButton.name = 'newWateringFormButton';
	newWateringFormButton.type = 'submit';
	newWateringFormButton.id = 'newWateringFormButton';
	newWateringFormButton.className = 'btn btn-primary';
	newWateringFormButton.textContent = 'Submit Changes';
	newWateringFormButton.addEventListener('click', function(){
		event.preventDefault();
		updateWatering(document.newWateringForm);
		showWaterings(userPlant);
	});
	form.appendChild(newWateringFormButton);

	//CONDITIONAL TO TOGGLE DISPLAY
	if (newWateringDiv.style.display === "none") {
		newWateringDiv.style.display = "block";

	  } else {
		newWateringDiv.style.display = "none";
	  }
	  newWateringDiv.appendChild(form);			
}


//Function to show watering form 
function showWateringForm(watering){
	let wateringDiv = document.getElementById('showWateringFormDiv' + watering.id);
	wateringDiv.textContent = '';

	let form = document.createElement('form');
	form.name = 'wateringForm';

	//GROUP FOR  WATERING DATE
	let wateringDateGroup = document.createElement('div');
	wateringDateGroup.className = 'form-group';

	let wateringDateLabel = document.createElement('label');
	wateringDateLabel.textContent = 'Watering Date';
	wateringDateGroup.appendChild(wateringDateLabel);

	let wateringDateInput = document.createElement('input');
	wateringDateInput.placeholder = watering.wateringDate;
	wateringDateInput.name = 'wateringDate';
	wateringDateInput.type = 'text';
	wateringDateInput.value = watering.wateringDate;
	wateringDateInput.className = 'form-control';
	wateringDateInput.required = true;
	wateringDateGroup.appendChild(wateringDateInput);

	form.appendChild(wateringDateGroup);

	//GROUP FOR WATERING COMMENT	
	let wateringCommentGroup = document.createElement('div');
	wateringCommentGroup.className = 'form-group';

	let wateringCommentLabel = document.createElement('label');
	wateringCommentLabel.textContent = 'Watering Comment';
	wateringCommentGroup.appendChild(wateringCommentLabel);

	let wateringCommentInput = document.createElement('input');
	wateringCommentInput.placeholder = watering.wateringComment;
	wateringCommentInput.name = 'wateringComment';
	wateringCommentInput.type = 'text';
	wateringCommentInput.className = 'form-control';
	wateringCommentGroup.appendChild(wateringCommentInput);

	form.appendChild(wateringCommentGroup);

	//HIDDEN ID VALUE TO BUILD JSON OBJECT
	let hiddenValue = document.createElement('input');
	hiddenValue.type = 'hidden';
	hiddenValue.name = 'id';
	hiddenValue.value = watering.id;
	form.appendChild(hiddenValue);

	let hiddenValue2 = document.createElement('input');
	hiddenValue2.type = 'hidden';
	hiddenValue2.name = 'userPlantId';
	hiddenValue2.value = watering.userPlantId;
	form.appendChild(hiddenValue2);

	//BUTTON FOR SUBMIT
	let editWateringButton = document.createElement('button');
	editWateringButton.name = 'editWateringButton';
	editWateringButton.type = 'submit';
	editWateringButton.id = 'editWateringButton';
	editWateringButton.className = 'btn btn-primary';
	editWateringButton.textContent = 'Submit Changes';
	editWateringButton.addEventListener('click', function(){
		event.preventDefault();
		updateWatering(document.wateringForm)
	});
	form.appendChild(editWateringButton);

	//CONDITIONAL TO TOGGLE DISPLAY
	if (wateringDiv.style.display === "none") {
		wateringDiv.style.display = "block";

	  } else {
		wateringDiv.style.display = "none";
	  }
	  wateringDiv.appendChild(form);			
}

//Function to update watering and display results
function updateWatering(formObj) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/userplants/waterings', true);
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
	  wateringDate: formObj.wateringDate.value,
	  wateringComment: formObj.wateringComment.value,
	  userPlantId: formObj.userPlantId.value
	};
	console.log(userObject);

	var userObjectJson = JSON.stringify(userObject); // Convert JS object to JSON string
	xhr.send(userObjectJson);
}



//Function to update userPlant and display results
function updateUserPlant(formObj, userPlant) {
	console.log(formObj.waterings);
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/userplants', true);
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
	  plant: userPlant.plant,
	  user: userPlant.user,
	  name: formObj.name.value,
	  lastWatering: formObj.lastWatering.value,
	  nextWatering: formObj.nextWatering.value,
	  location: formObj.location.value,
	  active: true,
	  waterings: userPlant.waterings
	};
	console.log(userObject);

	var userObjectJson = JSON.stringify(userObject); // Convert JS object to JSON string
	xhr.send(userObjectJson);
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

	//BUTTON FOR NEW USERPLANT FORM 
	let newUserPlantFormButton = document.createElement('button');
	newUserPlantFormButton.name = 'newUserPlantFormButton';
	newUserPlantFormButton.id = 'newUserPlantFormButton';
	newUserPlantFormButton.className = 'btn btn-primary';
	newUserPlantFormButton.textContent = 'New UserPlant';
	dataDiv.appendChild(newUserPlantFormButton);
	newUserPlantFormButton.addEventListener('click', function(){
		let newUserPlantFormDiv = document.createElement('div');
		newUserPlantFormDiv.id = 'newUserPlantFormDiv'+user.id;
		newUserPlantFormDiv.style.display = 'none';
		dataDiv.appendChild(newUserPlantFormDiv);
		showNewUserPlantForm(user);
	});

}

//Function to show new userPlant form
function showNewUserPlantForm(userPlant){
	let formDiv = document.getElementById('newUserPlantFormDiv'+userPlant.id);
	formDiv.textContent = '';

	let form = document.createElement('form');
	form.name = 'newUserPlantForm';

	//GROUP FOR  NAME
	let nameGroup = document.createElement('div');
	nameGroup.className = 'form-group';

	let nameLabel = document.createElement('label');
	nameLabel.textContent = 'Plant Name';
	nameGroup.appendChild(nameLabel);

	let nameInput = document.createElement('input');
	nameInput.className = 'form-control';
	nameInput.name = 'name';
	nameInput.type = 'text';
	nameGroup.appendChild(nameInput);

	form.appendChild(nameGroup);

	//GROUP FOR LOCATION
	let locationGroup = document.createElement('div');
	locationGroup.className = 'form-group';

	let locationLabel = document.createElement('label');
	locationLabel.textContent = 'Location';
	locationGroup.appendChild(locationLabel);

	let locationInput = document.createElement('input');
	locationInput.className = 'form-control';
	locationInput.name = 'location';
	locationInput.type = 'text';
	locationGroup.appendChild(locationInput);

	form.appendChild(locationGroup);

	//GROUP FOR NEXT WATERING
	let nextWateringGroup = document.createElement('div');
	nextWateringGroup.className = 'form-group';

	let nextWateringLabel = document.createElement('label');
	nextWateringLabel.textContent = 'Next Watering';
	nextWateringGroup.appendChild(nextWateringLabel);

	let nextWateringInput = document.createElement('input');
	nextWateringInput.className = 'form-control';
	nextWateringInput.name = 'nextWatering';
	nextWateringInput.type = 'text';
	nextWateringGroup.appendChild(nextWateringInput);

	form.appendChild(nextWateringGroup);

	//GROUP FOR  WATERING
	let wateringGroup = document.createElement('div');
	wateringGroup.className = 'form-group';

	let wateringLabel = document.createElement('label');
	wateringLabel.textContent = 'To change last watering date view past waterings';
	wateringGroup.appendChild(wateringLabel);

	form.appendChild(wateringGroup);

	//HIDDEN ID VALUE TO BUILD JSON OBJECT
	let hiddenValue = document.createElement('input');
	hiddenValue.type = 'hidden';
	hiddenValue.name = 'id';
	hiddenValue.value = 0;
	form.appendChild(hiddenValue);

	let hiddenValue2 = document.createElement('input');
	hiddenValue2.type = 'hidden';
	hiddenValue2.name = 'lastWatering';
	hiddenValue2.value = userPlant.lastWatering;
	form.appendChild(hiddenValue2);


	//BUTTON FOR SUBMIT
	let newUserPlantButton = document.createElement('button');
	newUserPlantButton.name = 'newUserPlantButton';
	newUserPlantButton.id = 'newUserPlantButton';
	newUserPlantButton.className = 'btn btn-primary';
	newUserPlantButton.textContent = 'Submit Changes';
	newUserPlantButton.addEventListener('click', function(user){
		event.preventDefault();
		// updateUserPlant(document.newUserPlantForm, userPlant)
	});
	form.appendChild(newUserPlantButton);

	//CONDITIONAL TO TOGGLE DISPLAY
	if (formDiv.style.display === "none") {
		formDiv.style.display = "block";

	  } else {
		formDiv.style.display = "none";
	  }
	formDiv.appendChild(form);			
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
	fNameInput.className = 'form-control';
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
	lNameInput.className = 'form-control';
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
	userNameInput.className = 'form-control';
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
	passwordInput.className = 'form-control';
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

//Function to update user and display results
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