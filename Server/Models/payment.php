<?php
include "../../models/sql.php";

class Payment
{

    public static function makePayment($products, $user)
    {
        //delete from adds
        $where = "where ";
        $first = true;
        foreach ($products as $product) {
            if ($first) {
                $first = false;
                $where .= "id = " . $product["id"];
            } else {
                $where .= " or id = " . $product["id"];
            }
        }
        $query = "delete from adds " . $where . " and customid =" . $user;
        $temp = Sql::getInstance()->updateData($query);

        // add order item
        $query = "";
        foreach ($products as $product) {
            $query .= "insert into ordered_item(quantity, orderDate, cusId) values(" . $product["quantity"] . ", NOW()," . $user . ")";
        }


        $temp = Sql::getInstance()->updateData($query);

        return $temp;
    }
}
