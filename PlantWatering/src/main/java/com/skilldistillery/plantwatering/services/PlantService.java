package com.skilldistillery.plantwatering.services;

import java.util.List;

import com.skilldistillery.plantwatering.entities.Plant;

public interface PlantService {
	
	public List<Plant> findAllPlants();
	public Plant createPlant(Plant plant);
	public Plant updatePlant(Plant plant);
	public Plant findPlantById(int id);
	public boolean delete(int id);

}
