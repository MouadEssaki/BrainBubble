package com.BrainBubble.backend.auth;

import com.BrainBubble.backend.user.*;
import com.BrainBubble.backend.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Map;

@Service
public class AuthService {
    @Autowired private UserRepository userRepository;
    @Autowired private JwtService jwtService;
    @Autowired private BCryptPasswordEncoder encoder;

    public User register(User user) {
        user.setPassword(encoder.encode(user.getPassword())); // Hachage
        return userRepository.save(user);
    }

    public Map<String, String> login(String username, String password) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        if (encoder.matches(password, user.getPassword())) {
            String token = jwtService.generateToken(username);
            return Map.of("token", token, "username", username);
        }
        throw new RuntimeException("Mot de passe incorrect");
    }
}