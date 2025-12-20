# Component Diagram
Route
Maps incoming HTTP requests to the correct controller action.

Controller
Handles HTTP concerns (request parsing, response formatting, status codes).

Service
Contains business logic and application rules.

Repository
Delivers data from data store to service

Data Store
In-memory storage.

# API Overview
GET /products

Request/Response shape:
* No request body

Response:
Array of product objects

GET /product/{id}

Request:
* Id in the URL parameter

Response
{
    id: string,
    name: string,
    price: number,
    description?: string
}

# Data Flow
1. Client sends GET /product/{id}
2. Route maps the request to the Product Controller
3. Controller validates the request format
4. Controller calls the Service with the product ID
5. Service requests product data from the Repository
6. Repository fetches data from the Data Store
7. Data flows back through Repository → Service → Controller
8. Controller returns an HTTP response to the client

# Validation Rules
Controller
* Ensures id is present in the URL
* Ensures id is a valid format (e.g., integer)
* Returns 400 Bad Request if validation fails

Service
* Checks if a product with the given id exists
* Returns 404 Not Found if the product does not exist

# Error Handling Rules
400 Bad Request
* Missing or invalid id
* Malformed request

404 Not Found
* Product with the given id does not exist

500 Internal Server Error
* Unexpected server-side errors (e.g., database failure, unhandled exceptions)