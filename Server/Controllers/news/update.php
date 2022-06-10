<?php
    // Post
    // http://localhost/controllers/news/update.php

    // body json:
    // {
    //     "id": "",
    //     "title": "",
    //     "content": "",
    //     "view": "",
    //     "like": "",
    //     "adminId": 0
    // }
    include "../../Models/news.php";
    include "../api.php";

    $temp = json_decode(file_get_contents("php://input"));

    if (News::updateNews($temp)){
        sendResponse(200, "success", "text/html");
    } else {
        sendResponse(200, "fail", "text/html");
    }
?>