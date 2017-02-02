Rails.application.routes.draw do

    resources :users, :roles, :expenses, :travels, :tags, :tagsexpenses
    # Special 
    get "travels/employees/:idemployee", to: "travels#indexOfEmployee"
    get "expenses/travels/:idtravel", to: "expenses#indexOfTravel"
    get "tagsexpenses/expenses/:idexpense", to: "tagsexpenses#indexOfExpense"

end
