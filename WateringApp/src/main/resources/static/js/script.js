window.addEventListener('load', evt => {
	console.log('Window loaded');
	init();

});

function init(){
	getWaterings();
}

function getWaterings(){
	// TODO:
	// * Use XMLHttpRequest to perform a GET request to "api/films/"
	// with the filmId appended.
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/waterings');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			switch (xhr.status) {
			// * On success, if a response was received parse the film data
			// and pass the film object to displayFilm().
			case 200:
				let dataJSON = xhr.responseText;
				// console.log(dataJSON);
				let data = JSON.parse(dataJSON);
				displayWaterings(data);
				break;
			case 404:
				displayNotFound();
				break;
			}
		}
	}
	xhr.send();
}

function displayWaterings(watering) {
	let dataDiv = document.getElementById('eventDiv');
	dataDiv.textContent = '';
	dataDiv.className = 'container';

	console.log(watering);

	let table = document.createElement('table');
	table.className = 'table table-striped';
	
	let tablehead = document.createElement('thead');
	tablehead.className = 'thead-dark';
	
	let tr = document.createElement('tr');
	
	let th = document.createElement('th')	
	th.textContent = 'Plant Name';
	tr.appendChild(th);

	th1 = document.createElement('th');
	th1.textContent = 'Location';
	tr.appendChild(th1);

	th2 = document.createElement('th');
	th2.textContent = 'Next Watering';
	tr.appendChild(th2);

	th3 = document.createElement('th');
	th3.textContent = 'Last Watering';
	tr.appendChild(th3);

	th4 = document.createElement('th');
	th4.textContent = 'Description';
	tr.appendChild(th4);

	th5 = document.createElement('th');
	th5.textContent = 'Update';
	tr.appendChild(th5);

	th6 = document.createElement('th');
	th6.textContent = 'Delete';
	tr.appendChild(th6);

	tablehead.appendChild(tr);	
	table.appendChild(tablehead);

	let tableBody = document.createElement('tbody');
	
	watering.forEach(element => {
		console.log(element);
		tr1 = document.createElement('tr');

		
		td = document.createElement('th')	
		td.textContent = element.plantName;
		tr1.appendChild(td);
		
		td1 = document.createElement('th')	
		td1.textContent = element.location;
		tr1.appendChild(td1);
		
		td2 = document.createElement('th')	
		td2.textContent = element.nextWateringdate;
		tr1.appendChild(td2);
		
		td3 = document.createElement('th')	
		td3.textContent = element.lastWateringdate;
		tr1.appendChild(td3);
		
		td4 = document.createElement('th')	
		td4.textContent = element.description;
		tr1.appendChild(td4);
		
		td5 = document.createElement('th')	
			//BUTTON TO UPDATE WATERING FORM 
			let wateringUpdateButton = document.createElement('button');
			wateringUpdateButton.name = 'wateringUpdateButton';
			wateringUpdateButton.id = 'wateringUpdateButton';
			wateringUpdateButton.className = 'btn btn-secondary';
			wateringUpdateButton.textContent = 'Edit';
			td5.appendChild(wateringUpdateButton);
			wateringUpdateButton.addEventListener('click', function(){
				showWateringUpdateForm(element);
			});
		tr1.appendChild(td5);

		td6 = document.createElement('th')	
			//BUTTON TO UPDATE WATERING FORM 
			let wateringDeleteButton = document.createElement('button');
			wateringDeleteButton.name = 'wateringDeleteButton';
			wateringDeleteButton.id = 'wateringDeleteButton';
			wateringDeleteButton.className = 'btn btn-secondary';
			wateringDeleteButton.textContent = 'X';
			td6.appendChild(wateringDeleteButton);
			wateringDeleteButton.addEventListener('click', function(){
				deleteWatering(element.id);
			});
		tr1.appendChild(td6);

		tableBody.appendChild(tr1);

	});
	table.appendChild(tableBody);
	dataDiv.appendChild(table);

	//BUTTON TO SEE NEW WATERING FORM
	let newButton = document.createElement('button');
	newButton.name = 'newButton';
	newButton.id = 'newButton';
	newButton.className = 'btn btn-secondary';
	newButton.textContent = 'Add New';
	dataDiv.appendChild(newButton);
	newButton.addEventListener('click', function(){
		newWateringForm();
	});
tr1.appendChild(td6);

	let wateringUpdateFormDiv = document.createElement('div');
				wateringUpdateFormDiv.id = 'wateringUpdateFormDiv';
				wateringUpdateFormDiv.style.display = 'none';
				dataDiv.appendChild(wateringUpdateFormDiv);
}

// Add Watering form
function newWateringForm(){
	let formDiv = document.getElementById('formDiv');
	formDiv.className = 'container';
	formDiv.style.display = 'none';
	formDiv.textContent = '';

	let form = document.createElement('form');
	form.name = 'addWateringForm';

	//GROUP FOR  NAME
	let nameGroup = document.createElement('div');
	nameGroup.className = 'form-group';

	let nameLabel = document.createElement('label');
	nameLabel.textContent = 'Plant Name';
	nameGroup.appendChild(nameLabel);

	let nameInput = document.createElement('input');
	nameInput.className = 'form-control';
	nameInput.name = 'plantName';
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
	nextWateringInput.name = 'nextWateringdate';
	nextWateringInput.type = 'date';
	nextWateringGroup.appendChild(nextWateringInput);

	form.appendChild(nextWateringGroup);

	//GROUP FOR LAST WATERING
	let lastWateringGroup = document.createElement('div');
	lastWateringGroup.className = 'form-group';

	let lastWateringLabel = document.createElement('label');
	lastWateringLabel.textContent = 'Last Watering';
	lastWateringGroup.appendChild(lastWateringLabel);

	let lastWateringInput = document.createElement('input');
	lastWateringInput.className = 'form-control';
	lastWateringInput.name = 'lastWateringdate';
	lastWateringInput.type = 'date';
	lastWateringGroup.appendChild(lastWateringInput);

	form.appendChild(lastWateringGroup);

	//GROUP FOR DESCRIPTION
	let descriptionGroup = document.createElement('div');
	descriptionGroup.className = 'form-group';

	let descriptionLabel = document.createElement('label');
	descriptionLabel.textContent = 'Description';
	descriptionGroup.appendChild(descriptionLabel);

	let descriptionInput = document.createElement('input');
	descriptionInput.className = 'form-control';
	descriptionInput.name = 'description';
	descriptionInput.type = 'text';
	descriptionGroup.appendChild(descriptionInput);

	form.appendChild(descriptionGroup);

	let hiddenValue2 = document.createElement('input');
	hiddenValue2.type = 'hidden';
	hiddenValue2.name = 'userName';
	hiddenValue2.value = 'newUser';
	form.appendChild(hiddenValue2);


	//BUTTON FOR SUBMIT
	let updateWateringButton = document.createElement('button');
	updateWateringButton.name = 'updateWateringButton';
	updateWateringButton.id = 'updateWateringButton';
	updateWateringButton.className = 'btn btn-primary';
	updateWateringButton.textContent = 'Add New Watering';
	updateWateringButton.addEventListener('click', function(user){
		event.preventDefault();
		addWatering(document.addWateringForm);
		getWaterings();
	});
	form.appendChild(updateWateringButton);

	//CONDITIONAL TO TOGGLE DISPLAY
	if (formDiv.style.display === "none") {
		formDiv.style.display = "block";

	  } else {
		formDiv.style.display = "none";
	  }
	formDiv.appendChild(form);
}

// Delete a Watering
function deleteWatering(id) {
		var xhr = new XMLHttpRequest();
		xhr.open('DELETE', 'api/waterings/' + id, true);
		xhr.onreadystatechange = function() {
			// var users = JSON.parse(xhr.responseText);
			if (xhr.readyState === 4) {
				switch (xhr.status) {
				// * On success, if a response was received parse the watering data
				case 200:
					let dataJSON = xhr.responseText;
					console.log(dataJSON);
					let data = JSON.parse(dataJSON);
					getWaterings();
					break;
				case 404:
					displayNotFound();
					break;
				}
			}
		}	
		xhr.send(null);

}

//Function to show new userPlant form
function showWateringUpdateForm(watering){
	let formDiv = document.getElementById('wateringUpdateFormDiv');
	formDiv.textContent = '';

	let form = document.createElement('form');
	form.name = 'wateringUpdateForm';

	//GROUP FOR  NAME
	let nameGroup = document.createElement('div');
	nameGroup.className = 'form-group';

	let nameLabel = document.createElement('label');
	nameLabel.textContent = 'Plant Name';
	nameGroup.appendChild(nameLabel);

	let nameInput = document.createElement('input');
	nameInput.className = 'form-control';
	nameInput.name = 'plantName';
	nameInput.placeholder = watering.plantName;
	nameInput.value = watering.plantName;
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
	locationInput.placeholder = watering.location;
	locationInput.value = watering.location;
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
	nextWateringInput.name = 'nextWateringdate';
	nextWateringInput.placeholder = watering.nextWateringdate;
	nextWateringInput.value = watering.nextWateringdate;
	nextWateringInput.type = 'date';
	nextWateringGroup.appendChild(nextWateringInput);

	form.appendChild(nextWateringGroup);

	//GROUP FOR LAST WATERING
	let lastWateringGroup = document.createElement('div');
	lastWateringGroup.className = 'form-group';

	let lastWateringLabel = document.createElement('label');
	lastWateringLabel.textContent = 'Last Watering';
	lastWateringGroup.appendChild(lastWateringLabel);

	let lastWateringInput = document.createElement('input');
	lastWateringInput.className = 'form-control';
	lastWateringInput.name = 'lastWateringdate';
	lastWateringInput.placeholder = watering.lastWateringdate;
	lastWateringInput.value = watering.lastWateringdate;
	lastWateringInput.type = 'date';
	lastWateringGroup.appendChild(lastWateringInput);

	form.appendChild(lastWateringGroup);

	//GROUP FOR DESCRIPTION
	let descriptionGroup = document.createElement('div');
	descriptionGroup.className = 'form-group';

	let descriptionLabel = document.createElement('label');
	descriptionLabel.textContent = 'Description';
	descriptionGroup.appendChild(descriptionLabel);

	let descriptionInput = document.createElement('input');
	descriptionInput.className = 'form-control';
	descriptionInput.name = 'description';
	descriptionInput.placeholder = watering.description;
	descriptionInput.value = watering.description;
	descriptionInput.type = 'text';
	descriptionGroup.appendChild(descriptionInput);

	form.appendChild(descriptionGroup);

	//HIDDEN ID VALUE TO BUILD JSON OBJECT
	let hiddenValue = document.createElement('input');
	hiddenValue.type = 'hidden';
	hiddenValue.name = 'id';
	hiddenValue.value = watering.id;
	form.appendChild(hiddenValue);

	let hiddenValue2 = document.createElement('input');
	hiddenValue2.type = 'hidden';
	hiddenValue2.name = 'userName';
	hiddenValue2.value = watering.userName;
	form.appendChild(hiddenValue2);


	//BUTTON FOR SUBMIT
	let updateWateringButton = document.createElement('button');
	updateWateringButton.name = 'updateWateringButton';
	updateWateringButton.id = 'updateWateringButton';
	updateWateringButton.className = 'btn btn-primary';
	updateWateringButton.textContent = 'Submit Changes';
	updateWateringButton.addEventListener('click', function(user){
		event.preventDefault();
		updateWatering(document.wateringUpdateForm);
	});
	form.appendChild(updateWateringButton);

	//CONDITIONAL TO TOGGLE DISPLAY
	if (formDiv.style.display === "none") {
		formDiv.style.display = "block";

	  } else {
		formDiv.style.display = "none";
	  }
	formDiv.appendChild(form);			
}


//Function to update waterings
function updateWatering(formObj) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/waterings/update', true);
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 ) {
	    if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
	      var data = JSON.parse(xhr.responseText);
		  console.log(data);
		  getWaterings();
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
	  userName: formObj.userName.value,
	  plantName: formObj.plantName.value,
	  location: formObj.location.value,
	  nextWateringdate: formObj.nextWateringdate.value,
	  lastWateringdate: formObj.lastWateringdate.value,
	  description: formObj.description.value
	};
	console.log(userObject);
	var userObjectJson = JSON.stringify(userObject); // Convert JS object to JSON string
	xhr.send(userObjectJson);
}

//Function to add waterings
function addWatering(formObj) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/waterings', true);
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 ) {
	    if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
	      var data = JSON.parse(xhr.responseText);
		  console.log(data);
		  getWaterings();
	    //   displayUser(data);
	    }
	    else {
	      console.log("POST request failed.");
	      console.error(xhr.status + ': ' + xhr.responseText);
	    }
	  }
	};
	var userObject = {
	  userName: formObj.userName.value,
	  plantName: formObj.plantName.value,
	  location: formObj.location.value,
	  nextWateringdate: formObj.nextWateringdate.value,
	  lastWateringdate: formObj.lastWateringdate.value,
	  description: formObj.description.value
	};
	console.log(userObject);
	var userObjectJson = JSON.stringify(userObject); // Convert JS object to JSON string
	xhr.send(userObjectJson);
}

//Default method to display when users or items are not found
function displayNotFound() {
	let dataDiv = document.getElementById('eventDiv');
	dataDiv.textContent = 'Items not found.';
}


//Default method to display when users or items are not found
function displayNotFound() {
	let dataDiv = document.getElementById('eventDiv');
	dataDiv.textContent = 'Items not found.';
}