<?php
    // Get 
    // http://localhost/controllers/getcountproduct.php

    include "../models/product.php";
    include "./api.php";
    
    sendResponse(200, json_encode(Product::getCount()), "text/html");
?>