class NotesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_note, only: [:edit, :update, :destroy]

  def index
    @notes = current_user.notes.order(created_at: :desc)
  end

  def new
    @note = current_user.notes.build
  end

  def new_modal
    @note = current_user.notes.build
  end

  def edit
    render :new_modal
  end

  def create
    @note = current_user.notes.build(note_params)
    if @note.save
      redirect_to dashboard_path
    else
      render :new_modal
    end
  end

  def update
    if @note.update(note_params)
      redirect_to dashboard_path
    else
      render :new_modal
    end
  end

  def destroy
    @note.destroy
    redirect_to dashboard_path, notice: 'Note was successfully deleted.'
  end

  def show
    @note = current_user.notes.find(params[:id])
    render partial: "show_modal", locals: { note: @note }
  end

  private

  def set_note
    @note = current_user.notes.find(params[:id])
  end

  def note_params
    params.require(:note).permit(:title, :content)
  end
end 