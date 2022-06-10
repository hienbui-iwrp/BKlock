<?php
    // Post
    // http://localhost/controllers/product/add.php

    // body json:
    // {
    //     "name": "",
    //     "image": "",
    //     "brand": "",
    //     "category": "",
    //     "price": 0
    // }
    include "../../models/product.php";
    include "../api.php";

    $temp = json_decode(file_get_contents("php://input"));

    if (Product::addProduct($temp)){
        sendResponse(200, "success", "text/html");
    } else {
        sendResponse(200, "fail", "text/html");
    }
?>