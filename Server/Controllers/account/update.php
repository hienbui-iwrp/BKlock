<?php
    // Put
    // http://localhost/controllers/account/update.php

    // body json:
    // {
    //     "id": 1,
    //     "fullName": "",
    //     "address": "",
    //     "phoneNum": "",
    //     "password": ""
    // }
    header("Access-Control-Allow-Origin: *");
    include "../../models/account.php";
    include "../api.php";

    $temp = json_decode(file_get_contents("php://input"));
    if($_SERVER["REQUEST_METHOD"] === "PUT"){
        try{
            if (Account::update($temp)){
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