<?php
    // Get 
    // http://localhost/controllers/product/getcount.php

    include "../../models/product.php";
    include "../api.php";
    try{
        sendResponse(200, json_encode(Product::getCount()), "text/html");
    } catch (Exception $e){
        sendResponse(200, $e->getMessage(), "text/html");
    }
?>