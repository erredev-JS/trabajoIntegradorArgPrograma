const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const formBtn = document.querySelectorAll('button[type="submit"]');
const inputEmail = document.getElementById('inputEmail1');
const textArea = document.getElementById('textArea1');
const inputName = document.getElementById('inputName1');
const inputSurname = document.getElementById('inputSurname1');
const formArray = [];




formBtn.forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    formArray.push(inputEmail.value, inputName.value, inputSurname.value, textArea.value);
    inputEmail.value = ''
    textArea.value = ''
    inputName.value = ''
    inputSurname.value = ''
    console.log(formArray);
  });
});

formBtn.forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    formArray.push(inputEmail.value, textArea.value);
    inputEmail.value = ''
    textArea.value = ''
    console.log(formArray);
  });
});


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


function abrirPS5(){
    window.open("./path/ps5.html")
}
function abrirPS4(){
    window.open("./path/ps4.html")
}
function abrirPS3(){
    window.open("./path/ps3.html")
}
