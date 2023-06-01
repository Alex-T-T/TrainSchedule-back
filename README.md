How to start server:

1. You need to run docker container with MySql database using command
   **docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:latest**
   If you work on Mac don't forget start your Docker Desktop app before it.
2. Update .env file with proper values in case you run container with different DB parameters
3. Start the application with command **npm start**, it will automatically create DB and populate it with data
4. Use in frontend part of app variable REACT_APP_BASE_URL same as your running PORT for backend part of app
