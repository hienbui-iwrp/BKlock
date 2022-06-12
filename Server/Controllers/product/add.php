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
    header("Access-Control-Allow-Origin: *");
    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $temp = json_decode(file_get_contents("php://input"));

        try{
            if (Product::addProduct($temp)){
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