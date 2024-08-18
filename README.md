<div align="center">
  
# Public Bus Transportation System - Admin Dashboard

This repository contains the Admin Dashboard for a public bus transportation system. The system provides functionalities for different types of users: customers, drivers, and administrators. Each user type has unique features and access levels, designed to streamline bus transportation management and operations.

<table align="center">
    <thead align="center">
        <tr border: 2px;>
            <td><b>🌟 Stars</b></td>
            <td><b>🍴 Forks</b></td>
            <td><b>🐛 Issues</b></td>
            <td><b>🔔 Open PRs</b></td>
            <td><b>🔕 Close PRs</b></td>
        </tr>
     </thead>
    <tbody>
         <tr>
            <td><img alt="Stars" src="https://img.shields.io/github/stars/Ramsey99/Admin_Dashboard?style=flat&logo=github"/></td>
             <td><img alt="Forks" src="https://img.shields.io/github/forks/Ramsey99/Admin_Dashboard?style=flat&logo=github"/></td>
            <td><img alt="Issues" src="https://img.shields.io/github/issues/Ramsey99/Admin_Dashboard?style=flat&logo=github"/></td>
            <td><img alt="Open Pull Requests" src="https://img.shields.io/github/issues-pr/Ramsey99/Admin_Dashboard?style=flat&logo=github"/></td>
           <td><img alt="Close Pull Requests" src="https://img.shields.io/github/issues-pr-closed/Ramsey99/Admin_Dashboard?style=flat&color=critical&logo=github"/></td>
        </tr>
    </tbody>
</table>
</div>

## Table of Contents
* [Features](https://github.com/Ramsey99/Admin_Dashboard?tab=readme-ov-file#features)
* [Technologies Used](https://github.com/Ramsey99/Admin_Dashboard?tab=readme-ov-file#technologies-used)
* [Getting Started](https://github.com/Ramsey99/Admin_Dashboard?tab=readme-ov-file#getting_started)
* [Installation](https://github.com/Ramsey99/Admin_Dashboard?tab=readme-ov-file#installation)
* [Contributing](https://github.com/Ramsey99/Admin_Dashboard?tab=readme-ov-file#contributing)
* [License](https://github.com/Ramsey99/Admin_Dashboard?tab=readme-ov-file#license)
* [Contact](https://github.com/Ramsey99/Admin_Dashboard?tab=readme-ov-file#contact)


## Features

**Customer**
- View Bus Schedules: See bus times and stoppages for convenient travel planning.<br>
- Book Tickets: Reserve seats on buses for specific routes and times.

**Driver**
- Daily Allotment: View the allotted bus number and route for the day.<br>
- Route Information: Access detailed information about the assigned route and bus stops.

**Admin**
- Bus Allotment: Assign buses to drivers for each day.<br>
- Driver Management:<br>
  - Reassign buses if a driver is absent.<br>
  - Add new drivers and delete old drivers.<br>
- Bus Location Tracking: Monitor the real-time location of buses on their routes.
- Dashboard Analytics:
  - View monthly transaction reports.
  - Track the number of passengers traveling each day.

<div align="center">
  
## Technologies Used
**Frontend:**<br>
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

**State Management:**<br>
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

**Backend:**<br>
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

**Database:**<br>
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

**Real-time Data:** <br>
WebSockets or similar technology for real-time bus tracking

**Charting Library:** <br>
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)

**UI Framework:**<br>
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Design:** <br>
![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

</div>

## Getting Started
To set up the project locally, follow these steps:

**Prerequisites**
- Node.js: Ensure you have Node.js installed.
- MongoDB: A running instance of MongoDB.

## Installation
1. **Clone the repository:**

```sh
git clone https://github.com/Ramsey99/Admin_Dashboard.git
cd Admin_Dashboard
```

2. **Install dependencies:**

```sh
npm install
```

3. **Configure environment variables:**

```sh
Create a .env file in the root directory.
```

4. **Add your MongoDB connection string and other environment variables:**

```sh
MONGODB_URI=your_mongodb_uri
PORT=your_preferred_port
```

5. **Run the application:**

```sh
npm start
```

6. **Access the dashboard:**

Open your web browser and go to http://localhost:your_preferred_port.

## Contributing
- Contributions are welcome! If you have any suggestions or improvements, please open an issue or create a pull request.

## Creating Pull Request
1. **Fork the Project:**
    - Click on the "Fork" button at the top right corner of the repository's page on GitHub to create your own copy of the project.

2. **Clone Your Forked Repository:**
    - Clone the forked repository to your local machine using the following command:
    ```sh
     git clone https://github.com/Ramsey99/Admin_Dashboard
    ```

3. **Create a New Branch and Move to the Branch:**
    - Create a new branch for your changes and move to that branch using the following commands:
    ```sh
    git checkout -b <branch-name>
    ```

4. **Add Your Changes:**
    - After you have made your changes, check the status of the changed files using the following command:
    ```sh
    git status -s
    ```
    - Add all the files to the staging area using the following command:
    ```sh
    git add .
    ```
    - or add specific files using:
    ```sh
    git add <file_name1> <file_name2>
    ```

5. **Commit Your Changes:**
    - Commit your changes with a descriptive message using the following command:
    ```sh
    git commit -m "<EXPLAIN-YOUR_CHANGES>"
    ```

6. **Push Your Changes:**
    - Push your changes to your forked repository on GitHub using the following command:
    ```sh
    git push origin <branch-name>
    ```

7. **Open a Pull Request:**
    - Go to the GitHub page of your forked repository, and you should see an option to create a pull request. Click on it, provide a descriptive title and description for your pull request, and then submit it.

<hr>
<div align="center">
⭐️ Support the Project
If you find this project helpful, please consider giving it a star on GitHub! Your support helps to grow the project and reach more contributors.

### Show some ❤️ by starring this awesome repository!

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contact
For any questions or inquiries, you can reach me at: anujobadhikari@gmail.com
</div>
