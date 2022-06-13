<?php
    // Get 
    // http://localhost/controllers/account/getalluser.php?id=1

    include "../../models/account.php";
    include "../api.php";
    header("Access-Control-Allow-Origin: *");
    if($_SERVER["REQUEST_METHOD"] === "GET"){
        try{
            sendResponse(200, json_encode(Account::getAllUser()), "application/json");
        } catch (Exception $e){
            sendResponse(200, $e->getMessage(), "text/html");
        }
    } else {
        sendResponse(405, "Method Not Allowed", "text/html");
    }
?>