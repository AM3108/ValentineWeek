(function () {
  'use strict';

  let emailConfig = {
    receiverEmail: 'mishraatul88.am@gmail.com',
    senderEmail: '',
    formspreeEndpoint: 'https://formspree.io/f/mbdybqrz'
  };

  fetch('config.json')
    .then(r => r.json())
    .then(config => {
      if (config.email) {
        emailConfig = {
          receiverEmail: config.email.receiverEmail || emailConfig.receiverEmail,
          senderEmail: config.email.senderEmail || '',
          formspreeEndpoint: config.email.formspreeEndpoint || emailConfig.formspreeEndpoint
        };
      }
    })
    .catch(() => {});

  function ensureSuccessModal() {
    let modal = document.getElementById('success-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'success-modal';
      modal.className = 'success-modal hidden';
      modal.innerHTML = '<div class="success-modal-content">' +
        '<h3 class="success-modal-title">Sent! 💌</h3>' +
        '<p class="success-modal-message">This msg will reach to its destination</p>' +
        '<button id="success-modal-ok" class="success-modal-btn">OK</button></div>';
      document.body.appendChild(modal);
      document.getElementById('success-modal-ok').addEventListener('click', function () {
        modal.classList.add('hidden');
      });
    }
    return modal;
  }

  window.initExpressFeelings = function (container, options) {
    if (!container) return;

    const subject = (options && options.subject) || 'Express your feelings';
    ensureSuccessModal();

    const expressSection = document.createElement('div');
    expressSection.className = 'express-section';
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Express your feelings';
    textarea.className = 'express-textarea';
    textarea.rows = 4;
    const expressBtn = document.createElement('button');
    expressBtn.type = 'button';
    expressBtn.className = 'express-btn';
    expressBtn.textContent = 'Express';
    expressSection.appendChild(textarea);
    expressSection.appendChild(expressBtn);
    container.appendChild(expressSection);

    expressBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const message = textarea.value.trim();
      if (!message) {
        alert('Please write something before sending.');
        return;
      }

      const endpoint = emailConfig.formspreeEndpoint || 'https://formspree.io/f/mbdybqrz';
      const formData = new FormData();
      formData.append('message', message);
      formData.append('_subject', subject);
      formData.append('_replyto', emailConfig.senderEmail || emailConfig.receiverEmail || '');

      expressBtn.disabled = true;
      expressBtn.textContent = 'Sending...';

      fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            textarea.value = '';
            const modal = document.getElementById('success-modal');
            if (modal) modal.classList.remove('hidden');
          } else {
            return response.json().then(function (data) {
              const errMsg = (data.errors && data.errors.map(function (e) { return e.message; }).join(', ')) || data.error || 'Could not send.';
              alert('Could not send: ' + errMsg + '\n\nTip: If you opened the site from a file on your computer (file://), try running it with a local server (e.g. Live Server) or deploy it online. Also check Formspree dashboard and your spam folder.');
            });
          }
        })
        .catch(function () {
          alert('Could not send. Check your internet connection or try again. If you\'re opening the site from a file (file://), use a local server instead.');
        })
        .finally(function () {
          expressBtn.disabled = false;
          expressBtn.textContent = 'Express';
        });
    });
  };
})();
