package com.skilldistillery.plantwatering.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.plantwatering.entities.UserPlant;
import com.skilldistillery.plantwatering.entities.Watering;
import com.skilldistillery.plantwatering.repositories.UserPlantRepository;
import com.skilldistillery.plantwatering.repositories.WateringRepository;

@Service
public class WateringServiceImpl implements WateringService {

	@Autowired
	WateringRepository wateringRepo;
	
	@Autowired
	UserPlantRepository userPlantRepo;
	
	@Override
	public List<Watering> findWateringByUserPlantId(int id){
		Optional<UserPlant> userPlant = userPlantRepo.findById(id);
		if(userPlant.isPresent()) {
			return userPlant.get().getWaterings();
		}
		else {
			return null;
		}
	}
	
	@Override
	public Watering createWatering(Watering watering) {
		List<UserPlant> userPlant = userPlantRepo.findByPlantId(watering.getId());
		if (userPlant != null) {
			return wateringRepo.saveAndFlush(watering);
		}
		return null;
		
	}
	
}
