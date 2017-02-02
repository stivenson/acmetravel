Rails.application.routes.draw do

    resources :users, :roles, :expenses, :travels, :tags, :tagsexpenses
    
    # Special  endpoints
    get "travels/employees/:idemployee", to: "travels#indexOfEmployee"
    get "expenses/travels/:idtravel", to: "expenses#indexOfTravel"
    get "tagsexpenses/expenses/:idexpense", to: "tagsexpenses#indexOfExpense"
    get "reports/tagsexpenses/importantTags", to: "tagsexpenses#importantTags"
    get "reports/users/expensesAll", to: "users#expensesAll"
    post "login", to: "users#showWithCredentials"

end
