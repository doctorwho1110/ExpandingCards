const panels=document.querySelectorAll('.panel')

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeAcTiveClasses()
        panel.classList.add("active")
    })
})

function removeAcTiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove("active")
    })
}