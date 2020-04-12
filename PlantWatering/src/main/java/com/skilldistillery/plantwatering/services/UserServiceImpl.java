package com.skilldistillery.plantwatering.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.plantwatering.entities.Plant;
import com.skilldistillery.plantwatering.entities.User;
import com.skilldistillery.plantwatering.entities.UserPlant;
import com.skilldistillery.plantwatering.repositories.UserPlantRepository;
import com.skilldistillery.plantwatering.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	UserPlantRepository userPlantRepo;
	
	@Override
	public List<User> findAllUsers() {
		return userRepo.findAll();
	}
	
	@Override
	public User createUser(User user) {
		List<UserPlant> userPlants = userPlantRepo.findByUserId(user.getId());
		if (userPlants != null) {
			user.setUserPlants(userPlants);
		}
		return userRepo.saveAndFlush(user);
	}
	
	@Override
	public User updateUser(User user) {
		if (userRepo.findById(user.getId()) != null) {
			User answer =  userRepo.saveAndFlush(user);
			return answer;
		}
		else {
			return null;
		}
	}
	
	@Override
	public User findUserById(int id) {
		Optional<User> user = userRepo.findById(id);
		if(user.isPresent()) {
			return user.get();
		}
		else {
			return null;
		}
	}

	@Override
	public boolean delete(int id) {
		boolean answer = false;
		Optional<User> user = userRepo.findById(id);
		if (user.isPresent()) {
			 userRepo.deleteById(id);
			 answer = true;
		}
		
		return answer;
	}	
}
