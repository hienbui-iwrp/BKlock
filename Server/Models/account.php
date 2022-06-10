<?php
    include "../models/sql.php";

    class Account{

        public static function login($username, $password){
            $query = "SELECT * FROM customer WHERE userName = '".$username."' and password = '".$password."'";
            $result = Sql::getInstance()->getData($query);
            if ($result->num_rows > 0){
                return true;
            }else{
                return false;
            }
        }

        public static function signup($username, $password, $phonenum){
            $query = "INSERT INTO `customer` VALUES ('1111', '" . $username . "', '" . $password . "', '" . date("Y-m-d") . "', NULL, '" . $phonenum . "');";
            $result = Sql::getInstance()->updateData($query);
            return $result;
        }

    }
?>