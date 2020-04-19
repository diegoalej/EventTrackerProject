package com.skilldistillery.plantwatering.entities;

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
	
	@Column(name="watering_date")
	private LocalDate wateringDate;
	
	@Column(name="watering_comment")
	private String wateringComment;
	
	@Column(name="user_plant_id")
	private int userPlantId;
	

	public int getUserPlantId() {
		return userPlantId;
	}

	public void setUserPlantId(int userPlantId) {
		this.userPlantId = userPlantId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDate getWateringDate() {
		return wateringDate;
	}

	public void setWateringDate(LocalDate wateringDate) {
		this.wateringDate = wateringDate;
	}

	public String getWateringComment() {
		return wateringComment;
	}

	public void setWateringComment(String wateringComment) {
		this.wateringComment = wateringComment;
	}


	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Watering [id=").append(id).append(", wateringDate=").append(wateringDate)
				.append(", wateringComment=").append(wateringComment).append(", userPlant=")
				.append("]");
		return builder.toString();
	}

	public Watering(int id, LocalDate wateringDate, String wateringComment, int userPlantId) {
		super();
		this.id = id;
		this.wateringDate = wateringDate;
		this.wateringComment = wateringComment;
		this.userPlantId = userPlantId;
	}

	public Watering() {
		super();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
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
		return true;
	}
	
	


}