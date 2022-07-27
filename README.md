# livrariaApi

## <h2 align="center"> About </h2>

This project is a book API with a complete CRUD for a bookstore, being able to consult all registered books, books that belong to a country, a specific book, create new books with conditions not to duplicate information, update a book existing or even remove it.

The stacks used were:
- node.js
- express
- Sequelize
- MySQL
- Rest API Axios

## <h2 align="center">To use this API, do:</h2>

### Clone to your machine: 
- git clone https://github.com/jrbigmon/livrariaApi.git

### Install the libraries with the command:
- npm install OR npm i

### Go to file ".env.example" and insert the values it your server, following the pattern of the existing values:
- DB_USER= "insert you user"
- DB_PASS= "if exists password in your server database, insert here"   
- DB_NAME=livraria
- DB_HOST= "for default, localhost or your IP"
- DB_DIALECT=mysql
- DB_PORT=3306

### Go to xampp and run the server on the port 3306
- if you not installed xampp, it's easy: https://www.apachefriends.org/pt_br/index.html

### Create the database:
- npx sequelize db:create

### Create table in database:
- npx sequelize db:migrate

### insert the books in the table:
- npx sequelize db:seed:all

## <h2 align="center"> using the API </h2>

### GET
- In your browser access the following routes for this method:
#### For all books:
- http://localhost:3000/api/v1/livros/all

#### For all books from country:
- http://localhost:3000/api/v1/livros/all/{code_country}
- http://localhost:3000/api/v1/livros/all/gb

#### For one book: 
- http://localhost:3000/api/v1/livros/{number}
- http://localhost:3000/api/v1/livros/50

### POST, PUT or DELETE
- In Postman or ThunderClient, do:
#### Create new book:
- http://localhost:3000/api/v1/livros/create
#### Update a book:
- http://localhost:3000/api/v1/livros/{number}/update/
- http://localhost:3000/api/v1/livros/50/update/
#### Delete a book:
- http://localhost:3000/api/v1/livros/{number}/destroy
- http://localhost:3000/api/v1/livros/50/destroy

## <h2 align="center"> Conclusion </h2>
With this repository you will be able to access a variety of books and information about them, being able to correct any title errors, updating the country of origin, removing a book you don't like or even creating new books that you like.
#### "With big powers come big responsibilities" (Benjamin Parker)
