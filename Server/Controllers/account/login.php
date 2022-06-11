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
    sendResponse(200, json_encode(Account::login($temp->username, $temp->password)), "application/json");
?>