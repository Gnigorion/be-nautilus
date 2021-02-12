package io.be.naut.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.be.naut.service.KeyGenService;

@RestController
@RequestMapping(path = "/")
public class KeyGenController {

	KeyGenService service;

	public KeyGenController(KeyGenService serivce) {
		this.service = serivce;
	}

	@GetMapping
	public String generateRandomKey() {
		return "<center>Random KeyGen</center>"
				+ "<br><center>"+service.generateKeyGen()+"</center>";
	}

}
