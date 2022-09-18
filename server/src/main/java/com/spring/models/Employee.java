package com.spring.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String phone;

    private String officeNumber;

    private String position;

    private String manager;

    private String companyImage;

    public Employee(String name, String phone, String officeNumber, String position, String manager, String companyImage) {
        this.name = name;
        this.phone = phone;
        this.officeNumber = officeNumber;
        this.position = position;
        this.manager = manager;
        this.companyImage = companyImage;
    }
}
