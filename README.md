# Frontend Developer Assessment

## Project Goal

This project is a flight search user interface built with ReactJS, Vite, and Tailwind CSS, adhering to a provided design. It features a search form and a data display area showcasing flight results.

## Technology Stack

- Frontend: HTML, CSS, Tailwind CSS, React.js, Vite, DaisyUi

## Setup and Usage

1. Clone this repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open http://localhost:5173 in your browser.
5. First Data Table will show null when you click `Search` button it will show data in my table

## Development Process

First of utilized React Router to define routes for different components within the application. The Layout component serves as the main structure, rendering child components based on the selected route. 

Components are organized within dedicated folders:

- `src/pages`: Contains components for specific functionalities like `Home.jsx` and `Calender.jsx`.

- `src/components/NavBar/NavBar.jsx`: Navbar created

- `src/components/Shared`: contains components like `Inputfield.jsx`, `PickerField`, `RadioButton` ,`Tab.jsx` and `Table.jsx`.

- `src/components/Shared/Table.jsx`: In Table Component i did table structure then mapping over flight data to render rows.

- `src/Layout/Main.jsx`: Render the child components based on the route in Layout Folder which is Main component

The `src/pages/Home/MasterPrice` component manages state variables for data and search status. It fetches flight data using Axios upon search trigger and displays the results in a table.

## Live Frontend Projects

* Project 1: [Live Link project 1](https://chat-application-ruddy-three.vercel.app/)
* Project 2: [Link live project 2](https://lovely-selkie-1c53f7.netlify.app/)

## Git Repositories

* Repository 1: [Link Git repository 1](https://github.com/HasnathAhmedTamim/chat-application)
* Repository 2: [Link Git repository 2](https://github.com/HasnathAhmedTamim/simple-bookshop-management-client)

## Author

Hasnath Ahmed Tamim

## Contact

Feel free to reach out with any questions:

* [LinkedIn](https://www.linkedin.com/in/hasnath-ahmed-tamim/)
* [FaceBook](https://www.facebook.com/HasnathAhmedTamim)