
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

const listaPS4 = document.getElementById('list__ps4');
const JuegosPS4= [
    {
        nombre: "Alien Isolation",
        rutaImagen: "../img/Ps4/alien-isolation-5-330x413.webp" , precio: 5
    },
    {
        nombre: "Among Us",
        rutaImagen: "../img/Ps4/among-us-330x404.jpg" , precio: 5
    }, {
        nombre: "Ark Survival Evolved",
        rutaImagen: "../img/Ps4/ARK-Survival-Evolved-1-330x413.webp" , precio: 5
    }, {
        nombre: "Assassins Creed Black Flag",
        rutaImagen: "../img/Ps4/assassins-creed-4-black-flag-330x420.jpg" , precio: 5
    }, {
        nombre: "Attack on Titan 2 Final Battle",
        rutaImagen: "../img/Ps4/attack-on-titan-2-final-battle-330x404.jpg", precio: 28
    }, {
        nombre: "A Way Out",
        rutaImagen: "../img/Ps4/a-way-out-330x404.jpg" , precio: 5
    }, {
        nombre: "Batman Arkham Knight",
        rutaImagen: "../img/Ps4/batman-arkham-knight-330x404.jpg" , precio: 7
    }, {
        nombre: "Bloodborne",
        rutaImagen: "../img/Ps4/Bloodborne-1-330x413.webp" , precio: 10
    }, {
        nombre: "Call of Duty Black Ops 4",
        rutaImagen: "../img/Ps4/call-of-duty-black-ops-4-1-330x413.jpg" , precio: 6
    }, {
        nombre: "Captain Tsubasa: Rise Of The New Champions",
        rutaImagen: "../img/Ps4/Captain-Tsubasa-330x404.jpg" , precio: 28
    }, {
        nombre: "Combo Resident Evil 4,5 y 6",
        rutaImagen: "../img/Ps4/combo-resident-evil-4-5-y-6-330x404.jpg" , precio: 29
    }, {
        nombre: "Crash Bandicoot 5 It´s About Time",
        rutaImagen: "../img/Ps4/Crash-Bandicoot-4-Its-About-Time-330x404.jpg" , precio: 20
    }, {
        nombre: "Demon Slayer: The Hinokami Chronicles",
        rutaImagen: "../img/Ps4/demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles-330x404.jpg" , precio: 25
    }, {
        nombre: "Devil May Cry HD Collection",
        rutaImagen: "../img/Ps4/Devil-May-Cry-HD-Collection-1-330x413.webp" , precio: 16
    }, {
        nombre: "Dragon Ball FighterZ",
        rutaImagen: "../img/Ps4/dragon-ball-fighter-z-330x411.jpg" , precio: 5
    }, {
        nombre: "Dragon Ball Z Kakarot",
        rutaImagen: "../img/Ps4/dragon-ball-z-kakarot-1-330x404.jpg", precio: 5
    }, {
        nombre: "Elden Ring",
        rutaImagen: "../img/Ps4/elden-ring-330x404.jpg", precio: 50
    }, {
        nombre: "God of War Ragnarök",
        rutaImagen: "../img/Ps4/god-of-war-ragnarok-330x404.jpg", precio: 20
    }, {
        nombre: "Marvel Spider-Man",
        rutaImagen: "../img/Ps4/marvel-spider-man-330x411.jpg", precio: 14
    }, {
        nombre: "PES 2021",
        rutaImagen: "../img/Ps4/PES-2021-330x404.jpg", precio: 3
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


JuegosPS4.forEach((item, i) => {
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
            console.log(`Compra pendiente de pago de: ${item.nombre} por ${item.precio} USD`)
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
    listaPS4.appendChild(li);
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
    JuegosPS4.forEach((juego) => {
      juego.precio = (juego.precio * tasaCambio).toFixed(2); // actualiza el precio del juego
    });

  }
  
  actualizarPrecios(); // llama a la función para actualizar los precios al inicio
  
 
