## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode on [http://localhost:3000](http://localhost:3000).

### `npm run build`

Builds the app for production.

## Project structure:

    ├── src/
    │   ├── index.js             # app entry file
    │   ├── App.js               # main app component
    │   ├── store/
    │   │   ├── actions          # actions for redux reducer
    │   │   │   └── ...
    │   │   └── reducer          # reducer for redux
    │   ├── Components/          # ui components
    │   │   ├── Button
    │   │   ├── Result
    │   │   └── StartQuiz
    │   ├── Containers/          # module assets (processed by webpack)
    │   │   ├── App              # redirection logic, fetch questions from API
    │   │   └── Question         # logic for submitting answers & redirecting to next one or to result page
    ├── public/
    │   ├── index.html           # index.html template
    │   └── ...
    ├── .gitignore               # defaults for gitignore
    ├── package.json             # build scripts and dependencies
    └── README.md                # README file

## Demo
https://vanilna.github.io/quiz/
