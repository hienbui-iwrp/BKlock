<?php
    // Delete
    // http://localhost/controllers/cart/delete.php

    // body json:
    // {
    //     "customId": 1,
    //     "productId": 1,
    // }
    include "../../models/cart.php";
    include "../api.php";
    header("Access-Control-Allow-Origin: *");
    $temp = json_decode(file_get_contents("php://input"));
    
    if($_SERVER["REQUEST_METHOD"] === "DELETE"){
        try{
            if (Cart::deleteCart($temp)){
                sendResponse(200, "success", "text/html");
            } else {
                sendResponse(200, "fail", "text/html");
            }
        } catch (Exception $e){
            sendResponse(200, $e->getMessage(), "text/html");
        }
    } else {
        sendResponse(405, "Method Not Allowed", "text/html");
    }
?>