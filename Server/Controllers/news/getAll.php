<?php
    // Get 
    // http://localhost/controllers/news/getall.php
    include "../../models/news.php";
    include "../api.php";
    
    if($_SERVER["REQUEST_METHOD"] === "GET"){
        $queries = array();
        try{
            sendResponse(200, json_encode(News::getAllNews()), "application/json");
        } catch (Exception $e){
            sendResponse(200, $e->getMessage(), "text/html");
        }
    } else {
        sendResponse(405, "Method Not Allowed", "text/html");
    }
?>