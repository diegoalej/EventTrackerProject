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
	
	@Override
	public Watering createWatering(Watering watering) {
		if (waterRepo.findById(watering.getId()) != null) {
			watering.setId(0);
		}
		return waterRepo.saveAndFlush(watering);
	}
	
	@Override
	public Watering updateWatering(Watering watering) {
		if (waterRepo.findById(watering.getId()) != null) {
			return waterRepo.saveAndFlush(watering);
		}
		else {
			return null;			
		}
	}
	
	@Override
	public boolean deleteWatering(int id) {
		boolean answer = false;
		Optional<Watering> watering = waterRepo.findById(id);
		if (watering.isPresent()) {
			waterRepo.deleteById(id);
			answer = true;
		}
		
		return answer;
	}
	
}
