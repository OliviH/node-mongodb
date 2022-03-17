#!/bin/bash

set -e

mkdir -p ./DATAS/var/lib/mongodb || echo "Folder DATAS exists\nIf you want to delete folders for project, use: make clear"
sudo chmod 777 ./DATAS/var/lib/mongodb

docker-compose up --build -d && docker-compose logs -f
