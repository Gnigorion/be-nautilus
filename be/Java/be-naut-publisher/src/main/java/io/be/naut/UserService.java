package io.be.naut;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class UserService {
	UserRepository userRepository;

	public UserService() {
	}

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public List<User> list() {
		return userRepository.findAll();
	}

}
