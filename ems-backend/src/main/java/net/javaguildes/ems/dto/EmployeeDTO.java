package net.javaguildes.ems.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class EmployeeDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String roleId;
    private String userName;
    private String password;

}
