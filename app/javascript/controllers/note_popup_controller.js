import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["popup"]

  connect() {
    console.log("Note popup controller connected")
    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close()
    })
    
    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.element.contains(e.target)) {
        this.close()
      }
    })
  }

  toggle(event) {
    console.log("Toggle clicked")
    event.stopPropagation()
    if (this.popupTarget.classList.contains('active')) {
      this.close()
    } else {
      this.open()
    }
  }

  open() {
    console.log("Opening popup")
    this.popupTarget.classList.add('active')
    this.element.classList.add('expanded')
  }

  close() {
    console.log("Closing popup")
    this.popupTarget.classList.remove('active')
    this.element.classList.remove('expanded')
  }
} 