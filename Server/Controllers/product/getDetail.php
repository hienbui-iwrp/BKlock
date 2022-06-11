<?php
    // Get 
    // http://localhost/controllers/product/getdetail.php?id=123

    include "../../models/product.php";
    include "../api.php";
    
    $queries = array();
    parse_str($_SERVER['QUERY_STRING'], $queries);
    if(empty($queries)){
        sendResponse(404, "Not Found!", "text/html");
    }
    else{
        sendResponse(200, json_encode(Product::getOneProduct($queries["id"])), "application/json");
    }
?>