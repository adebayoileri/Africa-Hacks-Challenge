# Africa-Hacks-Challenge

## Tasks
1. Fullstack Software Developer Job Challenge
Challenge: Create a working, react app with Node.js backend.

Requirements
Install the latest version of Node.js (and npm) on your computer.
Create a very basic backend using the Express framework. This might be helpful: Render HTML file in ExpressJS
It should respond to two different routes:
GET /data: returns a list of data points with details
GET /data/:id: single data takes an ID param/query and returns data for the ID
The data is being pulled from an API like the ones below or USE DUMMY DATA (A JS object/JSON on the backend. No DB needed)
https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json
https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json
Create a simple react App with Create React App or others with two pages
/ to display a list of all the data: This page fetches data from the API by calling GET /data and displays it
/view/:id to display details of a single data point. You get to the page by clicking the data item on the list on the homepage: This page calls GET /data/:id and displays the details


# Solution

# Installation
# Setup Server with Node/ Express JS
  to run on local machine 
Clone the repo to your local machine 
- Run `npm install` to install all dependencies
- Run `npm run start:dev` to start up server
- Run `npm run test` for testing 

  
## Consumed SpaceX API with GraphQL / Axios to get data

API - https://docs.spacexdata.com/?version=latest

# API Endpoints 
 GET / Get all space craft launches
 GET /launch/:rocket_id  a single spacecraft launch
 
 
## Hosted Pages
https://africahacks-challenge.herokuapp.com/

# Author 
Adebayo Ilerioluwa
 

