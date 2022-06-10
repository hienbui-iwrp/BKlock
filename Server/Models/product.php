<?php
    include "../models/sql.php";

    class Product{

        public static function getNewProduct(){
            $query = "select * from product";
            $temp = Sql::getInstance()->getData($query);
            $temp_array = array();

            if($temp->num_rows >0){
                while($row = $temp->fetch_assoc()){
                    $temp_array[] = $row;
                }
            }
            
            return $temp_array;
        }

        public static function getFeaturedProduct(){
            $query = "select * from product";
            $temp = Sql::getInstance()->getData($query);
            $temp_array = array();

            if($temp->num_rows >0){
                while($row = $temp->fetch_assoc()){
                    $temp_array[] = $row;
                }
            }
            
            return $temp_array;
        }

        public static function getCount(){
            $query = "SELECT COUNT(*) AS C FROM `product`;";
            $temp = Sql::getInstance()->getData($query);
            if($temp->num_rows >0){
                $row = $temp->fetch_assoc();
                return (int)$row["C"];
            }
            return 0;
        }

        public static function getProductIndex($index){
            $query = "select * from product";
            $temp = Sql::getInstance()->getData($query);
            $temp_array = array();

            if($temp->num_rows >0){
                while($row = $temp->fetch_assoc()){
                    $temp_array[] = $row;
                }
            }
            
            return $temp_array;
        }

        public static function getOneProduct($id){
            $query = "select * from product where id = " . $id;
            $temp = Sql::getInstance()->getData($query);

            if($temp->num_rows >0){
                $row = $temp->fetch_assoc();
                return $row;
            }
            return new class{};
        }

        public static function addProduct($prod){

        }

    }
?>