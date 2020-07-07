#!/bin/bash

ng serve &
mongod --dbpath ./database &
firefox -new-tab localhost:4200 &

wait
