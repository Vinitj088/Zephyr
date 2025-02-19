import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close()
    })
  }

  open() {
    document.body.classList.add('modal-open')
  }

  close() {
    document.body.classList.remove('modal-open')
  }
} 