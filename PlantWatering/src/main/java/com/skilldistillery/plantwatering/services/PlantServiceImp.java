package com.skilldistillery.plantwatering.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.plantwatering.entities.Plant;
import com.skilldistillery.plantwatering.entities.UserPlant;
import com.skilldistillery.plantwatering.repositories.PlantRepository;
import com.skilldistillery.plantwatering.repositories.UserPlantRepository;

@Service
public class PlantServiceImp implements PlantService {
	@Autowired
	PlantRepository plantRepo;

	@Autowired
	UserPlantRepository userPlantRepo;
	
	@Override
	public List<Plant> findAllPlants() {
		return plantRepo.findAll();
	}

	@Override
	public Plant createPlant(Plant plant) {
		List<UserPlant> userPlants = userPlantRepo.findByPlantId(plant.getId());
		if (userPlants != null) {
			plant.setUserPlants(userPlants);
		}
		return plantRepo.saveAndFlush(plant);
	}

	@Override
	public Plant updatePlant(Plant plant) {
		if (plantRepo.findById(plant.getId()) != null) {
			return plantRepo.saveAndFlush(plant);
		}
		else {
			return null;
		}
	}
	
	@Override
	public Plant findPlantById(int id) {
		Optional<Plant> plant = plantRepo.findById(id);
		if(plant.isPresent()) {
			return plant.get();
		}
		else {
			return null;
		}
	}

	@Override
	public boolean delete(int id) {
		boolean answer = false;
		Optional<Plant> plant = plantRepo.findById(id);
		if (plant.isPresent()) {
			 plantRepo.deleteById(id);
			 answer = true;
		}
		
		return answer;
	}
	
	
	
}
