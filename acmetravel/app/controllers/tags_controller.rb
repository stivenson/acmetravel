class TagsController < ApplicationController
    def index
        items = Tag.all
        render json: items, :status => 200
    end
end
