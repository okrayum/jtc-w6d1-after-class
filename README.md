# W6D1 After-Class Assignment

## Overview

This is a simple web application created with React and using Redux to manage state. With added `gulp` functions to minify the `CSS` files and compile the `jsx` files to the build folder.


## Setup

1. Clone the repository.
2. Navigate to the project directory `jtc-w6d1-after-class`.
3. Install dependencies using `npm install`.
4. Start the project by running `gulp`.
5. The project should automatically open in your browser. If it doesn't you can navigate to `http://localhost:3000`.


## Project Structure

The project is structured as follows:
- `build/`: Contains all of the files created by Gulp.
- `src/`: Contains all source code files.
  - `components/`: Includes the stopwatch component and it's accompanying CSS file used in the application.
  - `store/`: Contains the actions, reducers, store, and types file needed by Redux to manage state.
  - `App.js`: Main component rendering the application.
  - `index.js`: Entry point of the application.
- `gulpfile.js`: contains the gulp functions to compile .jsx files and minify CSS files then to create those in the build folder.


## Key Components

### Stopwatch Component

The Stopwatch component allows users to keep track of time using a timer that displays seconds and minutes. It has 3 button controls: Start, Pause, and Reset. It manages state eith Redux.


## Dependencies

The project utilizes the following external libraries:
- react-redux: Integrates Redux with React components, enabling efficient state management.
- redux: Provides a predictable state container for JavaScript applications, facilitating the management of complex application states.
- gulp: installed gulp locally on my machine, then had to add gulp dependencies for `gulp-babel`, `browser-sync`, and `gulp-clean-css`.


# Problems Faced

I was unfamiliar with Gulp. I usually use `npm run build`. I was able to run `gulp` and create folders in a build folder just fine but it wouldn't load my stopwatch app. After 3 days of reading, googling, and videos I have a working solution. My final solution works but I'm using a webpack.config.file and there is still supposed to be a way where that isn't the case. I am still working on that. I definitely know a lot more on what Gulp is doing, I just haven't mastered it yet.
