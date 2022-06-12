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
    header("Access-Control-Allow-Origin: *");
    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $temp = json_decode(file_get_contents("php://input"));

        try{
            if (News::addNews($temp)){
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