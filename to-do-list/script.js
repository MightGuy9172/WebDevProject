const userInput=document.querySelector('#user-input');
const task=document.querySelector('.tasks');

document.querySelector("#add-btn").addEventListener('click',function(){
    if(userInput.value === ""){
        alert("Please enter a task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=userInput.value;
        task.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    userInput.value="";
    saveData();
})

task.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data",task.innerHTML);
}

function saveTask(){
    task.innerHTML = localStorage.getItem("data");
}

saveTask();