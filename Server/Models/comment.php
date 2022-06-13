<?php
    include "../../models/sql.php";

    class Comment{

        public static function getCommentOfProduct($id){
            $query = "SELECT * FROM `comment` WHERE productid = " . $id;
            $temp = Sql::getInstance()->getData($query);
            $temp_array = array();

            if($temp->num_rows >0){
                while($row = $temp->fetch_assoc()){
                    $temp_array[] = $row;
                }
            }
            
            return $temp_array;
        }

        public static function postComment($cmt){
            $query = "INSERT INTO `comment` VALUES ('$cmt->content', '".date("Y-m-d")."', '$cmt->productId', '$cmt->userName');";
            $temp = Sql::getInstance()->updateData($query);
            return $temp;
        }

        public static function delete($cmt){
            $query = "DELETE FROM `comment` WHERE `id` = '$cmt->id' AND `productId` = '$cmt->productId';";
            $temp = Sql::getInstance()->updateData($query);
            return $temp;
        }
    }
?>