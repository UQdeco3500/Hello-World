# H-eating

A brief description about the project, its purpose, and any other general information.
***
## Link To Project Proposal
https://docs.google.com/presentation/d/19PF0YKcmplRt3Ouk9D7qDODOvsaowJ55/edit?usp=drive_web&ouid=114096202470275325421&rtpof=true

## Link to Design Process Overview
[https://github.com/UQdeco3500/Hello-World/wiki](https://github.com/UQdeco3500/Hello-World/wiki/02-Design-Process-Overview)

## Link to Working Prototype, Promotional Material, and Documentation  
link to relevant links for prototype, promotional material & documentation

High-fi Functional Prototype
[https://www.figma.com/proto/ylVk1ckAo1ZG243WJYP2B0/DECO3500?page-id=0%3A1&node-id=0-1&starting-point-node-id=310%3A838&scaling=scale-down&show-proto-sidebar=1&mode=design&t=o3mrTxX2tvT48RwJ-1](https://www.figma.com/proto/ylVk1ckAo1ZG243WJYP2B0/DECO3500?page-id=0%3A1&node-id=0-1&starting-point-node-id=310%3A838&scaling=scale-down&show-proto-sidebar=1&mode=design&t=o3mrTxX2tvT48RwJ-1)

Functional Website(Need to register or use the prepared username and password):

[http://8.217.79.137/#/login](http://8.217.79.137/#/login)

A brief description of the project, its purpose, and any other general information.

## Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Deployment](#deployment)
- [Usage](#usage)
- [Login Credentials](#login-credentials)


## Overview

Detailed overview of the project, explaining the problem it solves, the technology stack used, and other relevant details.

## Repository Structure

- **H-EATING Folder** - This folder contains all the code used to build the project's website, including front-end and back-end code as well as database connection code. The app folder contains all the front-end code, and the backend folder contains all the back-end code and the JSON to store the data.
- **Prototype.md** - Included in this file are links to interactive high-fidelity prototypes and the corresponding website domains deployed in the cloud. Users can view the high-fidelity prototype and the website by clicking on the links.
- **README.md** - Provide a guide to the contents of the repository and a hyperlinked overview of the project and structure of your documentation. Also include instructions for how to deploy and prototype.

## Deployment

### :art: **High-Fidelity Prototype Development**:

- **Initial Feedback & Design**:
  - Post wireframes and low-fidelity prototypes, we gathered user feedback.
  - Based on the feedback, our team developed a high-fidelity prototype on the Figma platform.

- **Interactive Design on Figma**:
  - Collaboratively, the team built a fully functional interactive high-fidelity prototype on Figma, embracing the social & mobile concept.

### 🌐 **Website Deployment**:

- **Deploying Core Features**:
  - Following the completion of the high-fidelity prototype, we transitioned the core social features of the prototype to the website.

- **Technical Specifications**:
  - **Design**: The project adopts a front-end and back-end separation design.
    - :computer: **Front-end**: Uses the React framework.
    - :gear: **Back-end**: Developed with Express.js.
  
  - **Communication Between Front-end & Back-end**:
    - :speech_balloon: Data is exchanged using the JSON format.
  
  - **User Data Storage**:
    - :cookie: Cookies are used to store the username and user avatar in the client browser.

  - **Hosting & Domain**:
    - :cloud: Hosted on an AliCloud server.
    - :link: Access the application at [http://8.217.79.137/#/app](http://8.217.79.137/#/app).



## Usage

### User Registration & Sign In:

- :bust_in_silhouette: **Registration**:
  - Fill in the information in the registration interface.
  - Click "sign up" to proceed to the next page.

- :key: **EMS Code Confirmation**:
  - Fill in the EMS Code.
  - Click "confirm".

- :door: **Sign In**:
  - On the sign-in page, enter your account information and age.
  - Click the "sign in" button to access the home page.

---

### Homepage Navigation:

- :book: **Daily Recommendation**:
  - On the homepage, click "Daily Recommendation" to access the introduction content.

- :bell: **Message Alert/Notification Area**:
  - View all message replies including comments and likes from today to this week.
  - Users can click buttons to either reply to messages or follow a user.

- **Friend & Community Posts**:
  - View the number of likes for the latest posts from friends and communities.

- :calendar: **Booking Activities**:
  - Users can book the latest activity online.
  - Click on an activity to see its detailed content introduction page.

---

### Community Navigation:

- :houses: **Community Home (Comm Home)**:
  - Tap "Community" from the home to access Comm Home.
  - From Comm Home:
    - Tap "friend" to access the friend chat interface.
    - Tap "event" for the Event timetable.
    - Tap a community name to access its main interface.
      - Inside, tap a member's posting avatar to access the friend interface.
    - Tap "join" to access the community event interface.
      - Tap "posts" to access where community members post interactions.
      - Tap "join" to access event details.
      - Tap "public" to access public community events.
      - Tap "store events" to access the store events interface.
        - Inside, click "store details" to access the store details page.
    - Tap "private comm" to access the private circle interface.
    - Tap a friend's message to access the chat interface.
    - Inside the private group events interface:
      - Tap "posts" to see where community members post interactions.
      - Tap "join" to access event details.

- :arrow_backward: **General Navigation**:
  - Click "back" to return to the previous page.

### Restaurant Screen Navigation:

- :round_pushpin: **Location & Recommendations**:
  - The website automatically detects the user's current location.
  - Real-time suggestions of the nearest restaurants to the user are provided.
  
- :compass: **Exploratory Mode** (Located at the upper left corner of the page):
  - By default, the exploratory mode button is activated.
    - When active, it recommends the nearest healthy restaurants based on the user's location.
  - Deactivating the exploratory mode button will display only bookmarked nearby healthy restaurants.

- :mag: **Search & Explore**:
  - Click "Search the area" at the bottom of the page.
    - Displays specific information about the healthy restaurant, including the main dish's name.
    - Clicking on a restaurant reveals more detailed information about it.
  - After exploring restaurant details:
    - Click on the "list" at the top to view other searched restaurants.

- :calendar: **Initiate Potluck** (Located on the lower right side of restaurant info):
  - This feature allows users to plan offline gatherings at the restaurant's location.
    - Choose the appropriate time and favourite dishes.
    - After making selections, click the "initiate potluck" button at the bottom.
  - Successful initiation redirects users to the restaurant's homepage.


### Profile Navigation:

- :bust_in_silhouette: **Profile Overview**:
  - The profile screen displays the user's posting history, favourite posts, healthy restaurant recommendations and privacy settings.

- :star: **Collections**:
  - In the collection section, users can explore their saved preferences.
    - Click on "restaurants" to view favourited restaurants.
    - Click on "posts" to see other users' posts that have been saved.

- :gear: **Privacy & Personalization Settings** (Located on the right side of the profile):
  - **Message Privacy**:
    - Change your messaging preferences by clicking on the arrow.
      - Toggle between allowing "strangers" and "friends only" to message you.
  - **Personalization**:
    - Adjust your personalized settings by clicking the button.
      - Change the status from "on" to "off" or vice versa for personalization preferences.
  - :floppy_disk: **Save Settings**:
    - After making your desired changes, click "save".
    - Upon saving, you'll be redirected back to the homepage.



## Login Credentials
As for the website usage, users can register by themselves. If they want to use the website directly, they can use the preregisted username and password as follows.

**Username:** `123`  
**Password:** `123`  




