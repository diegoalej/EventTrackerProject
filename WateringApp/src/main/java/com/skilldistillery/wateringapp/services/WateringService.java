package com.skilldistillery.wateringapp.services;

import java.util.List;

import com.skilldistillery.wateringapp.entities.Watering;

public interface WateringService {

	List<Watering> findAllWaterings();

	Watering findWateringById(int id);

	List<Watering> findWateringByUserName(String userName);

}
