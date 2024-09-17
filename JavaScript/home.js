
document.addEventListener('DOMContentLoaded', () => {
    fetch('../BD/reviews.json')
        .then(response => response.json())
        .then(data => {
            const indicators = document.getElementById('carouselIndicators');
            const inner = document.getElementById('carouselInner');

            data.forEach((review, index) => {
                // Create carousel indicator
                const indicator = document.createElement('button');
                indicator.type = 'button';
                indicator.dataset.bsTarget = '#reviewCarousel';
                indicator.dataset.bsSlideTo = index;
                indicator.classList.add('carousel-indicator');
                if (index === 0) indicator.classList.add('active');
                indicator.setAttribute('aria-label', `Slide${index + 1}`);
                if (index === 0) indicator.setAttribute('aria-current', 'true');
                indicators.appendChild(indicator);

                // Create carousel item
                const item = document.createElement('div');
                item.classList.add('carousel-item');
                if (index === 0) item.classList.add('active');

                item.innerHTML = `
                    <div class="review-item bg-danger bg-gradient shadow-sm rounded p-4">
                        <div class="review-author-info d-flex align-items-center">
                            <img src="${review.image}" alt="profile-img" class="img-thumbnail rounded-circle">
                            <div class="author ms-3">
                                <h3 class="fs-6 mb-1 text-white">${review.name}</h3>
                                <p class="text-white m-0">${review.position}</p>
                            </div>
                        </div>
                        <p class="text-white mt-3 text-center mx-5 p-2">"${review.review}"</p>
                        <div class="rating text-white">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                `;
                inner.appendChild(item);
            });
        })
        .catch(error => console.error('Error loading reviews:', error));
});



// Fecha objetivo
const countdownDate = new Date("2024-09-20T00:00:00").getTime();

// Actualizar la cuenta regresiva cada 1 segundo
const x = setInterval(function() {
    // Obtener la fecha y hora actual
    const now = new Date().getTime();

    // Calcular la diferencia entre la fecha objetivo y la fecha actual
    const distance = countdownDate - now;

    // Cálculos para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar los resultados en los elementos correspondientes
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si la cuenta regresiva ha terminado, mostrar un mensaje
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "¡El evento ha comenzado!";
    }
}, 1000);


// Cargar el archivo JSON
fetch('peliculas.json')
.then(response => response.json())
.then(data => {
    const movieContainer = document.getElementById('movieContainer');
    data.forEach(movie => {
        const div = document.createElement('div');
        div.classList.add('div:animation');
        div.innerHTML = `
            <a href="${movie.url}" target="_blank">
                <img src="${movie.img}" class="img-box" alt="${movie.alt}">
            </a>
        `;
        movieContainer.appendChild(div);
    });
})
.catch(error => console.error('Error al cargar las películas:', error));