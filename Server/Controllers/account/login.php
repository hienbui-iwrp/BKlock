<?php
    // Post
    // http://localhost/controllers/account/login.php

    // body json:
    // {
    //     "username": "",
    //     "password": ""
    // }
    include "../../models/account.php";
    include "../api.php";

    $temp = json_decode(file_get_contents("php://input"));

    if (Account::login($temp->username, $temp->password)){
        sendResponse(200, "success", "text/html");
    } else {
        sendResponse(200, "fail", "text/html");
    }
?>