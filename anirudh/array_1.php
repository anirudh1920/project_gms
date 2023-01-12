<?php 

$colors = array("red","green","yellow","blue");



 ?>

 <select>
 	<option>Select Your Favourite Color</option>

 	<?php 
       
       foreach ($colors as $cols) 
       {

       	echo '<option>'.$cols.'</option>';
       	# code...
       }

 	 ?>
 </select>