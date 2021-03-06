class Api::ListsController < ApplicationController

  def index
    @lists = List.all
    render :index
  end

  def create
    @list = List.new(list_params)

    if @list.save
      render :create, status: :created
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid list data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  def show
    @list = List.find(params[:id])
    render :show
  rescue ActiveRecord::RecordNotFound
    @error = 'List was not found'
    render 'api/shared/error', status: :unprocessable_entity
  end

  def update
    @list = List.find(params[:id])

    if @list.update(id: params[:id], board_id: @list.board_id, title: params[:title])
      render :update
    else
      @error = @list.errors.full_message.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = 'Invalid list data provided'
    render 'api/shared/error', status: :not_found
  end

  private

  def list_params
    params.permit(list: :title)[:list].merge({board_id: params.require(:board_id)})
  end
end
