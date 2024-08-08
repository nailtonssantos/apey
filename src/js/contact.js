  // Selecionar o formulário e a mensagem de sucesso
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  // Adicionar um evento de envio ao formulário
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir o comportamento padrão de envio

    // Simulação de envio (substituir por lógica de envio real)
    setTimeout(function() {
      // Exibir a mensagem de sucesso
      successMessage.classList.add('show-message');

      // Limpar o formulário (opcional)
      contactForm.reset();

      // Esconder a mensagem após alguns segundos (opcional)
      setTimeout(function() {
        successMessage.classList.remove('show-message');
      }, 4000); // Tempo em milissegundos para esconder a mensagem (mesmo tempo da animação)
    }, 1000); // Tempo de espera simulado antes de exibir a mensagem
  });
