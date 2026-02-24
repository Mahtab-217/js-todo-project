const parent=document.getElementById("container");
const addButton=document.getElementById("addBtn");
const containerModal=document.getElementById("container-modal");
const todoList=[];
addButton.addEventListener("click",()=>{
    if(!containerModal.classList.contains("toggleForm")){
      containerModal.classList.add("toggleForm");
    addButton.textContent("Hide Form")
    }
    else{
        containerModal.classList.remove("toggleForm");
        addButton.classList.add("Add Todo")
    }
})
{
    id: 1;
    name:"Reading a book";
}