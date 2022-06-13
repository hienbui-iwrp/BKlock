<?php
include "../../Models/sql.php";

class Product
{

    public static function getNewProduct()
    {
        $query = "select * from product";
        $temp = Sql::getInstance()->getData($query);
        $temp_array = array();

        if ($temp->num_rows > 0) {
            while ($row = $temp->fetch_assoc()) {
                $temp_array[] = $row;
            }
        }

        return $temp_array;
    }

    public static function getFeaturedProduct()
    {
        $query = "select * from product";
        $temp = Sql::getInstance()->getData($query);
        $temp_array = array();

        if ($temp->num_rows > 0) {
            while ($row = $temp->fetch_assoc()) {
                $temp_array[] = $row;
            }
        }

        return $temp_array;
    }

    public static function getCount()
    {
        $query = "SELECT COUNT(*) AS C FROM `product`;";
        $temp = Sql::getInstance()->getData($query);
        if ($temp->num_rows > 0) {
            $row = $temp->fetch_assoc();
            return (int)$row["C"];
        }
        return 0;
    }

    public static function getProductIndex($index)
    {
        $query = "select * from product";
        $temp = Sql::getInstance()->getData($query);
        $temp_array = array();

        if ($temp->num_rows > 0) {
            while ($row = $temp->fetch_assoc()) {
                $temp_array[] = $row;
            }
        }

        return $temp_array;
    }

    public static function getOneProduct($id)
    {
        $query = "select * from product where id = " . $id;
        $temp = Sql::getInstance()->getData($query);

        if ($temp->num_rows > 0) {
            $row = $temp->fetch_assoc();
            return $row;
        }
        return new class
        {
        };
    }

    public static function filterProduct($body)
    {
        $prices = $body->price;
        $brands = $body->brand;
        $types = $body->sex;
        $categories = $body->category;

        $query = "select * from product ";
        if (count($prices) != 0 || count($brands) != 0 || count($types) != 0 || count($categories) != 0) {
            $query .= "where ";
            // filter price
            $first = true;
            foreach ($prices as $price) {
                if ($first) {
                    $first = false;
                    $query .= "(";
                    switch ($price) {
                        case 0:
                            $query .= "price < 1000000 ";
                            break;
                        case 1:
                            $query .= " (price>=1000000 and price<2000000) ";
                            break;
                        case 2:
                            $query .= " (price>=2000000 and price<3000000) ";
                            break;
                        case 3:
                            $query .= " (price>=3000000 and price<5000000) ";
                            break;
                        case 4:
                            $query .= " (price>=5000000 and price<10000000) ";
                            break;
                        case 5:
                            $query .= " price>=10000000 ";
                            break;
                    }
                } else {
                    switch ($price) {
                        case 0:
                            $query .= " or price < 1000000 ";
                            break;
                        case 1:
                            $query .= " or (price>=1000000 and price<2000000) ";
                            break;
                        case 2:
                            $query .= " or (price>=2000000 and price<3000000) ";
                            break;
                        case 3:
                            $query .= " or (price>=3000000 and price<5000000) ";
                            break;
                        case 4:
                            $query .= " or (price>=5000000 and price<10000000) ";
                            break;
                        case 5:
                            $query .= " or price>=10000000 ";
                            break;
                    }
                }
            }
            $query = count($prices) > 0 ? $query . ')' : $query;

            // filter branchs
            $first = true;
            foreach ($brands as $brand) {
                if ($first) {
                    $first = false;
                    $query .= $query[strlen($query) - 1] == ')' ? " and " : "";
                    $query .= "(";
                    $query .= " brand  = '" . $brand . "' ";
                } else {
                    $query .= " or brand  = '" . $brand . "' ";
                }
            }
            $query = count($brands) > 0 ? $query . ')' : $query;


            // filter type
            $first = true;
            foreach ($types as $type) {
                if ($first) {
                    $first = false;
                    $query .= $query[strlen($query) - 1] == ')' ? " and " : "";
                    $query .= "(";
                    $query .= " sex  = '" . $type . "' ";
                } else {
                    $query .= " or sex  = '" . $type . "' ";
                }
            }
            $query = count($types) > 0 ? $query . ')' : $query;

            // filter category
            $first = true;
            foreach ($categories as $category) {
                if ($first) {
                    $first = false;
                    $query .= $query[strlen($query) - 1] == ')' ? " and " : "";
                    $query .= "(";
                    $query .= " category  = '" . $category . "' ";
                } else {
                    $query .= " or category  = '" . $category . "' ";
                }
            }
            $query = count($categories) > 0 ? $query . ')' : $query;
        }

        $temp = Sql::getInstance()->getData($query);
        $temp_array = array();

        if ($temp->num_rows > 0) {
            while ($row = $temp->fetch_assoc()) {
                $temp_array[] = $row;
            }
        }
        return $temp_array;
    }

    public static function addProduct($prod)
    {
        $query = "INSERT INTO `product` VALUES ('" . $prod->name . "', '" . $prod->image . "', '" . $prod->descript . "', '" . $prod->brand . "', '" . $prod->category  . "', '" . $prod->sex. "', " . $prod->price . ")";
        $result = Sql::getInstance()->updateData($query);
        return $result;
    }

    public static function updateProduct($prod)
    {
        $query = "UPDATE `product` SET `price` = '" . $prod->price . "', `name` = '" . $prod->name . "', `image` = '" . $prod->image . "', `brand` = '" . $prod->brand . "', `category` = '" . $prod->category . "', `sex` = '$prod->sex', `descript` = '$prod->descript' WHERE `product`.`id` = " . $prod->id . "; ";
        $result = Sql::getInstance()->updateData($query);
        return $result;
    }

    public static function deleteProduct($id)
    {
        $query = "DELETE FROM `product` WHERE `product`.`id` = " . $id;
        $result = Sql::getInstance()->updateData($query);
        return $result;
    }

    public static function searchProduct($str)
    {
        $query = "Select * FROM `product` WHERE name like '%" . $str . "%'";
        $temp = Sql::getInstance()->getData($query);
        $temp_array = array();

        if ($temp->num_rows > 0) {
            while ($row = $temp->fetch_assoc()) {
                $temp_array[] = $row;
            }
        }
        return $temp_array;
    }
}
