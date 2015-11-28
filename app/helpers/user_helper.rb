module UserHelper
  def user_resource_name
    :user
  end

  def user_resource
    @resource ||= User.new
  end

  def user_devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end

  def user_resource_class
    user_resource.class
  end
end
