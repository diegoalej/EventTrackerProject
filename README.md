## Event Tracker Project

#### Week 12 Homework for Skill Distillery

### Overview

The WateringApp app was made for individuals to keep track of plant waterings in their home or office. The app stores the location, plant name, and the dates of last watering as well as the date of upcoming watering.

This app contains one entity of waterings. Endpoints are described below.

#### Table of REST endpoints
Return type | Route| Functionality
------------|-----------|----------
List<Watering>	|GET api/waterings	       |Gets all waterings
Watering        |GET api/waterings/{id}	   |Gets one watering by id
List<Watering>  |GET api/waterings/{id}	   |Gets waterings by username
Watering        |POST api/waterings     	 |Creates a new watering
Watering        |POST api/waterings/update |Replaces an watering post
Boolean	        |DELETE api/waterings/{id} |Deletes an watering post by id

### How to use

Users are able to create new events or edit current waterings to keep track of their plant waterings.

### Technologies Used

* MySql
* Spring Boot
* Gradle
* Java
* Postman
* JavaScript

### Lessons Learned

* Schema building and editing with MySQL Workbench
* JPA and REST endpoints
* Repositories, Services, and Controllers communications
