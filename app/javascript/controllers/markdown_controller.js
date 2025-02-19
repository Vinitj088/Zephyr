import { Controller } from "@hotwired/stimulus"
import MarkdownIt from "markdown-it"

export default class extends Controller {
  static targets = ["editor", "preview", "editorContainer", "previewContainer", "toggleButton"]
  
  connect() {
    console.log("Markdown controller connected")
    this.md = new MarkdownIt()
    this.updatePreview()
  }

  togglePreview(event) {
    console.log("Toggle preview clicked")
    event.preventDefault()
    const button = event.currentTarget
    const icon = button.querySelector('i')
    
    this.editorContainerTarget.classList.toggle('d-none')
    this.previewContainerTarget.classList.toggle('d-none')
    
    if (this.previewContainerTarget.classList.contains('d-none')) {
      icon.classList.remove('fa-eye-slash')
      icon.classList.add('fa-eye')
      button.classList.remove('active')
    } else {
      icon.classList.remove('fa-eye')
      icon.classList.add('fa-eye-slash')
      button.classList.add('active')
      this.updatePreview()
    }
  }

  updatePreview() {
    console.log("Updating preview")
    const markdown = this.editorTarget.value
    console.log("Markdown content:", markdown)
    const html = this.md.render(markdown)
    this.previewTarget.innerHTML = html
  }
} 