package com.skilldistillery.wateringapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.wateringapp.entities.Watering;
import com.skilldistillery.wateringapp.repositories.WateringRepository;

@Service
public class WateringServiceImpl implements WateringService {
	
	@Autowired
	WateringRepository waterRepo;
	
	@Override
	public List<Watering> findAllWaterings() {
		return waterRepo.findAll();
	}
	
	@Override
	public Watering findWateringById(int id) {
		Optional<Watering> watering = waterRepo.findById(id);
		if(watering.isPresent()) {
			return watering.get();
		}
		else {
			return null;
		}
	}
	
	@Override
	public List<Watering> findWateringByUserName(String userName) {
		List<Watering> waterings = waterRepo.findByUserName(userName);
		if(waterings.size() > 0) {
			return waterings;
		}
		else {
			return null;
		}
	}
}
