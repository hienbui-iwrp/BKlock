<?php
// Get 
// http://localhost/controllers/payment/getordered.php?id=1

include "../../models/payment.php";
include "../api.php";
header("Access-Control-Allow-Origin: *");
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    sendResponse(200, json_encode(Payment::getAllOrderedItem()), "application/json");
} else {
    sendResponse(405, "Method Not Allowed", "text/html");
}
