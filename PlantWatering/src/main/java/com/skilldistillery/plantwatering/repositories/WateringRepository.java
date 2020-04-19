package com.skilldistillery.plantwatering.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.plantwatering.entities.Watering;

public interface WateringRepository extends JpaRepository<Watering, Integer>{

}
