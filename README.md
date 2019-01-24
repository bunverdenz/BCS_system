# BCS-System-website

# Description
![](https://img.shields.io/badge/nodejs-11.2.0-green.svg)
![](https://img.shields.io/badge/npm-6.4.1-red.svg)
![](https://img.shields.io/badge/body_parser%20-1.18.3-blue.svg)
![](https://img.shields.io/badge/express-4.16.3-purple.svg)
![](https://img.shields.io/badge/faker-4.1.0-black.svg)
![](https://img.shields.io/badge/mysql-2.15.0-yellow.svg)


This is cinema website implementation. We use node.js with SQL on server side. In order to use data schema and SQL Query in real-world data, cinema data which contains `Movies`, `Users`, `Halls`, `Tickets`, `Ticket Type`, `Shows`, and `Stars` tables could be represented clearly with connection such as `Foreign Key` between each table. 

## Codebase
* This project is implemented with Node.js, Jquery and JavaScript along with [semantic-ui]https://semantic-ui.com/ stylesheet. All the JavaScript file can be found in `view/`, `version with ratings/` and in `public/` folder, and main `.ejs` files are put in `views/`. Main connection between Node.js and mySQL are all put in `/app.js`
* The backend/database controls are kept in `.sql` files. Main dummy data generation are in `theater_data.sql`, and connection between each tables are in `theater_schema.sql`
* Other subfolders are used to keep the file implemented in the use of third-party libraries, such as node-modules and jquery
