<?php
    // Get 
    // http://localhost/controllers/getnews.php?id=1
    include "../models/news.php";
    include "./api.php";
    
    $queries = array();
    parse_str($_SERVER['QUERY_STRING'], $queries);
    if(empty($queries)){
        sendResponse(404, "Not Found!", "text/html");
    }
    else{
        sendResponse(200, json_encode(News::getNews($queries["id"])), "application/json");
    }
?>