import { Controller } from "@hotwired/stimulus"
import SimpleMDE from "simplemde"

export default class extends Controller {
  connect() {
    this.editor = new SimpleMDE({ 
      element: this.element,
      spellChecker: false,
      autofocus: true,
      toolbar: [
        "bold", 
        "italic", 
        "heading", 
        "|",
        "quote", 
        "unordered-list", 
        "ordered-list", 
        "|",
        "link", 
        "image", 
        "code"
      ],
      status: ["lines", "words"],
      renderingConfig: {
        singleLineBreaks: false,
        codeSyntaxHighlighting: true,
      }
    })
  }

  disconnect() {
    if (this.editor) {
      this.editor.toTextArea()
      this.editor = null
    }
  }
} 