<?php
    // Post
    // http://localhost/controllers/account/signup.php

    // body json:
    // {
    //     "userName": "",
    //     "password": "",
    //     "phoneNum": ""
    // }
    include "../../models/account.php";
    include "../api.php";

    $temp = json_decode(file_get_contents("php://input"));

    try{
        if (Account::signup($temp)){
            sendResponse(200, "success", "text/html");
        } else {
            sendResponse(200, "fail", "text/html");
        }
    } catch (Exception $e){
        sendResponse(200, $e->getMessage(), "text/html");
    }
?>