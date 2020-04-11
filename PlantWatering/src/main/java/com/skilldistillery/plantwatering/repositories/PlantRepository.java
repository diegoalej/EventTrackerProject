package com.skilldistillery.plantwatering.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.plantwatering.entities.Plant;

public interface PlantRepository extends JpaRepository<Plant, Integer> {

}
