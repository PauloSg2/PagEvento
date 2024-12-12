document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('wishForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert("🎁Sua mensagem foi enviada para 2025! Vamos fazer deste um ano especial.🎁");
        form.reset(); // Limpa o formulário
    });

    // Efeito de contagem regressiva 
    const countdownDate = new Date('2025-01-01T00:00:00').getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            document.querySelector('header p').textContent = `Faltam ${days} dias para 2025!🥳`;
        } else {
            document.querySelector('header p').textContent = "Bem-vindo, 2025!";
        }
    }, 1000);
});
