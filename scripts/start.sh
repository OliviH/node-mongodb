#!/bin/bash

set -e

docker-compose up -d && docker-compose logs -f