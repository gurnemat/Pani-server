## Pani Server

### API Documentation

## API Overview

**Base URL:**  
`http://localhost:8000`

**Authentication:**  
Currently, there is no authentication required to access these endpoints.

## Endpoints

### 1. Get All Orders

**Endpoint URL:**  
`/api/order`

**HTTP Method:**  
GET

**Description:**  
Retrieves a list of all orders.

**Response Format:**
```json
[
  {
    "_id": "string",
    "deliveryDate": "string",
    "quantity": "number",
    "price": "number",
    "name": "string",
    "deliveryAddress": "string",
    "phone": "string",
    "email": "string",
    "scheduleRepeat": "string",
    "repeatEvery": "string",
    "repeatUnit": "string",
    "repeatOn": "string",
    "totalAmount": "number"
  }
]
```

**Error Codes:**
- `200`: Success
- `500`: Internal Server Error

**Example:**

**Request:**
```plaintext
GET /api/order
```

**Response:**
```json
[
  {
    "_id": "60d0fe4f5311236168a109ca",
    "deliveryDate": "2024-06-15",
    "quantity": 10,
    "price": 9.99,
    "name": "John Doe",
    "deliveryAddress": "1764 Bayfield St",
    "phone": "1234567891",
    "email": "johndoe@gmail.com",
    "scheduleRepeat": "custom",
    "repeatEvery": "2",
    "repeatUnit": "week",
    "repeatOn": "monday",
    "totalAmount": 99.9
  }
]
```

### 2. Create Order

**Endpoint URL:**  
`/api/order`

**HTTP Method:**  
POST

**Description:**  
Creates a new order and sends a confirmation email to the provided email addresses.

**Request Body:**
```json
{
  "deliveryDate": "string",
  "quantity": "number",
  "price": "number",
  "name": "string",
  "deliveryAddress": "string",
  "phone": "string",
  "email": "string",
  "scheduleRepeat": "string",
  "repeatEvery": "string",
  "repeatUnit": "string",
  "repeatOn": "string",
  "totalAmount": "number"
}
```

**Response Format:**
```json
{
  "message": "Order Placed! Check your email"
}
```

**Error Codes:**
- `200`: Success
- `500`: Internal Server Error

**Example:**

**Request:**
```plaintext
POST /api/order
Content-Type: application/json

{
  "deliveryDate": "2024-06-15",
  "quantity": 10,
  "price": 9.99,
  "name": "John Doe",
  "deliveryAddress": "1764 Bayfield St",
  "phone": "1234567891",
  "email": "johndoe@gmail.com",
  "scheduleRepeat": "custom",
  "repeatEvery": "2",
  "repeatUnit": "week",
  "repeatOn": "monday",
  "totalAmount": 99.9
}
```

**Response:**
```json
{
  "message": "Order Placed! Check your email"
}
```

### 3. Get Order by ID

**Endpoint URL:**  
`/api/order/:id`

**HTTP Method:**  
GET

**Description:**  
Retrieves the details of a specific order by its ID.

**Request Parameters:**
- `id` (path parameter, required): The ID of the order to retrieve.

**Response Format:**
```json
{
  "_id": "string",
  "deliveryDate": "string",
  "quantity": "number",
  "price": "number",
  "name": "string",
  "deliveryAddress": "string",
  "phone": "string",
  "email": "string",
  "scheduleRepeat": "string",
  "repeatEvery": "string",
  "repeatUnit": "string",
  "repeatOn": "string",
  "totalAmount": "number"
}
```

**Error Codes:**
- `200`: Success
- `404`: Order Not Found
- `500`: Internal Server Error

**Example:**

**Request:**
```plaintext
GET /api/order/60d0fe4f5311236168a109ca
```

**Response:**
```json
{
  "_id": "60d0fe4f5311236168a109ca",
  "deliveryDate": "2024-06-15",
  "quantity": 10,
  "price": 9.99,
  "name": "John Doe",
  "deliveryAddress": "1764 Bayfield St",
  "phone": "1234567891",
  "email": "johndoe@gmail.com",
  "scheduleRepeat": "custom",
  "repeatEvery": "2",
  "repeatUnit": "week",
  "repeatOn": "monday",
  "totalAmount": 99.9
}
```

### 4. Update Order

**Endpoint URL:**  
`/api/order/:id`

**HTTP Method:**  
PUT

**Description:**  
Updates an existing order by its ID.

**Request Parameters:**
- `id` (path parameter, required): The ID of the order to update.

**Request Body:**
```json
{
  "deliveryDate": "string",
  "quantity": "number",
  "price": "number",
  "name": "string",
  "deliveryAddress": "string",
  "phone": "string",
  "email": "string",
  "scheduleRepeat": "string",
  "repeatEvery": "string",
  "repeatUnit": "string",
  "repeatOn": "string",
  "totalAmount": "number"
}
```

**Response Format:**
```json
{
  "message": "Order updated successfully"
}
```

**Error Codes:**
- `200`: Success
- `404`: Order Not Found
- `500`: Internal Server Error

**Example:**

**Request:**
```plaintext
PUT /api/order/60d0fe4f5311236168a109ca
Content-Type: application/json

{
  "deliveryDate": "2024-06-20",
  "quantity": 12,
  "price": 9.99,
  "name": "John Doe",
  "deliveryAddress": "1764 Bayfield St",
  "phone": "1234567891",
  "email": "johndoe@gmail.com",
  "scheduleRepeat": "custom",
  "repeatEvery": "2",
  "repeatUnit": "week",
  "repeatOn": "monday",
  "totalAmount": 119.88
}
```

**Response:**
```json
{
  "message": "Order updated successfully"
}
```

