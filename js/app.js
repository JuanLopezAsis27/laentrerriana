let overlay = document.querySelector(".overlay")
let closeMenu = document.querySelector(".closeMenu");
let menu = document.querySelector(".iconoMenu");
let sidebar = document.querySelector(".sidebar");
let link = document.querySelectorAll(".link");
console.log(link);

menu.onclick = function () {
  sidebar.classList.add("active");
  overlay.classList.add("active")
};

closeMenu.onclick = function () {
  sidebar.classList.remove("active");
  overlay.classList.remove("active")
};

let currentIndex = 0;
const slideInterval = 5000; // Tiempo en milisegundos (5000ms = 5s)
let intervalId; // Variable para almacenar el ID del intervalo
let isTransitioning = false; // Variable para controlar el estado de la transición

const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');

// Función para mostrar el slide actual
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Mover las slides usando transform
    const slider = document.querySelector('.slides');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Remover la clase 'active' de todos los slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Añadir la clase 'active' al slide actual
    slides[currentIndex].classList.add('active');
}

// Función para mostrar el siguiente slide
function nextSlide() {
  if (!isTransitioning) {
    isTransitioning = true;
    showSlide(currentIndex + 1);
    resetInterval(); // Reiniciar el intervalo después de cambiar el slide
}
}

// Función para mostrar el slide anterior
function prevSlide() {
  if (!isTransitioning) {
    isTransitioning = true;
    showSlide(currentIndex - 1);
    resetInterval(); // Reiniciar el intervalo después de cambiar el slide
}
}

function startInterval() {
  intervalId = setInterval(nextSlide, slideInterval);
}

// Función para reiniciar el intervalo de cambio de slide
function resetInterval() {
  clearInterval(intervalId); // Limpiar el intervalo actual
  startInterval(); // Iniciar un nuevo intervalo
}

// Función para habilitar los botones después de la transición
function enableButtons() {
  isTransitioning = false; // Permitir nuevas transiciones
}

// Agregar evento para habilitar los botones cuando termine la transición
document.querySelector('.slides').addEventListener('transitionend', enableButtons);

// Iniciar el intervalo por primera vez
startInterval();

// Mostrar el primer slide al cargar la página
showSlide(currentIndex);


document.addEventListener('DOMContentLoaded', function() {

  const pilares = document.querySelector('.pilares');
  
  function checkPosition() {
    const pilaresPosition = pilares.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (pilaresPosition < windowHeight) {
        pilares.classList.add('show');
    }
}

checkPosition();


window.addEventListener('scroll', checkPosition);

});

document.addEventListener('DOMContentLoaded', function() {
  const slogan = document.querySelector('.slogan h1');

  function checkPosition() {
    const sloganPosition = slogan.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sloganPosition < windowHeight) {
      slogan.classList.add('show');
    }
}

checkPosition();


window.addEventListener('scroll', checkPosition);

});

document.addEventListener('DOMContentLoaded', function() {
  const ubicaciones = document.querySelector('.ubicaciones');

  function checkPosition() {
    const ubicacionesPosition = ubicaciones.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (ubicacionesPosition < windowHeight) {
      ubicaciones.classList.add('show');
    }
}

checkPosition();


window.addEventListener('scroll', checkPosition);

});

document.addEventListener('DOMContentLoaded', function() {

  const sucursales = document.querySelector('.sucursalesTitulo h1');

  function checkPosition() {
    const sucursalesPosition = sucursales.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sucursalesPosition < windowHeight) {
      sucursales.classList.add('show');
    }
}

checkPosition();


window.addEventListener('scroll', checkPosition);


});

// window.addEventListener('scroll', function() {
//   const growDiv = document.querySelector('.distribucion');
//   const scrollPosition = window.scrollY;

//   if (scrollPosition > 100) {
//       growDiv.style.transform = 'translate(0%, 0%) scale(1)';
//       growDiv.style.opacity = '1';
//    }
//    //else {
//   //     growDiv.style.transform = 'translate(0%, 0%) scale(0)';
//   //     growDiv.style.opacity = '0';
//   // }
// });

document.addEventListener('DOMContentLoaded', function() {
  const distribucion = document.querySelector('.distribucion');

  function checkPosition() {
      const distribucionPosition = distribucion.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (distribucionPosition < windowHeight) {
        distribucion.classList.add('show');
      }
  }

  checkPosition();

  window.addEventListener('scroll', checkPosition);
});


document.addEventListener('DOMContentLoaded', function() {
  const mapa = document.querySelector('.mapa iframe');

  function checkPosition() {
      const mapaPosition = mapa.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (mapaPosition < windowHeight) {
        mapa.classList.add('show');
      }
  }

  checkPosition();

  window.addEventListener('scroll', checkPosition);
});


document.addEventListener('DOMContentLoaded', function() {
  const ubicacionh1 = document.querySelector('.ubicacion h1');

  function checkPosition() {
      const ubicacionh1Position = ubicacionh1.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (ubicacionh1Position < windowHeight) {
        ubicacionh1.classList.add('show');
      }
  }

  checkPosition();

  window.addEventListener('scroll', checkPosition);
});

document.addEventListener('DOMContentLoaded', function() {
  const horario = document.querySelector('.horario');

  function checkPosition() {
      const horarioPosition = horario.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (horarioPosition < windowHeight) {
        horario.classList.add('show');
      }
  }

  checkPosition();

  window.addEventListener('scroll', checkPosition);
});


