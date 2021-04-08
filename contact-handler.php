<?php

if(isset($_POST['submit'])){
    $firstName = $_POST['first name'];
    $lastName = $_POST['last name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo ="contact@aileenxin.com";
    $headers ="From: ".$mailFrom;
    $txt ="You have received an email from ".$firstName + $lastName.".\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location:contact.html");
}

?>