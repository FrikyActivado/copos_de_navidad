<?php 

class conexionBD{
    
	private $servidor="";
	private $nombreDeUsuario="";
	private $contrasena="";
	private $nombreDeBD="";
	private $conexion="";

	function __construct($server,$userName, $password, $nameDB)
	{
	 $this->servidor= $server;
	 $this->nombreDeUsuario=$userName;
	 $this->contrasena=$password;
	 $this->nombreDeBD=$nameDB;
	}

	public function conectar(){
		/*Tuve que comenzar a usar PDO porque funio no tenia el driver para msqli_fetch_all()*/
     // $this->conexion = mysqli_connect($this->servidor,$this->nombreDeUsuario,$this->contrasena,$this->nombreDeBD) or die(false);
		$this->conexion=new PDO("mysql:host=$this->servidor; dbname=$this->nombreDeBD;charset=utf8mb4","$this->nombreDeUsuario","$this->contrasena") or die(false);
		return $this->conexion;
	}

	public function desconectar(){
		//mysqli_close($this->conexion);
		$this->conexion=null;
	}

}


?>