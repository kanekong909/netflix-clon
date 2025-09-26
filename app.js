// API TMBD
API_KEY = 'c430c77d8b25dc96309ce5d466d3c372';

// ================
// TMDB
// ================
const TRENDING_URL = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&language=es-ES`;
const list = document.getElementById("trending-list");


async function loadTrending() {
    const res = await fetch(TRENDING_URL);
    const data = await res.json();

    data.results.slice(0, 10).forEach((item, index) => {
            const li = document.createElement("li");

            li.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w300${item.poster_path}" alt="${item.name || item.title}">
            <span class="rank">${index + 1}</span>
            `;

        list.appendChild(li);
    });
}

loadTrending();

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
  const res = await fetch("http://127.0.0.1:8090/api/collections/users/records", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
      passwordConfirm: password,
      name: name
    })
  });
  const data = await res.json();
  console.log("Usuario creado:", data);
}

// Login
async function loginUser(email, password) {
  const res = await fetch("http://127.0.0.1:8090/api/collections/users/auth-with-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      identity: email,
      password: password
    })
  });
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

