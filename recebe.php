<?php

$local_server = "LAB02T-05\SQLEXPRESS";
$usuario_server = "sa";
$senha_server = "etesp";
$banco_de_dados = "PROJETO";
date_default_timezone_set('America/Sao_Paulo');

try{
	$pdo= new PDO("sqlsrv:server=$local_server;database=$banco_de_dados",$usuario_server,$senha_server);
   }
catch(Exception $erro){
   echo "ATENÇÃO - ERRO NA CONEXÃO: " . $erro->getMessage();
   die;
}

$tabela = "Cliente";
$tabela2 = "Orcamento";

try{
	/*$sql0 =  "SELECT MAX(idCliente) AS maior_valor FROM " .$tabela;
	$ponteiro = $pdo->prepare($sql0);
	$ponteiro->execute();
    $resultado = $ponteiro->fetchAll(PDO::FETCH_ASSOC);
	$v2 = array_map('intval',$resultado);
	$v1 = max($v2);
	$newid = ($v1+2);*/
	$newname = $_POST['infoname'];
	$newphone = $_POST['infotel'];
	$newmail = $_POST['infomail'];
	$newaddress = "";
	$newneighborhood = "";
	$newcity = $_POST['infocity'];
	if(isset($_POST['Escolha']) && ($newcity=="")){
		$newarea = $_POST['Escolha'];
	}else{
    	$newarea = "";
	}


	$sql = $pdo->prepare("INSERT INTO ".$tabela.
		 "(NomeCliente, TelCliente, EmailCliente, Endereco, Bairro, Cidade, Regiao)" . 
		 "VALUES (:nome, :telefone, :email, :endereco, :bairro, :cidade, :regiao);");
	
	//$sql->bindValue(":id", $newid);
	$sql->bindValue(":nome", $newname); 
    $sql->bindValue(":telefone", $newphone);
    $sql->bindValue(":email", $newmail);
	$sql->bindValue(":endereco", $newaddress);
	$sql->bindValue(":bairro", $newneighborhood);
	$sql->bindValue(":cidade", $newcity);
	$sql->bindValue(":regiao", $newarea);

	$sql->execute();

	/*$sql3 =  "SELECT MAX(idOrcamento) AS maior_valor FROM " .$tabela2;
	$ponteiro = $pdo->prepare($sql3);
	$ponteiro->execute();
    $resultado2 = $ponteiro->fetchAll(PDO::FETCH_ASSOC);
	$v4 = array_map('intval',$resultado2);
	$v3 = max($v4);
	$idbudget = ($v3+2);*/
	$newbudget = $_POST['infoarea'];
	if(isset($_POST['infodata'])){
		$newdata = $_POST['infodata'];
	}else{
    	$newdata = date("d-m-Y");
	}
	

	$sql2 = $pdo->prepare("INSERT INTO ".$tabela2.
		 "(Descricao, Dia)" . 
		 "VALUES (:descricao, :data);");
	
	//$sql2->bindValue(":id", $idbudget);
	$sql2->bindValue(":descricao", $newbudget); 
    $sql2->bindValue(":data", $newdata);

	$sql2->execute();
	header('Location: Sucesso.html');
	die;
}
catch (Exception $erro){
	echo "ATENÇÃO, erro na inclusão: " . 
	     $erro->getmessage();;
};
?>