class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :users_size

  rescue_from CanCan::AccessDenied do |exception|
    redirect_to root_path, :alert => exception.message
  end

  def users_size
    @users = User.all
  end
end
