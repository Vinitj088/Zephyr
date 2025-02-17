// Main application entry point
document.addEventListener('DOMContentLoaded', () => {
  const app = {
    init() {
      this.setupEventListeners();
    },

    setupEventListeners() {
      // Get Started button click
      document.querySelector('.get-started')?.addEventListener('click', (e) => {
        e.preventDefault();
        // Find and submit the Google auth form
        document.querySelector('form[action="/auth/google_oauth2"]')?.submit();
      });
    },

    // API Helper Methods
    async apiGet(endpoint) {
      const response = await fetch(endpoint, {
        headers: {
          'Accept': 'application/json',
          'X-CSRF-Token': this.getCSRFToken()
        },
        credentials: 'same-origin'
      });
      
      if (!response.ok) throw new Error(`API Error: ${response.status}`);
      return response.json();
    },

    async apiPost(endpoint, data) {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-Token': this.getCSRFToken()
        },
        credentials: 'same-origin',
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error(`API Error: ${response.status}`);
      return response.json();
    },

    getCSRFToken() {
      return document.querySelector('meta[name="csrf-token"]')?.content;
    }
  };

  app.init();
}); 