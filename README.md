# ToDo Server Project

This project is a simple server application for managing a task list. It provides basic CRUD functions for creating, reading, updating, and deleting todo items.

##The frontend is attached to the project: 

## Technologies used
- Nest.js
- Sequalize
- PostgreDB

## Installation
1. Clone the repository
2. Install the dependencies by running npm install
3. Configure the MongoDB database and update the connection string in config.js
4. Start the server by running npm start

## API Endpoints
- GET /tasks - Get all current items
- PUBLISH /Tasks - Create a new task item
- GET /tasks/:id - Get a specific task element
- ADD /tasks/:id - Update a specific todo element
- DELETE /tasks/:id - Delete a specific todo element

## Usage
Tools such as Postman or curl can be used to interact with API endpoints. Here is an example of using curl:

- Get all current tasks:
curl http://localhost:5000/todos

## License
This project is licensed under the MIT license.