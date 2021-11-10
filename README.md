## Note-Taking-App

### Table of content

\*[Overview](#overview)

\*[Technologies used](#technologies-used)

\*[Skills practised](#skills-practised)

\*[Launch method](#launch-method)

\*[How to use ?](#How-to-use-?)

### Overview

This is a Note taking app to practice the core concepts of Node.js

## Technologies used

1- Node.js

2- command-line

3- npm

4- JSON

5- ES6

## Skills practised

1- Node.js core modules

2- Creating and using local modules

3- Practicing npm modules

4- Practicing global modules

5- Using nodemon

6- Practicing file system package

7- Getting input from users

8- Argument parsing with Yargs npm package

9- Storing data with JSON

10- ES6 Arrow function

### Launch method

To run the project:

1- Install Node.js

2- Download or clone the project.

3- Open the terminal in project directory.

4- Run the following commands in the terminal.

```
npm install

```

### How to use the app ?

Open the terminal in the project directory and run any of these commands

1- To add a note run the following command and provide the Note data within the quotation mark

```
node app add --title="Enter note title here" --body="Enter note body here"
```

2- To remove a note run the following command and provide the Note data within the quotation mark

```
node app remove --title="Note title to remove"
```

3- To list all the notes you have run the following command

```
node app list
```

4- To read a specific note you have

```
node app read --title="the note title to read"
```
