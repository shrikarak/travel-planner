# AI Travel Planner

This is a web application for an AI agent based travel planner. The backend is built with Node.js and Express, the database is PostgreSQL, and the frontend is built with Angular.

## Features

*   **Personalized Itinerary Builder:** Create and manage trips with detailed day-by-day plans.

## Tech Stack

*   **Backend:** Node.js, Express
*   **Frontend:** Angular
*   **Database:** PostgreSQL
*   **ORM:** Sequelize

## Getting Started

### Prerequisites

*   Node.js and npm
*   Angular CLI
*   PostgreSQL

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shrikarak/travel-planner.git
    cd travel-planner
    ```

2.  **Backend Setup:**
    ```bash
    cd backend
    npm install
    ```
    *   Create a `.env` file in the `backend` directory with the following content, replacing the values with your PostgreSQL credentials:
        ```
        DB_HOST=localhost
        DB_USER=postgres
        DB_PASSWORD=password
        DB_NAME=travel_planner_db
        PORT=3000
        ```
    *   Create the database `travel_planner_db` in PostgreSQL.
    *   Synchronize the database and create sample data:
        ```bash
        npm run seed
        ```
    *   Start the backend server:
        ```bash
        npm start
        ```

3.  **Frontend Setup:**
    ```bash
    cd ../frontend
    npm install
    ```
    *   Start the frontend development server:
        ```bash
        ng serve
        ```

4.  **Access the application:**
    Open your browser and navigate to `http://localhost:4200`.

## API

### Endpoints

*   `GET /api/trips`: Get all trips.
*   `GET /api/trips/:id`: Get a trip by ID.
*   `POST /api/trips`: Create a new trip.
*   `PUT /api/trips/:id`: Update a trip.
*   `DELETE /api/trips/:id`: Delete a trip.
*   `GET /api/itinerary-items`: Get all itinerary items.
*   `POST /api/itinerary-items`: Create a new itinerary item.
*   `DELETE /api/itinerary-items/:id`: Delete an itinerary item.

## Future Work

*   **Real-Time Data Integration:** Connect to APIs for live flight/hotel info, maps, weather, and local events.
*   **Recommendation Engine:** Suggest activities, dining, and routes using ML.
*   **NLP/Chatbot:** Handle natural language queries and voice commands.
*   **Budget & Expense Management:** Estimate costs and track spending.
*   **Collaboration:** Allow users to share and co-plan trips.
*   **Offline Support:** Save itineraries and maps for use without internet.
