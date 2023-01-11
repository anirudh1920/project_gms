 jQuery(document).ready(function() {
  
      function debtor_info(){
        
          var last_name ='Last Name: ' +  jQuery('input[name="last_name"]').val();           

          var first_name ='First Name: ' + jQuery('input[name="first_name"]').val();           

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

          var dummy = $('<input>').val(results).appendTo('body').select()
          document.execCommand('copy') 

      }



        function summary_of_schedule(){
        
          var schedule_ab_real_estate ='Schedule A/B - Total Real Estate: ' +  jQuery('input[name="schedule_ab_real_estate"]').val();

          var schedule_ab_personal_property ='\nSchedule A/B - Total Personal Property: ' +  jQuery('input[name="schedule_ab_personal_property"]').val(); 

          var schedule_d_secured_claims ='\nSchedule D - Total Secured Claims: ' +  jQuery('input[name="schedule_d_secured_claims"]').val();    

          var schedule_ef_priority_unsecured_claims ='\nSchedule E/F - Total Priority Unsecured Claims: ' +  jQuery('input[name="schedule_ef_priority_unsecured_claims"]').val(); 

          var schedule_ef_nonpriority_unsecured_claims ='\nSchedule E/F - Total Nonpriority Unsecured Claims: ' +  jQuery('input[name="schedule_ef_nonpriority_unsecured_claims"]').val(); 

          var schedule_i_monthly_income ='\nSchedule I - Monthly Income: ' +  jQuery('input[name="schedule_i_monthly_income"]').val();

          var schedule_j_monthly_expense ='\nSchedule J - Monthly Expenses: ' +  jQuery('input[name="schedule_j_monthly_expense"]').val(); 

          var current_monthly_expense ='\nCurrent Monthly Income (Official Form 122A-1, 122B or 122C-1): ' +  jQuery('input[name="current_monthly_expense"]').val();    

          var nondischargable_debt ='\nTotal Nondischargable Debt (Official Form 106Sum, 9g): ' +  jQuery('input[name="nondischargable_debt"]').val();     

          var dischargable_debt ='\nTotal Dischargeable Debt (Computed): ' +  jQuery('input[name="dischargable_debt"]').val();   

          var results=schedule_ab_real_estate+schedule_ab_personal_property+schedule_d_secured_claims+schedule_ef_priority_unsecured_claims+schedule_ef_nonpriority_unsecured_claims+schedule_i_monthly_income+schedule_j_monthly_expense+current_monthly_expense+nondischargable_debt+dischargable_debt;
          
          var dummy = $('<input>').val(results).appendTo('body').select()
          document.execCommand('copy') 

      }


       function means_test_information(){
        
          var schedule_i_line2_debtor ='Schedule I line 2: Monthly gross wages, salary, and commission\nDebtor: ' +  jQuery('input[name="schedule_i_line2_debtor"]').val();

          var schedule_i_line2_spouse ='\nSpouse: ' +  jQuery('input[name="schedule_i_line2_spouse"]').val(); 

          var line8_operating_expenses ='\Line 8: Housing and utilities; insurance and operating expenses ' +  jQuery('input[name="line8_operating_expenses"]').val();    

          var schedule_i_line6_debtor ='\nSchedule I line 6: Subtotal of payroll deductions\nDebtor: ' +  jQuery('input[name="schedule_i_line6_debtor"]').val(); 

          var schedule_i_line6_spouse ='\nSpouse: ' +  jQuery('input[name="schedule_i_line6_spouse"]').val(); 

          var line9c_rent_expense ='\nLine 9c: Housing and utilities; Net mortgage or rent expense: ' +  jQuery('input[name="line9c_rent_expense"]').val();

          var schedule_j_line23c_monthly_net_income ='\nSchedule J line 23c: Monthly net income: ' +  jQuery('input[name="schedule_j_line23c_monthly_net_income"]').val();     

          var line11_no_of_vehicle ='\nLine 11: Local transportaion expenses: number of vehicles: ' +  jQuery('select[name="line11_no_of_vehicle"]').val();    

          var line12_public_transportation_expense ='\nLine 12: Vehicle operation expense OR Line 14: Public transportation expense: ' +  jQuery('input[name="line12_public_transportation_expense"]').val(); 

          var marital_status ='\nLine 1: Marital and filing status: ' +  jQuery('select[name="marital_status"]').val();   

          var line13c_vehicle1_lease_expense ='\nLine 13c: Net Vehicle 1 ownership or lease expense: ' +  jQuery('input[name="line13c_vehicle1_lease_expense"]').val();

          var line11_debtor ='\nLine 11: Total current monthly income\nDebtor: ' +  jQuery('input[name="line11_debtor"]').val(); 

          var line11_spouse ='\nSpouse: ' +  jQuery('input[name="line11_spouse"]').val();   

          var line13f_vehicle2_lease_expense ='\nLine 13f: Net Vehicle 2 ownership or lease expense: ' +  jQuery('input[name="line13f_vehicle2_lease_expense"]').val();  

          var line13_no_of_people ='\nLine 13: Number of people in debtors household: ' +  jQuery('input[name="line13_no_of_people"]').val();   

          var line15_public_transpotation_expense ='\nLine 15: Additional public transpotation expense: ' +  jQuery('input[name="line15_public_transpotation_expense"]').val();  

          var line13_median_family_income ='\nLine 13: Applicable median family income: ' +  jQuery('input[name="line13_median_family_income"]').val();  

          var line1_non_consumer_debt ='\nLine 1: Declaration of non-consumer debt: ' +  jQuery('input[name="line1_non_consumer_debt"]').val(); 

          var line24_irs_expense ='\nLine 24: Total expenses allowed under IRS expense allowance: ' +  jQuery('input[name="line24_irs_expense"]').val();

          var line2_disable_veteran ='\nLine 2: Disabled veteran: ' +  jQuery('input[name="line2_disable_veteran"]').val(); 

          var line29_education_expense ='\nLine 29: Education expenses from dependent children younger than 18: ' +  jQuery('input[name="line29_education_expense"]').val();   

          var line30_additional_food_and_clothing_expense ='\nLine 30: Additional food and clothing expense: ' +  jQuery('input[name="line30_additional_food_and_clothing_expense"]').val(); 

          var line4_current_monthly_income ='\nLine 4: Adjusted current monthly income: ' +  jQuery('input[name="line4_current_monthly_income"]').val(); 

          var line32_additional_expense_deductions ='\nLine 32: Total additional expense deductions: ' +  jQuery('input[name="line32_additional_expense_deductions"]').val();   

          var line37_deduction_for_debt_payment ='\nLine 37: Total deductions for debt payment: ' +  jQuery('input[name="line37_deduction_for_debt_payment"]').val();   

          var line6_food_clothing_other_items ='\nLine 6: Food, clothing and other items: ' +  jQuery('input[name="line6_food_clothing_other_items"]').val(); 

          var line38_deduction_for_income ='\nLine 38: Total deductions for income: ' +  jQuery('input[name="line38_deduction_for_income"]').val(); 

          var line7c_age1 ='\nLine 7c: Out-of-pocket health care allowance: people under 65 years of age: ' +  jQuery('input[name="line7c_age1"]').val();

          var line7f_age2 ='\nLine 7f: Out-of-pocket health care allowance: people 65 years of age or older: ' +  jQuery('input[name="line7f_age2"]').val();  

          var line39c_monthly_disposable_income ='\nLine 39c: Monthly disposable income: ' +  jQuery('input[name="line39c_monthly_disposable_income"]').val(); 

          var line39d_60month_disposable_income ='\nLine 39d: 60-month disposable income: ' +  jQuery('input[name="line39d_60month_disposable_income"]').val();

          var line40_initial_presumptions ='\nLine 40: Initial presumptions determination: ' +  jQuery('select[name="line40_initial_presumptions"]').val();  

          var line41a_nonpriority_unsecured_debt ='\nLine 41a: Total nonpriority unsecured debt: ' +  jQuery('input[name="line41a_nonpriority_unsecured_debt"]').val();  

          var line41b_25percent_nonpriority_unsecured_debt ='\nLine 41b: 25% of total nonpriority unsecured debt: ' +  jQuery('input[name="line41b_25percent_nonpriority_unsecured_debt"]').val();  

          var line42_secondary_presumptions ='\nLine 42: Secondary presumption determination: ' +  jQuery('select[name="line42_secondary_presumptions"]').val();             


          var results=schedule_i_line2_debtor+schedule_i_line2_spouse+line8_operating_expenses+schedule_i_line6_debtor+schedule_i_line6_spouse+line9c_rent_expense+schedule_j_line23c_monthly_net_income+line11_no_of_vehicle+line12_public_transportation_expense+marital_status+line13c_vehicle1_lease_expense +line11_debtor +line11_spouse +line13f_vehicle2_lease_expense +line13_no_of_people +line15_public_transpotation_expense +line13_median_family_income +line1_non_consumer_debt +line24_irs_expense +line2_disable_veteran +line29_education_expense +line30_additional_food_and_clothing_expense +line4_current_monthly_income +line32_additional_expense_deductions +line37_deduction_for_debt_payment +line6_food_clothing_other_items +line38_deduction_for_income +line7c_age1 +line7f_age2 +line39c_monthly_disposable_income +line39d_60month_disposable_income +line40_initial_presumptions +line41a_nonpriority_unsecured_debt +line41b_25percent_nonpriority_unsecured_debt +line42_secondary_presumptions;
          
         var dummy = $('<input>').val(results).appendTo('body').select()
         document.execCommand('copy')  

      }

       debtor_info();
       summary_of_schedule();
       means_test_information();

});






 
 


