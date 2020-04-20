package com.skilldistillery.plantwatering.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.plantwatering.entities.Watering;
import com.skilldistillery.plantwatering.services.WateringService;

@RestController
@RequestMapping("api")
public class WateringController {

		@Autowired
		WateringService wateringServ;
		
		@GetMapping("waterings/{id}")
		public List<Watering> getWaterings(@PathVariable int id){
			return wateringServ.findWateringByUserPlantId(id);
		}
		
		@PostMapping("userplants/waterings")
		public Watering createNewWatering(@RequestBody Watering watering, HttpServletResponse response) {
			Watering newWatering = wateringServ.createWatering(watering);
			if (newWatering != null) {
				return wateringServ.createWatering(watering);
			}
			else {
				response.setStatus(404);
				return newWatering;
			}
		}
}
