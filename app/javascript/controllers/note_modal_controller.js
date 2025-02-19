import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["modal"]

  connect() {
    console.log("Note modal controller connected", this.element)
    // Add escape key listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close()
    })
  }

  open(event) {
    event.preventDefault()
    event.stopPropagation()
    console.log("Opening modal", this.modalTarget)
    this.modalTarget.classList.remove("hidden")
    document.body.classList.add("modal-open")
  }

  close(event) {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }
    console.log("Closing modal", this.modalTarget)
    this.modalTarget.classList.add("hidden")
    document.body.classList.remove("modal-open")
  }

  disconnect() {
    // Clean up event listener
    document.removeEventListener('keydown', this.close.bind(this))
  }
} 