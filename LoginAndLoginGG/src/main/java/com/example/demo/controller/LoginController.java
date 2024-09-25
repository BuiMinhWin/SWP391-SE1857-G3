package com.example.demo.controller;

import com.example.demo.Login.LoginDTO;
import com.example.demo.Login.LoginMessage;
import com.example.demo.service.iml.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class LoginController {

    @Autowired
    private UserService userService;

    // This serves the login form for GET requests
    @GetMapping("/login")
    public String showLoginPage() {
        return "login";  // Ensure that login.html exists in src/main/resources/templates
    }

    // This handles the form submission (POST request)
    @PostMapping("/login")
    public String login(LoginDTO loginDTO, Model model) {
        LoginMessage loginMessage = userService.loginUser(loginDTO);

        if (loginMessage.getStatus()) {
            return "loginSuccess";  // Success page
        } else {
            model.addAttribute("errorMessage", loginMessage.getMessage());
            return "login";  // Redirect back to the login page with error
        }
    }
}
