# Todo Application

A full-stack Todo application built with Spring Boot and React.

## Backend

The backend is built with:

- Spring Boot 3.2.3
- Spring Data JPA
- H2 Database
- Gradle

### Prerequisites

- Java 17 or higher
- Gradle

### Running the Backend

1. Navigate to the project directory:

   ```bash
   cd todo-app
   ```

2. Build the project:

   ```bash
   ./gradlew build
   ```

3. Run the application:
   ```bash
   ./gradlew bootRun
   ```

The backend will be available at `http://localhost:8080`

## API Endpoints

- `GET /api/todos` - Get all todos
- `GET /api/todos/{id}` - Get a specific todo
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/{id}` - Update a todo
- `DELETE /api/todos/{id}` - Delete a todo
- `PATCH /api/todos/{id}/toggle` - Toggle todo completion status

## Frontend (Coming Soon)

The frontend will be built with:

- React
- TypeScript
- Vite
- Axios
- React Query

## License

MIT
