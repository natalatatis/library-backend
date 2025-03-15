# Library API

## Description
This is a simple API for managing books. It allows users to retrieve, add, update, and delete books.


## Preview  
[Link](https://codesandbox.io/p/devbox/library-backend-k46f8r) 

## Running the Project Locally

### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [Postman](https://www.postman.com/) (optional for testing API requests)

### Installation Steps
1. Clone the repository:
   ```sh
	git clone https://github.com/natalatatis/library-backend
   ```
2. Navigate to the project folder:
   ```sh
   cd library-backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   npm start
   ```
5. The API will run on `http://localhost:3000`

---

## API Endpoints & Example Requests

### Get All Books  
**GET** `/books`  
#### Example:
```sh
GET http://localhost:3000/books
```

---

### Get a Book by ID  
**GET** `/books/:id`  
#### Example:
```sh
GET http://localhost:3000/books/1
```

---

### Add a New Book  
**POST** `/books`  
#### Example:
```sh
POST http://localhost:3000/books
Content-Type: application/json

{
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee",
  "genre": "Fiction"
}
```

---

### Update an Existing Book  
**PUT** `/books/:id`  
#### Example:
```sh
PUT http://localhost:3000/books/1
Content-Type: application/json

{
  "title": "1984 (Updated)",
  "author": "George Orwell",
  "genre": "Dystopian"
}
```

---

### Delete a Book  
**DELETE** `/books/:id`  
#### Example:
```sh
DELETE http://localhost:3000/books/1
```

🛠 Technologies Used

Node.js + Express.js

Postman (for API testing)
