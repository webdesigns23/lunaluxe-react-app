# Lunaluxe Space Travel Application
=======

## Overview
LunaLuxe is your gateway to the stars—a next-generation travel platform designed for cosmic explorers. This application includes the following features:
* Welcome page with a short about us description
* A list of transportation vessels that we offer with a button for displaying vessel stats
* A list of destination planets that we travel too, along with an "Expore" button for more information about destination.
* An exploration planner page to filter through what each planet destination has to offer, see what vessel options work best for you and calculate your anticipated travel time base off of the selected destination and transportation vessel.

# Tools Featured in this Project:
- [GitHub Repo](https://github.com/webdesigns23/lunaluxe-react-app.git)
- Text Editor or IDE (e.g., VS Code)
- Git + GitHub
- React
- React Router
- Vite
- Node.js

## Resources
- [React Router](https://reactrouter.com/en/main)
- [React Slick](https://react-slick.neostack.com/docs/get-started)

## API's used
* [Solar System OpenData](https://api.le-systeme-solaire.net/en/)
* [Nasa APOD](https://api.nasa.gov/)
* [SWAPI Star Wars Spaceship API](https://swapi.info/)

## React Router Endpoints
* "/" : Home Page
* "/destinations" : Destinations Page
    * ":id" : Destination More Info
* "/vessels" : Spaceships Page
    * ":id" : Spaceships More Info
* "/expedition_planner" : Expedition Planner Page with filters and calculations

# Set Up and Installation:
1. Fork and clone the GitHub Repo
```bash
git clone <repo_url>
cd <folder name>

```
# Running Front-end of Application:
To run the React application
1. Install dependencies
```bash
npm install
```
2. Start the application
```bash
npm run dev
```

3. The `src` folder contains the following files:

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
