# [Source](https://github.com/rafaelqg/docker_complete)

## from Copilot
Simple docker compose example, but with a twist. The node backend is not a static file, but a node server that is running on port 8081. 
The nginx container is configured to proxy the requests to the node server.
 

1) Run without dockerfile: only instantiating and exe commands on container using existing images
docker run --name some-nginx -v C:\Users\rafae\docker_compose\web_frontend:/usr/share/nginx/html:ro -d -p 8081:80 nginx

docker run --name express -v  C:\Users\rafae\docker_compose\node_backend:/usr/share/ -it -d -p 9092:8081 node:16 /bin/bash
docker exec express "cd usr/share/; node server.js"


2) Build images from Docker file and initiate a container from that.
docker build . -t mynodeapp
docker run --name mynodeapp_1  -d -p 8081:8081 mynodeapp
docker stop mynodeapp_1; docker rm mynodeapp_1; docker rmi mynodeapp;

docker build . -t mynginxapp
docker run --name mynginxapp_1 -it -d -p 9091:80 mynginxapp
docker stop mynginxapp_1; docker rm mynginxapp_1; docker rmi mynginxapp;


3) Using a docker compose to initialized both containers together from images that are build from Dockerfile
docker compose up