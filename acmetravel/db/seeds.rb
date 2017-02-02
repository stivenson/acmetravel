# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Role.create(id: 1, name: 'Administrador')
Role.create(id: 2, name: 'Empleado')

User.create(cc: 4545333, names: 'Stivenson', surnames: "Rincon", email: "admin1@gmx.com", password: "123456", role_id: 1)
User.create(cc: 5545333, names: 'Luis', surnames: "Rincon", email: "emple1@gmx.com", password: "123456", role_id: 2)
