require 'test_helper'

class TagsexpensesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get tagsexpenses_index_url
    assert_response :success
  end

  test "should get show" do
    get tagsexpenses_show_url
    assert_response :success
  end

  test "should get create" do
    get tagsexpenses_create_url
    assert_response :success
  end

  test "should get update" do
    get tagsexpenses_update_url
    assert_response :success
  end

  test "should get destroy" do
    get tagsexpenses_destroy_url
    assert_response :success
  end

end
