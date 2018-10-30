class Api::CardsController < ApplicationController
  def create
    @board_id = List.find(params[:list_id]).board_id
    @card = Card.new(card_params)

    if @card.save
      render :create, status: :created
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid card data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  def show
    @card = Card.find(params[:id])

    if @card.present?
      render :show, status: :ok
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :not_found
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid card data provided"
    render 'api/shared/error', status: :unprocessable_entity    
  end

  def update
    @card = Card.find(params[:id])

    if @card.update(card_update_params)
      render :update, status: :ok
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity      
    end
  rescue ActionController::ParameterMissing
    @error = 'Invalid card data provided'
    render 'api/shared/error', status: :not_found
  end

  private

  def card_update_params
    params.require(:card).permit(:title, :list_id, :position, :description, :due_date, :completed, :labels)
  end

  def card_params
    params.permit(card: :title)[:card]
          .merge({ 
            list_id: params.require(:list_id),
            board_id: @board_id })
  end
end