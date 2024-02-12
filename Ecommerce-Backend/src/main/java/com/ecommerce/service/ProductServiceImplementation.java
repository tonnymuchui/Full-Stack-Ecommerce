package com.ecommerce.service;

import com.ecommerce.exception.CategoryNotFoundException;
import com.ecommerce.exception.ProductException;
import com.ecommerce.models.Category;
import com.ecommerce.models.Product;
import com.ecommerce.repository.CategoryRepository;
import com.ecommerce.repository.ProductRepository;
import com.ecommerce.repository.UserRepository;
import com.ecommerce.request.CreateProductRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductServiceImplementation implements ProductService{
    private ProductRepository productRepository;
    private UserRepository userRepository;
    private CategoryRepository categoryRepository;

    @Autowired
    public ProductServiceImplementation(ProductRepository productRepository,UserRepository userRepository, CategoryRepository categoryRepository){
        this.productRepository = productRepository;
        this.userRepository = userRepository;
        this.categoryRepository = categoryRepository;
    }
    @Override
    public Product createProduct(CreateProductRequest req) throws CategoryNotFoundException {
        Category topLevel = getTopLevelCategory(req.getTopLevelCategory());
        Category secondLevel = getSecondLevelCategory(req.getSecondLevelCategory(), topLevel);
        Category thirdLevel = getThirdLevelCategory(req.getThirdLevelCategory(), secondLevel);

        Product product = new Product();
        product.setTitle(req.getTitle());
        product.setColor(req.getColor());
        product.setDescription(req.getDescription());
        product.setDiscountedPrice(req.getDiscountedPrice());
        product.setDiscountedPercent(req.getDiscountedPercent());
        product.setImageUrl(req.getImageUrl());
        product.setBrand(req.getBrand());
        product.setPrice(req.getPrice());
        product.setQuantity(req.getQuantity());
        product.setCategory(thirdLevel);
        product.setCreatedAt(LocalDateTime.now());

        return productRepository.save(product);
    }

    @Override
    public List<Product> findAllProduct() throws ProductException {
        return null;
    }

    private Category getTopLevelCategory(String name) throws CategoryNotFoundException {
        return categoryRepository.findByName(name)
                .orElseThrow(() -> new CategoryNotFoundException("Top-level category not found: " + name));
    }

    private Category getSecondLevelCategory(String secondLevelCategory, Category parent) throws CategoryNotFoundException {
        return categoryRepository.findByNameAndParent(secondLevelCategory, parent.getName())
                .orElseThrow(() -> new CategoryNotFoundException("Second-level category not found: " + secondLevelCategory));
    }
    private Category getThirdLevelCategory(String thirdLevelCategory, Category parent) throws CategoryNotFoundException {
        return categoryRepository.findByNameAndParent(thirdLevelCategory, parent.getName())
                .orElseThrow(() -> new CategoryNotFoundException("Second-level category not found: " + thirdLevelCategory));
    }


    @Override
    public String DeleteProduct(Long productId) throws ProductException {
        Product product = findProductById(productId);
        product.getSizes().clear();
        productRepository.delete(product);
        return "product deleted";
    }

    @Override
    public Product updateProduct(Long productId, Product req) throws ProductException {
        Product product = new Product();
        if (req.getQuantity()!=0){
            product.setQuantity(req.getQuantity());
        }
        return productRepository.save(product);
    }

    @Override
    public Product findProductById(Long id) throws ProductException {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()){
            return product.get();
        }
        throw new ProductException("Product not found" + id);
    }


    @Override
    public List<Product> findProductByCategory(String category) {
        return null;
    }

    @Override
    public Page<Product> getAllProduct(String category, List<String> colors, List<String> sizes, Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNumber,pageSize);
        List<Product> products = productRepository.filterProducts(category,minPrice,maxPrice,minDiscount,sort);
        if (!colors.isEmpty()){
            products = products.stream().filter(product -> colors.stream().anyMatch(color -> color.equalsIgnoreCase(product.getColor()))).toList();
        }
        if (stock!=null){
            if (stock.equals("in_stock")){
                products=products.stream().filter(product -> product.getQuantity() > 0).collect(Collectors.toList());
            }
            else if (stock.equals("out_of_stock")){
                products=products.stream().filter(product -> product.getQuantity() < 1).collect(Collectors.toList());
            }
        }
        int startIndex = (int) pageable.getOffset();
        int endIndex = Math.min(startIndex+pageable.getPageSize(),products.size());
        List<Product> pageContent = products.subList(startIndex,endIndex);
        Page<Product> filteredProducts = new PageImpl<>(pageContent,pageable,products.size());
        return filteredProducts;
    }

    @Override
    public List<Product> searchProduct(String query) {

        return productRepository.findByTitleContainsIgnoreCase(query);
    }
}
