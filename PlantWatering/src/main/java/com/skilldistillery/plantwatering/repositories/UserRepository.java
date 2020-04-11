package com.skilldistillery.plantwatering.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.plantwatering.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
