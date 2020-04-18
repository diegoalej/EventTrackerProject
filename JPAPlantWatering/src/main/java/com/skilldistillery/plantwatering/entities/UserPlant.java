package com.skilldistillery.plantwatering.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "user_plant")
public class UserPlant {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "plant_id")
	private Plant plant;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	private String name;
	@Column(name = "last_watering")
	private LocalDate lastWatering;
	@Column(name = "next_watering")
	private LocalDate nextWatering;
	private String location;
	private boolean active;
	
	@OneToMany(mappedBy = "userPlant")
	private List<Watering> waterings;

	public List<Watering> getWaterings() {
		return waterings;
	}

	public void setWaterings(List<Watering> waterings) {
		this.waterings = waterings;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Plant getPlant() {
		return plant;
	}

	public void setPlant(Plant plant) {
		this.plant = plant;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getLastWatering() {
		return lastWatering;
	}

	public void setLastWatering(LocalDate lastWatering) {
		this.lastWatering = lastWatering;
	}

	public LocalDate getNextWatering() {
		return nextWatering;
	}

	public void setNextWatering(LocalDate nextWatering) {
		this.nextWatering = nextWatering;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("UserPlant [id=").append(id).append(", plant=").append(plant).append(", user=").append(user)
				.append(", name=").append(name).append(", lastWatering=").append(lastWatering).append(", nextWatering=")
				.append(nextWatering).append(", location=").append(location).append(", active=").append(active)
				.append("]");
		return builder.toString();
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
		UserPlant other = (UserPlant) obj;
		if (id != other.id)
			return false;
		return true;
	}

	public UserPlant(int id, Plant plant, User user, String name, LocalDate lastWatering, LocalDate nextWatering,
			String location, boolean active) {
		super();
		this.id = id;
		this.plant = plant;
		this.user = user;
		this.name = name;
		this.lastWatering = lastWatering;
		this.nextWatering = nextWatering;
		this.location = location;
		this.active = active;
	}

	public UserPlant() {
		super();
	}

}
