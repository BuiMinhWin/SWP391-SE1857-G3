package net.javaguildes.ems.service;

import net.javaguildes.ems.dto.EmployeeDTO;

import java.util.List;

public interface EmployeeService {
    EmployeeDTO createEmployee(EmployeeDTO employeeDTO);

    EmployeeDTO getEmployeeById(Long employeeId);

    List<EmployeeDTO>getAllEmployees();

    EmployeeDTO updateEmployee(long employeeId, EmployeeDTO updateEmployee);

    void deleteEmployee(long employeeId);

    EmployeeDTO getEmployeeByUserName(String userName);


}
