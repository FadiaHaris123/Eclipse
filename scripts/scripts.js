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
function display(){
  console.log("button clicked");

}



// --------------------------------------

// -----------Contact--------------------


const GTInput = document.querySelectorAll('.gt-input');

  GTInput.forEach((check,idx) =>{

    let currentLabel = GTInput[idx].parentElement.firstElementChild;
    check.addEventListener('focus',() =>{

      currentLabel.classList.add("move-up");

        })

    check.addEventListener('blur',() =>{

      if(GTInput[idx].value === "") {

        currentLabel.classList.remove("move-up");

      }

        })



    })



  let btnSend = document.querySelector('.gt-button');

  let message = document.querySelector('.h1');



  btnSend.addEventListener('click',() =>{

    btnSend.innerText = 'Sending...';



    setTimeout(()=>{



      btnSend.style.display = "none";

      message.innerText = "Message Sent";



    },5000);

  });

