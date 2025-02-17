module FlashHelper
  def render_flash_messages
    return unless request.flash.any?

    request.flash.each do |type, message|
      concat(
        content_tag(:div, class: "alert #{type == 'notice' ? 'alert-success' : 'alert-error'}") do
          message
        end
      )
    end
    nil
  end
end 