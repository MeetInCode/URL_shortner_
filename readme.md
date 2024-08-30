
# URL Shortener

This is a simple URL Shortener application built with Node.js, Express, and MongoDB. The application allows users to shorten URLs, redirect shortened URLs to their original destinations, and track analytics for each shortened URL.


## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (v4.4 or later)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Set up your MongoDB database:**

   Ensure MongoDB is installed and running on your local machine. The default connection string used is `mongodb://localhost:27017/shorturl`.

### Running the Application

To start the application, run:

```bash
npm start
```

The application will be accessible at `http://localhost:3000`.

## Project Structure

```plaintext
url-shortener/
├── controllers/
│   └── controllers.js          # Contains the business logic for URL generation, redirection, and analytics
├── models/
│   └── model.js                # Defines the URL schema and database model
├── routes/
│   ├── routes.js               # Defines the API routes and their corresponding controllers
│   └── staticrouter.js         # Handles the front-end routes
├── views/
│   └── homepage.ejs            # The EJS template for rendering the homepage
├── connect.js                  # Database connection setup
├── index.js                    # Main entry point for the application
└── package.json                # Project metadata and dependencies
```

## Usage

1. **Open the application in your browser:**

   Go to `http://localhost:3000` to access the homepage.

2. **Generate a short URL:**

   - Enter the original URL in the input field and click "Generate".
   - The generated short URL will be displayed on the page.

3. **View analytics for a short URL:**

   - Visit `http://localhost:3000/url/analytics/{shortid}` to see the number of clicks and timestamp history for a specific short URL.

## API Endpoints

- **POST /url**: Generate a new short URL.
  - **Request Body**: `{ "url": "https://example.com" }`
  - **Response**: The shortened URL ID.

- **GET /url/:shortid**: Redirect to the original URL using the short ID.
  - **Params**: `shortid` (the unique short ID)

- **GET /url/analytics/:shortid**: Get analytics for a specific short URL.
  - **Params**: `shortid` (the unique short ID)
  - **Response**: JSON object containing the total clicks and visit history.

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [EJS](https://ejs.co/) - Embedded JavaScript templates

