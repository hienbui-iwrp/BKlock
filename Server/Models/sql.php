<?php
    function getData($query){
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "bklock";
        $conn = new mysqli($servername, $username, $password, $database);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $result = $conn->query($query);

        $conn->close();
        return $result;
    }

    function updateData($query){
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "bklock";
        $conn = new mysqli($servername, $username, $password, $database);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        if ($conn->query($query) === TRUE) {
            $conn->close();
            return true;
        } else {
            $conn->close();
            return false;
        }
    }
?>