import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["dialog"]

  connect() {
    console.log("Note dialog controller connected", {
      element: this.element,
      hasDialogTarget: this.hasDialogTarget,
      dialogTarget: this.dialogTarget
    })
    // Add escape key listener
    this.boundKeyHandler = this.handleKeyPress.bind(this)
    document.addEventListener('keydown', this.boundKeyHandler)
  }

  disconnect() {
    document.removeEventListener('keydown', this.boundKeyHandler)
  }

  open(event) {
    console.log("Open called", event)
    event.preventDefault()
    event.stopPropagation()
    
    if (!this.hasDialogTarget) {
      console.error("No dialog target found!")
      return
    }

    this.dialogTarget.classList.remove("hidden")
    document.body.classList.add("dialog-open")
  }

  close(event) {
    console.log("Close called", event)
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }
    this.dialogTarget.classList.add("hidden")
    document.body.classList.remove("dialog-open")
  }

  handleKeyPress(event) {
    if (event.key === "Escape") {
      this.close()
    }
  }
} 