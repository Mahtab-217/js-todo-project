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
   todoList.push({
    todo,
    importance,
   });
   document.getElementById("todo").value=""
   document.getElementById("importance").value=""
   if(containerModal.classList.contains("toggleForm")){
    containerModal.classList.remove("toggleForm");
    addButton.textContent = "Add Todo";
   }
   showTodo()
}
function showTodo(){
for(let todo of todoList){
 parent.innerHTML="";
 const div= document.createElement("div");
 const h1 = document.createElement("h1");
 h1.textContent= todo.todo;
    div.append(h1);
    parent.append(div);
}
}