
let addList = document.getElementById("addList");
let popup = document.querySelector(".popup-wrap");
addList.addEventListener("click", () => {
  
  let popupbox = document.createElement("div");
  let popHeading = document.createElement("p");
  let popInput = document.createElement("input");
  let addBtn = document.createElement("div");
  let closeBtn = document.createElement("div");
  
  document.querySelector(".container").classList.add("blur");
  popup.appendChild(popupbox);
  popupbox.className = "popup-box";
  popHeading.innerText = "Add new List";
  popInput.type = "text";
  popInput.placeholder = "Add New";
  popInput.style.textAlign= 'center';
  addBtn.className = "popup-box-buttonadd";
  
  closeBtn.className = "popup-box-buttonclose";
  
  addBtn.innerText = "Add";
  closeBtn.innerText = "Close";
  
  let warning=document.createElement("p");
  warning.innerText="Enter List To Add!!";
  warning.style.display="none";
  
  popupbox.appendChild(popHeading);
  popupbox.appendChild(popInput);
  popupbox.appendChild(addBtn);
  popupbox.appendChild(closeBtn);
  popupbox.appendChild(warning);
  
  addBtn.addEventListener("click", () => {
    if (popInput.value=== "") {
        warning.style.fontSize="13px"
        warning.style.display="block";
    }
    else{
      document.getElementById("intro-text").style.display="none";
      let box = document.createElement("div");            
      let boxHeading = document.createElement("span");          
      let hr = document.createElement("hr");
      let add = document.createElement("i");
      let deleteBtn = document.createElement("i");
      let btnContainer = document.createElement("div");         
      btnContainer.className = "button-container";
      add.className = "fa-solid fa-circle-plus";
      add.id = "plus";                 //====================================================
      deleteBtn.className = "fa-solid fa-trash-can";
      deleteBtn.id = "delete";          // ========================================================
      boxHeading.id="box-heading";
      box.className = "box";
      let container2=document.querySelector(".container-2");
      
      container2.appendChild(box);
      box.appendChild(boxHeading);
      box.appendChild(hr);
      box.appendChild(btnContainer);
      btnContainer.appendChild(add);
      btnContainer.appendChild(deleteBtn);
      boxHeading.innerText = popInput.value;
      
      boxHeading.addEventListener('click',()=>{
        let heading=document.getElementById("heading");
        heading.innerText=boxHeading.innerText;
        let container=document.querySelector(".container");
        let container3=document.querySelector(".container-3");
        
        container.style.visibility="hidden";
        container3.style.visibility="visible";
        let backBtn=document.getElementById("backbtn");
        
        container3.appendChild(box);
        deleteBtn.addEventListener('click',()=>{
          document.querySelector(".container-3").removeChild(box);
          document.querySelector(".container").style.visibility="visible";
          document.querySelector(".container-3").style.visibility="hidden";
        })
        backBtn.addEventListener('click',()=>{
          container3.removeChild(box);
          container2.appendChild(box);
          document.querySelector(".container").style.visibility="visible";
          document.querySelector(".container-3").style.visibility="hidden";
        })
      })
 
      boxHeading.style.borderBottom = "1px solid black";
      popup.removeChild(popupbox);
      document.querySelector(".container").classList.remove("blur");
      deleteBtn.addEventListener("click", () => {
        document.querySelector(".container-2").removeChild(box);
        if(document.querySelector(".container-2").innerText===""){
          document.querySelector("#intro-text").style.display="block";
        }
      });
      add.addEventListener("click", () => {
        let popupbox = document.createElement("div");
        let popHeading = document.createElement("p");
        let popInput = document.createElement("input");
        let addBtn = document.createElement("div");
        let closeBtn = document.createElement("div");
        popup.appendChild(popupbox);
        popupbox.className = "popup-box";
        popHeading.innerText = "Add new Items";
        popInput.type = "text";
        popInput.style.textAlign = "center";
        popInput.placeholder = "Add New Items Here";
        addBtn.className = "popup-box-buttonadd";
                 //=================================================
        closeBtn.className = "popup-box-buttonclose";
               //==========================================
        addBtn.innerText = "Add";
        closeBtn.innerText = "Close";
        document.querySelector(".container").classList.add("blur");
        popupbox.appendChild(popHeading);
        popupbox.appendChild(popInput);
        popupbox.appendChild(addBtn);
        popupbox.appendChild(closeBtn);
        addBtn.addEventListener("click", () => {
        
          if (popInput.value !== "") {
            let task = document.createElement("div");
            let taskText = document.createElement("span");
            let doneButton = document.createElement("button");
            taskText.className = "task-text";
            doneButton.className = "done-button";
            task.className = "task";
            taskText.innerText = popInput.value;
            doneButton.innerText = "Mark";
            document.querySelector(".container").classList.remove("blur");
            box.appendChild(task);
            task.appendChild(taskText);
            task.appendChild(doneButton);
            popup.removeChild(popupbox);
            doneButton.addEventListener("click", () => {
              taskText.style.textDecoration = "line-through";
              task.removeChild(doneButton);
            });
          }
        });
        
        closeBtn.addEventListener("click", () => {
          popup.removeChild(popupbox);
          document.querySelector(".container").classList.remove("blur");
        });
      });
    }
  });

  closeBtn.addEventListener("click", () => {
    popup.removeChild(popupbox);
    document.querySelector(".container").classList.remove("blur");
  });
});
