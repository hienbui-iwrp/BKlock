<?php
    // Put
    // http://localhost/controllers/updatecart.php

    // body json:
    // {
    //     "customId": 1,
    //     "productId": 1,
    //     "quantity": 5
    // }
    include "../models/cart.php";
    include "./api.php";

    $temp = json_decode(file_get_contents("php://input"));

    if (Cart::updateCart($temp)){
        sendResponse(200, "success", "text/html");
    } else {
        sendResponse(200, "fail", "text/html");
    }
?>