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

  window.addEventListener('scroll', function() {
      const pilaresPosition = pilares.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (pilaresPosition < windowHeight) {
          pilares.classList.add('show');
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const slogan = document.querySelector('.slogan h1');
  console.log(slogan);
  
  window.addEventListener('scroll', function() {
      const sloganPosition = slogan.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sloganPosition < windowHeight) {
          slogan.classList.add('show');
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const ubicaciones = document.querySelector('.ubicaciones') 

  window.addEventListener('scroll', function() {
      const ubicacionesPosition = ubicaciones.getBoundingClientRect().top; 
      const windowHeight = window.innerHeight;

      if (ubicacionesPosition < windowHeight) {
          ubicaciones.classList.add('show')
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const sucursales = document.querySelector('.sucursalesTitulo h1') 

  window.addEventListener('scroll', function() {
      const sucursalesPosition = sucursales.getBoundingClientRect().top; 
      const windowHeight = window.innerHeight;

      if (sucursalesPosition < windowHeight) {
          sucursales.classList.add('show')
      }
  });
});