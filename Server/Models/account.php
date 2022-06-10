<?php
    include "../models/sql.php";

    class Account{

        public static function login($username, $password){
            $query = "SELECT * FROM customer WHERE userName = '".$username."' and password = '".$password."'";
            $result = getData($query);
            if ($result->num_rows > 0){
                return true;
            }else{
                return false;
            }
        }

        public static function signup($username, $password, $phonenum){
            $query = "INSERT INTO `customer` VALUES ('1111', '" . $username . "', '" . $password . "', '2022-06-10', NULL, '" . $phonenum . "');";
            $result = updateData($query);
            return $result;
        }

    }
?>