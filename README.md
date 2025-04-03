# lark-lantern-market

## Introduction

### Z-Prefix Assessment CRUD Application
This application consists of three parts: a client-side, server-side, and allows for a database connections.
It utilizes a Vite+React client, an Express app server, and a PostgreSQL database. All commands provided are CLI commands.

### Background
A local magical famers market was having trouble attracting customers because vendors inventory items change so often! This website displays each vendor's weekly items, and allows vendors to create, update, and delete their items as inventory managers.


## Table of Contents
- [Node.js & Cloning](#nodejs--cloning)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Test Users](#test-users)

## Node.js & Cloning
The application requires Node.js- please see installation guidelines for your system [here](https://nodejs.org/en/download).
To check if you have Node.js installed, run the following command:
```
node -v
npm -v
```
If version numbers appear for both commands, you are ready to proceed!

Now, clone the repository into your local system. Change your current working directory to where you want the local repository, then run:
```
git clone [HTTP or SSH connection string]
cd your-repo-name
```
For more information about cloning, visit [Cloning a Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

## Database Setup
This application requires a PostgreSQL database to be available for connections. Please ensure that PostgreSQL is installed and running on your system, and that you have created the necessary database for this application. You can find installation guidelines for your system [here](https://www.postgresql.org/download/).

If you are using a PostgreSQL instance running in a Docker container, and would like persistent storage, please ensure you have configured a volume. Without a volume, any data in your database will be lost when the container is stopped or removed.

## Running the Application
This process is easier to troubleshoot if you are running it in a code editor like VS code. Ensure your current working directory is the cloned repository, then run:
```
code .
```
Great! Now you are in a code editor. This application requires environment variables for the database connection. Navigate into the server directory and create an .env file:
```
cd server
touch .env
```
Now, add the following to the file:
```
DB_CONNECTION_STRING='postgres://your_user:your_password@localhost:your_port/your_database'
```
Don't forget to save! Cool! We can continue.

### Server-side
Let's spin up the server and seed the databse. Ensure you are in the server directory, and run the following commands:
```
npm install
npm run dev
npm run start
```
If successful, you will see `Your server is running on http://localhost:8080` in the console.
Yay! Let's move on to the next step. Open a new terminal for the client side.

### Client-side
Okay, let's start up the client-side. Run the following commands:
```
cd client
npm install
npm run dev
```
If successful, you will see something along the lines of:

```
VITE v6.2.4  ready in 241 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help`
```

## API Endpoints

### Base URL
http://localhost:8080/

### Users Endpoints
GET /users - Fetches all users\
GET /users/id - Fetches user with the provided id\
POST /users - Creates new user\
POST /users/login - Authenticates login information

### Items Endpoints
GET /items - Fetches all items\
GET /items/user/id - Fetches all items from user with the provided id\
POST /items - Creates new item\
PATCH /items/id - Updates item with the provided id\
DELETE /items/id - Deletes item with the provided id

## Test Users
|username|password|
|--------|--------|
|ottofinn|GigglePumpkin123!|
|celestialbaker|DreamCroissant77@|
|sbflowers|LullabyPetal42!|
|ephemeralbrew|Stir&SipAlchemy22|
