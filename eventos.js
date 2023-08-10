document.addEventListener("DOMContentLoaded", function(){
    const div = document.getElementById("midiv");

    div.addEventListener("click", function (){
        alert ("hola soy el div")
    })
    const button = document.getElementById("button");

    button.addEventListener("mouseover", function() {
        button.textContent = "Hola!";
    });
    
    button.addEventListener("mouseout", function() {
        button.textContent = "Saludar";
    });
    
})




