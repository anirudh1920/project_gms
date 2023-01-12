<?php 

$arr = array(

array("Sr.N.","Name","City"),

array("1","ajay","Meerut"),

array("2","anirudh","Meerut"),
);

 ?>


 <table border='1' cellspacing="5" cellpadding="5">
 	
 	<?php 

        foreach ($arr as $tabs) {
        	echo "<tr>";
 

        	foreach ($tabs as $data) {

                      echo '<td>'.$data.'</td>';
        		# code...
        	}

        	echo '</tr>';
        	# code...
        }
 
 	 ?>

 </table>