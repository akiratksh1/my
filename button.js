const button = document.querySelector('.floating-button');

button.addEventListener('click', async () => {
  try {
    const response = await fetch('https://api.ipify.org/?format=json');
    const data = await response.json();
    const ip = data.ip;
    const dns = window.location.hostname;
    const gifUrl = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif';

    const message = `Seu IP é ${ip} e seu DNS é ${dns} para fechar está mensagem pressione F5 ou recarregue a página.`;

    const container = document.createElement('div');
    container.classList.add('message-container');

    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-box');

    const messageElement = document.createElement('p');
    messageElement.textContent = message;

    const gifElement = document.createElement('img');
    gifElement.src = gifUrl;

    messageContainer.appendChild(messageElement);
    container.appendChild(messageContainer);
    container.appendChild(gifElement);

    document.body.appendChild(container);
  } catch (error) {
    console.error(error);
  }
});
