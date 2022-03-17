#!/bin/bash

set -e

docker-compose down || echo "nothing to stop"

sudo rm -rf ./DATAS || echo "nothing to erase"