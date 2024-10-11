# Assignment Submission Portal

## Objective
Build an assignment submission portal that allows users to upload assignments and admins to manage them, including reviewing, accepting, or rejecting submissions.

## User Roles
- **User**: Can register, log in, and upload assignments.
- **Admin**: Can register, log in, view assignment submissions, and accept or reject them.

## Functionality Overview

### For Users:
- Register and log in to the platform.
- Upload assignments to be reviewed by admins.

### For Admins:
- Register and log in.
- View assignments assigned to them.
- Accept or reject submissions.

## API Endpoints

### User Endpoints

1. **Register User**
   - **Endpoint**: `POST /register`
   - **Request Body**:
     ```json
     {
       "username": "Soumik",
       "password": "userPassword"
     }
     ```
   - **Response**:
     - Body: `{ "message": "User registered successfully" }`

2. **User Login**
   - **Endpoint**: `POST /login`
   - **Request Body**:
     ```json
     {
       "username": "Soumik",
       "password": "userPassword"
     }
     ```
   - **Response**:
     - Body: `{ "message": "Login successful" }`

3. **Upload Assignment**
   - **Endpoint**: `POST /upload`
   - **Request Body**:
     ```json
     {
       "userId": "Soumik",
       "task": "Hello World",
       "admin": "Alok"
     }
     ```
   - **Response**:
     - Body: `{ "message": "Assignment uploaded successfully" }`

4. **Fetch All Admins**
   - **Endpoint**: `GET /admins`
   - **Response**:
     - Body: `[ { "username": "Admin1" }, { "username": "Admin2" } ]`

### Admin Endpoints

1. **Register Admin**
   - **Endpoint**: `POST /register`
   - **Request Body**:
     ```json
     {
       "username": "Alok",
       "password": "adminPassword"
     }
     ```
   - **Response**:
     - Status: `201 Created`
     - Body: `{ "message": "Admin registered successfully" }`

2. **Admin Login**
   - **Endpoint**: `POST /login`
   - **Request Body**:
     ```json
     {
       "username": "Alok",
       "password": "adminPassword"
     }
     ```
   - **Response**:
     - Body: `{ "message": "Login successful" }`

3. **View Assignments**
   - **Endpoint**: `GET /assignments`
   - **Response**:
     - Body: `[ { "userId": "Soumik", "task": "Hello World", "timestamp": "2023-10-11T12:00:00Z" } ]`

4. **Accept Assignment**
   - **Endpoint**: `POST /assignments/:id/accept`
   - **Request Body**:
     ```json
     {
       "message": "Assignment accepted"
     }
     ```
   - **Response**:
     - Body: `{ "message": "Assignment accepted" }`

5. **Reject Assignment**
   - **Endpoint**: `POST /assignments/:id/reject`
   - **Request Body**:
     ```json
     {
       "message": "Assignment rejected"
     }
     ```
   - **Response**:
     - Body: `{ "message": "Assignment rejected" }`

## Setup and Running the Application


### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Server
1. Start the application:
   ```bash
   npm start
   ```

2. The server will run at `http://localhost:4003` 

## Important Considerations
- Implement proper authentication and authorization for both user and admin roles.
- Ensure robust error handling for all API requests.
- Use password hashing for secure storage of credentials.
