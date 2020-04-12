package com.skilldistillery.plantwatering.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.plantwatering.entities.UserPlant;

public interface UserPlantRepository extends JpaRepository<UserPlant, Integer> {
	
	List<UserPlant> findByPlantId(int id);
	
	List<UserPlant> findByUserId(int id);
	
	

}
