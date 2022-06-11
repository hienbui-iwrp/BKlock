<?php
    // Get 
    // http://localhost/controllers/product/getfeatured.php

    include "../../models/product.php";
    include "../api.php";
    
    try{
        sendResponse(200, json_encode(Product::getFeaturedProduct()), "application/json");
    } catch (Exception $e){
        sendResponse(200, $e->getMessage(), "text/html");
    }
?>