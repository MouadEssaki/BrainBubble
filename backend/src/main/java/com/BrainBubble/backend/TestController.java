package com.BrainBubble.backend;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173") // Allows React to talk to Java
public class TestController {
    @GetMapping("/api/test")
    public String test() {
        return "Backend is Online ✅ (Connected to Postgres)";
    }
}