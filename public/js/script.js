// ✅ Ya estaba bien
const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#nav-links"); // ✏️ Unificado (antes se redefinía con otro querySelector)
const overlay = document.querySelector("#overlay");
const closeBtn = document.querySelector("#close-btn");

// ✅ Ya estaba bien: función para mostrar/ocultar menú
function toggleMenu() {
  navLinks.classList.toggle("show");
  overlay.classList.toggle("show");
  hamburger.classList.toggle("active");
}

// ✅ Ya estaba bien: evento de click en el ícono hamburguesa
hamburger.addEventListener("click", toggleMenu);

// ✅ Ya estaba bien: accesibilidad con teclado
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleMenu();
  }
});

// ✅ Ya estaba bien: cerrar menú al hacer click fuera del menú (overlay)
overlay.addEventListener("click", toggleMenu);

// ✅ Ya estaba bien: cerrar menú al hacer click en el botón X
closeBtn.addEventListener("click", toggleMenu);

// ✅ Ya estaba bien: cerrar menú al hacer click en cualquier ítem del menú
const navItems = navLinks.querySelectorAll("li a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (navLinks.classList.contains("show")) {
      toggleMenu();
    }
  });
});

// 🆕 NUEVO: cerrar menú si se redimensiona la pantalla a escritorio
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("show");
    overlay.classList.remove("show");
    hamburger.classList.remove("active");
  }
});

// ✅ Ya estaba bien: integración de Fancybox
document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind("[data-fancybox='slider']", {
    Thumbs: {
      autoStart: true,
    },
  });
});

// ✏️ Ajustado: antes se redefinía navLinks con otro selector, ahora usamos el mismo
document.addEventListener("DOMContentLoaded", () => {
  const contactoDropdown = document.querySelector(".contacto-dropdown");
  const navContactoMobile = document.createElement("li");
  navContactoMobile.classList.add("nav-contacto-mobile");

  // ✅ Ya estaba bien: reubicar contacto según el tamaño de pantalla
  function updateContactoLocation() {
    if (window.innerWidth <= 768) {
      if (contactoDropdown && !navContactoMobile.contains(contactoDropdown)) {
        navContactoMobile.appendChild(contactoDropdown);
        navLinks.appendChild(navContactoMobile);
      }
    } else {
      const originalParent = document.querySelector(".nav-contacto-original");
      if (contactoDropdown && !originalParent.contains(contactoDropdown)) {
        originalParent.appendChild(contactoDropdown);
        if (navContactoMobile.parentNode) {
          navContactoMobile.parentNode.removeChild(navContactoMobile);
        }
      }
    }
  }

  updateContactoLocation(); // al cargar
  window.addEventListener("resize", updateContactoLocation); // al redimensionar
});

// ✅ Ya estaba bien: función para mover el slider horizontal
function scrollSlider(direction) {
  const slider = document.querySelector('.galeria-clientes');
  const scrollAmount = 220;
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// ✅ Ya estaba bien: corrección automática de números de WhatsApp
document.addEventListener("DOMContentLoaded", function () {
  const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');

  whatsappLinks.forEach(link => {
    const href = link.getAttribute("href");
    const baseUrl = "https://wa.me/";
    const phoneNumber = href.replace(baseUrl, "");

    if (/^\d{10}$/.test(phoneNumber)) {
      link.setAttribute("href", baseUrl + "549" + phoneNumber);
    }

    if (/^\+?\d{9,10}$/.test(phoneNumber)) {
      link.setAttribute("href", baseUrl + "549" + phoneNumber);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const clientesHeader = document.querySelector(".clientes");
  const clientesContents = document.querySelectorAll(".clientes-content, .ul");

  clientesHeader.addEventListener("click", () => {
    clientesContents.forEach(content => {
      if (content.classList.contains("show")) {
        content.style.maxHeight = null; // Oculta el contenido
      } else {
        content.style.maxHeight = content.scrollHeight + "1000px"; // Despliega el contenido
      }
      content.classList.toggle("show");
    });
  });
});
