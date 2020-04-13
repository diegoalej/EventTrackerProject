## Event Tracker Project

#### Week 12 Homework for Skill Distillery

### Overview

The wateringapp was made for individuals to keep track of plant waterings in their home or office. The app stores the location, plant, username, and the dates of last watering as well as the date of upcoming watering.

This repository also contains a 'stretch goal' project called 'plantwatering' with a more complex app than described below, it contains different entities of plant, userPlant, and user. Endpoints are identical to the ones described below, only entity names change for more complex app.

#### Table of REST endpoints

List<Watering>	GET api/waterings	        Gets all waterings
Watering        GET api/waterings/{id}	  Gets one watering by id
List<Watering>  GET api/waterings/{id}	  Gets waterings by username
Watering        POST api/waterings     	  Creates a new watering
Watering        POST api/waterings/update	Replaces an watering post
Boolean	        DELETE api/waterings/{id}	Deletes an watering post by id

### How to use

Users are able to create new events or edit current ones to keep track of their plant waterings.

### Technologies Used

MySql
Spring Boot
Gradle
Java
Postman

### Lessons Learned

Schema building and editing with MySQL Workbench
JPA and REST endpoints
Repositories, Services, and Controllers communications
