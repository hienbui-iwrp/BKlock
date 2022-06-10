<?php
    // Post
    // http://localhost/controllers/news/add.php

    // body json:
    // {
    //     "title": "",
    //     "content": "",
    //     "view": "",
    //     "like": "",
    //     "adminId": 0
    // }
    include "../../Models/news.php";
    include "../api.php";

    $temp = json_decode(file_get_contents("php://input"));

    if (News::addNews($temp)){
        sendResponse(200, "success", "text/html");
    } else {
        sendResponse(200, "fail", "text/html");
    }
?>