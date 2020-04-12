package com.skilldistillery.plantwatering.services;

import java.util.List;

import com.skilldistillery.plantwatering.entities.User;

public interface UserService {

	public List<User> findAllUsers();

	public User createUser(User user);

	User updateUser(User user);

	User findUserById(int id);

	boolean delete(int id);
	
	

}
