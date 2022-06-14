
<?php
// Post
// http://localhost/controllers/payment/deleteOrdered.php
// body json:
// {
//     ordItemId: 1,
//     ordCusId: 1,
//      productId:1
// }
include "../../Models/Payment.php";
include "../api.php";
header("Access-Control-Allow-Origin: *");
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $temp = json_decode(file_get_contents("php://input"));

    if (Payment::deleteOrderedItem($temp->ordItemId, $temp->ordCusId, $temp->productId)) {
        sendResponse(200, "success", "text/html");
    } else {
        sendResponse(200, "fail", "text/html");
    }
} else {
    sendResponse(405, "Method Not Allowed", "text/html");
}
?>