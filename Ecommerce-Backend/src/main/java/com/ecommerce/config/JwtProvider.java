package com.ecommerce.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;

import javax.crypto.SecretKey;
import java.util.Date;

public class JwtProvider {
    public String generateToken(Authentication auth){
        SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());
        String jwt = Jwts.builder()
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime()+846000000))
                .claim("email", auth.getName())
                .signWith(key).compact();
        return jwt;
    }
    public String getEmailFromToken(String jwt){
        jwt = jwt.substring(7);
        SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());
        Claims claims = Jwts.parser().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
        String email = String.valueOf(claims.get("email"));
        return email;
    }
}
