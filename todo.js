const parent=document.getElementById("parent");
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
parent.innerHTML="";
showTodo();
});
function saveTodo(){
   const todo= document.getElementById("todo").value;
   const importance= document.getElementById("importance").value;
   todoList.push({
    todo,
    importance,
    compelted: false,
   });
   document.getElementById("todo").value=""
   document.getElementById("importance").value=""
   if(containerModal.classList.contains("toggleForm")){
    containerModal.classList.remove("toggleForm");
    addButton.textContent = "Add Todo";
   }
//    showTodo()
// console.log(todo, importance)
}
function showTodo(){
  const sortedList=  todoList.sort((a,b)=>a.compelted-b.compelted);
for(let todo of sortedList){
 
 const div= document.createElement("div");
 div.addEventListener("click",()=>{
    console.log("clicked");
    todo.compelted = !todo.compelted;
    parent.innerHTML="";
    showTodo();
 })
 div.classList.add("box")
 const h1 = document.createElement("h1");
 h1.textContent= todo.todo;
 const smallBox=document.createElement("div");
 smallBox.classList.add("circle");
 if(todo.importance=="important"){
    smallBox.classList.add("red");

 }
 else if(todo.importance=="optional"){
    smallBox.classList.add("yellow");
 }
 else{
    smallBox.classList.add("green");
 }
 if(todo.compelted){
    h1.style.textDecoration ="line-through";
 }
    div.append(h1, smallBox);
    parent.append(div);
}
}