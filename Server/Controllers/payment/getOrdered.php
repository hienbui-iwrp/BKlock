<?php
    // Get 
    // http://localhost/controllers/payment/getordered.php?id=1

    include "../../models/payment.php";
    include "../api.php";
    header("Access-Control-Allow-Origin: *");
    if($_SERVER["REQUEST_METHOD"] === "GET"){
        $queries = array();
        parse_str($_SERVER['QUERY_STRING'], $queries);
        try{
            if (empty($queries)){
                sendResponse(404, "Not Found!", "text/html");
            }
            else{
                sendResponse(200, json_encode(Payment::getOrderedItems($queries["id"])), "application/json");
            }
        } catch (Exception $e){
            sendResponse(200, $e->getMessage(), "text/html");
        }
    } else {
        sendResponse(405, "Method Not Allowed", "text/html");
    }
?>