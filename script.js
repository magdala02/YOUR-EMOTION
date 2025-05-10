
const form = document.getElementById('emotionForm');
const input = document.getElementById('emotionInput');
const messagesDiv = document.getElementById('messages');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    const div = document.createElement('div');
    div.className = 'message';
    div.textContent = text;
    messagesDiv.prepend(div);
    input.value = '';
  }
    content.textContent = text;

    const replyButton = document.createElement('button');
    replyButton.textContent = 'Répondre';
    replyButton.addEventListener('click', () => showReplyForm(messageDiv));

    const responsesDiv = document.createElement('div');
    responsesDiv.className = 'responses';

    messageDiv.appendChild(content);
    messageDiv.appendChild(replyButton);
    messageDiv.appendChild(responsesDiv);

    messagesDiv.prepend(messageDiv);
    input.value = '';
});

function showReplyForm(messageDiv) {
  const existingForm = messageDiv.querySelector('form');
  if (existingForm) return;

  const replyForm = document.createElement('form');
  const replyInput = document.createElement('textarea');
  replyInput.rows = 2;
  replyInput.placeholder = 'Écris une réponse bienveillante...';

  const sendButton = document.createElement('button');
  sendButton.textContent = 'Envoyer';

  replyForm.appendChild(replyInput);
  replyForm.appendChild(sendButton);

  replyForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const responseText = replyInput.value.trim();
    if (responseText) {
      const responseDiv = document.createElement('div');
      responseDiv.className = 'response';
      responseDiv.textContent = responseText;

      const responsesContainer = messageDiv.querySelector('.responses');
      responsesContainer.appendChild(responseDiv);

      replyForm.remove();
    }
  });

  messageDiv.appendChild(replyForm);
}