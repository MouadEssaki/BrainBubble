package com.BrainBubble.backend;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*") // Allows React to talk to Java
public class HelloController {
    @GetMapping("/api/hello")
    public String sayHello() {
        return "Connection Successful: Hello from Spring Boot!";
    }
}