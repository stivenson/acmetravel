class ApplicationController < ActionController::API
  	# protect_from_forgery with: :exception

	after_filter  :set_access_control_headers

	def set_access_control_headers
	  headers['Access-Control-Allow-Origin'] = '*'
	end   
  	
end
