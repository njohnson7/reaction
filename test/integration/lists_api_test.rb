require 'test_helper'

class ListsAPITest < ActionDispatch::IntegrationTest
  class GetListsTest < ActionDispatch::IntegrationTest
    setup do
      @board = Board.create title: 'board'
      @list = List.create title: 'list', board: @board  
    end

    test "returns a json array" do
      get "/api/lists",
        headers: { 'Accept' => 'application/json '}
      assert_match /\[.*\{.*\}\]/, response.body
    end
  end

  class GetListTest < ActionDispatch::IntegrationTest
    setup do
      @board = Board.create title: 'BOARD'
      @list = List.create title: 'LIST', board: @board
      card = Card.create title: 'CARD', board: @board, list: @list
    end

    test "returns a list with correct title" do
      get "/api/lists/#{@list.id}.json",
        headers: { 'Accept' => 'application/json' }
        assert_match /LIST/, response.body
    end

    test "returns a json with correct structure" do
      get "/api/lists/#{@list.id}.json",
        headers: { 'Accept' => 'application/json' }

      list = JSON.parse(response.body)
      assert_equal list["id"], @list.id
      assert list["title"].is_a?(String)
      assert_equal list["board_id"], @board.id
      assert list["created_at"].is_a?(String)
      assert list["updated_at"].is_a?(String)
      assert_equal list.length, 5
    end
  end

  class PostListTest < ActionDispatch::IntegrationTest
    class ValidDataTest < ActionDispatch::IntegrationTest
      setup do
        @board = Board.create title: 'BOARD'
        @request_data = {
          params: { "board_id": @board.id, "list": { "title": "My list" } },
          headers: { 'Accept' => 'application/json' }
        }
      end

      test "creates a new list" do
        assert_equal 0, List.count

        post "/api/lists", @request_data


        assert_equal 1, List.count
      end

      test "returns a 201" do
        post "/api/lists", @request_data

        assert_response 201
      end

      test "returns the new list" do
        new_list = { title: "RETURN THIS LIST" }

        post "/api/lists",
          params: { "board_id": @board.id, "list": new_list },
          headers: { 'Accept' => 'application/json' }

        assert_equal List.first.to_json, response.body
      end
    end

    class PutListTest < ActionDispatch::IntegrationTest
      setup do
        @board = Board.create title: 'BOARD'
        @list = List.create title: 'LIST', board: @board
      end

      test "returns the updated list" do
        updated_list = { title: "UPDATED LIST" }

        put "/api/lists/#{@list.id}",
          params: updated_list,
          headers: { 'Accept' => 'application/json' }

        assert_equal JSON.parse(List.first.to_json), JSON.parse(response.body)
        assert_equal List.first.title, "UPDATED LIST"
      end
    end

    class InvalidDataTest < ActionDispatch::IntegrationTest
      setup do
        @board = Board.create title: 'BOARD'
      end

      test "returns a 422" do
        post "/api/lists",
          params: { "board_id": @board.id, "list": { title: '' } },
          headers: { 'Accept' => 'application/json' }

        assert_response 422
      end
    end
  end
end