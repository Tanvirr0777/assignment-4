//dasboard-section
   //1-total
     const total = document.getElementById("all");
     const total_job = total.querySelectorAll(".job-card");
     const dash_all = document.getElementById("dash-all");

     dash_all.innerText = total_job.length;
     const available_job = document.getElementById("available_job");
     available_job.innerText = total_job.length ; 
          

//show/hidden of ALl-Interview-Button
function showOnly(id){
    const interview = document.getElementById("interview");
    const rejected = document.getElementById("rejected");
    const all = document.getElementById("all");

    //hide all
    interview.classList.add("hidden");
    rejected.classList.add("hidden");
    all.classList.add("hidden")

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}
//click on interview button of job-card
   function clickInterview(id,idd,iddd){
     //1-display interview status on card
       const selected = document.getElementById(id);
       selected.classList.remove("hidden");
       selected.innerText = "INTERVIEW";
      
       const reject = document.getElementById("rejected");

       
       //removeNull("interview",null_job);
    
     //2-add it on interview section
        const int_job = document.getElementById(iddd);
        const card = document.getElementById(idd);

        if(!int_job.querySelector(`#${idd}_int`)){

            const cardClone = card.cloneNode(true);
            cardClone.id = idd + "_int";

            const deleteBtn = cardClone.querySelector("button[onclick^='delet']");
            deleteBtn.setAttribute("onclick", `delet('${cardClone.id}')`);
            
            int_job.append(cardClone);
            
        }
        const reject_check = reject.querySelector(`[id^="${idd}"]`);
       if(reject_check){
           reject_check.remove();
       }

    //update interview dashbord
       const int_jobCard = int_job.querySelectorAll(".job-card");
       const dash_int = document.getElementById("dash-int");
       dash_int.innerText = int_jobCard.length;

    // - reject update
       const reject_check_len = reject.querySelectorAll(`#${idd}`).length;
       const reject_job = document.getElementById("rejected");
       const reject_jobCard = reject_job.querySelectorAll(".job-card");
       const dash_rjct = document.getElementById("dash_rjct");
       dash_rjct.innerText = reject_jobCard.length - reject_check_len;

       console.log(dash_rjct.innerText);
       if(Number(dash_rjct.innerText)== 0 && reject_jobCard.length == 0){
          const visi_i = document.getElementById("null_job_temp");
          visi_i.classList.remove("hidden");
          reject_job.append(visi_i);
      }
   }

   //click on rejected button of job-card
   function clickRejected(id,idd,iddd){
     //1-display interview status on card
       const selected = document.getElementById(id);
       selected.classList.remove("hidden");
       selected.innerText = "REJECTED";

       const interview = document.getElementById("interview");
      
     //2-add it on interview section
        const reject_job = document.getElementById(iddd);
        const card = document.getElementById(idd);
        
       if(!reject_job.querySelector(`#${idd}_int`)){

            const cardClone = card.cloneNode(true);
            cardClone.id = idd + "_int";

            const deleteBtn = cardClone.querySelector("button[onclick^='delet']");
            deleteBtn.setAttribute("onclick", `delet('${cardClone.id}')`);
            
            reject_job.append(cardClone);
            
        }
        const interview_check = interview.querySelector(`[id^="${idd}"]`);
        if(interview_check){
           interview_check.remove();
       }

    //update rejected dashbord
       const reject_jobCard = reject_job.querySelectorAll(".job-card");
       const dash_rjct = document.getElementById("dash_rjct");
       dash_rjct.innerText = reject_jobCard.length;

    // - interview update
       const int_check_len = interview.querySelectorAll(`#${idd}`).length;
       const int_job = document.getElementById("interview");
       const int_jobCard = int_job.querySelectorAll(".job-card");
       const dash_int = document.getElementById("dash-int");
       dash_int.innerText = int_jobCard.length - int_check_len;
      
       console.log( dash_int.innerText);
       if(Number(dash_int.innerText)== 0 && int_jobCard.length == 0){
         const visi_i = document.getElementById("null_job_temp");
          visi_i.classList.remove("hidden");
          int_job.append(visi_i);
       }
      
   }
   
//remove null job section if job find in interview or rejected
  function removeNull(id,hide){
     const int_rjct = document.getElementById(id);
     const find = int_rjct.querySelectorAll(".job-card");
     if(find.length !==0 ){
        hide.classList.add("hidden");
     }
     const available_job = document.getElementById("available_job");
     available_job.innerText = find.length;
  }
  
  //interview
  document.getElementById("btn_int").addEventListener('click',function(){
     showOnly("interview");
     const null_job = document.getElementById("null_job_int_temp");
     removeNull("interview",null_job);
     const nuull = document.getElementById("null_job_temp");
     removeNull("interview",nuull); 
  });
//rejected
  document.getElementById("btn_rjct").addEventListener('click',function(){
     showOnly("rejected");
     const null_job_rj = document.getElementById("null_job_rcjt_temp");
     removeNull("rejected",null_job_rj);
     const nuull = document.getElementById("null_job_temp");
     removeNull("rejected",nuull);
  });
//all
  document.getElementById("btn_all")
  .addEventListener('click',function(){
    showOnly("all");
     const total = document.getElementById("all");
     const total_job = total.querySelectorAll(".job-card");
     const available_job = document.getElementById("available_job");
     available_job.innerText = total_job.length;
  })

     
 //Delete card 
  function delet(id){
     const trash = document.getElementById(id);
     const parent  = trash.parentElement.id;
     trash.remove(); 

     //dash all
      const total = document.getElementById("all");
      const total_job = total.querySelectorAll(".job-card");
      dash_all.innerText = total_job.length;

      if(parent == "all" && total.querySelectorAll(`#${id}`) !== 0 ){
          const available_job = document.getElementById("available_job");
          available_job.innerText = total_job.length ; 
      }
      if(parent == "all" && total_job.length == 0){
          const visi_i = document.getElementById("null_job_temp");
          visi_i.classList.remove("hidden");
          total.append(visi_i);
      }
     
    //dash int
     const int_job = document.getElementById("interview");
     const int_jobCard = int_job.querySelectorAll(".job-card");
     const dash_int = document.getElementById("dash-int");
     dash_int.innerText = int_jobCard.length; 

     if(parent == "interview" && int_job.querySelectorAll(`#${id}`) !== 0 ){
          const available_job = document.getElementById("available_job");
          available_job.innerText = int_jobCard.length ; 
      }
      if(parent == "interview" && int_jobCard.length == 0){
          const visi_i = document.getElementById("null_job_temp");
          visi_i.classList.remove("hidden");
          int_job.append(visi_i);
      }
     
    //dash rejected 
       const reject_job = document.getElementById("rejected");
       const reject_jobCard = reject_job.querySelectorAll(".job-card");
       const dash_rjct = document.getElementById("dash_rjct");
       dash_rjct.innerText = reject_jobCard.length;

      if(parent == "rejected" && reject_job.querySelectorAll(`#${id}`) !== 0 ){
          const available_job = document.getElementById("available_job");
          available_job.innerText = reject_jobCard.length ; 
      }
      if(parent == "rejected" && reject_jobCard.length == 0){
          const visi_i = document.getElementById("null_job_temp");
          visi_i.classList.remove("hidden");
          reject_job.append(visi_i);
      }

  }
 

         
     
    
