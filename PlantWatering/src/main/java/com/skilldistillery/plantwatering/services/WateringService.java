package com.skilldistillery.plantwatering.services;

import java.util.List;

import com.skilldistillery.plantwatering.entities.UserPlant;
import com.skilldistillery.plantwatering.entities.Watering;

public interface WateringService {

	List<Watering> findWateringByUserPlantId(int id);

	Watering createWatering(Watering watering);

}
