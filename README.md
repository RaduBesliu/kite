# Kite
## Description
Kite is a tracker that allows users to create, remove and add to favorites kitesurfing locations on an interactive map.<br>
Each spot displays information about the name, country, wind probability, latitude, longitude and best month to visit.<br>

## API
The application uses MockAPI to generate random information about users, spots, favorite spots and logins.<br>

:warning: **The API is not publicly available due to limitations on the amount of requests and data size**<br>
Message me directly to get access to the API.

## Technologies used
- HTML
- CSS
- Javascript
- JSX
- Lodash
- Axios
- LeafletJS
- React
  - redux
  - styled-components
  - react-datepicker
  - react-helmet
  - react-icons
  - react-leaflet
  - react-router-dom

## Features
- Login
  - Any combination of username and password will grant access to the webpage
- Register
  - Information verified using Regex
- Logout
- Interactive Map
  - Spots
    - Add a new spot anywhere
    - Add to favorites
    - Remove from favorites
  - Popup
    - Name
    - Country
    - Wind Probability
    - Latitude
    - Longitude
    - Best month to go
- Locations Table
  - Displays all the information written above
  - Sort each column (default, ascending, descending)
  - Search by spot name

## Upcoming changes
- Proper Login and Signup
- Add Images
- Host
