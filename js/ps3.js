
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

const listaPS3 = document.getElementById('list__ps3');
const JuegosPS3= [
    {
        nombre: "Army Of Two The Devil´s Cartel",
        rutaImagen: "../img/Ps3/Army-Of-Two-The-Devils-Cartel-330x397.png", precio: 6
        
    },
    {
        nombre: "Batman Arkham Origins",
        rutaImagen: "../img/Ps3/Batman-Arkham-Origins-1-330x397.png" , precio: 7
    }, 
    {
        nombre: "Call Of Duty Black Ops 2",
        rutaImagen: "../img/Ps3/call-of-duty-black-ops-2-revolution-map-pack-2-330x380.jpg" , precio: 6.50
    },
    {
        nombre: "Call Of Duty Modern Warfare 3",
        rutaImagen: "../img/Ps3/call-of-duty-modern-warfare-3-dlc-collection-1-2-330x379.jpg" , precio: 5.50
    },
    {
        nombre: "Combo Dead Island Goty y Riptide",
        rutaImagen: "../img/Ps3/Combo-Dead-Island-GOTY-y-Riptide-330x397.png" , precio: 5
    },
    {
        nombre: "Combo God Of War Collection y Ascension",
        rutaImagen: "../img/Ps3/Combo-God-Of-War-Collection-y-Ascension-1-330x397.png" , precio: 10
    },
    {
        nombre: "Combo Gta Vice City y Liberty City",
        rutaImagen: "../img/Ps3/Combo-gta-vice-city-liberty-city-8-330x397.jpg" , precio: 5 
    },
    {
        nombre: "Combo Street Fighter",
        rutaImagen: "../img/Ps3/Combo-Luchadores-A-1-330x397.png" , precio: 6
    },
    {
        nombre: "Combo Red Dead Redemption",
        rutaImagen: "../img/Ps3/Combo-Red-Dead-Redemption-con-DLC-1-330x397.png" , precio: 8
    },
    {
        nombre: "Crash Team Racing",
        rutaImagen: "../img/Ps3/crash-team-racing-330x397.jpg" , precio: 1.5
    },
    {
        nombre: "Devil May Cry",
        rutaImagen: "../img/Ps3/Devil-May-Cry-1-330x397.png" , precio: 11
    },
    {
        nombre: "Dragon Ball Xenoverse",
        rutaImagen: "../img/Ps3/Dragon-Ball-Xenoverse-1-330x397.png" , precio: 8
    },
    {
        nombre: "Far Cry 3",
        rutaImagen: "../img/Ps3/Far-Cry-3-1-330x397.png" , precio: 5
    },
    {
        nombre: "God Of War Ascension",
        rutaImagen: "../img/Ps3/god-of-war-ascension-1-330x379.jpg" , precio: 4.5
    },
    {
        nombre: "God Of War Collection HD",
        rutaImagen: "../img/Ps3/god-of-war-collection-hd-1-330x379.jpg" , precio: 10
    },
    {
        nombre: "Gta San Andreas",
        rutaImagen: "../img/Ps3/gta-san-andreas-1-330x379.jpg" , precio: 3
    },
    {
        nombre: "Gta V",
        rutaImagen: "../img/Ps3/gta-v-1-330x378.jpg" , precio: 15
    },
    {
        nombre: "Life is Strange",
        rutaImagen: "../img/Ps3/Life-is-Strange-Complete-Season-1-330x397.png" , precio: 10
    },
    {
        nombre: "Metal Slug",
        rutaImagen: "../img/Ps3/metal-slug-3-330x397.jpg" , precio: 2.5
    },
    {
        nombre: "Mortal Kombat Komplete Edition",
        rutaImagen: "../img/Ps3/mortal-kombat-komplete-edition-1-330x381.jpg" , precio: 9
    },
]
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


JuegosPS3.forEach((item, i) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-primary');
    btn.textContent = 'Comprar';
    btn.id = `btn-${i}`;
    btn.onclick = function() {
        const compraModalText = document.getElementById('compraModalText');
        compraModalText.textContent = `¿Desea confirmar la compra de ${item.nombre} por ${item.precio} USD?`;
        const compraModalConfirm = document.getElementById('compraModalConfirm');
        compraModalConfirm.onclick = function() {
            console.log(`Compra pendiente de pago de: ${item.nombre} por ${item.precio} ARS`)
             compraModal.hide();
        };
        const compraModal = new bootstrap.Modal(document.getElementById('compraModal'));
        compraModal.show();
      };
    img.src = item.rutaImagen;
    img.alt = item.nombre;
    img.classList.add('juegos__img');
    li.appendChild(img);
    const p = document.createElement('p');
    p.textContent = item.nombre;
    const p2 = document.createElement('p');
    p2.textContent = `$${item.precio} USD`
    li.appendChild(p);
    li.appendChild(p2)
    li.appendChild(btn);
    li.classList.add('juegos');
    listaPS3.appendChild(li);
  });
  const cancelarModal = document.getElementById('cancelarModal');
  cancelarModal.onclick = function() {
    const compraModal = new bootstrap.Modal(document.getElementById('compraModal'));
    compraModal.hide();
  };
  
  
  async function actualizarPrecios() {
    const response = await fetch('https://v6.exchangerate-api.com/v6/2ad817d7f03ba02e5a44d88e/latest/USD');
    const data = await response.json();
    const rates = data.conversion_rates;
    const tasaCambio = rates.ARS; // obtiene la tasa de cambio entre USD y EUR
    JuegosPS3.forEach((juego) => {
      juego.precio = (juego.precio * tasaCambio).toFixed(2); // actualiza el precio del juego
    });

  }
  
  actualizarPrecios(); // llama a la función para actualizar los precios al inicio
  
