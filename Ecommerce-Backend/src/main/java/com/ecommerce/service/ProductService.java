package com.ecommerce.service;

import com.ecommerce.exception.CategoryNotFoundException;
import com.ecommerce.exception.OrderException;
import com.ecommerce.exception.ProductException;
import com.ecommerce.models.Product;
import com.ecommerce.request.CreateProductRequest;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {
    public Product createProduct(CreateProductRequest req) throws CategoryNotFoundException;;
    public List<Product> findAllProduct() throws ProductException;
    public String DeleteProduct(Long productId) throws ProductException;
    public Product updateProduct(Long productId, Product product) throws ProductException;
    public Product findProductById(Long id) throws ProductException;
    public List<Product> findProductByCategory(String category);
    public Page<Product> getAllProduct(String category, List<String> colors, List<String>sizes, Integer minPrice, Integer maxPrice, Integer minDiscount,String sort,String stock,Integer pageNumber, Integer pageSize);
    public List<Product> searchProduct(String query);
}
