package com.skilldistillery.wateringapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.wateringapp.entities.Watering;
import com.skilldistillery.wateringapp.services.WateringService;

@RestController
@RequestMapping("api")
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
	
}
