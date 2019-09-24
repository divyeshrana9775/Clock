const secondhand = document.querySelector(".second-hand");
const minhand = document.querySelector(".min-hand");
const hourhand = document.querySelector(".hour-hand");
function setdate(){
   const now = new Date();
   const seconds = now.getSeconds();
   const secondsdegree = ((seconds/60) * 360) + 90;
   secondhand.style.transform = `rotate(${secondsdegree}deg)`;

   const minutes = now.getMinutes(); 
   const mindegree = ((minutes/60) * 360) + 90;
   minhand.style.transform = `rotate(${mindegree}deg)`;

    const hour = now.getMinutes();
   const hourdegree = ((minutes/12) * 360) + 90;
   hourhand.style.transform = `rotate(${hourdegree}deg)`;
  
}
setInterval(setdate, 1000);