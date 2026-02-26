const parent=document.getElementById("container");
const addButton=document.getElementById("addBtn");
const containerModal=document.getElementById("container-modal");
const saveBtn=document.getElementById("saveBtn");
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
saveBtn.addEventListener("click",(e)=>{
e.preventDefault();
saveTodo();
});
function saveTodo(){
   const todo= document.getElementById("todo").value;
   const importance= document.getElementById("importance").value;
   todo.push({
    todo,
    importance,
   });
   console.log("todoList")
}