package com.skilldistillery.plantwatering.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.plantwatering.entities.UserPlant;
import com.skilldistillery.plantwatering.services.UserPlantService;

@RestController
@RequestMapping("api")
public class UserPlantController {
	
	@Autowired
	UserPlantService userPlantServ;
	
	@GetMapping("userplants")
	public List<UserPlant> showAllUserPlants() {
		return userPlantServ.findAllUserPlants();
	}
	
	@GetMapping("userplants/{id}")
	public UserPlant findUserPlantWithId(@PathVariable Integer id) {
		return userPlantServ.findUserPlantById(id);
	}
	
	@GetMapping("userplants/users/{id}")
	public List<UserPlant> findUserPlantWithUserId(@PathVariable Integer id) {
		return userPlantServ.findUserPlantByUserId(id);
	}

	@GetMapping("userplants/plants/{id}")
	public List<UserPlant> findUserPlantWithPlantId(@PathVariable Integer id) {
		return userPlantServ.findUserPlantByPlantId(id);
	}
	
	@PostMapping("userplants")
	public UserPlant createNewUserPlant(@RequestBody UserPlant userPlant) {
		return userPlantServ.createUserPlant(userPlant);
	}
	
	@PostMapping("userplants/update")
	public UserPlant updateExistingUserPlant(@RequestBody UserPlant userPlant) {
		return userPlantServ.updateUserPlant(userPlant);
	}
	
	@DeleteMapping("userplants/{id}")
	public boolean deleteExistingUserPlant(@PathVariable int id) {
		return userPlantServ.delete(id);
	}

}
