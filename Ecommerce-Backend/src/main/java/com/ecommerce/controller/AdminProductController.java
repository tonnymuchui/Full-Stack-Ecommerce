package com.ecommerce.controller;

import com.ecommerce.exception.CategoryNotFoundException;
import com.ecommerce.exception.ProductException;
import com.ecommerce.models.Product;
import com.ecommerce.request.CreateProductRequest;
import com.ecommerce.response.ApiResponse;
import com.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/products")
public class AdminProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/")
    public ResponseEntity<Product> createProduct(@RequestBody CreateProductRequest req) throws CategoryNotFoundException {
        Product product = productService.createProduct(req);
        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }
    @DeleteMapping("/{productId}/delete")
    public ResponseEntity<ApiResponse> deleteProduct(@PathVariable Long productId) throws ProductException {
        productService.DeleteProduct(productId);
        ApiResponse res = new ApiResponse();
        res.setMessage("Product Deleted"); // Corrected message
        res.setStatus(true); // Boolean value instead of string
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
    @GetMapping("/all")
    public ResponseEntity<List<Product>> findAllProduct() throws ProductException {
        List<Product> products = productService.findAllProduct();
        return new ResponseEntity<>(products,HttpStatus.OK);
    }
    @PutMapping("/{productId}update")
    public ResponseEntity<Product> updateProduct(@RequestBody Product req, @PathVariable Long productId) throws CategoryNotFoundException, ProductException {
        Product product = productService.updateProduct(productId,req);
        return new ResponseEntity<>(product,HttpStatus.CREATED);
    }
    @PostMapping("/creates")
    public ResponseEntity<ApiResponse> createMultipleProduct(@RequestBody CreateProductRequest[] req) throws CategoryNotFoundException {
        for (CreateProductRequest productRequest: req){
            productService.createProduct(productRequest);
        }
        ApiResponse res = new ApiResponse();
        res.setMessage("product Created");
        res.setStatus(true);
        return new ResponseEntity<ApiResponse>(res,HttpStatus.CREATED);
    }
}
