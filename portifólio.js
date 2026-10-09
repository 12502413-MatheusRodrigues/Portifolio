const niveis = document.querySelectorAll('.nivel');

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.style.width = entrada.target.dataset.nivel + '%';
        }
    });
}, { threshold: 0.1 });

niveis.forEach((nivel) => observador.observe(nivel));

const form = document.querySelector('#form-contato');

if (form) {
    form.addEventListener('submit', (e) => {
        const nome = form.querySelector('#nome').value.trim();
        const email = form.querySelector('#email').value.trim();
        const mensagem = form.querySelector('#mensagem').value.trim();

        if (nome.length < 2) {
            e.preventDefault();
            alert('Digite seu nome.');
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            e.preventDefault();
            alert('Digite um e-mail válido.');
            return;
        }
        if (mensagem.length < 5) {
            e.preventDefault();
            alert('Escreva uma mensagem um pouco maior.');
        }
    });
}