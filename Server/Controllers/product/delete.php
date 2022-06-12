<?php
    // Delete
    // http://localhost/controllers/product/delete.php?id=1
    include "../../models/product.php";
    include "../api.php";
    header("Access-Control-Allow-Origin: *");
    if($_SERVER["REQUEST_METHOD"] === "DELETE"){
        $queries = array();
        parse_str($_SERVER['QUERY_STRING'], $queries);
        try{
            if(empty($queries)){
                sendResponse(404, "Not Found!", "text/html");
            }
            else{
                sendResponse(200, json_encode(Product::deleteProduct($queries["id"])), "application/json");
            }
        } catch (Exception $e){
            sendResponse(200, $e->getMessage(), "text/html");
        }
    } else {
        sendResponse(405, "Method Not Allowed", "text/html");
    }
?>