class Api::ListsController < ApplicationController

  def update
    @list = List.find(params[:id])

    if @list.update(list_params)
      render :update
    else
      @error = @list.errors.full_message.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActiveRecord::ParamaterMissing
    @error = 'Invalid list data provided'
    render 'api/shared/error', status: :not_found
  end


private

  def list_params
    params.require(:list).permit(:title)
  end
end