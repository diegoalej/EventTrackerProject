package com.skilldistillery.plantwatering.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.plantwatering.entities.UserPlant;
import com.skilldistillery.plantwatering.entities.Watering;
import com.skilldistillery.plantwatering.repositories.PlantRepository;
import com.skilldistillery.plantwatering.repositories.UserPlantRepository;
import com.skilldistillery.plantwatering.repositories.UserRepository;
import com.skilldistillery.plantwatering.repositories.WateringRepository;

@Service
public class UserPlantServiceImpl implements UserPlantService {
	
	@Autowired
	UserPlantRepository userPlantRepo;
	@Autowired
	PlantRepository plantRepo;
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	WateringRepository wateringRepo;
	
	@Override
	public List<UserPlant> findAllUserPlants() {
		return userPlantRepo.findAll();
	}
	
	@Override
	public UserPlant findUserPlantById(int id) {
		Optional<UserPlant> userPlant = userPlantRepo.findById(id);
		if(userPlant.isPresent()) {
			return userPlant.get();
		}
		else {
			return null;
		}
	}
	
	@Override
	public List<UserPlant> findUserPlantByUserId(int id) {
		List<UserPlant> userPlant = userPlantRepo.findByUserId(id);
		if(userPlant.size() > 0) {
			return userPlant;
		}
		else {
			return null;
		}
	}

	@Override
	public List<UserPlant> findUserPlantByPlantId(int id) {
		List<UserPlant> userPlant = userPlantRepo.findByPlantId(id);
		if(userPlant.size() > 0) {
			return userPlant;
		}
		else {
			return null;
		}
	}
	
	@Override
	public UserPlant createUserPlant(UserPlant userPlant) {
		int userid = userPlant.getUser().getId();
		int plantid = userPlant.getPlant().getId();	
		if (userRepo.findById(userid) != null && plantRepo.findById(plantid) != null) {
			return userPlantRepo.saveAndFlush(userPlant);			
		}
		return null;
	}
	
	@Override
	public UserPlant updateUserPlant(UserPlant userPlant) {
		if (userPlantRepo.findById(userPlant.getId()) != null) {
			UserPlant answer =  userPlantRepo.saveAndFlush(userPlant);
			return answer;
		}
		else {
			return null;
		}
	}
	
	@Override
	public boolean delete(int id) {
		boolean answer = false;
		Optional<UserPlant> userPlant = userPlantRepo.findById(id);
		if (userPlant.isPresent()) {
			wateringRepo.deleteAll(userPlant.get().getWaterings());
			 userPlantRepo.deleteById(id);
			 answer = true;
		}
		
		return answer;
	}
	

}
