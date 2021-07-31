#!/bin/bash

ssh pi@raspberrypi.local -t 'sudo rm -rf /home/pi/api-test/bee-docker-data/localstore/ && sudo rm -rf /home/pi/api-test/dfs-docker-data/* && sudo docker restart test_bee-1_1 test_fairos_1'
