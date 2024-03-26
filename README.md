# W5D4 After-Class Assignment

## Overview

This is a simple web application created with React and using Redux to manage state.


## Setup

1. Clone the repository.
2. Navigate to the project directory `jtc-w5d4-after-class`.
3. Install dependencies using `npm install`.
4. Start the project with `npm start`.
5. The project should automatically open in your browser. If it doesn't you can navigate to `http://localhost:3000`.


## Project Structure

The project is structured as follows:
- `src/`: Contains all source code files.
  - `components/`: Includes the stopwatch component and it's accompanying CSS file used in the application.
  - `store/`: Contains the actions, reducers, store, and types file needed by Redux to manage state.
  - `App.js`: Main component rendering the application.
  - `index.js`: Entry point of the application.


## Key Components

### Stopwatch Component

The Stopwatch component allows users to keep track of time using a timer that displays seconds and minutes. It has 3 button controls: Start, Pause, and Reset. It manages state eith Redux.


## Dependencies

The project utilizes the following external libraries:
- react-redux: Integrates Redux with React components, enabling efficient state management.
- redux: Provides a predictable state container for JavaScript applications, facilitating the management of complex application states.


