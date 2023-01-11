jQuery(document).ready(function() {
  
      function coptoclipboad(){
        
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
          alert(results);   

      }

      coptoclipboad();

});
