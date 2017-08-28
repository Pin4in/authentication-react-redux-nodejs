1. install nvm
2. in project root folder: `nvm use`
3. install docker www.docker.com and cread mysql db
```
docker run -d --name howlong_db -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -e MYSQL_DATABASE=howlong-dev mysql
```
now you can start, stop and remove DB by name
```
docker stop howlong_db
docker start howlong_db
docker rm howlong_db

docker ps // list running containers
docker ps -a // list all containers
```
4. Start db: `docker start howlong_db`

(Optionally) Install Sequel Pro www.sequelpro.com
Credentials to access _howlong-dev_ db
```
host: 127.0.0.1
username: root
database: howlong-dev
port: 3306
```

5. Bootstrap db: `npm run bootstrap`

6. In root folder: `nodemon app` & open `localhost:3030`