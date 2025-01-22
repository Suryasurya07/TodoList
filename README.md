![Profile Image](./images/profile.jpg)

# Advanced React To-Do Application with API Integration

## Objective
Enhance the basic To-Do application by integrating external API data, implementing advanced state management using Redux, and ensuring the application is responsive and user-friendly across different devices.

### Figma Design:
[View the Design on Figma](https://www.figma.com/design/DAQXWhcqjf4idJCClGNQqt/Front-End-Developer?node-id=0-1&t=suUJGaYF7bBUdXJz-0)

## Features
- **Frontend Development and API Integration**:
  - HTML for the structure of the application.
  - CSS (with optional frameworks like Bootstrap or Material-UI) for styling.
  - JavaScript (ES6 or later) for application logic.
  - Integration with a public API (e.g., a weather API) to display data relevant to tasks.
  - Error handling for API requests.

- **React Components and Advanced State Management**:
  - Functional components using React hooks (`useState`, `useEffect`).
  - At least two components:
    - `TaskInput`: For adding new tasks.
    - `TaskList`: For displaying tasks.
  - Redux Thunk or Redux Saga for handling asynchronous actions (e.g., API calls).

- **Responsive Design**:
  - Mobile-first design ensuring full responsiveness across mobile, tablet, and desktop devices.
  - Use of CSS Grid and Flexbox.

- **Functionality**:
  - **Add Task**: Allow users to input a task and add it to the list.
  - **View Tasks**: Display added tasks in a list.
  - **Delete Task**: Remove tasks from the list using a delete button.
  - **Task Prioritization**: Set priorities for tasks (e.g., High, Medium, Low).
  - **Persistent Storage**: Use local storage or session storage to save tasks and authentication status.

- **User Authentication**:
  - A simple mock user authentication (login/logout) using Redux for state management.
  - Protect the To-Do list so tasks are only visible to logged-in users.


## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/TodoList.git
    cd advanced-todo-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm start
    ```

4. Visit the application in your browser at `http://localhost:3000`.

## Technologies Used
- **React** (Functional Components & Hooks)
- **Redux** (State Management)
- **CSS** (Mobile-First Design, Flexbox, Grid)
- **API Integration** (Weather API or similar)
- **LocalStorage** for persistent data
- **React Router** (if applicable for multiple views)


---


