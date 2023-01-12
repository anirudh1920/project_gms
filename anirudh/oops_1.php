<?php 
class A {

	function fun1()
	{
		echo "hello";
	}
}

class B extends class A 
{
	echo "hii";
}

$obj = new class A();
 ?>