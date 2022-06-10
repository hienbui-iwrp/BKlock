<?php
    // Post
    // http://localhost/controllers/signup.php

    // body json:
    // {
    //     "username": "",
    //     "password": "",
    //     "phonenum": ""
    // }
    include "../models/account.php";
    include "./api.php";

    $temp = json_decode(file_get_contents("php://input"));

    if (Account::signup($temp->username, $temp->password, $temp->phonenum)){
        sendResponse(200, "success", "text/html");
    } else {
        sendResponse(200, "fail", "text/html");
    }
?>