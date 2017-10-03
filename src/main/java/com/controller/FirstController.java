package com.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.bean.User;

@Controller
@RequestMapping("/user")
@CrossOrigin(origins = { "http://localhost:4200" })
public class FirstController {

	@GetMapping("/detail")
	public ResponseEntity<User> getArticleById(@RequestParam("id") String id) {
		User user = new User(Integer.parseInt(id), "Some User");
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
		



}

