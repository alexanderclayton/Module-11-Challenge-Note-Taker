# Alex Clayton's Note Taker App

## Introduction
This project was developed by Alex Clayton as part of the KU Coding Bootcamp 11-Express Challenge.  This is a note taker app that utilizes Express to link the front end code to the server-side back end.  

## What's in the project?
The acceptance criteria for this project are as follows:

1.  WHEN I open the Note Taker
    THEN I am presented with a landing page with a link to a notes page

    This was included in the starter code provided for this assignment.

2.  WHEN I click on the link to the notes page
    THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

    This was achieved with the express() function in a server.js file along with a require funciton to link both the api and html routes js files in the routes folder.


3.  WHEN I enter a new note title and the note’s text
    THEN a Save icon appears in the navigation at the top of the page

    This was included in the starter code provided for this assignement.

4.  WHEN I click on the Save icon
    THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

    This was achieved in the api.js file utilizing the fs package. The fs.writeFile function writes the note to the db.json file. The fs.readFile function reads the db.json file and creates a variable for the parsed JSON returned. The starter code included the code that displays the new note in the sidebar.

5.  WHEN I click on an existing note in the list in the left-hand column
    THEN that note appears in the right-hand column

    This was included in the starter code, but did require the use of a uuid package which was created in the uuid.js file and imported into the api.js routes file.

6.  WHEN I click on the Write icon in the navigation at the top of the page
    THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

    This was included in the starter code and rendered usable once the routes were created.



## The completed project resembles the following image when deployed:

Full Size desktop view

![full size desktop view page 1](/Develop/assets/alex-clayton-note-taker.herokuapp.com_.png)
![full size desktop view page 2](/Develop/assets/alex-clayton-note-taker.herokuapp.com_notes.png)


## URL of the Deployed Application:

[Deployed Application](https://alex-clayton-note-taker.herokuapp.com/)


