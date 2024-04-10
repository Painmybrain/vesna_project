document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting the traditional way
    var consentCheckbox = document.getElementById('consent');
    if (consentCheckbox.checked) {
      // Here you would normally handle form submission, e.g., using AJAX
      alert('Thank you for your submission!');
    } else {
      alert('Please give your consent to process personal data.');
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.getElementById('hamburger-menu');
    var navMenu = document.querySelector('.header__nav');
  
    hamburger.addEventListener('click', function () {
      this.classList.toggle('is-active');
      navMenu.classList.toggle('active');
    });
  });
  
  // Получаем элемент модального окна
var modal = document.getElementById('myModal');

// Получаем элемент с классом header__consulting, который открывает модальное окно
var consultingText = document.querySelector('.header__consulting');

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName('close')[0];

// При клике на текст открыть модальное окно
consultingText.onclick = function() {
  modal.style.display = "block";
}

// При клике на элемент <span> (x), закрыть модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// При клике вне модального окна, закрыть его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Получаем элемент модального окна
  var modal = document.getElementById('myModal');

  // Получаем элемент с классом header__consulting, который открывает модальное окно
  var consultingText = document.querySelector('.header__consulting');

  // Получаем элемент <span>, который закрывает модальное окно
  var span = document.getElementsByClassName('close')[0];

  // При клике на текст открыть модальное окно
  if (consultingText) {
    consultingText.onclick = function() {
      modal.style.display = "block";
    };
  }

  // При клике на элемент <span> (x), закрыть модальное окно
  if (span) {
    span.onclick = function() {
      modal.style.display = "none";
    };
  }

  // При клике вне модального окна, закрыть его
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

document.querySelector('.header__consulting').addEventListener('click', function() {
  document.getElementById('myModal').style.display = 'block';
});