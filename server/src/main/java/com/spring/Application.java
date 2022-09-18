package com.spring;

import com.github.javafaker.Faker;
import com.spring.models.Employee;
import com.spring.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application implements CommandLineRunner {

	@Autowired
	EmployeeService employeeService;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Faker faker = new Faker();
		for (int i = 0; i < 20; i++) {
			String name = faker.name().fullName();
			String phone = faker.phoneNumber().cellPhone();
			String officeNumber = faker.number().digit();
			String position = faker.job().position();
			String manager = faker.name().fullName();
			String companyImage = faker.company().logo();

			Employee employee = new Employee(name, phone, officeNumber, position, manager, companyImage);
			employeeService.createEmployee(employee);
		}

	}
}
