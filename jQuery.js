		jQuery(document).ready(function(){

			function copydata(){
    

          



			var bla = jQuery('#district_attorney').val();
		    var text = jQuery('#editor_chepter').val();
		    var con = jQuery('#is_consumer_debt').val();
		    var bus = jQuery('#is_business_debt').val();
		    var sign = jQuery('#include_signature').val();
		    var dis = jQuery('#district_name').val();

		    var value1 = jQuery('.input-group').val();

		 
		   
		   var firstname = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IxLkZpcnN0IG5hbWU="]').val();
		   var middlename = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IxLk1pZGRsZSBuYW1l"]').val();
		   var lastname = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IxLkxhc3QgbmFtZQ=="]').val();
		   var suff =  jQuery('select[name="Rm9ybTEwMS1EZWJ0b3IxLlN1ZmZpeCBTciBKciBJSSBJSUk="]').val(); 



				 var keys = ['bla', 'text', 'con','bus','sign','dis','value1','firstname','middlename','lastname'];
         var valued = [bla, text,con,bus,sign,dis,value1,firstname,middlename,lastname];
         var obj = {};
		     for(var i = 0; i < keys.length; i++){
         obj[keys[i]] = valued[i];
         }
     




		   var fname = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IyLkZpcnN0IG5hbWU="]').val();
		   var m_name = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IyLk1pZGRsZSBuYW1lXzI="]').val();
		   var l_name = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IyLkxhc3QgbmFtZQ=="]').val();
		   var suf = jQuery('select[name="Rm9ybTEwMS1TdWZmaXggU3IgSnIgSUkgSUlJXzI="]').val(); 

		   var nam = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IxLkZpcnN0IG5hbWVfMw=="]').val();

		   var mid_name = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IxLk1pZGRsZSBuYW1lXzM="]').val();
		   var la_name = jQuery('input[name="Rm9ybTEwMS1fRGVidG9yMS5MYXN0IG5hbWVfMw=="]').val();
		   var sel = jQuery('select[name="Rm9ybTEwMS1zdWZmaXhfaW44eWVhcnNfMw=="]').val();
		   var busi = jQuery('input[name="Rm9ybTEwMS1CdXNpbmVzcyBOYW1lLjAx"]').val();
		   var fn = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IxLk1pZGRsZSBuYW1lXzU="]').val();
		   var selec = jQuery('select[name="Rm9ybTEwMS1zdWZmaXhfaW44eWVhcnNfNQ=="]').val();
		   var bn = jQuery('input[name="Rm9ybTEwMS1CdXNpbmVzcyBOYW1lLjAx"]').val();
		   
		   var nn = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IyLkZpcnN0IG5hbWVfNA=="]').val();
		   var mm = jQuery('input[name="RGVidG9yMi5NaWRkbGUgbmFtZV80"]').val();
		   var last_name = jQuery('input[name="Rm9ybTEwMS1fRGVidG9yMi5MYXN0IG5hbWVfNA=="]').val();

		   var select = jQuery('select[name="Rm9ybTEwMS1kZWJ0b3IyX3N1ZmZpeF9pbjh5ZWFyc180"]').val();
		   var name_bus = jQuery('input[name="Rm9ybTEwMS1CdXNpbmVzcyBOYW1lLjAy"]').val();
		   var na_bus = jQuery('input[name="Rm9ybTEwMS1CdXNpbmVzcyBOYW1lLjA0"]').val();
		   var fa_na = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IyLkZpcnN0IG5hbWVfNg=="]').val();
		   var nam1 = jQuery('input[name="RGVidG9yMi5NaWRkbGUgbmFtZV82"]').val();
		   var l_name1 = jQuery('input[name="Rm9ybTEwMS1fRGVidG9yMi5MYXN0IG5hbWVfNg=="]').val();
		   var suf1 = jQuery('select[name="Rm9ybTEwMS1kZWJ0b3IyX3N1ZmZpeF9pbjh5ZWFyc182"]').val();
		   var buss1 = jQuery('input[name="Rm9ybTEwMS1CdXNpbmVzcyBOYW1lLjAy"]').val();
	       var buss2 = jQuery('input[name="Rm9ybTEwMS1CdXNpbmVzcyBOYW1lLjA0"]').val();
	       var no = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IxLlNTTnVt"]').val();
	       var no1 = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IxIFRheCBQYXllciBJRE51bQ=="]').val();
	       
	       var no2 = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IyIFNTTnVt"]').val();
	       var no3 = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IyLlRheCBQYXllciBJRE51bQ=="]').val();
	       var no4 = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IxLkJ1c2luZXNzIG5hbWU="]').val();
	       var no5 = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IyLkJ1c2luZXNzIG5hbWU="]').val();
	       var no6 = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IyLkJ1c2luZXNzIG5hbWVfNA=="]').val();
	      var no7 = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IxLlN0cmVldA=="]').val();
	      var no8 = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IxLkNpdHk="]').val();   
	      var no9 = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IxLlN0YXRl"]').val(); 
	      var no10 = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IxLlpJUCBDb2Rl"]').val();
	      var no11 = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IxLkNvdW50eQ=="]').val();
	      var no12 = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IyLlN0cmVldA==]').val();
	      var no13 = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IyLkNpdHk="]').val();
	      var no14 = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IyLlN0YXRl"]').val();
	      var no15 = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IyLlpJUA=="]').val();
	      var no16 = jQuery('input[name="Rm9ybTEwMS1Db3VudHlfMg=="]').val();
	      var no17=jQuery('input[name="Rm9ybTEwMS1DaGVjayBCb3gx"]').val();
	      var no18 = jQuery('input[name="Rm9ybTEwMS1DaGVjayBCb3g3"]').val();
	      var no19 = jQuery('input[name="Rm9ybTEwMS1DaGVjayBCb3g4"]').val();
	      var yes= jQuery('input[name="Rm9ybTEwMS1DaGVjayBCb3g5"]').val();
	      var resi = jQuery('input[name="Rm9ybTEwMS1DaGVjayBCb3gxMQ=="]').val();
	      var busin = jQuery('input[name="Rm9ybTEwMS1DaGVjayBCb3gxMg=="]').val();
	      var bus1 = jQuery('input[name="Rm9ybTEwMS1OYW1lIG9mIGJ1c2luZXNzIGlmIGFueQ=="]').val();
	      var ba = jQuery('input[name="Rm9ybTEwMS1CdXNpbmVzcyBTdHJlZXQgYWRkcmVzcw=="]').val();
	      var add = jQuery('input[name="Rm9ybTEwMS1CdXNpbmVzcyBDaXR5"]').val();
	      var st = jQuery('input[name="Rm9ybTEwMS1CdXNpbmVzcyBTdGF0ZQ=="]').val();
	      var zip_code = jQuery('input[name="Rm9ybTEwMS1aSVAgQ29kZV81"]').val();
	      var none = jQuery('input[name="Rm9ybTEwMS1DaGVjayBCb3gxMw=="]').val();
	      var opt = jQuery('input[name="Rm9ybTEwMS1DaGVjayBCb3gxNA=="]').val();
	      var ye = jQuery('input[name="Rm9ybTEwMS1DaGVjayBCb3gxNQ=="]').val();
	      var haza = jQuery('input[name="Rm9ybTEwMS1XaGF0IGlzIHRoZSBoYXphcmQx"]').val();
	      var imm = jQuery('input[name="Rm9ybTEwMS1JZiBpbW1lZGlhdGUgYXR0ZW50aW9uIGlzIG5lZWRlZCB3aHkgaXMgaXQgbmVlZGVkMQ=="]').val();
	      var ha = jQuery('input[name="Rm9ybTEwMS1TdHJlZXRfNg=="]').val();
	      var rep = jQuery('input[name="Rm9ybTEwMS1DaXR5XzI="]').val();
	      var st = jQuery('input[name="Rm9ybTEwMS1TdGF0ZV82"]').val();
	      var zip = jQuery('input[name="Rm9ybTEwMS1aSVAgQ29kZV82"]').val();
	      var rev = jQuery('input[name="Rm9ybTEwMS1DaGVjayBCb3gxNg=="]').val();
	      var check = jQuery('input[name="Rm9ybTEwMS1DaGVjayBCb3gxOA=="]').val();
	      var check1 = jQuery('input[name="Rm9ybTEwMS1DaGVjayBCb3gxOQ=="]').val();
	 
	      var check2 = jQuery('input[name="Rm9ybTEwMS1DaGVjayBCb3gyMQ=="]').val();      //

	         var check3 = jQuery('input[name="Rm9ybTEwMS1DaGVjayBCb3gyMw=="]').val() ;  
	         var sign = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IxLnNpZ25hdHVyZQ=="]').val() ;
	         var sign2 = jQuery('input[name="Rm9ybTEwMS1EZWJ0b3IyLnNpZ25hdHVyZQ=="]').val() ;
	      //var exe =    jQuery('input[name="Rm9ybTEwMS1FeGVjdXRlZCBvbg=="]').val() ;
	         var a = 'date\n' +    jQuery('input[name="Rm9ybTEwMS1FeGVjdXRlZCBvbg=="]').val() ;
           var sig = 'For your attorney, if you are represented by one If you are not represented by an attorney, you do not need to file this page.\n' +    jQuery('input[name="Rm9ybTEwMS1BdHRvcm5leS5TaWc="]').val() ;

	         var date = 'For your attorney, if you are represented by one If you are not represented by an attorney, you do not need to file this page.\n' +    jQuery('input[name="Rm9ybTEwMS1BdHRvcm5leS5EYXRlIHNpZ25lZA=="]').val() ;
             
             var print_name = 'For your attorney, if you are represented by one If you are not represented by an attorney, you do not need to file this page.\n' +    jQuery('input[name="Rm9ybTEwMS1BdHRvcm5leS5QcmludGVkIG5hbWU="]').val() ;
             var firm_name = 'For your attorney, if you are represented by one If you are not represented by an attorney, you do not need to file this page.\n' +    jQuery('input[name="Rm9ybTEwMS1BdHRvcm5leS5GaXJtIG5hbWU="]').val() ;
             var address = 'For your attorney, if you are represented by one If you are not represented by an attorney, you do not need to file this page.\n' +    jQuery('input[name="Rm9ybTEwMS1BdHRvcm5leS5TdHJlZXQgYWRkcmVzc18y"]').val() ;
             var address1 = 'For your attorney, if you are represented by one If you are not represented by an attorney, you do not need to file this page.\n' +    jQuery('input[name="Rm9ybTEwMS1BdHRvcm5leS5TdHJlZXQgYWRkcmVzc18z"]').val() ;
             var city = 'For your attorney, if you are represented by one If you are not represented by an attorney, you do not need to file this page.\n' +    jQuery('input[name="Rm9ybTEwMS1BdHRvcm5leS5DaXR5"]').val() ;
             var stt = 'For your attorney, if you are represented by one If you are not represented by an attorney, you do not need to file this page.\n' +    jQuery('input[name="Rm9ybTEwMS1BdHRvcm5leS5TdGF0ZQ=="]').val() ;
             var zip = 'For your attorney, if you are represented by one If you are not represented by an attorney, you do not need to file this page.\n' +    jQuery('input[name="Rm9ybTEwMS1BdHRvcm5leS5aaXA="]').val() ;
             var contact = 'For your attorney, if you are represented by one If you are not represented by an attorney, you do not need to file this page.\n' +    jQuery('input[name="Rm9ybTEwMS1BdHRvcm5leS5waG9uZQ=="]').val() ;
             var email = 'For your attorney, if you are represented by one If you are not represented by an attorney, you do not need to file this page.\n' +    jQuery('input[name="Rm9ybTEwMS1BdHRvcm5leS5FbWFpbCBhZGRyZXNz"]').val() ;
             var bar_number = 'For your attorney, if you are represented by one If you are not represented by an attorney, you do not need to file this page.\n' +    jQuery('input[name="Rm9ybTEwMS1BdHRvcm5leS5CYXIgbnVtYmVy"]').val() ;
             var st = 'For your attorney, if you are represented by one If you are not represented by an attorney, you do not need to file this page.\n' +    jQuery('input[name="Rm9ybTEwMS1BdHRvcm5leS5CYXIgU3RhdGU="]').val() ;
             var select1 = 'United States Bankruptcy Court for the\n' +    jQuery('select[name="QmFua3J1cHRjeSBEaXN0cmljdCBJbmZvcm1hdGlvbi0xMDZTVU0="]').val() ;
             var sche = ' 1a. Copy line 55, Total real estate, from Schedule A/B\n' +   jQuery('#sum_total_real_estate').val();
             var sche1 = ' 1b. Copy line 62, Total personal property, from Schedule A/B \n' +   jQuery('#sum_total_personal_property').val();
             var sche2 = ' 1c. Copy line 63, Total of all property on Schedule A/B \n' +   jQuery('#sum_total_all_property').val();
             var sche3 = '2a. Copy the total you listed in Column A, Amount of claim, at the bottom of the last page of Part 1 of Schedule D \n' +   jQuery('#sum_d_Amount_of_claim').val();
             var sche4 = '3a. Copy the total claims from Part 1 (priority unsecured claims) from line 6e of Schedule E/F \n' +   jQuery('#sum_e_f_total_claims_part1').val();
             
             var sche5 = '3b. Copy the total claims from Part 2 (nonpriority unsecured claims) from line 6j of Schedule E/F \n' +   jQuery('#sum_e_f_total_claims_part2').val();
             
             var sche6 = 'Your total liabilities \n' +   jQuery('#final_sum_e_f_total_claims_part2').val();
             var sche7 = 'Copy your combined monthly income from line 12 of Schedule I \n' +   jQuery('#sum_combined_monthly_income').val();
             var sche8 = 'Copy your monthly expenses from line 22c of Schedule J \n' +   jQuery('#sum_monthly_expenses').val();
             
             var sche9 = 'Question : Are you filing for bankruptcy under Chapters 7, 11, or 13? \n' + jQuery('input[name="Y2hlY2s2IzAtMTA2U1VN"]').val() ;
             var sche10 = 'Question : What kind of debt do you have? \n' + jQuery('input[name="Y2hlY2s3LTEwNlNVTQ=="]').val() ;
             var sche11 = 'Question :  From the Statement of Your Current Monthly Income:  \n' + jQuery('#sum_current_monthly_income').val() ;
             var sche12 = 'Question :  9a.Domestic support obligations (Copy line 6a.)  \n' + jQuery('#sum_Domestic_support_obligations').val() ;
             var sche13 = 'Question :  9b.Taxes and certain other debts you owe the government. (Copy line 6b.)  \n' + jQuery('#sum_ef_Taxes_and_certain').val() ;
             var sche14 = 'Question :  9c.Claims for death or personal injury while you were intoxicated. (Copy line 6c)  \n' + jQuery('#sum_ef_claims_for_death').val() ;
             var sche15 = 'Question :  9d.Student loans. (Copy line 6f.)  \n' + jQuery('#sum_ef_students_loan').val() ;
             var sche16 = 'Question :  9e.Obligations arising out of a separation agreement or divorce that you did not report as priority claims. (Copy line 6g.)  \n' + jQuery('#sum_ef_obligation_arising').val() ;
             var sche17 = 'Question : 9f.Debts to pension or profit-sharing plans, and other similar debts. (Copy line 6h.)  \n' + jQuery('#sum_ef_debts_pension').val() ;
             var sche18 = 'Question :  9g.Total. Add lines 9a through 9f. \n' + jQuery('#total_ef').val() ;
             
             var se = 'Question :  United States Bankruptcy Court for the \n' + jQuery('select[name="QmFua3J1cHRjeSBEaXN0cmljdCBJbmZvcm1hdGlvbg=="]').val() ;
             
             var se1 = 'Question :  Do you own or have any legal or equitable interest in any residence, building, land, or similar property? \n' + jQuery('input[name="Q2hlY2sgMiMwLTEwNkFC"]').val() ;
             var se2 = 'City \n' + jQuery('input[name="Q2l0eS0xMDZBQg=="]').val() ;
             var se3 = 'State \n' + jQuery('input[name="U3RhdGUtMTA2QUI="]').val() ;
             var se4 = 'ZIP Code \n' + jQuery('input[name="WklQIENvZGUtMTA2QUI="]').val() ;
             

             var se5 = 'What is the property? Check all that appl \n' + jQuery('input[name="U2luZ2xlZmFtaWx5IGhvbWUtMTA2QUI="]').val() ;
             var se6 = 'Current value of the entire property? \n' + jQuery('input[name="T3RoZXIzXzItMTA2QUI="]').val() ;
            
             var se8 =  'Current value of the portion you own? \n' + jQuery('input[name="T3RoZXI0XzMtMTA2QUI="]').val() ;
             var se9 =  'Current value of the portion you own? \n' + jQuery('select[name="dGhlIGVudGlyZXRpZXMgb3IgYSBsaWZlIGVzdGF0ZSBpZiBrbm93bi0xMDZBQg=="]').val() ;
             var se10 =  'Who has an interest in the property? Check one. \n' + jQuery('inputnput[name="V2hvIGhhcyBpbnRlcmVzdCBpbiBwcm9wZXJ0eSMwLTEwNkFC"]').val() ;
             var se11 =  'What is the property? Check all that apply \n' + jQuery('input[name="U2luZ2xlZmFtaWx5IGhvbWVfMi0xMDZBQg=="]').val() ;
             
            var se12 =  'Street address, if available, or other description \n' + jQuery('input[name="MTItMTA2QUI="]').val() ;
            var se13 =  'City \n' + jQuery('input[name="Q2l0eV8yLTEwNkFC"]').val() ;
            var se14 =  'State \n' + jQuery('input[name="U3RhdGVfMi0xMDZBQg=="]').val() ;
            var se15 =  'County \n' + jQuery('input[name="Q291bnR5XzItMTA2QUI="]').val() ;
            var se16 =  'Add the dollar value of the portion you own for all of your entries from Part 1, including any entries for pages you have attached for Part 1. Write that number here. \n' + jQuery('input[name="DollarAmt_13-106AB"]').val() ;
            var se17 =  ' Cars, vans, trucks, tractors, sport utility vehicles, motorcycles. \n' + jQuery('input[name="Q2hlY2sgMyMwLTEwNkFC"]').val() ;
            var se18 =  'Make: \n' + jQuery('input[name="MyAxLTEwNkFC"]').val() ;
            var se19 =  'Model: \n' + jQuery('input[name="MyAyLTEwNkFC"]').val() ;     
            var se20 =  'Year:  \n' + jQuery('input[name="MyAzLTEwNkFC"]').val() ; 
            var se21 =  'Approximate mileage: \n' + jQuery('input[name="MyA0LTEwNkFC"]').val() ; 
            var se22 =  'Other information: \n' + jQuery('textarea[name="T3RoZXIgaW5mb3JtYXRpb24tMTA2QUI="]').val() ; 



            var se23 =  'Make: \n' + jQuery('input[name="SWYgeW91IG93biBvciBoYXZlIG1vcmUgdGhhbiBvbmUgZGVzY3JpYmUgaGVyZS0xMDZBQg=="]').val() ;
            var se24 =  'Model: \n' + jQuery('input[name="MV8yLTEwNkFC"]').val() ;     
            var se25 =  'Year:  \n' + jQuery('input[name="Ml8yLTEwNkFC"]').val() ; 
            var se26 =  'Approximate mileage: \n' + jQuery('input[name="QXBwcm94aW1hdGUgbWlsZWFnZV8yLTEwNkFC"]').val() ; 
            var se27 =  'Other information: \n' + jQuery('textarea[name="T3RoZXIgaW5mb3JtYXRpb25fMi0xMDZBQg=="]').val() ; 
 	          


 	          var se28 =  'Who has an interest in the property? Check one \n' + jQuery('input[name="V2hvIGhhcyBpbnRlcmVzdCBpbiBwcm9wZXJ0eSA1IzAtMTA2QUI="]').val() ; 
 	          
 	          var se29 =  'Current value of the entire property? \n' + jQuery('input[name="Q3VyVmFsXzE2LTEwNkFC"]').val() ; 
 	          
 	          var se30 =  'Current value of the portion you own? \n' + jQuery('input[name="Q3VyVmFsXzE3LTEwNkFC"]').val() ; 
 	          var se31 =  'Watercraft, aircraft, motor homes, ATVs and other recreational vehicles, other vehicles, and accessories  Examples: Boats, trailers, motors, personal watercraft, fishing vessels, snowmobiles, motorcycle accessories \n' + jQuery('input[name="RXhhbXBsZXMgQm9hdHMgdHJhaWxlcnMgbW90b3JzIHBlcnNvbmFsIHdhdGVyY3JhZnQgZmlzaGluZyB2ZXNzZWxzIHNub3dtb2JpbGVzIG1vdG9yY3ljbGUgYWNjZXNzb3JpZXMtMTA2QUI="]').val() ; 
 	          var se32 =  'Add the dollar value of the portion you own for all of your entries from Part 2, including any entries for pages you have attached for Part 2. Write that number here \n' + jQuery('input[name="CURV_26-106AB"]').val() ; 
 	          
 	          var se33 =  ' Household goods and furnishings \n' + jQuery('input[name="NiBjaGVjayMwLTEwNkFC"]').val() ; 
 	          
 	          var se34 =  ' My Client filled this all in for me all by themselves123456789abcdefghijklmnopqrstuvwxyz123456789abcdefghijklmnopqrstuvwxyz123456789 \n' + jQuery('input[name="NiBjaGVjayMwLTEwNkFC"]').val() ; 
 	        
 	          alert(se33);
	        
	        }
	      
	});





		 