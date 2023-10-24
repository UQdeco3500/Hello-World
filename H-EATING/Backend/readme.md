### Overview

- The project follows a design with front-end and back-end separation.
- The frontend utilizes React, while the backend is developed using Express.js.
- Communication between the front-end and back-end is facilitated through JSON.
- Cookies are employed to save the user's name and avatar on the client side (browser).

# 1. Front-end (Frontpage)

- The frontend is split into several sections: Login, Registration, Home, Restaurant, Community, and Chatroom.
- Each section is designed to be responsive to different screen sizes.

  ## Home Page

  - Comprises several components: Banner, Restaurant, Notification, My Friend, Events.
  - All components dynamically fetch and display data from the backend.

  ## Community Page

  - Allows users to post content, view post details, and leave replies.

  ## Chatroom

  - Implements a polling method to retrieve the friends' list, chat histories, and more.

# 2. Backend

- Designed around the RESTful API principle and built with Express.js.
- User data is stored within several `.json` files located in the data directory:

  - `chats.json`
  - `events.json`
  - `forum.json`
  - `notification.json`
  - `users.json`
