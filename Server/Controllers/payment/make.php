
<?php
// Post
// http://localhost/controllers/payment/make.php

// body json:
// {
//     product: [{id: 1, quantity:10}],
//     userId: 1
// }
include "../../Models/payment.php";
include "../api.php";

$body = json_decode(file_get_contents("php://input"), true);

if (Payment::makePayment($body["product"], $body['userId'])) {
    sendResponse(200, "success", "text/html");
} else {
    sendResponse(200, "fail", "text/html");
}
?>