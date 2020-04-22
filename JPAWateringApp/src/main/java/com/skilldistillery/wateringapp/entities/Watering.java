package com.skilldistillery.wateringapp.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Watering {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="user_name")
	private String userName;

	@Column(name="plant_name")
	private String plantName;

	private String location;
	
	@Column(name="next_watering_date")
	private LocalDate nextWateringdate;
	
	@Column(name="last_watering_date")
	private LocalDate lastWateringdate;
	
	private String description;
	
	

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPlantName() {
		return plantName;
	}

	public void setPlantName(String plantName) {
		this.plantName = plantName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public LocalDate getNextWateringdate() {
		return nextWateringdate;
	}

	public void setNextWateringdate(LocalDate nextWateringdate) {
		this.nextWateringdate = nextWateringdate;
	}

	public LocalDate getLastWateringdate() {
		return lastWateringdate;
	}

	public void setLastWateringdate(LocalDate lastWateringdate) {
		this.lastWateringdate = lastWateringdate;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Watering [id=").append(id).append(", userName=").append(userName).append(", plantName=")
				.append(plantName).append(", location=").append(location).append(", nextWateringdate=")
				.append(nextWateringdate).append(", lastWateringdate=").append(lastWateringdate).append("]");
		return builder.toString();
	}

	public Watering(int id, String userName, String plantName, String location, LocalDate nextWateringdate,
			LocalDate lastWateringdate) {
		super();
		this.id = id;
		this.userName = userName;
		this.plantName = plantName;
		this.location = location;
		this.nextWateringdate = nextWateringdate;
		this.lastWateringdate = lastWateringdate;
	}

	public Watering() {
		super();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((userName == null) ? 0 : userName.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Watering other = (Watering) obj;
		if (id != other.id)
			return false;
		if (userName == null) {
			if (other.userName != null)
				return false;
		} else if (!userName.equals(other.userName))
			return false;
		return true;
	}
	
	
}
