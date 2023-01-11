<script type="text/javascript">
  
  jQuery(document).ready(function() {
  
      function coptoclipboad(){
        
          var last_name ='Last Name: ' +  jQuery('input[name="last_name"]').val();           

          var first_name ='\nFirst Name: ' + jQuery('input[name="first_name"]').val();           

          var middle_name ='\nMiddle Name: ' + jQuery('input[name="middle_name"]').val();           

          var generation ='\nGeneration: ' + jQuery('input[name="generation"]').val();           

          var title ='\nTitle: ' +  jQuery('input[name="title"]').val();           

          var ssn_itin ='\nSSN/ITIN; ' +  jQuery('input[name="ssn_itin"]').val();         
 
          var tax_id_ein ='\nTax Id/EIN;' +  jQuery('input[name="tax_id_ein"]').val();           

          var office ='\nOffice: ' +  jQuery('input[name="office"]').val();           

          var address_1 ='\nAddress 1: ' +  jQuery('input[name="address_1"]').val();           

          var address_2 ='\nAddress 2: ' +  jQuery('input[name="address_2"]').val();          

          var address_3 ='\nAddress 3: ' +  jQuery('input[name="address_3"]').val();           

          var city ='\nCity: ' +  jQuery('input[name="city"]').val();          

          var state ='\nState: ' +  jQuery('input[name="state"]').val();          

          var zip ='\nZip: ' +  jQuery('input[name="zip"]').val();          

          var county ='\nCounty: ' +  jQuery('input[name="county"]').val();           

          var county ='\nCounty: ' +  jQuery('input[name="county"]').val();

          var phone ='\nPhone: ' +  jQuery('input[name="phone"]').val();

          var fax ='\nFax: ' +  jQuery('input[name="fax"]').val();

          var email ='\nE-mail: ' +  jQuery('input[name="email"]').val();

          var party_text ='\nParty Text: ' +  jQuery('input[name="party_text"]').val();

          var results =last_name+first_name+middle_name+generation+title+ssn_itin+tax_id_ein+office+address_1+address_2+address_3+city+state+zip+county+county+phone+fax+email+party_text;

          alert(results);

      }

      coptoclipboad();

});







// jQuery(document).ready(function() {
  
       
//          jQuery(".form_input_box").click(function () {
//                 var inputString = jQuery(".form_input_box").val();
//                 alert(inputString);
//             });


      
// });


// jQuery(document).ready(function() {       
//          var $inputs = jQuery('#basic_info :input');    
//          var values = {};
//          $inputs.each(function() {
//          values[this.name] = jQuery(this).val();
//     });      
// });

 
    
 


// jQuery('#basic_info').submit(function() {
//     // get all the inputs into an array.
//     var $inputs = jQuery('#basic_info :input');

//     // not sure if you wanted this, but I thought I'd add it.
//     // get an associative array of just the values.
//     var values = {};
//     $inputs.each(function() {
//         values[this.name] = jQuery(this).val();
//     });

// });

 
</script>


