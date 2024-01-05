const  entDate="20 january 2024 10:00 PM"
document.getElementById("end-date").innerText=entDate;
const inputs=document.querySelectorAll("input")

const clock=()=>{
    const end=new Date(entDate)
    const now=new Date();
    const diff=(end-now)/1000;
    //convert into Days
    inputs[0].value=Math.floor(diff/3600/24)
    //convert into Hours
    inputs[1].value=Math.floor(diff/3600)%24;
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff%60);
}

clock()

setInterval(
    ()=>{
        clock()
    }
,1000)