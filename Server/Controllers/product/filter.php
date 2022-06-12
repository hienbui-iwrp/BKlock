<?php
// Get 
// http://localhost/controllers/product/filter.php
//body:
//{price:[1,2,3], branch:['Rolex'], sex:['Đồng hồ nam'], category:['Cơ - automatic']}

include "../../models/product.php";
include "../api.php";

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $body = json_decode(file_get_contents("php://input"));

    sendResponse(200, json_encode(Product::filterProduct($body)), "application/json");
} else {
    sendResponse(405, "Method Not Allowed", "text/html");
}
