const inputbox=document.getElementById('input-box')
const listcontainer=document.getElementById('list-container')

function addTask(){
    if(inputbox.value === ''){
        alert('Cannot Proceed, you must write somethink!')        
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li)
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputbox.value="";
    SaveData();
}

listcontainer.addEventListener('click',(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        SaveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        SaveData();
    }
},false)

function SaveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function ShowList(){
    listcontainer.innerHTML=localStorage.getItem("data");
}

ShowList();