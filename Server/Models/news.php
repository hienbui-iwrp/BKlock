<?php
    include "../../Models/sql.php";

    class News{

        public static function getNews($id){
            $query = "SELECT * FROM `news` WHERE id = " . $id;
            $temp = Sql::getInstance()->getData($query);
            $temp_array = array();

            if($temp->num_rows >0){
                while($row = $temp->fetch_assoc()){
                    $temp_array[] = $row;
                }
            }
            
            return $temp_array;
        }

        public static function getAllNews(){
            $query = "SELECT * FROM `news`";
            $temp = Sql::getInstance()->getData($query);
            $temp_array = array();

            if($temp->num_rows >0){
                while($row = $temp->fetch_assoc()){
                    $temp_array[] = $row;
                }
            }
            
            return $temp_array;
        }

        public static function addNews($news){
            $query = "INSERT INTO `news`VALUES (NULL, '".$news->title."', '".$news->content."', '".date("Y-m-d")."', '".$news->view."', '".$news->like."', '".$news->adminId."'); ";
            $result = Sql::getInstance()->updateData($query);
            return $result;
        }

        public static function updateNews($news){
            $query = "UPDATE `news` SET `title` = '".$news->title."', `content` = '".$news->content."', `newDate` = '".date("Y-m-d")."', `view` = '".$news->view."', `liked` = '".$news->like."' WHERE `news`.`id` = ".$news->id."; ";
            $result = Sql::getInstance()->updateData($query);
            return $result;
        }

        public static function deleteNews($id){
            $query = "DELETE FROM `news` WHERE `news`.`id` = " . $id;
            $result = Sql::getInstance()->updateData($query);
            return $result;
        }
    }
?>