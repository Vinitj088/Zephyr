import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["panel"]

  connect() {
    this.panelTarget.addEventListener("turbo:submit-end", () => {
      this.close()
    })
  }

  open() {
    this.panelTarget.classList.add("panel-open")
  }

  close() {
    this.panelTarget.classList.remove("panel-open")
  }
} 