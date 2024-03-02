# Bloggify

Bloggify is a blog upload application where users can post blogs, comment on blogs, and utilize user sign-in/sign-up functionality with JSON Web Token (JWT) authentication.

This repository serves as the backend for Bloggify.

## Setup and Running

### Prerequisites

- Node.js (version 12.x or higher)
- npm (version 6.x or higher)

### Environments Variables:

PORT=8000
MONGO_URL=<your_mongo_db_connection_url>

### Installation

1. Clone this repository or download the source code.
2. Navigate to the root directory of the project.
3. Install the dependencies by running:

```bash
npm install
```

### Starting the Service locally

Run the following command in the root directory of the project:

```bash
npm run dev
```

### Starting the Service on Production Server

Run the following command in the root directory of the project:

```bash
npm run start
```

The server will start and listen on `http://localhost:8000`.
