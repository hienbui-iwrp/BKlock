<?php
    // Get 
    // http://localhost/controllers/product/getfeatured.php

    include "../../models/product.php";
    include "../api.php";
    if($_SERVER["REQUEST_METHOD"] === "GET"){
        try{
            sendResponse(200, json_encode(Product::getFeaturedProduct()), "application/json");
        } catch (Exception $e){
            sendResponse(200, $e->getMessage(), "text/html");
        }
    } else {
        sendResponse(405, "Method Not Allowed", "text/html");
    }
?>