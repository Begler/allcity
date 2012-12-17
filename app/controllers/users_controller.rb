# encoding: utf-8
class UsersController < ApplicationController
  before_filter :authenticate_user!

  def index
    authorize! :index, @user, :message => 'Не авторизирован как администратор.'
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    authorize! :index, @user, :message => 'Не авторизирован как администратор.'
    @user = User.find(params[:id])
  end

  def update
    authorize! :update, @user, :message => 'Не авторизирован как администратор.'
    @user = User.find(params[:id])
    if @user.update_attributes(params[:user], :as => :admin)
      redirect_to users_path, :notice => "Пользователь обновлен."
    else
      redirect_to users_path, :alert => "Не удалось обновить пользователя."
    end
  end

  def destroy
    authorize! :destroy, @user, :message => 'Не авторизирован как администратор.'
    user = User.find(params[:id])
    unless user == current_user
      user.destroy
      redirect_to users_path, :notice => "Пользователь удален."
    else
      redirect_to users_path, :notice => "Вы не можете удалить себя."
    end
  end
end
