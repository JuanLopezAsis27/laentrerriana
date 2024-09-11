let closeMenu = document.querySelector(".closeMenu");
let menu = document.querySelector(".iconoMenu");
let sidebar = document.querySelector(".sidebar");
let links = document.querySelectorAll(".link");


menu.onclick = function () {
  sidebar.classList.add("active");
  overlay.classList.add("active");
};

closeMenu.onclick = function () {
  sidebar.classList.remove("active");
};

links.forEach((link)=>{
  link.addEventListener("click",function(){
    sidebar.classList.remove("active"); 
  }
)
})

let currentIndex = 0;
const slideInterval = 5000; 
let intervalId; 
let isTransitioning = false;

let startX = 0; 
let isDragging = false; 

const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');

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

    const slider = document.querySelector('.slides');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    slides.forEach(slide => slide.classList.remove('active'));
    
    slides[currentIndex].classList.add('active');
}

function nextSlide() {
    if (!isTransitioning) {
        isTransitioning = true;
        showSlide(currentIndex + 1);
        resetInterval(); 
    }
}

function prevSlide() {
    if (!isTransitioning) {
        isTransitioning = true;
        showSlide(currentIndex - 1);
        resetInterval();
    }
}

function startInterval() {
    intervalId = setInterval(nextSlide, slideInterval);
}

function resetInterval() {
    clearInterval(intervalId); 
    startInterval(); 
}

function enableButtons() {
    isTransitioning = false; 
}


document.querySelector('.slides').addEventListener('transitionend', enableButtons);


const slider = document.querySelector('.slider');

slider.addEventListener('touchstart', (e) => {

    startX = e.touches[0].clientX;
    isDragging = true;
});

slider.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
        isDragging = false; 
    }
});

slider.addEventListener('touchend', () => {
    isDragging = false;
});


startInterval();

showSlide(currentIndex);

//Animaciones
document.addEventListener("DOMContentLoaded", function () {
  const pilares = document.querySelectorAll(".pilares div");

  function checkPosition() {
    pilares.forEach((pilar) => {
      const pilarPosition = pilar.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const pilarMidPoint = pilarPosition.top + (pilarPosition.height / 2);

      if (pilarMidPoint < windowHeight) {
        pilar.classList.add("show");
      }
    });
  }

  checkPosition();

  window.addEventListener("scroll", checkPosition);
});

document.addEventListener("DOMContentLoaded", function () {
  const slogan = document.querySelector(".slogan h1");

  function checkPosition() {
    const sloganPosition = slogan.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const sloganMidPoint = sloganPosition.top + (sloganPosition.height / 2)


    if (sloganMidPoint < windowHeight) {
      slogan.classList.add("show");
    }
  }

  checkPosition();

  window.addEventListener("scroll", checkPosition);
});

document.addEventListener("DOMContentLoaded", function () {
  const ubicaciones = document.querySelectorAll(".ubicaciones div");

  function checkPosition() {
    ubicaciones.forEach((ubicacion) => {
      const ubicacionPosition = ubicacion.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const ubicacionMidPoint = ubicacionPosition.top + (ubicacionPosition.height / 2)


      if (ubicacionMidPoint < windowHeight) {
        ubicacion.classList.add("show");
      }
    });
  }

  checkPosition();

  window.addEventListener("scroll", checkPosition);
});

document.addEventListener("DOMContentLoaded", function () {
  const sucursales = document.querySelector(".sucursalesTitulo h1");

  function checkPosition() {
    const sucursalesPosition = sucursales.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const sucursalesnMidPoint = sucursalesPosition.top + (sucursalesPosition.height / 2)


    if (sucursalesnMidPoint < windowHeight) {
      sucursales.classList.add("show");
    }
  }

  checkPosition();

  window.addEventListener("scroll", checkPosition);
});

document.addEventListener("DOMContentLoaded", function () {
  const distribucion = document.querySelector(".distribucion");

  function checkPosition() {
    const distribucionPosition = distribucion.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const distribucionMidPoint = distribucionPosition.top + (distribucionPosition.height / 2)


    if (distribucionMidPoint < windowHeight) {
      distribucion.classList.add("show");
    }
  }

  checkPosition();
  window.addEventListener("scroll", checkPosition);
});

document.addEventListener("DOMContentLoaded", function () {
  const mapa = document.querySelector(".mapa iframe");

  function checkPosition() {
    const mapaPosition = mapa.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const mapaMidPoint = mapaPosition.top + (mapaPosition.height / 2)

    if (mapaMidPoint < windowHeight) {
      mapa.classList.add("show");
    }
  }

  checkPosition();

  window.addEventListener("scroll", checkPosition);
});

document.addEventListener("DOMContentLoaded", function () {
  const ubicacionh1 = document.querySelector(".ubicacion h1");

  function checkPosition() {
    const ubicacionh1Position = ubicacionh1.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const ubicacionh1MidPoint = ubicacionh1Position.top + (ubicacionh1Position.height / 2)


    if (ubicacionh1MidPoint < windowHeight) {
      ubicacionh1.classList.add("show");
    }
  }

  checkPosition();

  window.addEventListener("scroll", checkPosition);
});

document.addEventListener("DOMContentLoaded", function () {
  const horario = document.querySelector(".horario");

  function checkPosition() {
    const horarioPosition = horario.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const horarioMidPoint = horarioPosition.top + (horarioPosition.height / 2)

    if (horarioMidPoint < windowHeight) {
      horario.classList.add("show");
    }
  }

  checkPosition();

  window.addEventListener("scroll", checkPosition);
});


function cambiarImagenSegunResolucion() {
  const img1 = document.querySelector('.slider1');
  const img2 = document.querySelector('.slider2');
  const img3 = document.querySelector('.slider3');

  if (window.innerWidth <= 640) {
      img1.src = '/imagenes/camion640.jpg';
      img2.src = '/imagenes/local640.jpg'
      img3.src = '/imagenes/productos640.jpg'
  } else {
      img1.src = '/imagenes/camion.jpg';
      img2.src = '/imagenes/local.jpg';
      img3.src = '/imagenes/productos.jpg'

  }
}

cambiarImagenSegunResolucion();

window.addEventListener('resize', cambiarImagenSegunResolucion);

window.onload = function() {
  var loader = document.getElementById('loader');
  var content = document.getElementById('content');

  // Oculta el loader
  loader.style.display = 'none';

  // Muestra el contenido
  content.style.display = 'block';
};