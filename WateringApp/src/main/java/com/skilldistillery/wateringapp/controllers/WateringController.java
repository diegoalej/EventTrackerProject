package com.skilldistillery.wateringapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.wateringapp.entities.Watering;
import com.skilldistillery.wateringapp.services.WateringService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4202"})//put on each controller
public class WateringController {
	
	@Autowired
	WateringService waterServ;
	
	@GetMapping("waterings")
	public List<Watering> showAllWaterings() {
		return waterServ.findAllWaterings();
	}
	
	@GetMapping("waterings/{id}")
	public Watering findWateringWithId(@PathVariable Integer id) {
		return waterServ.findWateringById(id);
	}

	@GetMapping("waterings/user/{username}")
	public List<Watering> findWateringsWithUserName(@PathVariable String username) {
		return waterServ.findWateringByUserName(username);
	}
	
	@PostMapping("waterings")
	public Watering createNewWatering(@RequestBody Watering watering) {
		return waterServ.createWatering(watering);
	}
	
	@PutMapping("waterings/update")
	public Watering updateExistingWatering(@RequestBody Watering watering) {
		return waterServ.updateWatering(watering);
	}
	
	@DeleteMapping("waterings/{id}")
	public boolean deleteExistingWatering(@PathVariable int id) {
		return waterServ.deleteWatering(id);
	}
	
}
