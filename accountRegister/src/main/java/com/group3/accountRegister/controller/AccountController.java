package com.group3.accountRegister.controller;

import com.group3.accountRegister.dto.request.AccountCreation;
import com.group3.accountRegister.dto.request.AccountUpdate;
import com.group3.accountRegister.entity.Account;
import com.group3.accountRegister.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/accounts")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @PostMapping
    Account createAccount(@RequestBody AccountCreation request){
        return accountService.createAccount(request);
    }
    @GetMapping
    List<Account> getAccounts(){
        return accountService.getAccounts();
    }

    @GetMapping("/{userId}")
    Account getAccount(@PathVariable("userId") String userId){
        return accountService.getAccount(userId);
    }

    @PutMapping("/{userId}")
    Account updateAccount(@PathVariable String userId, @RequestBody AccountUpdate request){
        return accountService.updateAccount(userId, request);

    }

    @DeleteMapping("/{userId}")
    String deleteAccount(@PathVariable String userId){
        accountService.deleteAccount(userId);
        return "Account has been deleted";
    }
}
