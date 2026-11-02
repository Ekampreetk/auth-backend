# JWT Authentication Backend

A RESTful backend implementing secure user authentication — registration, login, and protected routes — using JWT and bcrypt.

## Features

- User registration with hashed passwords (bcrypt, salted)
- Login issuing a signed JWT
- Protected routes guarded by JWT verification middleware
- MVC architecture: controllers, models, routes cleanly separated
- MongoDB Atlas for cloud-hosted persistence
- Environment-based configuration for secrets (dotenv)

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Auth:** jsonwebtoken, bcrypt
- **Middleware:** cookie-parser

## API Endpoints

| Method | Endpoint         | Description                          | Auth Required |
|--------|------------------|----------------------------------------|:---:|
| POST   | `/register`       | Create a new user account              | No |
| POST   | `/login`           | Authenticate and receive a JWT         | No |
| GET    | `/protected`       | Example protected route                | Yes |

*(Adjust the table above to match your actual route names in `src/routes/auth.routes.js`.)*

## How Authentication Works

1. **Register:** password is hashed with bcrypt before being stored — the plaintext password is never saved.
2. **Login:** submitted password is compared against the stored hash using bcrypt; on success, a JWT is signed containing the user's identity and returned to the client.
3. **Protected routes:** an authentication middleware verifies the JWT on incoming requests before allowing access, rejecting missing or invalid tokens.

## Project Structure

```
src/
├── app.js                      # Express app setup
├── db/db.js                    # MongoDB connection
├── controllers/auth.controller.js  # Registration & login logic
├── models/user.model.js        # Mongoose user schema
└── routes/auth.routes.js       # Route definitions
server.js                       # Entry point
```

## Running Locally

```bash
git clone https://github.com/Ekampreetk/auth-backend.git
cd auth-backend
npm install
```

Create a `.env` file in the root with:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Then start the server:

```bash
node server.js
```

Server runs on `http://localhost:3000`.
