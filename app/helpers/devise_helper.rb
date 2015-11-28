module DeviseHelper
  include CollectorHelper, UserHelper
  def devise_error_messages!
    return "" if user_resource.errors.empty? && collector_resource.errors.empty?

    if user_resource.errors.present?
      messages = user_resource.errors.full_messages.map { |msg| content_tag(:li, msg) }.join
      sentence = I18n.t("errors.messages.not_saved",
                        :count => user_resource.errors.count,
                        :resource => user_resource.class.model_name.human.downcase)

      html = <<-HTML
      <div id="error_explanation">
        <h2>#{sentence}</h2>
        <ul>#{messages}</ul>
      </div>
      HTML

      html.html_safe

    elsif collector_resource.errors.empty?
      messages = collector_resource.errors.full_messages.map { |msg| content_tag(:li, msg) }.join
      sentence = I18n.t("errors.messages.not_saved",
                        :count => collector_resource.errors.count,
                        :resource => collector_resource.class.model_name.human.downcase)

      html = <<-HTML
      <div id="error_explanation">
        <h2>#{sentence}</h2>
        <ul>#{messages}</ul>
      </div>
      HTML

      html.html_safe
    end

  end

  def devise_error_messages?
    user_resource.errors.present? || collector_resource.errors.present?
  end

end
