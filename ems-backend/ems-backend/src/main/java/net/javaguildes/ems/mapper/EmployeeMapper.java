package net.javaguildes.ems.mapper;

import net.javaguildes.ems.dto.EmployeeDTO;
import net.javaguildes.ems.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDTO maptoEmployeeDTO(Employee employee){
        return  new EmployeeDTO(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail(),
                employee.getRoleId(),
                employee.getUserName(),
                employee.getPassword()
        );
    }
    public static Employee  mapToEmployee(EmployeeDTO employeeDTO){
        return  new Employee(
                employeeDTO.getId(),
                employeeDTO.getFirstName(),
                employeeDTO.getLastName(),
                employeeDTO.getEmail(),
                employeeDTO.getRoleId(),
                employeeDTO.getUserName(),
                employeeDTO.getPassword()

        );
    }
}
