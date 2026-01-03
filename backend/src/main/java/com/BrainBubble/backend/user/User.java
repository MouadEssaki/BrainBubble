package com.BrainBubble.backend.user;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")

public class User {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Getter
    @Setter
    @Column(name = "name")
    private String name;


    @Getter
    @Setter
    @Column(name = "email")
    private String email;


}
