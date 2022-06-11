<?php
    // Get 
    // http://localhost/controllers/product/getnew.php

    include "../../models/product.php";
    include "../api.php";
    
    sendResponse(200, json_encode(Product::getNewProduct()), "application/json");
?>