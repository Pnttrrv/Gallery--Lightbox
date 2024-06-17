const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const container = document.querySelector('.container');
const li = document.querySelectorAll('#galeri .li');

let tema = localStorage.getItem('tema');

if (!tema) {
  localStorage.setItem('tema', 'Light');
  lightmode();
}

if (tema === 'darkmode') {
  darkmode();
} else {
  lightmode();
}

moon.addEventListener('click', () => {
  tema = localStorage.getItem('tema');
  darkmode();
});

sun.addEventListener('click', () => {
  tema = localStorage.getItem('tema');
  lightmode();
});

// function for Darkmode
function darkmode() {
  moon.classList.add('hidden');
  sun.classList.remove('hidden');
  document.body.classList.add('darkmode');
  container.classList.remove('lightcontainer');
  li.forEach((border) => {
    border.classList.add('darkborderli');
  });
  localStorage.setItem('tema', 'darkmode');
}

// function for Lightmode
function lightmode() {
  moon.classList.remove('hidden');
  sun.classList.add('hidden');
  document.body.classList.remove('darkmode');
  container.classList.add('lightcontainer');
  li.forEach((border) => {
    border.classList.remove('darkborderli');
  });
  localStorage.setItem('tema', 'light');
}
