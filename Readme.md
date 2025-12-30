
# Contact Manager Backend

## Overview
A backend service for managing contacts, providing REST API endpoints for CRUD operations.

## Features
- Create, read, update, and delete contacts
- Data persistence and validation
- RESTful API design

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation
```bash
npm install
```

### Running the Server
```bash
npm start
```

The server will run on `http://localhost:3000` by default.

## API Endpoints
- `GET /contacts` - Retrieve all contacts
- `GET /contacts/:id` - Retrieve a specific contact
- `POST /contacts` - Create a new contact
- `PUT /contacts/:id` - Update a contact
- `DELETE /contacts/:id` - Delete a contact

## Project Structure
```
├── src/
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── server.js
├── package.json
└── README.md
```

## Contributing
Submit pull requests or report issues for improvements.

## License
MIT
