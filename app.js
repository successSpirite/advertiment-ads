const showButtom = document.getElementById("show-buttom");
const Arrow = document.getElementById("arrow");
const logo = document.querySelector(".logo");
const Missing = document.querySelector(".missing");
const container = document.querySelector(".container");



showButtom.addEventListener("click", ()=>{
    logo.style.display = "flex";
    container.classList.add('missing'); 
 });

 Arrow.addEventListener("click", ()=>{
    //   logo.style.display = "flex";
    
    // if (container.classList.add('missing')) {
    //     container.classList.remove('missing')
    // } else {
    //     container.classList.add('missing');
    // };

 });
