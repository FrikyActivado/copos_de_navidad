<?php

use JetBrains\PhpStorm\Internal\ReturnTypeContract;

require_once("./conexion.php");

class Ejecutor{
    private $isOK;
    private $conexionNueva;

    function __construct()
    {
        $this->isOK=true;
    }

    function abrirConexion(){
       $this->conexionNueva=new conexionBD("server","user","pass","bd");
       $this->isOK=($this->conexionNueva->conectar())?true:false;
       if ($this->isOK) {
           $this->conexionNueva->desconectar();
       }
       return ($this->isOK)?$this->conexionNueva->conectar():false; 
    }

    function ejecutarSQL($sql,$parametros = []){
      //ejecuta una sentencia sql si la sentencia retorna algo se envia como array asoc de lo contrario retorna un false.
        if($this->isOK){
          $resultado=$this->abrirConexion()->prepare($sql);
          $resultado->execute(array_Values($parametros));
          $array=(str_contains($sql,"SELECT"))?$resultado->fetchAll(PDO::FETCH_ASSOC):null;
          $this->conexionNueva->desconectar();
        }
       return (is_null($array))?false:$array;
    }
    
/* INSERT */
    function insertarCopo($datosCopo){
        $sql="INSERT INTO coposdenieve (Iniciales,color) VALUES (?,?)";
        $this->ejecutarSQL($sql,$datosCopo);
    }

    

/* SELECT */
    function listarCopos(){
      $sql="SELECT * FROM  coposdenieve ";
      $respuesta=$this->ejecutarSQL($sql);
      return $respuesta;
    }


   
    
       
/* UPDATE */
}

?>