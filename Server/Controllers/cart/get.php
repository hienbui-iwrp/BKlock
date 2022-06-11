<?php
    // Get 
    // http://localhost/controllers/cart/get.php?id=1

    include "../../models/cart.php";
    include "../api.php";
    
    $queries = array();
    parse_str($_SERVER['QUERY_STRING'], $queries);
    try{
        if (empty($queries)){
            sendResponse(404, "Not Found!", "text/html");
        }
        else{
            sendResponse(200, json_encode(Cart::getCart($queries["id"])), "application/json");
        }
    } catch (Exception $e){
        sendResponse(200, $e->getMessage(), "text/html");
    }
?>