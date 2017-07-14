#!/usr/bin/env bash

sudo docker pull bompi88/healthservicesmap
sudo docker rm -f healthservicesmap
sudo docker run \
  --publish 3001:3000 \
  --restart always \
  --name healthservicesmap \
  -d \
  bompi88/healthservicesmap
