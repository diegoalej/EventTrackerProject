package com.skilldistillery.wateringapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.wateringapp.entities.Watering;

public interface WateringRepository extends JpaRepository<Watering, Integer> {
	
	List<Watering> findByUserName(String userName);
	List<Watering> findByPlantName(String plantName);

}
