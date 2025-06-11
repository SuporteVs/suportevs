// Script simples para o formulário de contato
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Mensagem enviada!');
        form.reset();
    });
}
