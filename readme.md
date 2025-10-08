- most popular engine is v8 engine
- nodejs is a runtime environment for javascript

- modules : play an important role in organizing, structureing, and reusing code efficiently. A module is a self contained block of code that can be exported amd importd into different parts of an applications.

- approach : helps developers to manage large projects, making them more scalable and maintainable

- file handling : to perform operations on files

- fs : file system : this functionality gives in nodejs only not in javascript

- url : Uniform Resource Locator
- for example :https://priyanka-saw.github.io/Portfolio/
  protocol:
  Hypertext
  Transfer
  Protocol
  Secure

  priyanka-saw.github.io/Portfolio/
  Domain - User Friendly Name of IP Address of my server

  ## http methods
    Get- when we want to get some data from the server
    post - when we want to send and mutate some data in server
    put - 
    patch - exit file ko update karna 
    delete

    <!-- Express is a framework -->

  - app is an instance of express
  - Method is an HTTP request method , in lowercase
  - Path is a path on the server
  - HANDLER is the functions executed when the routes is matched
  - Syntex app.method(path, Handler )

- Express giving a structure to the code and a maintainable at the code and giving the most used functionalitity that can used
  instead of using http we can use it in express

## Versioning
- ^4.18.2
- 1st part -> 4
- 2nd part -> 18
- 3rd part -> 2

- 3rd part (last part) - Minor Fixes (Optionals)
- latest -> 4.18.2

- 2nd part - Recommended Bug Fix (Security Bug)

  - latest -> 4.19.1

- 1st major Release - Major / Breaking Update
- 5

^(caret Symbol) - Install all Recommended and Minor Fixes Automatically
^4 it's fixe
^5 it's fix

## Restfull api 

- means following all the Http method and if we know that the css(client side server) is browser then we used to send json i.e, html formate it easily to fetch the data

## Postman
- is a tool(utility tool) i,e helpful for api testing and api documentations
- Built for teams, Postman makes it easy to collaborate, stay organized, and build secure, reliable APIs faster.

## MiddleWare
- it is just a function that run when the res and req executed

- perform some following tasks
- 1. execute any code
- 2. make any changes to the req, res object
- 3. End the request- response cycle
- 4. call the next middleware function in the stack

## HTTP Header
- HTTP (HyperText Transfer Protocol) is the foundation of data communication on the web. 
- It is a request-response protocol where a client (e.g., a browser) sends a request to a server, and the server - - - - responds with the requested resource or an error message. 
- HTTP operates over TCP/IP and is stateless, meaning each request is independent of others.

- HTTP headers are key-value pairs sent in HTTP requests and responses. 
- They provide additional information about the request or response, such as
- metadata, content type, encoding, caching policies, and authentication details. 
- Headers play a crucial role in controlling the behavior of HTTP transactions.


## Status Code

- HTTP response status codes indicate whether a specific HTTP request has been successfully completed.

- Informational responses (100 – 199)
- Successful responses (200 – 299)
- Redirection messages (300 – 399)
- Client error responses (400 – 499)
- Server error responses (500 – 599)

## Client error responses (400 – 499)

- 400 bad request
- 401 unauthorized request
- 402 payment requird
- 403 forbidden (login but try to payment)

### nodemon - for automatic stating the server

## MongoDB
-  storage, retrieval, and management ke liye use hota hai
- MongoDB is an open source, document-oriented, NoSql database whose data is stored in an organized format
- No-Sql Document based database
- it strong support for aggregation pipes
- works on BJSON(Binary Javascript Object Notation) format
- Best for Node Applications


- JSON files are written in text format.
- BSON files are written in binary.

## mongoose
- it is a package, we can connect to the mongodb using nodejs
- Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. 
- It provides a schema-based solution to model and structure data, bridging the gap between the application and the MongoDB database


# MVC (Model View Controller)

- Client (User) → Routes

- The user makes a request (GET, POST, PUT, DELETE) to a specific route.
Routes → Controllers

- The route forwards the request to the appropriate controller function.
Controllers → Models

- The controller processes the request and interacts with the database using models.
Models → Database

- The model defines the structure of data and performs database operations.
Database → Models → Controllers → Routes → Client

- The retrieved or updated data flows back through the same chain and returns a response to the user.

#### Client → Route → Controller → Model → Database → Model → Controller → Route → Client

## Server side rendering
### ejs
- Embedded JavaScript templating.

# Authentication
 - there is two patterns
 - 1. Statefull (Which maintain state or data or serer side)
 - client through server side uing username and password (that should we uniquie)

 #### how to transfer uid(unique id)
 - client through server side using cookies, responses, header(api mostly used)
 - it means we can send uid in the form of 3 ways 

 ### how the express flow
 - client through end point route using authentication middleware 
 - i,e checks for cookies, value or uid if valid, calls next() else rejects the request                     

 ## the way authentication works

 - 2. Stateless
 - removing the state
 - the token/ id is created for the user , kept the data in it, then locked it, so that people can read it but cannot read it 
  - for that purpose we can use it JWT

  ### jwt (json web token)
  - A JSON Web Token (JWT) is a secure way to send information between a client and a server. It is mainly used in web applications and APIs to verify users and prevent unauthorized access. A JWT is JSON data secured with a cryptographic signature.