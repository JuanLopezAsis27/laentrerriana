let overlay = document.querySelector(".overlay");
let closeMenu = document.querySelector(".closeMenu");
let menu = document.querySelector(".iconoMenu");
let sidebar = document.querySelector(".sidebar");
let link = document.querySelectorAll(".link");
console.log(link);

menu.onclick = function () {
  sidebar.classList.add("active");
  overlay.classList.add("active");
};

closeMenu.onclick = function () {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
};

let currentIndex = 0;
const slideInterval = 5000;
let intervalId;
let isTransitioning = false;

const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const slider = document.querySelector(".slides");
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  slides.forEach((slide) => slide.classList.remove("active"));

  slides[currentIndex].classList.add("active");
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

document
  .querySelector(".slides")
  .addEventListener("transitionend", enableButtons);

startInterval();

showSlide(currentIndex);

document.addEventListener("DOMContentLoaded", function () {
  const pilares = document.querySelectorAll(".pilares div");

  function checkPosition() {
    pilares.forEach((pilar) => {
      const pilarPosition = pilar.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (pilarPosition < windowHeight) {
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
    const sloganPosition = slogan.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sloganPosition < windowHeight) {
      slogan.classList.add("show");
    }
  }

  checkPosition();

  window.addEventListener("scroll", checkPosition);
});

document.addEventListener("DOMContentLoaded", function () {
  const ubicaciones = document.querySelectorAll(".ubicaciones div");
  console.log(ubicaciones);

  function checkPosition() {
    ubicaciones.forEach((ubicacion) => {
      const ubicacionPosition = ubicacion.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (ubicacionPosition < windowHeight) {
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
    const sucursalesPosition = sucursales.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sucursalesPosition < windowHeight) {
      sucursales.classList.add("show");
    }
  }

  checkPosition();

  window.addEventListener("scroll", checkPosition);
});

document.addEventListener("DOMContentLoaded", function () {
  const distribucion = document.querySelector(".distribucion");

  function checkPosition() {
    const distribucionPosition = distribucion.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (distribucionPosition < windowHeight) {
      distribucion.classList.add("show");
    }
  }

  checkPosition();
  window.addEventListener("scroll", checkPosition);
});

document.addEventListener("DOMContentLoaded", function () {
  const mapa = document.querySelector(".mapa iframe");

  function checkPosition() {
    const mapaPosition = mapa.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (mapaPosition < windowHeight) {
      mapa.classList.add("show");
    }
  }

  checkPosition();

  window.addEventListener("scroll", checkPosition);
});

document.addEventListener("DOMContentLoaded", function () {
  const ubicacionh1 = document.querySelector(".ubicacion h1");

  function checkPosition() {
    const ubicacionh1Position = ubicacionh1.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (ubicacionh1Position < windowHeight) {
      ubicacionh1.classList.add("show");
    }
  }

  checkPosition();

  window.addEventListener("scroll", checkPosition);
});

document.addEventListener("DOMContentLoaded", function () {
  const horario = document.querySelector(".horario");

  function checkPosition() {
    const horarioPosition = horario.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (horarioPosition < windowHeight) {
      horario.classList.add("show");
    }
  }

  checkPosition();

  window.addEventListener("scroll", checkPosition);
});
