#!/usr/bin/env bash
docker build . -t healthservicesmap
docker tag healthservicesmap bompi88/healthservicesmap
docker push bompi88/healthservicesmap
