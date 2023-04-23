

const listaPS5 = document.getElementById('list__ps5');
const JuegosPS5= [
    {
      nombre: "Alien Isolation",
      rutaImagen: "../img/Ps5/alien-isolation-ps5-retro-330x404.jpg" , precio: 5
  },
  {
      nombre: "Among Us",
      rutaImagen: "../img/Ps5/among-us-ps5-330x404.jpg" , precio: 5
  },
  {
      nombre: "Ark Survival Evolved",
      rutaImagen: "../img/Ps5/ark-survival-evolved-ps5-330x404.jpg" , precio: 5
  },
  {
      nombre: "Assasins Creed Black Flag",
      rutaImagen: "../img/Ps5/assassins-creed-black-flag-ps5-retro-330x404.jpg" , precio: 5
  },
  {
      nombre: "Assasins Creed Odyssey",
      rutaImagen: "../img/Ps5/assassins-creed-odyssey-ps5-330x404.jpg" , precio: 5
  },
  {
      nombre: "Assasins Creed Origin",
      rutaImagen: "../img/Ps5/assassins-creed-origin-ps5-retro-330x404.jpg" , precio: 5
  },
  {
      nombre: "Batman Arkham Knight",
      rutaImagen: "../img/Ps5/batman-arkham-knight-ps5-330x404.jpg" , precio: 7
  },
  {
      nombre: "Batman Return to Arkham",
      rutaImagen: "../img/Ps5/batman-return-to-arkham-ps5-retro-330x404.jpg" , precio: 7
  },
  {
      nombre: "Battlefield 4",
      rutaImagen: "../img/Ps5/battlefield-4-ps5-retro-330x404.jpg" , precio: 10
  },
  {
      nombre: "Battlefield 5",
      rutaImagen: "../img/Ps5/battlefield-5-ps5-330x404.jpg" , precio: 12
  },
  {
      nombre: "Call of Duty Black Ops 3",
      rutaImagen: "../img/Ps5/call-of-duty-black-ops-3-ps5-retrocompatible-330x404.jpg" , precio: 18
  },
  {
      nombre: "Call of duty Modern Warfare 2",
      rutaImagen: "../img/Ps5/call-of-duty-modern-warfare-ii-ps5-330x404.jpg" , precio: 35
  },
  {
      nombre: "Captain Tsubasa: Rise Of The New Champions",
      rutaImagen: "../img/Ps5/captain-tsubasa-rise-of-the-new-champions-ps5-retro-330x404.jpg" , precio: 25
  },
  {
      nombre: "Crash Team Racing Nitro Fueled",
      rutaImagen: "../img/Ps5/crash-team-racing-nitro-fueled-ps5-330x404.jpg" , precio: 10
  },
  {
      nombre: "Dark Souls 3",
      rutaImagen: "../img/Ps5/dark-souls-3-ps5-330x404.jpg" , precio: 13
  },
  {
      nombre: "God of War 3",
      rutaImagen: "../img/Ps5/god-of-war-3-remastered-ps5-330x404.jpg" , precio: 6
  },
  {
      nombre: "God of War Ragnarök",
      rutaImagen: "../img/Ps5/god-of-war-ragnarok-ps5-retro-330x404.jpg" , precio: 25
  },
  {
      nombre: "Resident Evil 4 Remake",
      rutaImagen: "../img/Ps5/resident-evil-4-remake-ps5-1-330x404.jpg" , precio: 40
  },
  {
      nombre: "The Last Of Us Part 1",
      rutaImagen: "../img/Ps5/the-last-of-us-part-i-ps5-330x404.jpg" , precio: 30
  },
  {
      nombre: "Uncharted 4",
      rutaImagen: "../img/Ps5/uncharted-4-ps5-retro.jpg" , precio: 5
  }
  ]

  const btnComprar = document.querySelectorAll('.btn__comprar')
  const listCompras = document.getElementById('bolsaList')
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


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

JuegosPS5.forEach((item, i) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-primary');
    btn.textContent = 'Comprar';
    btn.id = `btn-${i}`;
    btn.onclick = function() {
      const compraModalText = document.getElementById('compraModalText');
      compraModalText.textContent = `¿Desea confirmar la compra de ${item.nombre} por ${item.precio} ARS?`;
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
    listaPS5.appendChild(li);
  });
  
  const cancelarModal = document.getElementById('cancelarModal');
  cancelarModal.onclick = function() {
    const compraModal = new bootstrap.Modal(document.getElementById('compraModal'));
    compraModal.hide();
  };
  
  async function actualizarPrecios() {
    const response = await fetch('https://v6.exchangerate-api.com/v6/e8755caba89112299a0d2965/latest/USD');
    const data = await response.json();
    const rates = data.conversion_rates;
    const tasaCambio = rates.ARS; // obtiene la tasa de cambio entre USD y EUR
    JuegosPS5.forEach((juego) => {
      juego.precio = (juego.precio * tasaCambio).toFixed(2); // actualiza el precio del juego
    });

  }
  
  actualizarPrecios(); // llama a la función para actualizar los precios al inicio
  