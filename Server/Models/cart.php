<?php
    include "../../models/sql.php";

    class Cart{

        public static function getCart($id){
            $query = "SELECT * FROM `adds` WHERE customId = " . $id;
            $temp = Sql::getInstance()->getData($query);
            $temp_array = array();

            if($temp->num_rows >0){
                while($row = $temp->fetch_assoc()){
                    $temp_array[] = $row;
                }
            }
            
            return $temp_array;
        }

        public static function updateCart($prod){
            $query = "UPDATE `adds` SET `quantity` = '".$prod->quantity."' WHERE `adds`.`customId` = ".$prod->customId." AND `adds`.`productId` = ".$prod->productId.";";
            $temp = Sql::getInstance()->updateData($query);
            return $temp;
        }

        
        public static function deleteCart($prod){
            $query = "DELETE FROM `adds` WHERE `adds`.`customId` = ".$prod->customId." AND `adds`.`productId` = ".$prod->productId.";";
            $temp = Sql::getInstance()->updateData($query);
            return $temp;
        }
    }
?>