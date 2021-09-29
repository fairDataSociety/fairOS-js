# FairOS-js

Library for interaction with FairOS API. Works in the browser and on Node.js.

### How to start using in browser?

FairOS-js depends on Axios lib, but not contain it inside. So you should add Axios before using.

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"
        integrity="sha512-bZS47S7sPOxkjU/4Bt0zrhEtWx0y0CRkhEp8IckzK+ltifIIE9EMIMTuT/mEzoIMewUINruDBIR/jJnbguonqQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        
<script src="fairos.min.js"></script>
```

To install the lib with package manager you can run:

`yarn add @fairdatasociety/fairos-js`

or

`npm i @fairdatasociety/fairos-js`

```js
const username = 'admin';
const password = 'admin';
const pod = 'mypod';

const fairos = new FairOS('http://localhost:9090/v1/');

async function run() {
    let data = (await fairos.userSignup(username, password)).data;
    console.log('userSignup response', data);
    
    data = (await fairos.podNew(pod, password)).data;
    console.log('podNew response', data);

    const formData = new FormData();
    formData.append('files', new File(['Hello world'], '1.txt'));
    await fairos.fileUpload(pod, '/', formData);

    await fairos.fileDownload(pod, '/1.txt', '1.txt', percent => {
        console.log('percent download', percent);
    });
}

run().then();
```

### Using examples

You can find examples of using each method of the library in the file `/test/1_user.test.js`

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
--swap-endpoint https://goerli.infura.io/v3/YOUR_KEY \
--debug-api-enable
```

Withdraw 0.1 gBzz from chequbook

`curl -XPOST "http://localhost:1635/chequebook/withdraw?amount=1000000000000000"`

Create stamps

`curl -s -XPOST http://localhost:1633/stamps/10000000/20`


Fill it to docker-compose.yml, then run

`docker-compose down && docker-compose up -d`

Test with non-local version FairOS/Bee

`./test/other/ssh_clean.sh && sleep 15 && yarn test test/1_user.test.js`
