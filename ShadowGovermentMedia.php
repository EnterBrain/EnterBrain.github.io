<?
$uid=urldecode($_SERVER['QUERY_STRING']);
$fp=fopen("log.txt","a"); 
fputs($fp,"$uid\n");
fclose($fp);
?>