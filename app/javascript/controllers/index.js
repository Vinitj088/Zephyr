// Import and register all your controllers from the importmap via controllers/**/*_controller
import { application } from "./application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Remove any existing note modal registrations
import NoteDialogController from "./note_dialog_controller"
import SlideController from "./slide_panel_controller"
import SimpleMDEController from "./simplemde_controller"
import DebugController from "./debug_controller"

application.register("note-dialog", NoteDialogController)
application.register("slide-panel", SlideController)
application.register("simplemde", SimpleMDEController)
application.register("debug", DebugController)
