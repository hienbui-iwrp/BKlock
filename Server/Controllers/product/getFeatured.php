<?php
    // Get 
    // http://localhost/controllers/product/getfeatured.php

    include "../../models/product.php";
    include "../api.php";
    
    sendResponse(200, json_encode(Product::getFeaturedProduct()), "application/json");
?>