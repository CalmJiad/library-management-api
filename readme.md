## Library Management API with Express, TypeScript & MongoDB

This project is a simple library management API built using Express, TypeScript, MongoDB, and Mongoose. It provides endpoints to manage books, authors, and users in a library system.

## Tech Stack

- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MongoDB (with Mongoose ODM)
- **Validation**: Mongoose Schema validations
- **API Tool**: Postman / Thunder Client (for testing)

---

## Project Structure

```
src/
│
├── modules/
│   └── book/
│       ├── book.model.ts
│       ├── book.interface.ts
│       ├── book.validation.ts
│       ├── book.controller.ts
│       └── book.route.ts
│
├── middlewares/
│   ├── validateRequest.ts
│   ├── errorHandler.ts
│   └── auth.ts
│
├── config/
│   └── index.ts
│
├── app.ts
└── server.ts
```
