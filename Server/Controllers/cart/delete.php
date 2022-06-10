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

    $temp = json_decode(file_get_contents("php://input"));

    if (Cart::deleteCart($temp)){
        sendResponse(200, "success", "text/html");
    } else {
        sendResponse(200, "fail", "text/html");
    }
?>