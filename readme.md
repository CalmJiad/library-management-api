## Library Management API with Express, TypeScript & MongoDB

This project is a simple library management API built using Express, TypeScript, MongoDB, and Mongoose. It provides endpoints to manage books, authors, and users in a library system.

## Tech Stack

- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MongoDB (with Mongoose ODM)
- **Validation**: Mongoose Schema validations, Zod
- **API Tool**: Postman / Thunder Client (for testing)

---

## Project Structure

```
src/
│
├── modules/
│   ├── book/
│   │   ├── book.model.ts
│   │   ├── book.interface.ts
│   │   ├── book.validation.ts
│   │   ├── book.controller.ts
│   │   └── book.route.ts
│   │
│   └── borrow/
│       ├── borrow.model.ts
│       ├── borrow.interface.ts
│       ├── borrow.validation.ts
│       ├── borrow.controller.ts
│       └── borrow.route.ts
│
├── middlewares/
│   ├── validateRequest.ts
│   ├── errorHandler.ts
│   └── auth.ts
│
├── utils/
│   ├── genreValidator.ts
│
├── config/
│   └── index.ts
│
├── app.ts
└── server.ts
```

## Features

- CRUD operations for books
- Borrowing and returning books
- Input validation and error handling
- Genre validation for books
- Modular structure for easy maintenance
- Extra layer of validation for incoming requests with Zod
- Simple functionalities with Mongoose Statics and Hooks

## How to Use

1. Clone the repository
2. Install dependencies

## How to Configure

1. Create a `.env` file in the root directory and add your MongoDB connection string:

```
MONGODB_URI=mongodb://localhost:27017/library_management
```

2. Start the development server:

```
npm run dev
```

## How to Test

1. Use Postman or Thunder Client to test the API endpoints.
2. Import the provided Postman collection for easier testing.

## Have questions?

Feel free to reach out!

Happy coding!
