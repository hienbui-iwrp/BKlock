<?php
    // Put
    // http://localhost/controllers/cart/update.php

    // body json:
    // {
    //     "customId": 1,
    //     "productId": 1,
    //     "quantity": 5
    // }
    include "../../models/cart.php";
    include "../api.php";
    header("Access-Control-Allow-Origin: *");
    if($_SERVER["REQUEST_METHOD"] === "PUT"){
        $temp = json_decode(file_get_contents("php://input"));

        try{
            if (Cart::updateCart($temp)){
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