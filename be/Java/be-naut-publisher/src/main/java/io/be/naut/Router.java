package io.be.naut;

import java.util.List;

import javax.persistence.EntityManagerFactory;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class Router {

	UserRepository userRepository;
	ModelMapper modelMapper;

	public Router(UserRepository userRepository, ModelMapper modelMapper) {
		this.userRepository = userRepository;
		this.modelMapper = modelMapper;
	}

	@GetMapping("getuser")
	public List<User> findUser(@RequestParam(defaultValue = "empty") String name) {
		if (name.equals("empty")) {
			return userRepository.findAll();
		} else {
			return userRepository.findByName(name);
		}

	}

	@PostMapping("createuser")
	@Transactional(propagation = Propagation.REQUIRES_NEW)
	public ResponseEntity<Integer> createUser(@RequestBody UserDTO userdto) {
		User user = new User();
		user.setName(userdto.getName());
		userRepository.save(user);
		return ResponseEntity.status(201).build();
	}
}
