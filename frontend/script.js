const revealItems = document.querySelectorAll('.reveal');
const API_BASE = '';

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.15 });

revealItems.forEach((item) => observer.observe(item));

const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = (0.5 - (y / rect.height)) * 12;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
});

const whatsappButton = document.querySelector('.whatsapp-float');
if (whatsappButton) {
    whatsappButton.addEventListener('mouseenter', () => {
        whatsappButton.style.transform = 'scale(1.04)';
    });

    whatsappButton.addEventListener('mouseleave', () => {
        whatsappButton.style.transform = 'scale(1)';
    });
}

const yearNode = document.querySelector('#year');
if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
}

async function loadProfileData() {
    const container = document.querySelector('#api-stats');
    if (!container) return;

    try {
        const response = await fetch(`${API_BASE}/api/profile`);
        const data = await response.json();

        container.innerHTML = '';

        data.stats.forEach((item) => {
            const statCard = document.createElement('div');
            statCard.className = 'stat-card';
            statCard.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
            container.appendChild(statCard);
        });
    } catch (error) {
        container.innerHTML = '<div class="stat-card"><strong>Ruta</strong><span>Full-Stack en construcción</span></div>';
    }
}

const contactForm = document.querySelector('#contactForm');
const formStatus = document.querySelector('#formStatus');

if (contactForm && formStatus) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const payload = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        try {
            const response = await fetch(`${API_BASE}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();
            formStatus.textContent = result.message || 'Mensaje enviado con éxito.';
            contactForm.reset();
        } catch (error) {
            formStatus.textContent = 'No se pudo enviar el mensaje en este momento.';
        }
    });
}

loadProfileData();

