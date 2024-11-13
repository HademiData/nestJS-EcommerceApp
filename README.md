# NestJS E-commerce API
Welcome to the NestJS E-commerce API, a backend application built with NestJS, Prisma, and PostgreSQL to provide a foundation for an E-commerce platform.


# Features

- **User Authentication:**
  - Secured user authentication with bcrypt for password hashing.
  - Passport local and JWT strategies for handling authentication.

- **Database Integration:**
  - Prisma as the ORM for interacting with the PostgreSQL database.
  - Models and migrations for handling user data, products, orders, and more.

- **Authorization and Guards:**
  - Role-based access control using NestJS guards.
  - Authorization checks for protected routes.
- **Product Management:**
  - CRUD operations for managing products.
  - Product categories and attributes.  

- **User Management:**
  - Registration, login, and profile management.
  - User roles and permissions.

- **Order Processing:**
  - Create, view, and manage orders.
  - Order status updates.

- **Security:**
  - Input validation using NestJS pipes.
  - Protection against common security vulnerabilities.

## Prerequisites

- Node.js and npm installed.
- PostgreSQL database server.
- Prisma CLI installed globally:

  ```bash
  npm install -g prisma

**Getting Started**
1.Clone the Repository:

  bash
  Copy code
  git clone https://github.com/yourusername/nest-ecommerce-api.git
  cd nest-ecommerce-api
2. Install Dependencies:

  bash
  Copy code
  npm install

3.Set Up Environment Variables:
  
  Create a .env file based on .env.example and update the values.
  
4.Database Migration:

 Run Prisma migrations to initialize the database schema:
  bash
  Copy code
  npx prisma migrate dev

5.Run the Application:
  
  bash
  Copy code
  npm run start
  The API will be accessible at http://localhost:3000.

**Usage**
  Explore the provided API endpoints using tools like Postman or curl.
  Refer to the Swagger/OpenAPI documentation at /api for detailed information about available routes.
  Testing

6. Run tests using:
  
  bash
  Copy code
  npm run test
Contributing
If you'd like to contribute to the project, please follow our Contribution Guidelines.


Contact
For any inquiries or issues, please contact afolabiwale262@gmail.com.

Happy coding!



<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
