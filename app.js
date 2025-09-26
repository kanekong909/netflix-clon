// API TMBD
API_KEY = "c430c77d8b25dc96309ce5d466d3c372";

// ================
// TMDB
// ================
const GENRES = {
  28: "Acción",
  35: "Comedia",
  18: "Drama",
  14: "Fantasía",
  27: "Terror",
  10765: "Ciencia ficción",
  // agrega todos los que necesites
};

const TRENDING_URL = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&language=es-ES`;
const list = document.getElementById("trending-list");
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const modalBody = document.getElementById('modal-body');

async function loadTrending(lang = "es") {
  // Mapeo de tus códigos de idioma al formato de TMDB
  const languageMap = { es: "es-ES", en: "en-US" };

  // Construimos la URL con el idioma seleccionado
  const url = `${TRENDING_URL}&language=${languageMap[lang]}`;

  // Petición a la API
  const res = await fetch(url);
  const data = await res.json();

  // Limpiar lista antes de volver a renderizar
  const list = document.getElementById("trending-list");
  list.innerHTML = "";

  // Renderizar los primeros 10
  data.results.slice(0, 10).forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w300${item.poster_path}" 
           alt="${item.name || item.title}">
      <span class="rank">${index + 1}</span>
    `;

    // 👉 Click en cada película/serie abre modal
    li.addEventListener("click", () => {
      showModal(item, lang); // también le pasamos el idioma al modal
    });

    list.appendChild(li);
  });
}

// Tu función showModal actualizada con los estilos
function showModal(movie, lang = "es") {
  const year = (movie.release_date || movie.first_air_date || "").split("-")[0];
  const age = movie.adult ? "18+" : "13+";
  const type = movie.media_type === "tv" ? "Serie" : "Película";
  const genres =
    movie.genre_ids?.map((id) => GENRES[id] || "").filter(Boolean) || [];

  modalBody.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w780${movie.backdrop_path}" alt="${movie.title || movie.name}">
    <div class="modal-body">
        <h2>${movie.title || movie.name}</h2>
        <div class="tags">
            ${year ? `<span class="tag">${year}</span>` : ""}
            <span class="tag">${age}</span>
            <span class="tag">${type}</span>
            ${genres.map((g) => `<span class="tag">${g}</span>`).join("")}
        </div>
        <p>${movie.overview || translations[lang].description_fallback || "Descripción no disponible."}</p>
        <button data-i18n="btn_comenzar">Comenzar ya ➜</button>
    </div>
  `;

  // 👉 reaplicar traducciones también dentro del modal
  setLanguage(lang);

  modal.classList.add("show");
}

// Event listeners (iguales a tu implementación)
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});

loadTrending();
// ================
// TMDB
// ================

// FUNCION DEL APARTADO DE PREGUNTAS
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("active");
  });
});

// ========================================
// POCKETBASE
// ========================================

// Registro
async function registerUser(email, password, name) {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/users/records",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        passwordConfirm: password,
        name: name,
      }),
    }
  );
  const data = await res.json();
  console.log("Usuario creado:", data);
}

// Login
async function loginUser(email, password) {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/users/auth-with-password",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identity: email,
        password: password,
      }),
    }
  );
  const data = await res.json();

  if (data?.token) {
    // guardar token para validar sesiones
    localStorage.setItem("pb_token", data.token);
    localStorage.setItem("pb_user", JSON.stringify(data.record));
    console.log("Login correcto:", data);
  } else {
    console.log("Error al iniciar sesión:", data);
  }
}

// Validar la sesión
function checkSession() {
  const token = localStorage.getItem("pb_token");
  const user = JSON.parse(localStorage.getItem("pb_user") || "{}");
  if (!token) {
    // redirige al login si no hay sesión
    window.location.href = "index.html";
  } else {
    console.log("Usuario logueado:", user);
  }
}
