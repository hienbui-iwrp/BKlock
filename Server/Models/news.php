<?php
    include "../models/sql.php";

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
    }
?>