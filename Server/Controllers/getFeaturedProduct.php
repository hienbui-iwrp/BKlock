<?php
    // Get 
    // http://localhost/controllers/getfeaturedproduct.php

    include "../models/product.php";
    include "./api.php";
    
    sendResponse(200, json_encode(Product::getFeaturedProduct()), "application/json");
?>