<?php
    include "../../models/sql.php";

    class Cart{

        public static function getCart($id){
            $query = "SELECT id, image, name, price, quantity, brand FROM `adds`, `product` WHERE productId = id AND customId = " . $id;
            $temp = Sql::getInstance()->getData($query);
            $temp_array = array();

            if($temp->num_rows >0){
                while($row = $temp->fetch_assoc()){
                    $temp_array[] = $row;
                }
            }
            
            return $temp_array;
        }

        public static function addCart($prod){
            $query = "INSERT INTO `adds` VALUES ('$prod->customId', '$prod->productId', '".date("Y-m-d")."', '".$prod->quantity."')";
            $temp = Sql::getInstance()->updateData($query);
            return $temp;
        }

        public static function updateCart($prod){
            $prods = $prod->product;
            $cusId = $prod->userId;
            $query = "";
            foreach($prods as $p){
                $query .= "UPDATE `adds` SET `quantity` = '".$p->quantity."' WHERE `adds`.`customId` = ".$cusId." AND `adds`.`productId` = ".$p->id.";";
            }
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