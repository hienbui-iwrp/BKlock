<?php
    include "../../models/sql.php";

    class Account{

        public static function login($user){
            $query = "SELECT * FROM customer WHERE userName = '".$user->userName."' and password = '".$user->password."'";
            $result = Sql::getInstance()->getData($query);
            if ($result->num_rows > 0){
                return true;
            } else {
                return false;
            }
        }

        public static function signup($user){
            $query = "INSERT INTO `customer`(`userName`, `password`, `bDate`, `phoneNum`) VALUES ('" . $user->userName . "', '" . $user->password . "', '" . date("Y-m-d") . "', '" . $user->phoneNum . "');";
            $result = Sql::getInstance()->updateData($query);
            return $result;
        }

        public static function update($user){
            $query = "UPDATE `customer` SET `phoneNum` = '".$user->phoneNum."', `fullName` = '".$user->fullName."', `address` = '".$user->address."', `password` = '".$user->password."' WHERE `customer`.`id` = ".$user->id."; ";
            $result = Sql::getInstance()->updateData($query);
            return $result;
        }
    }
?>