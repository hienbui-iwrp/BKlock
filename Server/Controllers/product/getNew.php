<?php
    // Get 
    // http://localhost/controllers/product/getnew.php

    include "../../models/product.php";
    include "../api.php";
    
    try{
        sendResponse(200, json_encode(Product::getNewProduct()), "application/json");
    } catch (Exception $e){
        sendResponse(200, $e->getMessage(), "text/html");
    }
?>