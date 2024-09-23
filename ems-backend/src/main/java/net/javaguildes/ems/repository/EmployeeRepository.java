package net.javaguildes.ems.repository;

import net.javaguildes.ems.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Optional<Employee> findByUserName(String userName);
}
