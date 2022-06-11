<?php
    // Post
    // http://localhost/controllers/comment/post.php
    // body json:
    // {
    //     "id": "",
    //     "content": "",
    //     "comDate": "",
    //     "productId": "",
    //     "adminId": ""
    // }

    include "../../models/comment.php";
    include "../api.php";
    
    $temp = json_decode(file_get_contents("php://input"));
    if (Comment::postComment($temp)){
        sendResponse(200, "success", "text/html");
    }
    else{
        sendResponse(200, "fail", "text/html");
    }
?>