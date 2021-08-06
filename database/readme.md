# Mongo Forecastdb Image
This repository contains a Mongo database in a docker-compose.yaml

### Install
The installation process requires that **Docker** system is installed. 

### Run
This image has a folder in which you can share the data backup between host and the docker container. The folder
is **backup** (located in /database/backup). You should put the backup data in the specified folder for restore the data.

For running the image, go to the folder where is store the Github repository (clone it) https://github.com/stevensotelo/usaid_forecast_docker ('D:\usaid_forecast_docker\database' for example) and use the command:
``` bash
docker-compose up
```
### Restore database
Open another cmd and use:

``` bash
docker exec -it database_mongodb_1 bash
```
then use:

``` bash
mongorestore --db forecast_db --username forecast_user --password 'your_password2' --authenticationDatabase admin /backup/forecast_db/
```
And the data will be restore. You can use a Mongo client like Studio 3T to connect with the database.