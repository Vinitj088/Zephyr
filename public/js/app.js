// Main application entry point
document.addEventListener('DOMContentLoaded', function() {
  // Find all note cards
  const noteCards = document.querySelectorAll('.note-card');

  noteCards.forEach(card => {
    card.addEventListener('click', function(event) {
      // Don't open dialog if clicking on action buttons
      if (event.target.closest('.note-actions')) {
        return;
      }

      // Get note data from the card
      const title = this.querySelector('.note-title').textContent;
      const content = this.querySelector('.note-full-content').innerHTML;

      // Create and show dialog
      showDialog(title, content);
    });

    // Prevent action buttons from triggering card click
    const actions = card.querySelector('.note-actions');
    if (actions) {
      actions.addEventListener('click', function(event) {
        event.stopPropagation();
      });
    }
  });
});

function showDialog(title, content) {
  // Create dialog elements
  const dialog = document.createElement('div');
  dialog.className = 'note-dialog';
  
  dialog.innerHTML = `
    <div class="dialog-overlay"></div>
    <div class="dialog-container">
      <div class="dialog-content">
        <div class="dialog-header">
          <h2>${title}</h2>
          <button class="close-button">&times;</button>
        </div>
        <div class="dialog-body">
          ${content}
        </div>
      </div>
    </div>
  `;

  // Add close functionality
  dialog.querySelector('.dialog-overlay').addEventListener('click', () => dialog.remove());
  dialog.querySelector('.close-button').addEventListener('click', () => dialog.remove());
  
  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') dialog.remove();
  });

  // Add to page
  document.body.appendChild(dialog);
  document.body.classList.add('dialog-open');

  // Remove dialog-open class when dialog is closed
  const cleanup = () => document.body.classList.remove('dialog-open');
  dialog.addEventListener('remove', cleanup);
}

// API Helper Methods
async function apiGet(endpoint) {
  const response = await fetch(endpoint, {
    headers: {
      'Accept': 'application/json',
      'X-CSRF-Token': getCSRFToken()
    },
    credentials: 'same-origin'
  });
  
  if (!response.ok) throw new Error(`API Error: ${response.status}`);
  return response.json();
}

async function apiPost(endpoint, data) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-CSRF-Token': getCSRFToken()
    },
    credentials: 'same-origin',
    body: JSON.stringify(data)
  });

  if (!response.ok) throw new Error(`API Error: ${response.status}`);
  return response.json();
}

function getCSRFToken() {
  return document.querySelector('meta[name="csrf-token"]')?.content;
} 