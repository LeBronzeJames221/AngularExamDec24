!CarMania!

---Table of Contents---
1.Project Overview
2.Features
3.Installation
4.Local Development Server
5.Firebase Cloud Server
6.Usage
7.Technologies Used
8.Contact

1.<<Project Overview >>
CarMania is a web application that allows users to browse, add, and interact with cars in a virtual garage. The application supports user authentication, enabling registered users to add cars, like and comment on other users' cars, and manage their own car entries by editing or deleting them. The project is built using modern web development technologies, including React, and follows best practices for structure, state management, and API communication.

2<<Features>>

User Authentication:
Users can register and log in to access the app's full functionality.

Home Page:
Displays the last three cars added to the platform.

Car Garage:
Users can view all cars added by different users.

Add a Car:
Registered users can add new cars to the garage.

Profile Page:
Where the user can see his account data and the cars added by him.

Route Guards:
Implemented route guards in order to not allow not-logged-in user to access parts of the app ment for logged-in users

Car Details:
Each car has a dedicated detail page where users can:
View detailed information about the car.
Comment on the car (if not the creator).
Like the car (if not the creator).
Edit or delete the car entry (if they are the creator).

State Management:
The app uses React Context API for managing user authentication and other shared states.

3.<<Installation>>
To run this project locally, follow these steps:

Clone the repository:

------git clone https://github.com/LeBronzeJames221/AngularExamDec24
------cd CarMania

Install dependencies:
Ensure you have Node.js installed. Then run:

------npm install
Start the development server:

------ng serve

4.<<Local Development Server>>

URL: http://localhost:3000
Purpose: Used for local development and testing. This server simulates the backend API for development purposes.

Start the server
------node server.js

5.<<Firebase Cloud Server>>

URL: https://angular-retake.web.app
Purpose: The production environment where the live version of the application is hosted.

6.<<Usage>>
Registration and Login
To use the app's full features, users must register an account or log in if they already have one.

Adding a Car
After logging in, navigate to the "Add a Car" section to submit a new car entry.

Interacting with Cars
Browse the "Car Garage" to view all available cars.
Click on any car to view its details, including comments and likes.
If you are the car's creator, you can edit or delete the car.
If you are not the car's creator, you can like or comment on the car.

Home Page
The home page displays the last three cars added to the platform for quick access.

7.<<Technologies Used>>
React: JavaScript library for building user interfaces.
React Router: For navigation and routing.
React Context API: For state management.
Custom Hooks: For handling form inputs and other reusable logic.
Fetch API: For communicating with the backend services.
CSS: For styling the application.
Firebase: For cloud-based backend services and deployment.

8.<<Contact>>
If you have any questions or suggestions, feel free to contact me at youremail@example.com.
