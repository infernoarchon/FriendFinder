# FriendFinder
![Image of FriendFinder](https://www.alanchen.com/wp-content/uploads/2019/01/friendfinderthumb.png)
FriendFinder is a node and express app that asks users several questions, and then matches them with another user based on their responses.

## Setup & Usage
1. `cd FriendFinder`

2. `npm install` to install npm packages

3. Add sample data in app/data/friends.js

4. `node server.js`to start server.

5. Open a browser tab and go to `localhost:3000`

## Backlog
- Add validation logic to survey forms
- Find way to preserve JSON data

## Additional Notes
- Since this app is deployed on a free Heroku dyno, it will periodically reset the `/api/friends` JSON
