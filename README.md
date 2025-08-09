# Lunaluxe Space Travel Application
=======

## Overview
LunaLuxe is your gateway to the stars—a next-generation travel platform designed for cosmic explorers. This application includes the following features:
* Welcome page with a short about us description
* A list of transportation vessels that we offer with dropdown for vessel stats
* A list of destination planets that we travel too, along with a button for more information about destination.
* An exploration planner page to filter through what each planet destination has to offer, see what vessel options work best for you and calculate your anticipated travel time base off of the selected destination and transportation vessel.

# Tools and Resources Featured in this Project:
- [GitHub Repo](https://github.com/webdesigns23/flask-c10-summative-lab-sessions-and-jwt-clients.git)
- Python 3.8.13+
- Text Editor or IDE (e.g., VS Code)
- Git + GitHub
- Virtualenv
- Python Packages listed in requirements.txt
- React
- Node.js

## API's used



## React Router Endpoints


## Using the application:
All components and data fetching are already set up for you. Your task is to implement client-side routing using React Router v6 by:
1. Installing React Router v6.
2. Setting up routing using BrowserRouter, Routes, and Route.
3. Implementing nested routes so that movies appear under each director’s details.
4. Use the useOutletContect hook to pass data from parent to child routes.
5. Using NavLinks and Links to create user-friendly navigation.
6. Using useNavigate to programmatically navigate after adding a new director or movie.

You'll need to use what you've learned about all three topics:
* React Router v6
* Nested Routing
* Programmatic Navigation

## Setup

Our `src` folder contains the following JavaScript files:

```txt
src/
└── assets/
    ├── planets (images)
    ├── vessels (images)
	├── Various Extra Images
└── components/
    ├── BodyInfo.jsx
    ├── VessleInfo.jsx
    ├── DestinationCarousel.jsx
    ├── GravityCheck.jsx
    ├── NavBar.jsx
    ├── PlanetCard.jsx
    ├── ShipCard.jsx
    ├── PlanetGallery.jsx
	├── SpeedCheck.jsx
	├── TempCheck.jsx
	├── VesselCarousel.jsx
	├── TripSummary.jsx

└── context/
    ├── TripContext.jsx
└── data/
    ├── destinations.js
    ├── vessels.js
└── pages/
    ├── Destinations.jsx
    ├── ExpPlanner.jsx
    ├── Home.jsx
    ├── SpaceVessels.jsx
└── styles/
    ├── Carousel.css
    ├── ExpPlanner.css
    ├── NavBar.css
├── .env
├── App.css
├── App.jsx
├── index.css
├── main.jsx
```



 first run `npm install`, as per usual. Then install react router: `npm install react-router-dom@6`. Then run `npm run server` to start your `json-server` and `npm run dev` to open the application in the browser.

### App.jsx

You'll be adding the routes you create to this component. You'll need to provide the following routes, nested as shown below:

* "/" : Home
* "/about" : About
* "/directors" : DirectorContainer
    * "" : DirectorList
    * "new" : DirectorForm
    * ":id" : DirectorCard
        * "movies/new" : MovieForm
        * "movies/:movieId" : MovieCard

You are welcome to also create an Error route if you wish.

### main.jsx

Our `main.jsx` file is currently just rendering App, an empty component.

## Components

### NavBar

This component needs to render three `NavLink` components. They will be for `/`,
`/directors`, and `/about`. The NavBar component is already imported into the main pages and will only need to be added if you choose to create an ErrorPage.

## Pages

### About

This component should render on the `/about` route. All the code is built for you 
in the component, so no further changes need to be made.

### DirectorCard
This component should render on the `/directors/:id` route and is the parent route 
to all movie routes. You'll need to implement `useOutletContext`, `useParams`, 
and `<Outlet />` in this component to set the correct director and nest the child route 
components with the proper context.

### DirectorContainer
This component should render on the `/directors` route and is the parent route to all 
other director routes. This component contains the state of all directors. You'll need
to give child routes access to the appropriate data and may need to define some functions 
to update state appropriately.

### DirectorForm
This component should render on the `/directors/new` route. Most of the code is built 
out for you, but you will need to implement navigation and state changes on form submission.

### DirectorList
This component should render on the `/directors` route, but nested under DirectorContainer. 
Currently directors is set to null and needs to be updated using the state of its parent 
route. All the rest of the code is built out for you.

### Home

This component should render on the `/` route. It's mostly set up for you but will 
need to be edited to render user-friendly links to the directors and about pages.

### MovieCard

This component should render on the `/directors/:id/movies/:id` route. This component is 
already set up to render the details of one movie. You'll need to figure out how to get 
the specific movie through a mix of useOutletContext and useParams.

### MovieForm
This component should render on the `/directors/:id/movies/new` route. Like the `DirectorForm`, 
you'll need to handle state changes and navigation on form submission. You'll also need 
to update the director, which is currently set to null, using outlet context and params.

### ErrorPage (Optional)

If you choose, you can create a new component within the `pages` folder for our
`ErrorPage`. This page should display our `NavBar` component, along with a
user-friendly 
message like "Oops! Looks like something went wrong."

## Resources

- [React Router](https://reactrouter.com/en/main)







# Set Up and Installation:
1. Fork and clone the GitHub Repo
```bash
git clone <repo_url>

```
2. Set up your virtual environment of choice (virtualenv prefered)
```bash
virtualenv env1
source env1/bin/activate
```
3. Install PyPi dependencies using requiements.txt
```bash
pip install -r requirements.txt
```
4. Navigate into the server/ directory and set environment variables:
```bash
cd server
export FLASK_APP=app.py
export FLASK_RUN_PORT=5555
```
5. Create a migrations folder, run initial migration and update
```bash
cd server
flask db init
flask db migrate -m "initial migration"
flask db upgrade
```
6. Populate database with initial data
```bash
python seed.py
```
# Running Back-end of Application:
Should run on port 5555 to match proxy in package.json
You can run the Flask server with:
```bash
python app.py
```

# Running Front-end of Application:
To run the React application
1. Install dependencies
```bash
npm install
```
2. Start the application
```bash
npm start
```

# API Endpoints and Functionality:
## Authorization/ Authentication:
`POST /signup`
* Registers a new user and logs them in by setting the session

`GET /check_session`
* Verifies if a user session is active.

`POST /login`
* Authenticates an existing user and sets the session cookie

`DELETE /logout`
* Ends the session by removing user_id from the session store.

## Cellar Record Index Class:
`GET /cellar_record – paginated`
* Returns all wines
Includes Pagination:
* Uses page and per_page query parameters
* Returns only the requested chunk of data
* Includes metadata like the total number of pages

`POST /cellar_record`
* Adds a New wine to cellar with the following info:
	- Wine (Name of the Wine)
	- Grape (Name of the Grape)
	- Country (Wine Origin)
	- Vintage (Year wine was harvested, YYYY)
	- Quantity (How many bottles they have in their Cellar, UPDATABLE)
	- Tasting Notes (Wine Flavors UPDATABLE)

## Cellar Record Id Class:
`PATCH /cellar_record/<id>`
* Search by id
* Update a quantity or tasting notes of a wine in cellar record

`DELETE /cellar_record/<id>`
* Delete a wine from cellar record

# Testing: 
- Does not contain test files.
- Test in Postman or by using application in browser and inspect

# Commit and Push Git History if any adjustments to this code are made
1. Add your changes to the staging area by executing
2. Create a commit by executing 
3. Push your commits to GitHub by executing 
4. If you created a separate feature branch, remember to open a PR on main and merge.
```bash
git add .
git commit -m "Your commit message"
git push origin main
```
