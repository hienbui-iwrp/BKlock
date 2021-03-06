<?php
    // Get 
    // http://localhost/controllers/product/getcount.php

    include "../../models/product.php";
    include "../api.php";
    header("Access-Control-Allow-Origin: *");
    if($_SERVER["REQUEST_METHOD"] === "GET"){
        try{
            sendResponse(200, json_encode(Product::getCount()), "text/html");
        } catch (Exception $e){
            sendResponse(200, $e->getMessage(), "text/html");
        }
    } else {
        sendResponse(405, "Method Not Allowed", "text/html");
    }
?>