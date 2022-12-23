const treeContainer = document.createElement("pre");
const mainContainer = document.querySelector(".main-container");
const divCopo = document.getElementById("divCopo");
const formulario = document.getElementById("form");
const inputIniciales = document.getElementById("iniciales");


const createTree = (size) => {
  for (let i = 0; i < size; i++) {
    const spanElement = document.createElement("span");
    const branch = i === 0 || i === size - 1 ? "*\n" : `${"*".repeat(i * 2)}\n`;
    spanElement.textContent = branch;
    treeContainer.appendChild(spanElement);
  }
  mainContainer.appendChild(treeContainer);
};

const getRandomValue = (max, min = 1) => {
  return Math.floor(Math.random() * max) + min;
};

const createSnow = (density, arregloCopos = []) => {
  let cantidadCopos=(density>arregloCopos.length)?density:arregloCopos.length;
  for (let i = 0; i < cantidadCopos; i++) {
    const snowFlake = document.createElement("span");
    const horizontalPosition = `${getRandomValue(100)}%`;
    const fallDelay = `${getRandomValue(2)}s`;
    const fallDuration = `${getRandomValue(20, 5)}s`;
    const flakeSize = `${getRandomValue(50, 8)}px`;
    const flakeOpacity = Math.random().toFixed(2);

    snowFlake.classList.add("snow");
    
    snowFlake.style.animation = `fall ${fallDuration} ${fallDelay} linear`;
    snowFlake.style.right = horizontalPosition;
    snowFlake.id=`copo${+i}`;
    
    if(i<arregloCopos.length){
      snowFlake.style.opacity = 1;
      snowFlake.textContent=arregloCopos[i].Iniciales;
      snowFlake.style.backgroundColor=arregloCopos[i].color;
    }else{
      snowFlake.style.opacity = flakeOpacity;
      snowFlake.style.height=flakeSize;
      snowFlake.style.width=flakeSize;
    }
    mainContainer.appendChild(snowFlake);
    snowFlakeTimeOut(snowFlake.id,parseInt(fallDuration)*1000);
  }
};



function snowFlakeTimeOut(snowFlake, timeout){
  setTimeout(()=>{
    document.getElementById(snowFlake).remove();
  },timeout+200);
 }
/*
function limpiarNieve(){
  const boxes = document.querySelectorAll('.snow');
   boxes.forEach(box => {
    setTimeout(() => {
      box.remove();
        }, 20000);
        console.log("next");
});
}*/

function enviarDatos(formulario){
    let opcionesFetch={
      method: "POST",
    body: formulario
  };
  fetch("./assets/php/backend.php",opcionesFetch).then( response =>{
    return response.json();
  }).then(jason => {
    // limpiarNieve();
    createSnow(20,jason);
    limpiarForm();
  });
}

function limpiarForm(){
  formulario.reset();
}

function inicio(){
  let form=new FormData();
  form.append("nuevo",0);
  enviarDatos(form);
}



formulario.addEventListener("submit",(evento)=>{
  evento.preventDefault();
  let form= new FormData();
  let texto=inputIniciales.value.toUpperCase();
  let indice=(texto.length>0 && texto.length<=4 )?texto.length:null;
  let regex=new RegExp("[A-Z]{"+indice+"}");
  console.log(indice,regex);
  if(regex.test(texto)){
    form.append("iniciales",inputIniciales.value);
    form.append("color",document.getElementById("colorCopo").value);
    enviarDatos(form);
  }else{
    alert("Sólo debe ingresar de 1 a 4 letras mayúsculas, no es tan difícil");
  }
});


createTree(12);
//createSnow(20);
inicio();
setInterval(inicio,17000);
