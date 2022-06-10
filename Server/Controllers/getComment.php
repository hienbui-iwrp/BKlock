<?php
    // Get 
    // http://localhost/controllers/getcomment.php?id=1

    include "../models/comment.php";
    include "./api.php";
    
    $queries = array();
    parse_str($_SERVER['QUERY_STRING'], $queries);
    if (empty($queries)){
        sendResponse(404, "Not Found!", "text/html");
    }
    else{
        sendResponse(200, json_encode(Comment::getCommentOfProduct($queries["id"])), "application/json");
    }
?>