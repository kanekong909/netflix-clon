const translations = {
  es: {
    login_button: "Iniciar sesión",
    trending_title: "Tendencias",
    peliculas_series_text: "Películas y series ilimitadas y mucho más",
    cancela_title: "A partir de $ 18.900. Cancela cuando quieras.",
    ingresar_email_text: "¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.",
    btn_start: "Comenzar >",
    motivos_title: "Más motivos para unirte",
    disfruta_text: "Disfruta en tu TV",
    ver_dispositivos: "Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.",
    descarga_text: "Descarga tus series para verlas offline",
    guarda_text: "Guarda tu contenido favorito y siempre tendrás algo para ver.",
    disfruta_any: "Disfruta donde quieras",
    peliculas_series_ilimitadas: "Películas y series ilimitadas en tu teléfono, tablet, laptop y TV.",
    create_kids: "Crea perfiles para niños",
    create_kids_p: "Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, gratisc con su membresía.",
    preguntas_faq: "Preguntas Frecuentes",
    btn_whats_netflix: "¿Qué es Netflix?",
    ans_whats_netflix: "Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.",
    how_much_netflix: "¿Cuánto cuesta Netflix?",
    ans_how_much_netflix: "Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 18.900 hasta $ 44.900 al mes. Sin costos adicionales ni contratos.",
    where_to_watch: "¿Dónde puedo ver Netflix?",
    ans_where_to_watch: "Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores de Blu-ray y consolas de videojuegos.",
    how_to_cancel: "¿Cómo cancelo?",
    ans_how_to_cancel: "Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.",
    whats_watch_netflix: "¿Que puedo ver en Netflix?",
    ans_whats_watch_netflix: "Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.",
    is_netflix_good_kids: "¿Es bueno Netflix para los niños?",
    ans_is_netflix_good_kids: "La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.",
    number_text: "¿Preguntas? Llama al 01 800 519 1570",
    link_faq: "Preguntas frecuentes",
    help_center: "Centro de ayuda",
    account: "Cuenta",
    newspaper: "Prensa",
    investor_relations: "Relaciones con inversionistas",
    jobs: "Empleo",
    gift_cards: "Tarjetas de regalo",
    buy_gift_cards: "Comprar tarjetas de regalo",
    ways_to_watch: "Formas de ver",
    terms: "Términos de uso",
    privacy: "Privacidad",
    cookies: "Preferencias de cookies",
    corporate: "Información corporativa",
    contact: "Contáctanos",
    velocity_test: "Prueba de velocidad",
    legal: "Avisos legales",
    only_netflix: "Solo en Netflix",
  },
  en: {
    login_button: "Sign In",
    trending_title: "Trending",
    peliculas_series_text: 'Unlimited movies and series and much more',
    cancela_title: "Starting from $4.82. Cancel whenever you want.",
    ingresar_email_text: "Do you want to watch Netflix now? Enter your email to create an account or restart your Netflix membership.",
    btn_start: "Start >",
    motivos_title: "More reasons to join",
    disfruta_text: "Enjoy in your TV",
    ver_dispositivos: "Watch on smart TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    descarga_text: "Download your series to watch offline",
    guarda_text: "Save your favorite content and you'll always have something to watch.",
    disfruta_any: "Enjoy anywhere",
    peliculas_series_ilimitadas: "Unlimited movies and series on your phone, tablet, laptop and TV.",
    create_kids: "Create profiles for kids",
    create_kids_p: "The kids will live adventures with their favorite characters in a space designed exclusively for them, free with your membership.",
    preguntas_faq: "FAQ",
    btn_whats_netflix: "What is Netflix?",
    ans_whats_netflix: "Netflix is a streaming service that offers a wide variety of award-winning movies, series and documentaries on almost any screen connected to the internet.",
    how_much_netflix: "How much does Netflix cost?",
    ans_how_much_netflix: "Enjoy Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for a flat monthly fee. Plans from $4.82 to $11.19 per month. No additional costs or contracts.",
    where_to_watch: "Where can I watch Netflix?",
    ans_where_to_watch: "Enjoy wherever you want, whenever you want. Sign in to your Netflix account to watch instantly through netflix.com from your personal computer or any internet-connected device with the Netflix app, including smart TVs, smartphones, tablets, Blu-ray players, and gaming consoles.",
    how_to_cancel: "How do I cancel?",
    ans_how_to_cancel: "Netflix is flexible. No annoying contracts or commitments. Cancel membership online with just two clicks. There are no cancellation fees. Start and stop whenever you want.",
    whats_watch_netflix: "What can I watch on Netflix?",
    ans_whats_watch_netflix: "Netflix has a wide catalog of movies, series, documentaries, anime, award-winning originals and more. Everything you want to see, whenever you want.",
    is_netflix_good_kids: "Is Netflix good for kids?",
    ans_is_netflix_good_kids: "The Netflix experience for kids is included in the membership so parents have control while the little ones enjoy family series and movies in their own space.",
    number_text: "Questions? Call 1 800 519 1570",
    link_faq: "Frequently Asked Questions",
    help_center: "Help Center",
    account: "Account",
    newspaper: "Newsroom",
    investor_relations: "Investor Relations",
    jobs: "Jobs",
    gift_cards: "Gift Cards",
    buy_gift_cards: "Buy Gift Cards",
    ways_to_watch: "Ways to Watch",
    terms: "Terms of Use",
    privacy: "Privacy",
    cookies: "Cookie Preferences",
    corporate: "Corporate Information",
    contact: "Contact Us",
    velocity_test: "Test Speed",
    legal: "Legal Notices",
    only_netflix: "Only on Netflix",
  },
};

// Función para cambiar idioma
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Inicializar select
const languageSelect = document.getElementById("language");

// Si quieres que recuerde la selección
const savedLang = localStorage.getItem("lang") || "es";
setLanguage(savedLang);
languageSelect.value = savedLang;

// Evento al cambiar idioma
languageSelect.addEventListener("change", (e) => {
  const lang = e.target.value;
  setLanguage(lang);
  localStorage.setItem("lang", lang);
});
