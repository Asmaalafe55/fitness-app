in postgreSQl run the commands:

CREATE USER username SUPERUSER PASSWORD 'mypassword';

CREATE DATABASE DataBaseName WITH OWNER username;

add .env file with the connection url with this syntax:

DATABASE_URL=postgres://username:mypassword@localhost:5432/databasename

run the sql script files :

/caps-look-api/database/builds/initSQLBuild.js
/caps-look-api/database/builds/mockDataBuild.js
