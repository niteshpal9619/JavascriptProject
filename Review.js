import reviews from "./Images/Data.js"

let Next=document.getElementById('Next')
let Previous=document.getElementById('Previous')
let Randome=document.getElementById('Randome')

let profileImage = document.getElementById('Profile-image')
let PrfileName=document.getElementById('Name')
let JobName=document.getElementById('Job')
let AboutHim=document.getElementById('About')
let currentIndex=0
window.addEventListener("DOMContentLoaded", function () {
      ShowCurrentPerson(currentIndex)
  });

  Next.addEventListener('click',()=>{   
    currentIndex++
    if (currentIndex>reviews.length){
      currentIndex=0
    }
    ShowCurrentPerson(currentIndex)
  })

  Previous.addEventListener('click',()=>{   
    currentIndex--
    if (currentIndex<0){
      currentIndex=reviews.length-1
    }
    ShowCurrentPerson(currentIndex)
  })


  Randome.addEventListener('click',()=>{   
    let currentIndex=Math.floor(Math.random()*reviews.length)
    ShowCurrentPerson(currentIndex)
  })

  function ShowCurrentPerson(index){
    const item = reviews[index];
    profileImage.src = item.image;
    PrfileName.textContent = item.Name;
    JobName.textContent = item.Job;
    AboutHim.textContent = item.text;
  }