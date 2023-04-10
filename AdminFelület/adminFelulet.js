aktivalo.addEventListener("click",mindenCheck);
function mindenCheck(){
    let elemLista=document.querySelectorAll(".allapot");
    for(let i=0;i<elemLista.length;i++){
        elemLista[i].checked=true;
    }
}

deaktivalo.addEventListener("click",mindenUnCheck);
function mindenUnCheck(){
    let elemLista=document.querySelectorAll(".allapot");
    for(let i=0;i<elemLista.length;i++){
        elemLista[i].checked=false;
    }
}

csikozasbe.addEventListener("click",savozasBe);
function savozasBe(){
    let tablaObjektum=document.querySelector("table");
    tablaObjektum.classList.add("table-striped");
}

csikozaski.addEventListener("click",savozasKi);
function savozasKi(){
    let tablaObjektum=document.querySelector("table");
    tablaObjektum.classList.remove("table-striped");
}


darkMode.addEventListener("click",DarkMode);
function DarkMode(){
    let tablaObjektum=document.querySelector("table");
    tablaObjektum.classList.remove("table-light");
    tablaObjektum.classList.add("table-dark");
}

lightMode.addEventListener("click",LightMode);
function LightMode(){
    let tablaObjektum=document.querySelector("table");
    tablaObjektum.classList.remove("table-dark");
    tablaObjektum.classList.add("table-light");
}

tesztSor.addEventListener("click",UresSor);
function UresSor(){
    let tablaObjektum=document.querySelector("table");
    let sor=tablaObjektum.insertRow();
    let vezNevCella=sor.insertCell();
    let kerNevCella=sor.insertCell();
    let emailCella=sor.insertCell();
    let telefonCella=sor.insertCell();
    let beosztasCella=sor.insertCell();
    let aktivaloCella=sor.insertCell();

    vezNevCella.innerHTML="teszt";
    kerNevCella.innerHTML="teszt";
    emailCella.innerHTML="teszt";
    telefonCella.innerHTML="teszt";
    beosztasCella.innerHTML="teszt";
    aktivaloCella.innerHTML="<input type=\"checkbox\" class=\"allapot\">";
}
let mukodesGomb = document.getElementById("myButton");
mukodesGomb.addEventListener("click", EgyGombFuggveny)

function EgyGombFuggveny(){
  mindenCheck();
  mindenUnCheck();
  savozasBe();
  savozasKi();
  DarkMode();
  LightMode();
  UresSor();
}

//Szorgalmik
//1) A switch-es gomb eventeket, egy gombra kéne helyezni!
//2) A feladathoz mellékelt feltöltő formot készítsd el(Kötelezően ajánlott)