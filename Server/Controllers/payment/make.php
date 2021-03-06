
<?php
// Post
// http://localhost/controllers/payment/make.php
// body json:
// {
//     product: [{id: 1, quantity:10}],
//     userId: 1
// }
include "../../Models/Payment.php";
include "../api.php";
header("Access-Control-Allow-Origin: *");
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $temp = json_decode(file_get_contents("php://input"));

    if (Payment::makePayment($temp->product, $temp->userId)) {
        sendResponse(200, "success", "text/html");
    } else {
        sendResponse(200, "fail", "text/html");
    }
} else {
    sendResponse(405, "Method Not Allowed", "text/html");
}
?>