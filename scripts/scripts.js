const panels = document.querySelectorAll(".panel")

panels.forEach((panel)=>{
    panel.addEventListener("click",()=>{
      removeActiveClasses()  
      panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}


var swiper = new Swiper(".mySwiper",{
    slidesPerView: 1,
    grabCursor:true,
    loop: true,
    pagination:{
        el:".swiper-pagination",
        clickable: true,
    },
    
});
