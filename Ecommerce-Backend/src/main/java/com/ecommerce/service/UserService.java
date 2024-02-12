package com.ecommerce.service;

import com.ecommerce.exception.UserException;
import com.ecommerce.models.User;

public interface UserService {

    public User findUserById(Long userId) throws UserException;
    public User findUserProfileByJwt(String jwt) throws UserException;
}
