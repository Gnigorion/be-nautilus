package io.be.naut;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table
public class User {

	public User() {
		// empty constructor
	}

	@Id
	@GeneratedValue
	private int id;

	private String name;

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
