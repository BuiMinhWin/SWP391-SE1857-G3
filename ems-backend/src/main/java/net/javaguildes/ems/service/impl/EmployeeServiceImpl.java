package net.javaguildes.ems.service.impl;

import lombok.AllArgsConstructor;
import net.javaguildes.ems.dto.EmployeeDTO;
import net.javaguildes.ems.entity.Employee;
import net.javaguildes.ems.exception.ResourceNotFoundException;
import net.javaguildes.ems.mapper.EmployeeMapper;
import net.javaguildes.ems.repository.EmployeeRepository;
import net.javaguildes.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDTO);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.maptoEmployeeDTO(savedEmployee);
    }

    @Override
    public EmployeeDTO getEmployeeById(Long employeeId) {

        Employee employee= employeeRepository.findById(employeeId)
                .orElseThrow(()->   new ResourceNotFoundException("Employee is not exists with given id" + employeeId));
        return EmployeeMapper.maptoEmployeeDTO(employee);
    }

    @Override
    public List<EmployeeDTO> getAllEmployees() {
        List<Employee> employees =employeeRepository.findAll();
        return employees.stream().map((employee) -> EmployeeMapper.maptoEmployeeDTO(employee))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDTO updateEmployee(long employeeId, EmployeeDTO updatedEmployee) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(()-> new ResourceNotFoundException("Employee is not exists with given id: "+ employeeId));
        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());

        Employee updateEmployeeobj= employeeRepository.save(employee);

        return EmployeeMapper.maptoEmployeeDTO(updateEmployeeobj);
    }

    @Override
    public void  deleteEmployee(long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(()-> new ResourceNotFoundException("Delete successfully"));

        employeeRepository.deleteById(employeeId);
    }

    @Override
    public EmployeeDTO getEmployeeByUserName(String userName) {
        Employee employee= employeeRepository.findByUserName(userName)
                .orElseThrow(()->   new ResourceNotFoundException("Employee is not exists with given id" + userName));
        return EmployeeMapper.maptoEmployeeDTO(employee);
    }


}
