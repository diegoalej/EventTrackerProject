package com.skilldistillery.plantwatering.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.plantwatering.entities.User;
import com.skilldistillery.plantwatering.services.UserService;

@RestController
@RequestMapping("api")
public class UserController {
	
	@Autowired
	UserService userServ;
	
	@GetMapping("users")
	public List<User> showAllUsers() {
		return userServ.findAllUsers();
	}
	
	@PostMapping("users")
	public User createNewPlant(@RequestBody User user) {
		return userServ.createUser(user);
	}
	
	@PostMapping("users/update")
	public User updateExistingUser(@RequestBody User user) {
		return userServ.updateUser(user);
	}
	
	@GetMapping("users/{id}")
	public User findUserWithId(@PathVariable Integer id) {
		return userServ.findUserById(id);
	}

	@DeleteMapping("users/{id}")
	public boolean deleteExistingUser(@PathVariable int id) {
		return userServ.delete(id);
	}	
}
