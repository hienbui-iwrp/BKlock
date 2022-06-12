<?php
    // Post
    // http://localhost/controllers/account/login.php

    // body json:
    // {
    //     "userName": "",
    //     "password": ""
    // }
    include "../../models/account.php";
    include "../api.php";
    header("Access-Control-Allow-Origin: *");
    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $temp = json_decode(file_get_contents("php://input"));
        try{
            sendResponse(200, json_encode(Account::login($temp)), "application/json");
        } catch (Exception $e){
            sendResponse(200, $e->getMessage(), "text/html");
        }
    } else {
        sendResponse(405, "Method Not Allowed", "text/html");
    }
?>