let tbodys=document.querySelectorAll(".tbody");
let addNewBtns=document.querySelector(".addNew");
let tr=document.createElement("tr");
let td1=document.createElement("td");
let td2=document.createElement("td");
let td3=document.createElement("td");
let td4=document.createElement("td");

let checkbox=document.createElement("input");
 // Assigning the attributes
            // to created checkbox
            checkbox.type = "checkbox";
            checkbox.name = "example-checkbox1";
            checkbox.value = "value";
            checkbox.className = "custom-control-input";

            var label = document.createElement('label');
            // assigning attributes for
         // the created label tag
         label.className = "custom-control custom-checkbox";

let span=document.createElement("span");
    // assigning attributes for
         // the created span tag
         span.className = "custom-control-label";

         let div=document.createElement("div");
         // Assigning the attributes
            // to created div
            div1.className="form-group";

         let inputText1=document.createElement("input");
         // Assigning the attributes
            // to created inputText
            inputText.type="form-control";

            let inputText2=document.createElement("input");
            // Assigning the attributes
               // to created inputText
               inputText.type="form-control";

               let inputText3=document.createElement("input");
               // Assigning the attributes
                  // to created inputText
                  inputText.type="form-control";

  
                //   addNewBtns.forEach((addNewBtn)=>{
                //     addNewBtn.addEventListener("click",()=>{
                //         alert("hell world");
                //     })
                //   })

                  addNew.addEventListener('click',()=>{
                    alert("hell world");
                })
           