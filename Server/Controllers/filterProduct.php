<?php
    // Get 
    // http://localhost/controllers/getfeaturedproduct.php?price=[1,2,3]&branch=['Rolex']&sex=['Đồng hồ nam']&category=['Cơ - automatic']

    include "../models/product.php";
    include "./api.php";
    $queries = array();
    parse_str($_SERVER['QUERY_STRING'], $queries);
    
    sendResponse(200, json_encode(Product::filterProduct($queries["price"], $queries["branch"], $queries["sex"], $queries["category"])), "application/json");
