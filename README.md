# FairOS-js

Library for direct interaction with FairOS API.

### Testing

Testing required spun up FairOS and Bee node with possibility to clear data before every testing process running.

0 - Copy `test/example.env` to `test/.env` and define your FairOS node url.

1 - Clear data for Bee and FairOS

2 - Run

`yarn test`

### Test nodes

Run and fund node

```
sudo docker run \
-v /home/pi/api-test/bee-docker-data:/home/bee/.bee \
-p 1635:1635 \
-p 1634:1634 \
-p 1633:1633 \
--rm -it ethersphere/bee:0.6.2 \
start \
--password=IKGV7tyf76F \
--cache-capacity 3000000 \
--swap-endpoint https://goerli.infura.io/v3/357ce0ddb3ef426ba0bc727a3c64c873 \
--debug-api-enable
```

Create postage stamps and fill it to docker-compose.yml, then run

`docker-compose down && docker-compose up -d`
