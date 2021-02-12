package io.be.naut.service;

import java.security.SecureRandom;
import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class KeyGenService {

	private static final int length = 8;
	private static final char[] SYMBOLS = "@!%[$^}{&]:;>?*)(#".toCharArray();
	private static final char[] LOWERCASE = "yhqmxsacrwgeltviduofpbjknz".toCharArray();
	private static final char[] UPPERCASE = "VDAWZUYGLXTKNESCMORHJQFBIP".toCharArray();
	private static final char[] NUMBERS = "8175926304".toCharArray();
	private static final char[] ALL_CHARS = "yhqmxsacrwgeltviduofpbjknz@!%$^&*)81{}[]:;>?75926304(#VDAWZUYGLXTKNESCMORHJQFBIP"
			.toCharArray();

	static Random rand = new SecureRandom();

	public String generateKeyGen() {
		String stringPassword;
		char[] password = new char[length];

		password[0] = UPPERCASE[rand.nextInt(UPPERCASE.length)];
		password[1] = LOWERCASE[rand.nextInt(LOWERCASE.length)];
		password[2] = SYMBOLS[rand.nextInt(SYMBOLS.length)];
		password[3] = NUMBERS[rand.nextInt(NUMBERS.length)];

		for (int i = 4; i < length; i++) {
			password[i] = ALL_CHARS[rand.nextInt(ALL_CHARS.length)];
		}
	
		for (int i = 0; i < password.length; i++) {
			int randomPosition = rand.nextInt(password.length);
			char temp = password[i];
			password[i] = password[randomPosition];
			password[randomPosition] = temp;

		}
		stringPassword = new String(password);
		
		return stringPassword;
	}
}
