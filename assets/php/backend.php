<?php
require_once("./ejecutor.php");
if(isset($_POST["iniciales"])){
    $_POST["iniciales"]=strtoupper($_POST["iniciales"]);
    $valido=false;
    $valido=(strlen($_POST["iniciales"]) >0 && strlen($_POST["iniciales"])<=4 );
    $valido=($valido)?preg_match("/[A-Z]{".strlen($_POST["iniciales"])."}/",$_POST["iniciales"]):$valido;
    if($valido){
        $ejecutor=new Ejecutor();
        $ejecutor->insertarCopo($_POST);
        echo json_encode($ejecutor->listarCopos());
    }
}
if(isset($_POST["nuevo"])){
    $ejecutor=new Ejecutor();
    echo json_encode($ejecutor->listarCopos());
}
?>