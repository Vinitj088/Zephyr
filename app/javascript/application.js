// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import "@hotwired/turbo-rails"
import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-loading"

window.Stimulus = Application.start()

// Import controllers
import NoteDialogController from "./controllers/note_dialog_controller"
window.Stimulus.register("note-dialog", NoteDialogController)

const context = require.context("./controllers", true, /\.js$/)
Stimulus.load(definitionsFromContext(context))
