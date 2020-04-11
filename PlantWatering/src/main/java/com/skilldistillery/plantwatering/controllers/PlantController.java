package com.skilldistillery.plantwatering.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.plantwatering.entities.Plant;
import com.skilldistillery.plantwatering.services.PlantService;

@RestController
@RequestMapping("api")
public class PlantController {
	
	@Autowired
	PlantService plantServ;
	
	@GetMapping("plants")
	public List<Plant> showAllPlants() {
		return plantServ.findAllPlants();
	}

	@PostMapping("plants")
	public Plant createNewPlant(@RequestBody Plant plant) {
		return plantServ.createPlant(plant);
	}
	
	@GetMapping("plants/{id}")
	public Plant findPlantWithId(@PathVariable Integer id) {
		return plantServ.findPlantById(id);
	}

	@PostMapping("plants/update")
	public Plant updateExistingPlant(@RequestBody Plant plant) {
		return plantServ.updatePlant(plant);
	}
	
}
