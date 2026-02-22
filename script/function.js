//dasboard-section
   //1-total
     const total = document.getElementById("all");
     const total_job = total.querySelectorAll(".job-card");
     const dash_all = document.getElementById("dash-all");

     dash_all.innerText = total_job.length;

     const available_job = document.getElementById("available_job");
     available_job.innerText = total_job.length


        

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
      
     //2-add it on interview section
        const int_job = document.getElementById(iddd);
        const card = document.getElementById(idd);
        if(!int_job.querySelector(`#${idd}`)){
            const cardClone = card.cloneNode(true);
            int_job.append(cardClone);
        }

    //update interview dashbord
       const int_jobCard = int_job.querySelectorAll(".job-card");
       const dash_int = document.getElementById("dash-int");
       dash_int.innerText = int_jobCard.length;

   }

   //click on rejected button of job-card
   function clickRejected(id,idd,iddd){
     //1-display interview status on card
       const selected = document.getElementById(id);
       selected.classList.remove("hidden");
       selected.innerText = "REJECTED";
      
     //2-add it on interview section
        const reject_job = document.getElementById(iddd);
        const card = document.getElementById(idd);
       if(!reject_job.querySelector(`#${idd}`)){
         const cardClone = card.cloneNode(true);
         reject_job.append(cardClone);
       }
    //update rejected dashbord
       const reject_jobCard = reject_job.querySelectorAll(".job-card");
       const dash_rjct = document.getElementById("dash_rjct");
       dash_rjct.innerText = reject_jobCard.length;
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
     const null_job = document.getElementById("null_job_int");
     removeNull("interview",null_job);
  });
//rejected
  document.getElementById("btn_rjct").addEventListener('click',function(){
     showOnly("rejected");
     const null_job_rj = document.getElementById("null_job_rjct");
     removeNull("rejected",null_job_rj);
  });
//all
  document.getElementById("btn_all")
  .addEventListener('click',function(){
    showOnly("all");
     const total = document.getElementById("all");
     const total_job = total.querySelectorAll(".job-card");
     const available_job = document.getElementById("available_job");
     available_job.innerText = total_job.length
  })

  
 


    
