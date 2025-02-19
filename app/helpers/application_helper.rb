module ApplicationHelper
  def render_markdown(text)
    return '' if text.blank?
    
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML,
      autolink: true,
      tables: true,
      fenced_code_blocks: true,
      strikethrough: true
    )
    markdown.render(text).html_safe
  end
end
