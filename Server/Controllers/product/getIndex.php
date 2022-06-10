<?php
    // Get 
    // http://localhost/controllers/product/getproduct.php?index=1
    include "../../models/product.php";
    include "../api.php";
    
    $queries = array();
    parse_str($_SERVER['QUERY_STRING'], $queries);
    if(empty($queries)){
        sendResponse(404, "Not Found!", "text/html");
    }
    else{
        sendResponse(200, json_encode(Product::getProductIndex($queries["index"])), "application/json");
    }
?>