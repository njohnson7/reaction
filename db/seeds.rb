# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Board.destroy_all
List.destroy_all
Card.destroy_all

board1 = Board.create title: 'board1'
list1 = List.create title: 'list1', board: board1
list2 = List.create title: 'list2', board: board1

card1 = Card.create title: 'card1', board: board1, list: list1, labels: ['red', 'blue'], due_date: 3.days.ago
card2 = Card.create title: 'card2', board: board1, list: list1, labels: ['green'], due_date: 5.days.ago
card3 = Card.create title: 'card3', board: board1, list: list2, due_date: Date.today
card4 = Card.create title: 'card4', board: board1, list: list2, due_date: Date.today + 2
card5 = Card.create title: 'card5', board: board1, list: list2
