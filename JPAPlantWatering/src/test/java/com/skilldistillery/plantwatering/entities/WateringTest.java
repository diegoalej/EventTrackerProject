package com.skilldistillery.plantwatering.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class WateringTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Watering watering;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("plantwatering");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		watering = em.find(Watering.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		watering = null;
	}

	@Test
	void test() {
		assertNotNull(watering);
		assertEquals("looks great", watering.getWateringComment());
		assertEquals(1, watering.getId());
	}

}
