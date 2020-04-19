package com.skilldistillery.plantwatering.services;

import java.util.List;

import com.skilldistillery.plantwatering.entities.UserPlant;
import com.skilldistillery.plantwatering.entities.Watering;

public interface UserPlantService {

	List<UserPlant> findAllUserPlants();

	UserPlant findUserPlantById(int id);

	List<UserPlant> findUserPlantByUserId(int id);

	List<UserPlant> findUserPlantByPlantId(int id);

	UserPlant createUserPlant(UserPlant userPlant);

	UserPlant updateUserPlant(UserPlant userPlant);

	boolean delete(int id);

}
