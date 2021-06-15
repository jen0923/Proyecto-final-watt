function toggleBloque() {
    var demo =document.getElementById("contenedor texto");
 if  (demo.style.display ==="none")   {
     demo.style.display = "block";
     document.getElementById ("toggleBloque").textContent= "Leer menos"
 } else {
     demo.style.display = "none";
     document.getElementById("toggleBloque").textContent= "Leer más"
    }
 }
 

 function showCategory(type) {
     var paisajesElement= document.getElementById("paisajes");
     var hobbiesElement= document.getElementById("hobbies");
     var familiaElement= document.getElementById("familia");

     var paisajesBtnElement= document.getElementById("paisajes-btn");
     var hobbiesBtnElement= document.getElementById("hobbies-btn");
     var familiaBtnElement= document.getElementById("familia-btn");
  

switch (type) {

 case "paisajes":

  
    familiaElement.style.display ="none";
    hobbiesElement.style.display="none";
    paisajesElement.style.display="block";

    familiaBtnElement.style.backgroundColor= "rgb (247, 166, 129)";
    hobbiesBtnElement.style.backgroundColor =  "rgb (247, 166, 129)";
    paisajesBtnElement.style.backgroundColor= "rgba(106, 106, 245, 0.527)";
    
    
        break;

  case"hobbies":
 
        paisajesElement.style.display="none";
        familiaElement.style.display="none";
        hobbiesElement.style.display="block";
       

        paisajesBtnElement.style.backgroundColor= "rgb (247, 166, 129)";
        familiaBtnElement.style.backgroundColor =  "rgb (247, 166, 129)";
        hobbiesBtnElement.style.backgroundColor= "rgba(106, 106, 245, 0.527)";
        
        
    default:
       
        hobbiesElement.style.display="none";
        paisajesElement.style.display="none";
        familiaElement.style.display="block";

        paisajesBtnElement.style.backgroundColor= "rgb (247, 166, 129)";
        hobbiesBtnElement.style.backgroundColor=  "rgb (247, 166, 129)";
        familiaBtnElement.style.backgroundColor= "rgba(106, 106, 245, 0.527)";

     break;
    }
}

   


    
