
const inputfields = document.querySelector('.input-fields')
const output = document.querySelector('.output')

let inputShow = true;

async function TextEditor(element){
    const newEditor =  await ClassicEditor
    .create(element,{
      toolbar : [ 'heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ],
    } )
    return newEditor
   
  }
  let projdetails;
  TextEditor(inputfields["project"]).then(nEditor=>{
    workExpdetails = nEditor
  })
  
  let workExpdetails;
  TextEditor(inputfields["workex"]).then(nEditor=>{
    workExpdetails = nEditor
  })
  let Academic;
  TextEditor(inputfields["academics"]).then(nEditor=>{
    Academic = nEditor
  })

  let hardSkillsdetails;
  TextEditor(inputfields["hardskills"]).then(nEditor=>{
    workExpdetails = nEditor
  })
  let softSkillsdetails;
  TextEditor(inputfields["softskills"]).then(nEditor=>{
    workExpdetails = nEditor
  })

  let achievementsdetails;
  TextEditor(inputfields["achievements"]).then(nEditor=>{
    workExpdetails = nEditor
  })


function toggle(){
    if(inputShow){
         inputfields.style.display = "none"
         inputShow = false 
         output.innerHTML=`
           <div class="focus1">
                <div>
                    <h1>${inputfields["name"].value}</h1>
                    <h3>${inputfields["title"].value}</h3>
                </div> 
                <div>
                    <h2>Contact</h2>
                    <h3>${inputfields["contact"].value}</h3>
                </div>   
           </div>
           <div class = "main">
                    <h2>Objective</h2>
           </div>
           <div class = "main">
                    <p>${inputfields["objective"].value}</p>
            </div>

           <div class= "main">
                <div>
                    <h2>Work Experience</h2>
                    ${workExpdetails.getData()}
                    <h2>Academic Details</h2>
                    ${Academic.getData()}
                    <h2>Hard Skills</h2>
                    ${hardSkillsdetails.getData()}

               </div>
               <div>
                    <h2>Projects</h2>
                    ${projdetails.getData()}
                    <h2>Achievements</h2>
                    ${achievementsdetails.getData()}
                    <h2>Soft Skills</h2>
                    ${softSkillsdetails.getData()}
               </div>
           </div>
           <div class="btn">
              <button onclick="print()"> Print Resume </button>
        </div>
         `
    }else{
        inputfields.style.display =  "block"
        inputShow = true
        output.innerHTML=""
    }
}