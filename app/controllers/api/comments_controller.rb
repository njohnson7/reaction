class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :create, status: :created
    else
      @error = @comment.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = 'Invalid comment data provided'
    render 'api/shared/error', status: :unprocessable_entity
  end

  private

  def comment_params
    params.permit(comment: :text)[:comment].merge({card_id: params.require(:card_id)})
  end
end
