# One Key Backend

A secure backend REST API service built with Express.js, MongoDB, and TypeScript for user authentication and management.

## Features

- User authentication (login and registration)
- Secure password hashing with bcrypt
- MongoDB database integration
- RESTful API architecture
- TypeScript for type safety
- JWT-based authentication

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Programming language
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **Bcrypt** - Password hashing
- **UUID** - Unique token generation
- **Validator** - Input validation

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── controllers/   # Request handlers
│   │   └── models/        # Database models
│   ├── config/           # Configuration files
│   ├── routes/           # API route definitions
│   └── index.ts          # Application entry point
├── .env                  # Environment variables
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## API Endpoints

### Authentication

- **POST /user/register** - Register a new user
- **POST /user/login** - Login a user

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB (local instance or Atlas URI)

### Installation

1. Clone the repository

   ```
   git clone <repository-url>
   cd one-key-be
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:

   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/one-key-db
   JWT_SECRET=your-secure-jwt-secret-key
   BYCRYPT_HASH=10
   ```

4. Start development server

   ```
   npm run dev
   ```

5. Build for production

   ```
   npm run build
   ```

6. Start production server
   ```
   npm start
   ```

## Project Features

- **Absolute Imports**: Uses path aliases for clean imports
- **TypeScript**: Full type safety across the codebase
- **Express.js RequestHandler**: Properly typed request handlers
- **MongoDB & Mongoose**: Schema-based data modeling
- **Error Handling**: Consistent API error responses

## Security Features

- Password hashing with bcrypt
- Token-based authentication
- Request validation
- Secure HTTP headers with CORS support
